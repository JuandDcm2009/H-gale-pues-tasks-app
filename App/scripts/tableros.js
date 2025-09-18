import { setBoard, getBoards } from "./helper.js";

const openBoardButton = document.querySelector(".add-board-button");
const closeBoardButton = document.querySelector(".close-editor-button");
const editorContainer = document.querySelector(".editor-container");

openBoardButton.addEventListener("click", () => openEditor());
closeBoardButton.addEventListener("click", () => closeEditor());

function closeEditor() {editorContainer.style.display = "none";}
function openEditor() {editorContainer.style.display = "flex";}

let globalBoard = getBoards();

const boardName = document.querySelector("#board-name");
const addBoardButton = document.querySelector(".add-button");

addBoardButton.addEventListener("click", () => createBoard());

function createBoard() {
    globalBoard = getBoards();
    let board = {
        id: 0,
        name: boardName.value,
        taks: []
    }

    setBoard(board);
    renderBoards();
}

function renderBoards() {
    globalBoard = getBoards;
    const container = document.querySelector(".boards-container");
    globalBoard.forEach((e) => {
        const element = document.createElement("board-class");
        element.render(e.name);
        container.appendChild(element);
    });
}
