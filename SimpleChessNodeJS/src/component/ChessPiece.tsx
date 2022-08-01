import Assets from '../res/Index';

var React = require('react');

export class Chess_Piece extends React.Component {
    private color: string;
    private type: string;
    private selected: boolean;

    constructor(_color: string, _type: string) {
        super();
        this.color = _color;
        this.type = _type;
        this.selected = false;
    }

    private getImageName(): string {
        let imageName: string = this._color + '_' + this._type;
        return imageName;
    }

    private getAltText(): string {
        let altText: string = this._color + ' ' + this._type;
        return altText;
    }

    getColor(): string {
        return this.color;
    }

    getType(): string {
        return this.type;
    }

    isSelected(): boolean {
        return this.selected;
    }

    setSelected(selectedState: boolean) {
        this.selected = selectedState;
    }

    handleClick = () => {
        console.log('this is a ' + this._type);
    }

    render(): HTMLImageElement {
        let imageName: string = this.getImageName();
        let altText: string = this.getAltText();
        return (
            <img onClick={() => this.handleClick()} src={Assets[imageName]} alt={altText} />
        )
    }
}