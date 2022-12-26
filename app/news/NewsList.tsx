type Props = {
    news: Article,
}


export default function NewsList({ news } : Props) {


    return (
        <div className="news-item">
            <img className="news__img" src={news.image} alt="image" />
            <h1 className="news__title">{news.title}</h1>
            <p className="news__content">{news.description}</p>
            <div className="news__details">
                <p className="news__source">Source: {news.source}</p>
                <p className="news__published">Published at: {news.published_at}</p>
            </div>
            <a href={news.url} className="news__url">{news.url}</a>
        </div>    
    );
}