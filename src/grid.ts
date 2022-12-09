import { shipNames, PlayerShip } from "./ship";

export type Position = `${string}-${number}`;
type PossibleValue = "" | "hit" | "miss";
type GridState = Record<Position, PossibleValue>;

export class Grid {
  state: GridState = {};
  type: "player" | "computer";
  element: HTMLElement;
  squares: HTMLElement[] = [];
  shipsToBePlaced: any;

  constructor(type: "player" | "computer") {
    this.type = type;
    const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

    for (let i = 0; i < abc.length; i++) {
      for (let j = 1; j < 11; j++) {
        // console.log(abc[i], j);
        const position: Position = `${abc[i]}-${j}`;
        this.state[position] = "";
      }
    }

    console.log(this.state);

    this.element = document.createElement("div");
    this.element.classList.add("grid");
    this.element.id = this.type === "player" ? "player-grid" : "computer-grid";
    const container = document.querySelector(".grid-container") as HTMLElement;
    container.appendChild(this.element);
  }

  createBoard(): void {
    for (const item in this.state) {
      const square = document.createElement("div");
      square.id = `${this.type}-${item}`;
      this.element.appendChild(square);
      this.squares.push(square);
    }
  }
}

export class PlayerGrid extends Grid {
  shipsToBePlaced: PlayerShip[] = [];
  constructor() {
    super("player");
    shipNames.forEach((shipName: any) =>
      this.shipsToBePlaced.push(new PlayerShip(shipName))
    );
  }
}

export class ComputerGrid extends Grid {
  constructor() {
    super("computer");
  }
}
