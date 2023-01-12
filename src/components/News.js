import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor(){
        super();
        console.log("Constructor inside News component")
        this.state = {
            articles: []
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b04ef152ebfc458ab8d05f0aa8c6bdc0";
        let data = await fetch(url);
        let processedData = await data.json();
        console.log(processedData)
        this.setState=({
            articles: processedData.articles
        })
        console.log("after setting")
    }
    // why data is not showing in News component ? maybe render is not working after getting data

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
            </div>

        )
    }
}
