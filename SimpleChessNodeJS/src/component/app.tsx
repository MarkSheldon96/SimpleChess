declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import { Chess_Piece } from './ChessPiece';

var black_rook_1 = new Chess_Piece('black', 'rook');

ReactDOM.render(< black_rook_1.render />, document.getElementById('root'));