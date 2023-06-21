import NewsList from "./NewsList"
import sortNewsByImage from "../lib/sortNewsByImage";


export default async function Home() {



    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY}&languages=en&limit=50`)
    
    
    const data = await response.json();

    const newsWithImages = sortNewsByImage(data);


    return  <div className="news">
        {newsWithImages.data.map(( news : Article) => {
            return <NewsList key={Number(news.published_at)} news={news} />
        })}
    </div>

}