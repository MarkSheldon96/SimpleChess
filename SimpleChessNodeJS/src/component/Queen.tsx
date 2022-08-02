import { Chess_Piece } from "./ChessPiece";

export class Queen extends Chess_Piece {

    static type: string = "queen";

    constructor(_color: string) {
        super(_color);
    }

    getImageName(): string {
        return super.getColor() + '_' + Queen.type;
    }
    getAltText(): string {
        return super.getColor() + ' ' + Queen.type;
    }
}