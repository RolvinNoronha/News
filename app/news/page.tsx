import sortNewsByImage from "../../lib/sortNewsByImage";
import NewsList from "./NewsList";


export default async function Categories({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined }; }) {

    const category = searchParams?.categories;
    
        
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY}&categories=${category}&languages=en&limit=100`)
    const data = await response.json();


    const newsWithImages = sortNewsByImage(data);

    return  <div className="news">
        {newsWithImages.data.map(( news : Article) => {
            return <NewsList key={Number(news.published_at)} news={news} />
        })}
    </div>
}