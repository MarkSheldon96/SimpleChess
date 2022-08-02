import { Chess_Piece } from "./ChessPiece";

export class King extends Chess_Piece {

    static type: string = "king";

    constructor(_color: string) {
        super(_color);
    }

    getImageName(): string {
        return super.getColor() + '_' + King.type;
    }
    getAltText(): string {
        return super.getColor() + ' ' + King.type;
    }
}