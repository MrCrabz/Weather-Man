import React, { Component } from "react"
import ReactDOM from "react-dom"

class FooterComponent extends Component {
  render() {
    return (
      <footer class="mastfoot mt-auto">
        <div className="inner">
          <p><i className="fab fa-react first"></i> <i className="fas fa-plus middle"></i> <i className="fa fa-heart last"></i></p>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
