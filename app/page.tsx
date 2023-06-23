import NewsList from "./NewsList"
import sortNewsByImage from "../lib/sortNewsByImage";
import FakeNews from "./FakeNews";


export default async function Home() {



    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=393d5cad34b1a234b40af0e2998524a1&languages=en&limit=50`)
    
    
    const data = await response.json();

    if (data === null) {
        return <FakeNews />
    }

    const newsWithImages = sortNewsByImage(data);


    return  <div className="news">
        {newsWithImages.data.map(( news : Article) => {
            return <NewsList key={Number(news.published_at)} news={news} />
        })}
    </div>

}