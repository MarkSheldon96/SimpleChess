import * as React from 'react';
import { Chess_Piece } from "./ChessPiece";
const styles = require('../style/Board.css');


export class Chess_Board {
    private board: Board_Square[][];

    setup_order = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

    board_width: number;
    board_height: number;

    constructor() {
        this.board_width = 8;
        this.board_height = 8;

        this.board = [];
        for (let row: number = 0; row < this.board_width; row++) {
            this.board[row] = [];
            for (let column: number = 0; column < this.board_height; column++) {
                let square_color:string = (((row + column + 2) % 2) == 1) ? "green" : "gray"

                if (row == 0) {
                    this.board[row][column] = new Board_Square(square_color, new Chess_Piece("white", this.setup_order[column]));
                }
                else if (row == 1) {
                    this.board[row][column] = new Board_Square(square_color, new Chess_Piece("white", "pawn"));
                }
                else if (row == 6) {
                    this.board[row][column] = new Board_Square(square_color, new Chess_Piece("black", "pawn"));
                }
                else if (row == 7) {
                    this.board[row][column] = new Board_Square(square_color, new Chess_Piece("black", this.setup_order[column]));
                }
                else {
                    this.board[row][column] = new Board_Square(square_color, null);
                }
            }
        }
    }

    getBoard(): Board_Square[][] {
        return this.board;
    }

    render(): HTMLDivElement {
        const elements = [];
        for (let row: number = 0; row < this.board_width; row++) {
            for (let column: number = 0; column < this.board_height; column++) {
                elements.push(this.board[row][column].render());
            }
            elements.push(<br></br>);
        }
        return <div>{elements}</div>
    }
}


export class Board_Square {
    square_color: string;
    chess_piece: Chess_Piece;

    constructor(color: string, piece: Chess_Piece) {
        this.square_color = color;
        this.chess_piece = piece;
    }

    render(): HTMLDivElement {
        let square_type = (this.square_color == "gray") ? "gray_chess_square" : "green_chess_square";

        if (this.chess_piece !== null && typeof this.chess_piece !== undefined) {
            return (
                <div className={square_type}> {this.chess_piece.render()} </div>
            )
        }
        else {
            return (
                <div className={square_type}> </div>
            )
        }
    }
}


