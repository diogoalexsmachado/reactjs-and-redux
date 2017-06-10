
//{
// cards: [],
// decks: []
//
//}

const cards = (state,action) => {
  switch(action.type){
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      });

      return state.concat([newCard]);

    default:
      return state || [];
  }
};




const store = Redux.createStore(Redux.combineReducers({
  cards
}));

//manual
/*(function (state, action){
  return{
    cards: card(state.cards, action)
    decks: decks(state.decks, action)
  };
});*/

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
