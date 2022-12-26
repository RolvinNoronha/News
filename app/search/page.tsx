import NewsList from "./NewsList";
import sortNewsByImage from "../../lib/sortNewsByImage";

export default async function Keywords({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined }; }) {

    const keyword = searchParams?.keyword;
        
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&keywords=${keyword}&languages=en&limit=50`)
    const data = await response.json();

    
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