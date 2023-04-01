import './style.css';

console.log('This is my components index file');

const template = document.createElement('template');
template.innerHTML = `
<style>

  .headerC {
    font-size:32px;
    color:#933;
  }
</style>  
<h1 class="headerC xx-text-3xl xx-font-bold xx-underline">
Eeee Akshay template HTML Sample Web component
</h1>
`;


class MyCustomEl extends HTMLElement {
  constructor() {
    super();
    this.root = document.body;
    let clone = template.content.cloneNode(true);
    this.root.append(clone);
  }

}  
window.customElements.define('my-custom-element', MyCustomEl);

document.body.insertAdjacentHTML("beforeend", `<my-custom-element></my-custom-element>`);