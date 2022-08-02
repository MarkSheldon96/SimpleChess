import Assets from '../res/Index';

var React = require('react');

export abstract class Chess_Piece extends React.Component {
    private color: string;
    private selected: boolean;

    abstract getImageName(): string;
    abstract getAltText(): string;

    constructor(_color: string) {
        super();
        this.color = _color;
        this.selected = false;
    }

    getColor(): string {
        return this.color;
    }

    isSelected(): boolean {
        return this.selected;
    }

    setSelected(selectedState: boolean) {
        this.selected = selectedState;
    }

    handleClick = () => {
        console.log('this is a ' + this.type);
    }

    render(): HTMLImageElement {
        let imageName: string = this.getImageName();
        let altText: string = this.getAltText();
        return (
            <img onClick={() => this.handleClick()} src={Assets[imageName]} alt={altText} />
        )
    }
}