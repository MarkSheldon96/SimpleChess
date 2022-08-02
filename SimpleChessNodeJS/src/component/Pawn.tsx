import { Chess_Piece } from "./ChessPiece";

export class Pawn extends Chess_Piece {

    static type: string = "pawn";

    constructor(_color: string) {
        super(_color);
    }

    getImageName(): string {
        return super.getColor() + '_' + Pawn.type;
    }
    getAltText(): string {
        return super.getColor() + ' ' + Pawn.type;
    }
}