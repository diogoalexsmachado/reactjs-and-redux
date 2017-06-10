(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const cards = (state,action) => {
  switch(action.type){
    case 'ADD_CARD':
        state.concat([
          Object.assign({}, action.data, {
            score: 1,
            id: +new Date
          })
      ]);
    default:
      return state || [];
  }
};

const decks = (state,action) => {
  switch(action.type){
    case 'ADD_CARD':
        state.concat([
          Object.assign({}, action.data, {
            id: +new Date
          })
      ]);
    default:
      return state || [];
  }
};



const store = Redux.createStore(Redux.combineReducers({
  cards,
  decks
}));

//retorna false se não houverem cartas
console.log("Card Lenght", cards.lenght===0);

store.subscribe(()=> {
  console.log(store.getState())
});

store.dispatch({
  type: 'ADD_CARD',
  data: {
    front:'font',
    back:'back'
  }
});

store.dispatch({
  type: 'ADD_CARD',
  data: {}
});

},{}]},{},[1]);
