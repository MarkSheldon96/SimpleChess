declare var require: any

import Assets from '../res/Index';

var React = require('react');
var ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {
        return (
            <h1>Welcome to React 2!!</h1>
        );
    }
}

export interface Chess_Piece {
    // onClick(): void
}

export class Black_Knight extends React.Component implements Chess_Piece {
    render() {
        return (
            <img src={Assets.black_knight} alt="Black Knight" />
        )
    }
}

export class Black_Rook extends React.Component implements Chess_Piece {
    render() {
        return (
            <img src={Assets.black_rook} alt="Black Rook" />
        )
    }
}

export class Black_Bishop extends React.Component implements Chess_Piece {
    render() {
        return (
            <img src={Assets.black_bishop} alt="Black Bishop" />
        )
    }
}

export class Black_Queen extends React.Component implements Chess_Piece {
    render() {
        return (
            <img src={Assets.black_queen} alt="Black Queen" />
        )
    }
}

export class Black_King extends React.Component implements Chess_Piece {
    render() {
        return (
            <img src={Assets.black_king} alt="Black King" />
        )
    }
}

export class Black_Pawn extends React.Component implements Chess_Piece {
    render() {
        return (
            <img src={Assets.black_pawn} alt="Black Pawn" />
        )
    }
}

export class White_Rook extends React.Component implements Chess_Piece {
    render() {
        return (
            <img src={Assets.white_rook} alt="White Rook" />
        )
    }
}

export class White_Knight extends React.Component implements Chess_Piece {
    render() {
        return (
            <img src={Assets.white_knight} alt="White Knight" />
        )
    }
}

export class White_Bishop extends React.Component implements Chess_Piece {
    render() {
        return (
            <img src={Assets.white_bishop} alt="White Bishop" />
        )
    }
}

export class White_Queen extends React.Component implements Chess_Piece {
    render() {
        return (
            <img src={Assets.white_queen} alt="White Queen" />
        )
    }
}

export class White_King extends React.Component implements Chess_Piece{
    render() {
        return (
            <img src={Assets.white_king} alt="White King" />
        )
    }
}

export class White_Pawn extends React.Component implements Chess_Piece{
    render() {
        return (
            <img src={Assets.white_pawn} alt="White Pawn" />
        )
    }
}

ReactDOM.render(<White_Knight />, document.getElementById('root'));