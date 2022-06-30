// export interface INews_api {
//   id: string;
//   name: string;
//   description: string;
//   category: string;
//   url: string;
//   language: string;
//   country: string
// }

export interface INews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface ISource {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}
