export interface Response {
    endpoint: string;
    status: number;
    statusText: string;
    type: string;
    url: string;
    ok: boolean;
    json: () => void;
}

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

export interface IGet {
    status: string;
    totalResults?: number;
    articles: INews[];
    sources: ISource[];
}

export interface IOptions {
    options?: {
        sources?: string;
        apiKey?: string;
        endpoint?: string;
    };
    endpoint: 'sources' | 'everything';
}
