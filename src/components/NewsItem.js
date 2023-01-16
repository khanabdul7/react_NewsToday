import React, { Component } from 'react'
import defaultImg from '../img/defaultNews.jpeg'

export default class NewsItem extends Component {
    render() {
        let { title, desc, imageUrl, newsUrl, publishedAt, author, source } = this.props
        return (
            <>
                <div className="card">
                    <img src={!imageUrl ? defaultImg : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p>
                        <p className="card-text"><small className="text-muted"><span className="badge bg-secondary">Source: {source}</span> </small></p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(publishedAt).toUTCString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}
