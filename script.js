var ChatMessage = React.createClass({ displayName: "ChatMessage",
  render() {
    return (
      React.createElement("p", { style: { marginBottom: 0 } }, this.props.message, React.createElement("br", null),
      React.createElement("small", null, this.props.timestamp)));

  } });


var ChatMessageHistory = React.createClass({ displayName: "ChatMessageHistory",
  render() {
    var createMessage = function (message, index) {
      var liStyles = {
        backgroundColor: index % 2 == 1 ? '#ddd' : '#efefef',
        padding: '1rem',
        borderBottom: '1px solid #ddd' };


      return React.createElement("li", { style: liStyles }, React.createElement(ChatMessage, { message: message.message, timestamp: message.timestamp }));
    };

    var ulStyles = {
      listStyle: 'none',
      margin: 0,
      padding: 0 };


    return React.createElement("ul", { style: ulStyles }, this.props.messages.map(createMessage));
  } });


var MESSAGES = [
{ message: 'Hi Josh', timestamp: 'Tuesday' },
{ message: 'How are you?', timestamp: 'Wednesday' }];


var ChatWindow = React.createClass({ displayName: "ChatWindow",
  getInitialState() {
    return {
      messages: MESSAGES,
      inputText: '' };

  },
  handleSubmit(e) {
    e.preventDefault();
    var nextMessages = this.state.messages.concat([{ message: this.state.inputText, timestamp: 'Thursday' }]);
    var nextInputText = '';
    this.setState({ messages: nextMessages, inputText: nextInputText });
  },
  onChange(e) {
    this.setState({ inputText: e.target.value });
  },
  render() {
    var windowStyles = {
      maxWidth: '40em',
      margin: '1rem auto' };


    var formStyles = {
      display: 'flex' };


    var inputStyles = {
      flex: '1 auto' };


    var btnStyles = {
      backgroundColor: '#00d8ff',
      border: 'none',
      color: '#336699',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: 'bold',
      fontSize: '0.8em' };


    return (
      React.createElement("div", { style: windowStyles },
      React.createElement(ChatMessageHistory, { messages: this.state.messages }),
      React.createElement("form", { style: formStyles, onSubmit: this.handleSubmit },
      React.createElement("input", { style: inputStyles, type: "text", onChange: this.onChange, value: this.state.inputText }),
      React.createElement("button", { style: btnStyles }, "Send"))));



  } });


ReactDOM.render(
React.createElement(ChatWindow, null),
document.getElementById('example'));