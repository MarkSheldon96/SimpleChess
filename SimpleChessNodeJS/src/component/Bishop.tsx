import { Chess_Piece } from "./ChessPiece";

export class Bishop extends Chess_Piece {

    static type: string = "bishop";

    constructor(_color: string) {
        super(_color);
    }

    getImageName(): string {
        return super.getColor() + '_' + Bishop.type;
    }
    getAltText(): string {
        return super.getColor() + ' ' + Bishop.type;
    }

    handleClick = () => {
        console.log('this is a ' + this.type);
    }
}