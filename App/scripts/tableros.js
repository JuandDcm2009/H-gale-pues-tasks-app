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


