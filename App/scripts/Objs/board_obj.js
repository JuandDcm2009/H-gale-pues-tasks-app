
class Board extends HTMLElement {
    constructor() {
        this.attachShadow({mode: "open"});    
    }

    connectedCallback() {

    }

    render() {
        this.shadowRoot.innerHTML = `

        `;
    }
}

customElements.define("board-class", Board);