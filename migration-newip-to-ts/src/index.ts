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
        let count = 0;
        listItems.forEach((elem: HTMLElement): void => {
            if (elem.innerText.search(element) == -1) {
                elem.style.display = 'none';
                count = count + 1;
            } else {
                elem.style.display = 'block';
                count = count - 1;
            }
            console.log(count);
        });
        if (count == 128) {
            const notification = document.querySelector('.notification');
            if (!notification) {
                createElement();
            }
        }
    } else {
        listItems.forEach((elem) => {
            elem.style.display = 'block';
        });
    }
});

function createElement() {
    const search = document.querySelector('.search') as HTMLElement;
    const newDiv = document.createElement('div') as HTMLElement;
    newDiv.classList.add('notification');
    newDiv.innerHTML = 'Nothing found(';
    search.append(newDiv);
}
