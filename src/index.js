import "./styles/styles.scss"
import React, { Component } from "react"
import ReactDOM from "react-dom"

import NavigationComponent from "./components/Navigation.js"
import FooterComponent from "./components/Footer.js"
import CoreComponent from "./components/Core.js"

class App extends Component {
  render() {
    return (
      <div className="modulesContainer cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <NavigationComponent />
        <CoreComponent />
        <FooterComponent />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#app"))
