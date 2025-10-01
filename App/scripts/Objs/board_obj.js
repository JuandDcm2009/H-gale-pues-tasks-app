export class Board extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.id;
        this.name;
    }
    connectedCallback() {

    }
    render(id, name) {
        this.id = id;
        this.name = name;
        this.shadowRoot.innerHTML = `
        <style>
            @font-face {
                font-family: "tfont";
                src: url("../../fonts/PixelifySans-Regular.ttf");
            }

            .board-container {
                width: 250px;
                min-height: 300px;
                box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.26);
                display: flex;
                flex-direction: column;
                border-left: 4px solid #252525;
                transition: all 0.3s ease;
            }
            
            .board-container:hover {
                box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.26);
            }

            h1 {
                font-family: "tfont";
                font-weight: normal;
                font-size: 1.5rem;
                margin-top: 20px;
                margin-left: 20px;

            }
            
            .tasks-container {
                width: 200px;
                margin-left: 20px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
            }
        </style>
        <div class="board-container">
            <h1>${this.name}</h1>
            <div class="tasks-container"></div>
        </div>
            
        `;
    }
}

customElements.define("board-class", Board);