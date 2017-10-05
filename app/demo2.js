/**
 * Created by vlery on 2017/10/4.
 */

var React = require('react');
var ReactDOM= require('react-dom');


var arr=[<h1>first</h1>,<h1>I am second</h1>,<h1>It is the last</h1>];

ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('root')
);