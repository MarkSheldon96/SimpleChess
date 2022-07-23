import Assets from '../res/Index';

var React = require('react');

var _color: string;
var _type: string;

export class Chess_Piece {


    constructor(color: string, type: string) {
        _color = color;
        _type = type;
    }

    getImageName():string {
        return (
            _color + '_' + _type
        )
    }

    getAltText():string {
        return (
            _color + ' ' + _type
        )
    }

    render(): HTMLImageElement {
        let imageName: string = this.getImageName()
        let altText: string = this.getAltText();
        return (
            <img src={Assets[imageName]} alt={altText} />
        )
    }
}