import React, { Component } from 'react';
import './App.css';
import ToggleButton from 'react-toggle-button';

const shortHeader = <h2>My Short Message</h2>;
const longHeader = <h1>My Message</h1>;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: props.initialMessage,
      color: '#4682b4',
      fontSize: 18,
      fontStyle: 'normal'
    }
  }

  handleChange({ name, value }) {
    this.setState({ 
      [name]: value
    });
  }

  render() {
    const header = this.state.message.length < 20 ? shortHeader : longHeader;

    return (
      <div>
        {header}
        <div>

          <label>
            Type The Words You Want To See:
            <input name="message" value={this.state.message}
              onChange={({target}) => this.handleChange(target)}/>
          </label>

          <label>
            Font Color:
            <input name="color" value={this.state.color} type="color"
              onChange={({target}) => this.handleChange(target)}/>
          </label>

          <label>
            Font Size:
            <input name="fontSize" value={this.state.size}
              onChange={({target}) => this.handleChange(target)}/>
          </label>

          <label>
            Good Old Fashioned Italics:
          <input type="checkbox"
            name="fontStyle"
            value={this.state.fontStyle === "italic" ? "normal" : "italic"}
            onChange={({target}) => this.handleChange(target)}/>
          </label>

        </div>

        <div className="display" style={{
          color: this.state.color,
          fontSize: this.state.fontSize,
          fontStyle: this.state.fontStyle
        }}>
          {this.state.message}
        </div>

      </div>
    );
  }
}

export default App;
