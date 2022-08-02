import { Chess_Piece } from "./ChessPiece";

export class Rook extends Chess_Piece {

    static type: string = "rook";

    constructor(_color: string) {
        super(_color);
    }

    getImageName(): string {
        return super.getColor() + '_' + Rook.type;
    }
    getAltText(): string {
        return super.getColor() + ' ' + Rook.type;
    }
}