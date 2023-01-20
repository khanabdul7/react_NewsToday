import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [loading, setLoading] = useState(true)

    // document.title = `NewsToday - ${firstLetterCapital(props.category)}`

    const firstLetterCapital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updatePage = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        await fetch(url)
            .then(data => data.json())
            .then(processedData => {
                props.setProgress(30);
                console.log(processedData)
                props.setProgress(50);
                setArticles(processedData.articles)
                setPage(page + 1)
                setTotalResults(processedData.totalResults)
                setLoading(false)
                props.setProgress(100);
            }
            ).catch(err => console.log("error: " + err));
    }

    useEffect(() => {
        updatePage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        await fetch(url)
            .then(data => data.json())
            .then(processedData => {
                console.log(processedData)
                setArticles(articles.concat(processedData.articles))
                setTotalResults(processedData.totalResults)
                setLoading(false)
            }
            ).catch(err => console.log("error: " + err));
    }

    return (
        <>
            <h2 className='text-center' style={{ margin: '30px' }}>NewsToday - Top {firstLetterCapital(props.category)} Headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className='container'>
                    <div className='row'>
                        {articles.map((element) => {
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

export default News;

News.defaultProps = {
    pageSize: 12,
    country: 'in',
    category: 'general'
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}