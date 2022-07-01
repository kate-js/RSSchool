import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            //https://nodenews.herokuapp.com/'
            apiKey: '07abd18f5a264ee88a5d7fe05c1313ac', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
