import { INews, ISource } from '../../types';
import News from './news/news';
import Sources from './sources/sources';

interface Idata {
    sources?: ISource[];
    status: string;
    totalResults?: number;
    articles?: INews[];
}

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Idata) {
        const values: INews[] = data?.articles ? data?.articles : [];
        console.log(values);
        this.news.draw(values);
        console.log('draw', values);
    }

    drawSources(data: Idata) {
        const values = data?.sources ? data?.sources : [];
        console.log(values);
        this.sources.draw(values);
    }
}

export default AppView;
