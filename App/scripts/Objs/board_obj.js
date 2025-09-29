export class Board extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback() {

    }
    render(name) {
        this.shadowRoot.innerHTML = `
        <div>
            <h1>${name}</h1>
        </div>
            
        `;
    }
}

customElements.define("board-class", Board);