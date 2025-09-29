export const getBoards = () => {
    let localBoard = localStorage.getItem("Boards");
    let board = localBoard ? JSON.parse(localBoard) : [
        {
            id: 0,
            name: "Tasks"
        },
        {
            id: 1,
            name: "Daily"
        },
        {
            id: 2,
            name: "Study"
        }
    ];    
    return board;
}
export function setBoard(b) {
    let localBoard = JSON.stringify(b);
    localStorage.setItem("Boards", localBoard);
}

