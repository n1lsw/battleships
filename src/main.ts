import "./style.css";
import { Grid, PlayerGrid, ComputerGrid } from "./grid";

const startButton = document.getElementById("start") as HTMLElement;
const rotateButton = document.getElementById("rotate") as HTMLElement;

const playerGrid = new PlayerGrid();
const computerGrid = new ComputerGrid();

playerGrid.createBoard();
computerGrid.createBoard();

// functions

rotateButton.addEventListener("click", () => {
  playerGrid.shipsToBePlaced.forEach((ship) => ship.rotate());
});
