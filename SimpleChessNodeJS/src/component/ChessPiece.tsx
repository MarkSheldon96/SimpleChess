import Assets from '../res/Index';

var React = require('react');

export class Chess_Piece extends React.Component {
    _color: string;
    _type: string;

    constructor(color: string, type: string) {
        super();
        this._color = color;
        this._type = type;
    }

    private getImageName():string {
        let imageName: string = this._color + '_' + this._type;
        return imageName;
    }

    private getAltText(): string {
        let altText: string = this._color + ' ' + this._type;
        return altText;
    }

    render(): HTMLImageElement {
        let imageName: string = this.getImageName();
        let altText: string = this.getAltText();
        return (
            <img src={Assets[imageName]} alt={altText} />
        )
    }
}