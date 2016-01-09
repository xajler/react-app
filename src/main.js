$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homepage');
var About = require('./components/aboutpage');

var App = React.createClass({
  render: function() {
    var Child;

    switch(this.props.route) {
      case 'about':
        Child = About;
        break;
      default:
        Child = Home;
    }

    return (
      <div>
        <Child />
      </div>
    );
  }
});

function render() {
  var route = window.location.hash.substr(1);
  ReactDOM.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange',  render);
render();
