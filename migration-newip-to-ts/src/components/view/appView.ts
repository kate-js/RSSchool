import { INews } from '../../types';
import News from './news/news';
import Sources from './sources/sources';
import { IGet } from '../../types';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: IGet) {
        const values: INews[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data?: IGet) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
