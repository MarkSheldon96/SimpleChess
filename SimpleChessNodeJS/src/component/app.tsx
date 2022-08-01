// node_modules\.bin\webpack ./src/component/app.tsx --config webpack-config.js

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import { Game } from './Game';

var game_1 = new Game();

ReactDOM.render(<div> {game_1.render()} </div>, document.getElementById('root'));