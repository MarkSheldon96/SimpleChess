import * as React from 'react';
import { Chess_Piece } from "./ChessPiece";
const styles = require('../style/Board.css');


export class Chess_Board {
    private board: Board_Square[][];

    // Skill piece setup order for the beginning of the game
    private setup_order = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

    boardWidth: number;
    boardHeight: number;

    // Constructor sets up a new game of chess.
    constructor() {
        this.boardWidth = 8;
        this.boardHeight = 8;

        this.board = [];
        for (let row: number = 0; row < this.boardWidth; row++) {
            this.board[row] = [];
            for (let column: number = 0; column < this.boardHeight; column++) {
                let square_color:string = (((row + column + 2) % 2) == 1) ? "green" : "gray"

                if (row == 0) {
                    this.board[row][column] = new Board_Square(square_color, new Chess_Piece("white", this.setup_order[column]), [row, column]);
                }
                else if (row == 1) {
                    this.board[row][column] = new Board_Square(square_color, new Chess_Piece("white", "pawn"), [row, column]);
                }
                else if (row == 6) {
                    this.board[row][column] = new Board_Square(square_color, new Chess_Piece("black", "pawn"), [row, column]);
                }
                else if (row == 7) {
                    this.board[row][column] = new Board_Square(square_color, new Chess_Piece("black", this.setup_order[column]), [row, column]);
                }
                else {
                    this.board[row][column] = new Board_Square(square_color, null, [row, column]);
                }
            }
        }
    }

    // Adjust piece position on the board.
    movePiece(from_coords: [number, number], to_coords: [number, number]) {
        let emigrantSquare: Board_Square = this.board[from_coords[0]][from_coords[1]];
        let immigrantSquare: Board_Square = this.board[to_coords[0]][to_coords[1]];
        let movingPiece: Chess_Piece = emigrantSquare.getChessPiece();

        // If the emigrant square has no piece there is nothing to move.
        if (movingPiece == null) {
            console.log("Nothing to move!");
            return;
        }

        // If the immigrant square isn't highlighted it's not a viable move, so deselect the current piece
        if (immigrantSquare.isHighlighted() == false) {
            console.log("Can't move there!");
            movingPiece.setSelected(false);
            return;
        }

        // Move the piece by setting immigrant square piece to emigrant square piece then nulling emigrant piece
        console.log("Moving " + movingPiece._color + " " + movingPiece._type + " to: " + to_coords[0].toString() + ", " + to_coords[1].toString())
        immigrantSquare.setChessPiece(movingPiece);
        emigrantSquare.setChessPiece(null);
        

    }

    // Look through the board array for a selected chess piece.
    // return selected chess piece, or null if no piece is selected.
    findSelected(): Chess_Piece {
        for (let i: number = 0; i < 8; i++) {
            for (let j: number = 0; j < 8; j++) {
                let piece: Chess_Piece = this.board[i][j].getChessPiece();
                if (piece != null && piece.isSelected()) {
                    return piece;
                }
            }
        }
        console.log("Nothing selected");
        return null;
    }

    getBoard(): Board_Square[][] {
        return this.board;
    }

    render(): HTMLDivElement {
        const elements = [];
        for (let row: number = 0; row < this.boardWidth; row++) {
            for (let column: number = 0; column < this.boardHeight; column++) {
                elements.push(this.board[row][column].render());
            }
            elements.push(<br></br>);
        }
        return <div>{elements}</div>
    }
}


export class Board_Square {
    private squareColor: string;
    private chessPiece: Chess_Piece;
    private coord: [number, number];
    private highlighted: boolean;

    constructor(color: string, piece: Chess_Piece, _coord: [number, number]) {
        this.squareColor = color;
        this.chessPiece = piece;
        this.coord = _coord;
    }

    private getId(): string {
        return (
            this.coord[0].toString() + "_" + this.coord[1].toString()
        )
    }

    handleClick = () => {
        console.log("Coords: " + this.coord[0].toString() + ", " + this.coord[1].toString());

        if (this.chessPiece != null) {

        }
    }

    getSquareColor(): string {
        return this.squareColor;
    }

    getChessPiece(): Chess_Piece {
        return this.chessPiece;
    }

    setChessPiece(newPiece: Chess_Piece) {
        this.chessPiece = newPiece;
    }

    getCoordinate(): [number, number] {
        return this.coord;
    }

    isHighlighted(): boolean {
        return this.highlighted;
    }

    render(): HTMLDivElement {
        let squareType = (this.squareColor == "gray") ? "gray_chess_square" : "green_chess_square";

        if (this.chessPiece !== null && typeof this.chessPiece !== undefined) {
            return (
                <div id={this.getId()} onClick={() => this.handleClick()} className={squareType}> {this.chessPiece.render()} </div>
            )
        }
        else {
            return (
                <div id={this.getId()} onClick={() => this.handleClick()} className={squareType}> </div>
            )
        }
    }
}


