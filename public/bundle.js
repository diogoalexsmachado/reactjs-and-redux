(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var cards = function cards(state, action) {
  switch (action.type) {
    case 'ADD_CARD':
      state.concat([Object.assign({}, action.data, {
        score: 1,
        id: +new Date()
      })]);
    default:
      return state || [];
  }
};

var decks = function decks(state, action) {
  switch (action.type) {
    case 'ADD_CARD':
      state.concat([Object.assign({}, action.data, {
        id: +new Date()
      })]);
    default:
      return state || [];
  }
};

var store = Redux.createStore(Redux.combineReducers({
  cards: cards,
  decks: decks
}));

//retorna false se não houverem cartas
console.log("Card Lenght", cards.lenght === 0);

var App = function App(props) {
  return React.createElement(
    'div',
    { className: 'app' },
    React.createElement(
      'h1',
      null,
      ' Hello React '
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

},{}]},{},[1]);
