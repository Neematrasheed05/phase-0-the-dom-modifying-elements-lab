const element = document.createElement("div");
document.body.append(element);

//const newHeader = document.createElement(h1);
const newHeader = document.createElement('h1#victory')
newHeader.id = 'victory';

const Yourname = 'Neemat Rashid';
newHeader.textContent = `${Yourname} is the champion`;

const body = document.querySelector('body');

body.appendChild(newHeader);

//document.body.appendChild(newHeader);
