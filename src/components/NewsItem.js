import React, { Component } from 'react'
import defaultImg from '../img/defaultNews.jpeg'

export default class NewsItem extends Component {
    render() {
        let {title, desc, imageUrl, newsUrl} = this.props
        return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={!imageUrl?defaultImg: imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{desc}...</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </>
        )
    }
}
