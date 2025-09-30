export class Board extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback() {

    }
    render(name) {
        this.shadowRoot.innerHTML = `
        <style>
            @font-face {
                font-family: "tfont";
                src: url("../../fonts/PixelifySans-Regular.ttf");
            }

            div {
                width: 250px;
                min-height: 300px;
                box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.26);
                display: flex;
                flex-direction: column;
                border-left: 4px solid #252525;
            }

            h1 {
                font-family: "tfont";
                font-weight: normal;
                margin-top: 20px;
                margin-left: 20px;

            }
        </style>
        <div>
            <h1>${name}</h1>
        </div>
            
        `;
    }
}

customElements.define("board-class", Board);