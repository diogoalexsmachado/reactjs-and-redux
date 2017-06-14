
const f2c = f => (f - 32) * (5/9);
const c2f = c => c / (5/9) + 32;

const TemperatureConverter = React.createClass({
  getInitialState(){
    return {
      c:0,
      f:c2f(0)
    };
  },
  onChange(unit){
    return ({target: {value}}) => {
      value = parseInt(value,10);
      if(isNaN(value)) return;

      this.setState({
        c: unit === 'c' ? value : f2c(value),
        f: unit === 'f' ? value : c2f(value)
      });
    }
   },
  render() {
    return <div>
      <p>
        <input value={this.state.f} onChange={this.onChange('f')} /> F
      </p>
      <p>
        <input value={this.state.c} onChange={this.onChange('c')} /> C
      </p>
    </div>;
  }
});

ReactDOM.render(
  <TemperatureConverter />,
  document.getElementById('root'));
