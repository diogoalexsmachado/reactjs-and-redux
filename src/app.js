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

const App = (props) => {
  return (<div className='app'>
      <h1> Hello React </h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root')); 
