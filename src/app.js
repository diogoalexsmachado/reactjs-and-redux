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
      {props.children}
    </div>
  );
};


const Sidebar = React.createClass({
  render(){
    let props = this.props;

    return (<div className="sidebar">
    <h2> All Decks</h2>
    <ul>
      {props.decks.map((deck,i) =>
        <li key={i}> {deck.name} </li>
      )}
    </ul>
    {props.addingDeck && <input ref='add'/> }
    </div>);
  }
});


ReactDOM.render(<App>
  <Sidebar decks={[ { name: 'Deck 1' } ]} addingDeck={false} />
</App>, document.getElementById('root'));
