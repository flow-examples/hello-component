var component = FlowComponents.define('hello-component', function(params) {
  var self = this;
  this.name = params.name;

  this.setGreeting();
  setInterval(this.setGreeting.bind(this), 300);
});

component.prototype.setGreeting = function() {
  var greetings = ["awesome", "nice", "cool", "kind"];
  var randomGreeting = greetings[Math.floor(greetings.length * Math.random())];
  this.set("greeting", randomGreeting)
};

component.state.message = function() {
  return this.name + ", you are " + this.get("greeting") + "!";
};