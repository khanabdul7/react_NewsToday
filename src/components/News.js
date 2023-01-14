import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor(){
        super();
        console.log("Constructor inside News component")
        this.state = {
            articles: [],
            page: 1,
            totalResults: 0
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b04ef152ebfc458ab8d05f0aa8c6bdc0&page=1&pageSize=9`;
        let data = await fetch(url);
        let processedData = await data.json();
        console.log(processedData)
        this.setState({
            articles: processedData.articles,
            page: this.state.page,
            totalResults: processedData.totalResults
        })
    }
    // why data is not showing in News component ? maybe render is not working after getting data
    // solved : issue was in setstate method.

    handlePrevbtn = async () => {
        console.log("Prevbtn")
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b04ef152ebfc458ab8d05f0aa8c6bdc0&page=${this.state.page - 1}&pageSize=9`;
        let data = await fetch(url);
        let processedData = await data.json();
        console.log(processedData)
        this.setState({
            page: this.state.page - 1,
            articles: processedData.articles
        })
    }

    handleNextbtn = async () => {
        console.log("Nextbtn")  
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b04ef152ebfc458ab8d05f0aa8c6bdc0&page=${this.state.page + 1}&pageSize=9`;
            let data = await fetch(url);
            let processedData = await data.json();
            console.log(processedData)
            this.setState({
                articles: processedData.articles,
                page: this.state.page + 1           
            })            
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='my-2'>NewsToday - Top Headlines of Today</h2>
                <div className='row'>
                {this.state.articles && this.state.articles.map((element)=>{
                    return <div className='col-md-4' key={element.url}>
                        <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })}
                </div>
                <div className="d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevbtn} className="btn btn-dark">&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/9)} type="button" onClick={this.handleNextbtn} className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}
