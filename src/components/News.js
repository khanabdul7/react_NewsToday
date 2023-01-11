import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "U.S. airports rumble back to life after FAA computer outage - Reuters",
            "description": "U.S. flights were slowly beginning to resume departures and a ground stop was lifted after the Federal Aviation Administration (FAA) scrambled to fix a system outage overnight that had forced a halt to all U.S. departing flights.",
            "url": "https://www.reuters.com/business/aerospace-defense/us-faa-says-flight-personnel-alert-system-not-processing-updates-after-outage-2023-01-11/",
            "urlToImage": "https://www.reuters.com/resizer/ECkUCtyMRySzLXiFFXDjKnMXXZ4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZBG2QR7ZV5IO5LPCFZXOLGPM3U.jpg",
            "publishedAt": "2023-01-11T14:31:00Z",
            "content": "WASHINGTON, Jan 11 (Reuters) - U.S. flights were slowly beginning to resume departures and a ground stop was lifted after the Federal Aviation Administration (FAA) scrambled to fix a system outage ov… [+5142 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "John Woodrow Cox, Steve Hendrix, Steven Rich",
            "title": "How often do elementary students bring guns to school and shoot someone? - The Washington Post",
            "description": "The boy who allegedly shot a teacher in Newport News, Va., is not the only young child to wreak havoc at elementary school with a loaded gun",
            "url": "https://www.washingtonpost.com/dc-md-va/2023/01/11/elementary-students-guns-fired-school/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5SZ6ZWRNRHU2L7MPGK7NJ2ROU4.JPG&w=1440",
            "publishedAt": "2023-01-11T14:29:17Z",
            "content": "Comment on this story\r\nThe prosecutor sat at a small table across from a 6-year-old boy, watching him color. The kid smiled, showing off the gaps from the front teeth he had just lost. He said he was… [+12161 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The-sun.com"
            },
            "author": "Courtney Ciandella",
            "title": "Khloe Kardashian ‘by ex Tristan Thompson’s side’ for his mom’s Toronto funeral as ‘friends fear she will ta... - The US Sun",
            "description": "KHLOE Kardashian has stayed by her ex-Tristan Thompson’s side as she helps him cope with his mother’s death. The NBA star’s mother, Andrea, suddenly passed away last week from a h…",
            "url": "https://www.the-sun.com/entertainment/7106420/khloe-kardashian-by-tristan-thompson-side-moms-funeral/",
            "urlToImage": "https://www.the-sun.com/wp-content/uploads/sites/6/2023/01/MF-KHLOE-TRISTAN-OFFPLAT.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
            "publishedAt": "2023-01-11T14:15:39Z",
            "content": "KHLOE Kardashian has stayed by her ex-Tristan Thompson's side as she helps him cope with his mother's death.\r\nThe NBA star's mother, Andrea, suddenly passed away last week from a heart attack. \r\nKhlo… [+3447 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Andrew Meldrum",
            "title": "Ukraine says mining town holding out against Russian assault - The Associated Press",
            "description": "KYIV, Ukraine (AP) — The fate of a devastated salt-mining town in eastern Ukraine hung in the balance Wednesday as Ukraine said its forces were holding out against a furious Russian onslaught in one of the fiercest and costliest recent ground battles of the n…",
            "url": "https://apnews.com/article/russia-ukraine-war-donetsk-9cc363adc31419311cadb3c5ed8e0601",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/071158986d43424e8e3a4d1017768381/3000.webp",
            "publishedAt": "2023-01-11T14:11:14Z",
            "content": "KYIV, Ukraine (AP) The fate of a devastated salt-mining town in eastern Ukraine hung in the balance Wednesday as Ukraine said its forces were holding out against a furious Russian onslaught in one of… [+6824 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Russia to return ISS crew on backup rocket after capsule leak - Reuters",
            "description": "Russia said on Wednesday it would launch another Soyuz rocket on Feb. 20 to bring home two cosmonauts and a U.S. astronaut from the International Space Station after their original capsule sprang a coolant leak last month.",
            "url": "https://www.reuters.com/world/europe/russia-launch-backup-soyuz-spacecraft-iss-following-leak-2023-01-11/",
            "urlToImage": "https://www.reuters.com/resizer/7Uo-W1pSNSr_dsX0LKQDKENMnhM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SADXKOOLCBLUNNXLSTPBFADL74.jpg",
            "publishedAt": "2023-01-11T13:24:00Z",
            "content": "MOSCOW, Jan 11 (Reuters) - Russia said on Wednesday it would launch another Soyuz rocket on Feb. 20 to bring home two cosmonauts and a U.S. astronaut from the International Space Station after their … [+1697 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Brandon Gillespie",
            "title": "Biden builds taxpayer-funded wall around Delaware beach house despite opposing border barriers - Fox News",
            "description": "A wall is reportedly being constructed around President Biden's Delaware vacation home despite his staunch opposition to building a wall at the U.S.-Mexico border.",
            "url": "https://www.foxnews.com/politics/biden-builds-taxpayer-funded-wall-delaware-beach-house-despite-opposing-border-barriers",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/Biden-Wall-1.jpg",
            "publishedAt": "2023-01-11T12:26:00Z",
            "content": "President Biden's taxpayer-funded wall for his Delaware vacation home is getting built while he continues to voice his staunch opposition to building a wall at the southern U.S. border.\r\nPhotos obtai… [+3327 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WABC-TV"
            },
            "author": null,
            "title": "Mega Millions Drawing: Jackpot soars to over $1.3B after no big winner Tuesday night - WABC-TV",
            "description": "No big winner came out of Tuesday night's drawing, so lottery players have yet another chance at the climbing prize.",
            "url": "https://abc7ny.com/mega-millions-drawing-winning-numbers-jackpot-megamillions/12687636/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/12687674_011123-wabc-millions-img.jpg?w=1600",
            "publishedAt": "2023-01-11T12:10:51Z",
            "content": "NEW YORK (WABC) -- The Mega Millions jackpot has once again increased after no one won big in Tuesday night's drawing.\r\nOn Friday night, an estimated $1.35 billion will be up for grabs. This is the s… [+4611 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Morgan Winsor, Jessie DiMartino",
            "title": "Illinois becomes latest US state to ban assault weapons - ABC News",
            "description": "Nine states as well as D.C. prohibit the sale or possession of assault weapons.",
            "url": "https://abcnews.go.com/US/illinois-latest-us-state-ban-assault-weapons/story?id=96356906",
            "urlToImage": "https://s.abcnews.com/images/Politics/jb-pritzker-file-ap-230_hpMain_20230111-052733_16x9_992.jpg",
            "publishedAt": "2023-01-11T12:05:31Z",
            "content": "Illinois on Tuesday became the latest U.S. state to ban the sale or possession of assault weapons.\r\nJust hours after the legislation's passage in both chambers of the Illinois General Assembly, Gov. … [+2068 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Diana Olick",
            "title": "Mortgage refinance demand surges, as homeowners take advantage of lower interest rates - CNBC",
            "description": "Mortgage rates fell last week, causing a rush on refinancing.",
            "url": "https://www.cnbc.com/2023/01/11/mortgage-refinance-demand-surges-as-homeowners-take-advantage-of-lower-interest-rates.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/102075466-IMG_3522_copy.jpg?v=1673438401&w=1920&h=1080",
            "publishedAt": "2023-01-11T12:00:01Z",
            "content": "After rising at the end of the year, mortgage rates dropped sharply last week. That drove demand from current homeowners hoping to save on their monthly payments, but it did little to excite potentia… [+1700 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Cardinal Pell's death brings few tears in Australia - BBC",
            "description": "George Pell was reviled by many for his alleged role in child sexual abuse scandals.",
            "url": "https://www.bbc.com/news/world-australia-64231852",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E5C0/production/_128261885_mediaitem128261884.jpg",
            "publishedAt": "2023-01-11T11:21:53Z",
            "content": "At St Patrick's Cathedral in Melbourne, the polarising legacy Cardinal George Pell leaves in his Australian homeland was evident. \r\nThe cathedral is where Cardinal Pell first rose to the rank of arch… [+5444 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Saskya Vandoorne, Alex Stambaugh, Joseph Ataman",
            "title": "At least six injured in attack at central Paris railway station - CNN",
            "description": "At least six people were injured in an attack at Paris' Gare Du Nord central railway station early Wednesday, French authorities said.",
            "url": "https://www.cnn.com/2023/01/11/europe/gare-du-nord-knife-attack-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230111030237-01-gare-du-nord-paris-knife-attack-011123.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-01-11T11:17:00Z",
            "content": "At least six people were injured in an attack at Paris Gare Du Nord train station early Wednesday, restricting access to one of the French capitals major rail hubs.\r\nAn individual began attacking peo… [+3716 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Lawrence Richard",
            "title": "Biden challenged by Mexico president on his 'forgetfulness' during North American Leaders' Summit - Fox News",
            "description": "The leaders of the United States, Mexico and Canada participated in joint press conferences during a two-day the North American Leaders Summit in Mexico City.",
            "url": "https://www.foxnews.com/world/biden-challenged-mexico-president-forgetfulness-during-north-american-leaders-summit",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/GettyImages-1246117076.jpg",
            "publishedAt": "2023-01-11T10:50:00Z",
            "content": "Mexican President Andrés Manuel López Obrador challenged President Biden on his \"forgetfulness\" to help Latin American countries during the North American Leaders' Summit Monday. He also encouraged h… [+4942 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PennLive"
            },
            "author": "Brian Linder | blinder@pennlive.com",
            "title": "Former Penn State, NFL star shares bizarre Damar Hamlin related conspiracy theory - PennLive",
            "description": "The former All-Pro, who is no stranger to social media controversy, is back at it.",
            "url": "https://www.pennlive.com/sports/2023/01/former-penn-state-nfl-star-shares-bizarre-damar-hamlin-related-conspiracy-theory.html",
            "urlToImage": "https://www.pennlive.com/resizer/y7Lg3Ibu0-trrWdsxje5dcxGEUM=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/7O5RCE74Y5DJ5LIF54VUU3LVMU.jpg",
            "publishedAt": "2023-01-11T10:00:00Z",
            "content": "Larry Johnson is no stranger to social media controversy, and the former Penn State and NFL star is back at it this week with a bizarre Damar Hamlin related conspiracy theory.\r\nHamlins story across t… [+2170 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Supermassive Black Holes en Route to Cataclysmic Collision: Doomed Pair Closer Than Ever Observed - SciTechDaily",
            "description": "New observations and analysis reveal two Goliath black holes just 750 light-years apart and closing, as they circle each other in the aftermath of a galaxy merger. Astronomers from Flatiron Institute and their colleagues have spotted two ghostly Goliaths en r…",
            "url": "https://scitechdaily.com/supermassive-black-holes-en-route-to-cataclysmic-collision-doomed-pair-closer-than-ever-observed/",
            "urlToImage": "https://scitechdaily.com/images/Two-Black-Holes-Collide-Merge.jpg",
            "publishedAt": "2023-01-11T09:28:54Z",
            "content": "BySimons FoundationJanuary 11, 2023\r\nAn artists impression of two black holes that are about to collide.\r\nNew observations and analysis reveal two Goliath black holes just 750 light-years apart and c… [+9642 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Sonia Rao, Emily Yahr",
            "title": "Golden Globes highlights: Jerrod Carmichael, Jennifer Coolidge and winners - The Washington Post",
            "description": "After HFPA controversy, the 80th Golden Globes returned to form — drunken speeches and all.",
            "url": "https://www.washingtonpost.com/arts-entertainment/2023/01/11/golden-globes-2023-highlights/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/01-11-2023/t_9a7fbacf09cf49a8a188b9286defe7f6_name_goldenglobes.jpg&w=1440",
            "publishedAt": "2023-01-11T09:19:00Z",
            "content": "Comment on this story\r\nIf you missed the news of last years off-air ceremony, you would be forgiven for assuming nothing had ever gone awry with the Golden Globe Awards. One year after controversy wi… [+14281 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Lawrence Richard",
            "title": "California authorities say finding missing 5-year-old is 'top priority' as search resumes Wednesday morning - Fox News",
            "description": "Authorities are continuing to search for Kyle Doan, a 5-year-old who went missing earlier this week near San Miguel, California, amid the state's recent flooding.",
            "url": "https://www.foxnews.com/us/california-authorities-finding-missing-5-year-old-top-priority-search-resumes-wednesday-morning",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/THUMB-missing-ca-boy.jpg",
            "publishedAt": "2023-01-11T09:01:00Z",
            "content": "California authorities will resume their search for a 5-year-old boy who went missing near San Miguel earlier this week, saying it was a \"top priority\" for search and rescue teams.\r\nKyle Doan, a 5-ye… [+4124 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Oliver O'Connell",
            "title": "California storms – live: Flash flood warning in San Francisco after Montecito and Santa Barbara evacuations - The Independent",
            "description": "Succession of storms continue to batter southern and central California",
            "url": "https://www.independent.co.uk/climate-change/santa-barbara-flooding-storm-tracker-california-latest-b2259950.html",
            "urlToImage": "https://static.independent.co.uk/2023/01/10/14/AFP_336R6XL.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-01-11T08:15:40Z",
            "content": "Storm 'more intense' and stayed 'much longer', says fire department as more evacuations are ordered\r\nMore evacuations have been ordered in counties as the storm warning remains in Northern California… [+1148 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "2023 Golden Globes Recap: The Biggest Winners, Best Speeches & Most Memorable Moments | THR News - The Hollywood Reporter",
            "description": "From Jennifer Coolidge’s hilarious speech after winning for “The White Lotus” to “Everything Everywhere All at Once” stars Michelle Yeoh and Ke Huy Quan deli...",
            "url": "https://www.youtube.com/watch?v=lAqwEbM265Y",
            "urlToImage": "https://i.ytimg.com/vi/lAqwEbM265Y/maxresdefault.jpg",
            "publishedAt": "2023-01-11T06:33:49Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "2023 NFL wild-card playoff picks: Tom Brady's Buccaneers shock Cowboys, Jaguars upset Chargers - CBS Sports",
            "description": "Wondering which teams are going to advance in the playoffs? You've come to the right place to find out",
            "url": "https://www.cbssports.com/nfl/news/2023-nfl-wild-card-playoff-picks-tom-bradys-buccaneers-shock-cowboys-jaguars-upset-chargers/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/01/10/97bbab09-849f-443c-bcdc-8a0c5e8296a0/thumbnail/1200x675/54aa10023451680005513fe4ab524cbf/bradyc.jpg",
            "publishedAt": "2023-01-11T05:37:00Z",
            "content": "I heard a coughing sound over the weekend and since I was battling a cold, I thought it was me, but as it turns out, it was actually just the Packers choking away their shot at a playoff spot. \r\nTo m… [+21115 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rolling Stone"
            },
            "author": "Marlow Stern",
            "title": "Prince Harry Tells Colbert He Wrote About Killing 25 People to ‘Reduce’ Suicides - Rolling Stone",
            "description": "The Duke of Sussex opened up on The Late Show about why he shared details of killing 25 Afghan insurgents in his memoir ‘Spare’",
            "url": "https://www.rollingstone.com/tv-movies/tv-movie-news/prince-harry-late-show-colbert-killing-25-afghan-insurgents-reduce-military-suicides-1234659114/",
            "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/01/Screen-Shot-2023-01-11-at-12.23.51-AM.png?w=1600&h=900&crop=1",
            "publishedAt": "2023-01-11T05:35:17Z",
            "content": "Prince Harry hasbeen inescapable over the past couple of weeks, as the quasi-royal makes the press rounds promoting his new memoirSpare.\r\nOne of the more disturbing details the Duke of Sussex shared … [+2505 chars]"
        }
    ]

    constructor(){
        super();
        console.log("Constructor inside News component")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='my-2'>NewsToday - Top Headlines of Today</h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <NewsItem title="MyTitle" desc="MyDesc" imageUrl="https://storage.googleapis.com/afs-prod/media/071158986d43424e8e3a4d1017768381/3000.webp" newsUrl="TODO"/>
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="MyTitle" desc="MyDesc" />
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="MyTitle" desc="MyDesc" />
                    </div>
                </div>
            </div>

        )
    }
}
