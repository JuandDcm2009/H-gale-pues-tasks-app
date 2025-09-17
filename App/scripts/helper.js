export function getBoards() {
    let localBoard = localStorage.getItem("Boards");
    return localBoard ? JSON.parse(localBoard) : [];
}

export function setBoard(b) {
    let localBoard = JSON.stringify(b);
    localStorage.setItem("Boards", localBoard);
}

