import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

    static defaultProps = {
        pageSize: 12,
        country: 'in',
        category: 'general'
    }

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            totalResults: 0,
            Loading: true
        }
        document.title = `NewsToday - ${this.firstLetterCapital(this.props.category)}`
    }

    firstLetterCapital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async updatePage() {
        console.log("UpdatePage")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b04ef152ebfc458ab8d05f0aa8c6bdc0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ Loading: true })
        await fetch(url)
            .then(data => data.json())
            .then(processedData => {
                console.log(processedData)
                this.setState({
                    articles: processedData.articles,
                    page: this.state.page,
                    totalResults: processedData.totalResults,
                    Loading: false
                })
            }
            ).catch(err => console.log("error: " + err));
    }

    componentDidMount() {
        this.updatePage();
    }

    handlePrevbtn = () => {
        this.setState({ page: this.state.page - 1 });
        this.updatePage();
    }

    handleNextbtn = () => {
        this.setState({ page: this.state.page + 1 });
        this.updatePage();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b04ef152ebfc458ab8d05f0aa8c6bdc0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ Loading: true })
        await fetch(url)
            .then(data => data.json())
            .then(processedData => {
                console.log(processedData)
                this.setState({
                    articles: this.state.articles.concat(processedData.articles),
                    page: this.state.page,
                    totalResults: processedData.totalResults,
                    Loading: false
                })
            }
            ).catch(err => console.log("error: " + err));
    }

    render() {
        return (
            <>
                <h2 className='text-center' style={{ margin: '30px' }}>NewsToday - Top {this.firstLetterCapital(this.props.category)} Headlines</h2>
                {this.state.Loading && <Spinner/> }
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}>
                    <div className='container'>
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}