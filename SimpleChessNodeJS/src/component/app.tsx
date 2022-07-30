// node_modules\.bin\webpack ./src/component/app.tsx --config webpack-config.js

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import { Chess_Piece } from './ChessPiece';
import { Chess_Board } from './Board';
import { Board_Square } from './Board';

var black_rook_1 = new Chess_Piece('black', 'rook');
var board_1 = new Chess_Board();
var square = new Board_Square('green', black_rook_1);




ReactDOM.render(<div> {board_1.render()} </div>, document.getElementById('root'));