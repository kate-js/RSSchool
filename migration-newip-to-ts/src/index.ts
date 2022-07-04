import App from './components/app/app';
import './global.css';

const app: App = new App();
app.start();

const searchList: Node = document.querySelector<HTMLElement>('#news-list') as Node;
let element = '';
searchList.addEventListener('input', (e: InputEventInit) => {
    element = element + e.data;
    element.trim();
    const listItems = document.querySelectorAll<HTMLElement>('.news-list div') as NodeListOf<HTMLElement>;
    if (element != '') {
        listItems.forEach((elem: HTMLElement): void => {
            if (elem.innerText.search(element) == -1) {
                elem.style.display = 'none';
            } else {
                elem.style.display = 'block';
            }
        });
    } else {
        listItems.forEach((elem) => {
            elem.style.display = 'block';
        });
    }
});
