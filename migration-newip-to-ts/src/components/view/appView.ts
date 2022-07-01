import { INews } from '../../types';
import News from './news/news';
import Sources from './sources/sources';
import { IGet } from '../controller/controller';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: IGet) {
        const values: INews[] = data?.articles ? data?.articles : [];
        console.log(values);
        this.news.draw(values);
        console.log('draw', values);
    }

    drawSources(data?: IGet) {
        const values = data?.sources ? data?.sources : [];
        console.log(values);
        this.sources.draw(values);
    }
}

export default AppView;
