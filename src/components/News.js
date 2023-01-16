import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

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

    constructor(){
        super();
        this.state = {
            articles: [],
            page: 1,
            totalResults: 0,
            Loading: false
        }
    }

    async updatePage(){
        console.log("UpdatePage")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b04ef152ebfc458ab8d05f0aa8c6bdc0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({Loading: true})
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

    componentDidMount(){
       this.updatePage();
    }

    handlePrevbtn = () => {
        this.setState({page: this.state.page - 1});
        this.updatePage();
    }

    handleNextbtn = () => {          
        this.setState({page: this.state.page + 1});
        this.updatePage();
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center' style={{margin: '30px'}}>NewsToday - Top Headlines of Today</h2> 
                {this.state.Loading && <Spinner/> }
                <div className='row'>
                { !this.state.Loading && this.state.articles.map((element)=>{
                    return <div className='col-md-4' key={element.url}>
                        <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name}/>
                    </div>
                })}
                </div>
                <div className="d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevbtn} className="btn btn-dark">&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextbtn} className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}