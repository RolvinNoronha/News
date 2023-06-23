import { faker } from "@faker-js/faker"

faker.seed(42);
const CreateFakeNews = () => {
    const fakeNewsData : Article = {
       author: null,
       category: faker.word.words(),
       country: faker.location.countryCode(),
       description: faker.lorem.paragraphs(), 
       image: faker.image.url(),
       language: "en", 
       published_at: String(faker.date.anytime()),
       source: faker.lorem.words(2),
       title: faker.lorem.sentence(),
       url: faker.internet.url(),
    }

    return fakeNewsData;
}


export const FakeNewsData = () => {

    const FakeNews = [];

    for (let i = 0; i < 10; i++) {
        FakeNews[i] = CreateFakeNews();
    }

    return FakeNews;
}

