import sortNewsByImage from "../../lib/sortNewsByImage";
import FakeNews from "../FakeNews";
import NewsList from "./NewsList";


export default async function Categories({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined }; }) {

    const category = searchParams?.categories;
    
        
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=393d5cad34b1a234b40af0e2998524a1&categories=${category}&languages=en&limit=100`)
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