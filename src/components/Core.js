import React, { Component } from "react"
import ReactDOM from "react-dom"

class CoreComponent extends Component {
  render() {
    return (
      <main role="main" class="inner cover core">
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary weatherButton">Whats the Weather Like?</a>
        </p>
      </main>
    );
  }
}

export default CoreComponent;
