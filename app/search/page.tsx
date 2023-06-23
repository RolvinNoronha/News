import NewsList from "./NewsList";
import sortNewsByImage from "../../lib/sortNewsByImage";
import FakeNews from "../FakeNews";

export default async function Keywords({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined }; }) {

    const keyword = searchParams?.keyword;
        
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=393d5cad34b1a234b40af0e2998524a1&keywords=${keyword}&languages=en&limit=100`)
    const data = await response.json(); 

    if (data === null) {
        return <FakeNews />
    }

    
    const newsWithImages = sortNewsByImage(data);
    
    if (!newsWithImages) {
        return <div className="no-results">
            <h1>No Results Found</h1>
        </div>
    }
    return  <div className="news">
        {newsWithImages.data.map(( news : Article) => {
            return <NewsList key={Number(news.published_at)} news={news} />
        })}
    </div>
}