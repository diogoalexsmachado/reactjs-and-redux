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
