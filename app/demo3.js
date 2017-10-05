/**
 * Created by vlery on 2017/10/4.
 */
var React= require('react');
var ReactDOM= require('react-dom');

class Welcome extends React.Component {
  render() {
    return (
      <h1 >
        hello, {this.props.value}
      </h1>
    );
  }
};
ReactDOM.render(
    <Welcome value="vlery"/>,
    document.getElementById('root')

);