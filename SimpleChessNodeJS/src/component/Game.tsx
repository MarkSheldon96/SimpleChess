
import * as React from 'react';
import { Chess_Board } from "./Board";

export class Game {
    board: Chess_Board;

    constructor() {
        this.board = new Chess_Board();
    }

    render() {
        return this.board.render();
    }
}