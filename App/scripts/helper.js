export function getBoards() {
    let localBoard = localStorage.getItem("Boards");
    let board = localBoard ? JSON.parse(localBoard) : [];
    return board;
}

export function setBoard(b) {
    let localBoard = JSON.stringify(b);
    localStorage.setItem("Boards", localBoard);
}

