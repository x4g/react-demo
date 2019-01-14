import React, { Component } from "react";
import SockJS from "sockjs";
import Stomp from "stomp";

const WEB_SOCKET_ENDPOINT = "http://localhost:8999/gs-guide-websocket";
const socket = SockJS(WEB_SOCKET_ENDPOINT);
const ws = Stomp.over(socket);

class TagCurrentValue extends React.Component {
  constructor() {
    this.state = {
      ws,
      timeStamp: Date.now(),
      maxReconnect: 1
    };

    this.defaultProps = {
      name: "something",
      maxReconnect: 5
    };
  }

  componentDidMount() {
    this.setupWebSocket();
  }

  setupWebSocket() {
    const webSoc = this.state.ws;
    webSoc.connect(
      {},
      this.connect
    );
    webSoc.message = body => this.setState({ timeStamp: Date.now() });
    webSoc.error = err => {
      if (this.state.maxReconnect > 0) {
        this.setState(
          { maxReconnect: this.state.maxReconnect - 1 },
          this.connect
        );
      }
    };
  }

  connect = () => {
    const channels = webSocketUrls[this.props.name];
    this.setState({ maxReconnect: this.props.maxReconnect });
    channels.forEach(channel => {
      const webSoc = this.state.ws;
      webSoc.subscribe(channel.route, channel.callback);
      webSoc.send(
        registration.route,
        { timeStamp: this.state.timeStamp.toString() },
        "timeStamp"
      );
    });
  };
  render() {
    return <span />;
  }
}

export default TagCurrentValue;

// var socket = new SockJS("http://localhost:8999/gs-guide-websocket", null, {});
// stompClient = Stomp.over(socket);

// stompClient.connect(
//   {},
//   function(frame) {
//     console.log("WS Connected: " + frame);
//     stompClient.subscribe("/topic/tagvalues", function(tagvalue) {
//       console.log(JSON.parse(tagvalue.body).value);
//     });
//   }
// );
