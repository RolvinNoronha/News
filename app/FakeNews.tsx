import { FakeNewsData } from "../lib/fakeNews"
import FakeNewsList from "./FakeNewsList";

const FakeNews = () => {

    const fakeNews = FakeNewsData();

    return (
        <>
        <h1 className="fake_news_header"> Free API limit exhausted </h1>
        <div className="news">
            {fakeNews.map(( news : Article) => {
                return <FakeNewsList key={Number(news.published_at)} news={news} />
            })}
        </div>
    </>
    )
}

export default FakeNews