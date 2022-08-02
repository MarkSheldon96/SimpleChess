import { Chess_Piece } from "./ChessPiece";

export class Knight extends Chess_Piece {

    static type: string = "knight";

    constructor(_color: string) {
        super(_color);
    }

    getImageName(): string {
        return super.getColor() + '_' + Knight.type;
    }
    getAltText(): string {
        return super.getColor() + ' ' + Knight.type;
    }
}