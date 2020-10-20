import React, { Component } from "react";
import "./App.css";

// Option A: class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: "" };
  }

  async getQuote() {
    let response = await fetch("https://api.kanye.rest?format=text");
    let data = await response.text();
    console.log("what is this? -->", data);
    this.setState({ quote: data }, () => {
      console.log("this state", this.state);
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.getQuote()}>Get Quote from Kanye</button>
        {this.state.quote && <p>{this.state.quote}</p>}
      </div>
    );
  }
}


// Option B: functional component
// const App = () => {
//   const [quote, setQuote] = useState();
//   async function getQuote() {
//     let response = await fetch('https://api.kanye.rest?format=text');
//     let data = await response.text();
//     console.log("what is this? -->",data);
//     setQuote(data)
// }

//   return (
//     <div className="App">
//       <button onClick={() => getQuote()}>Get Quote from Kanye</button>
//       {quote && <p>{quote}</p>}
//     </div>
//   );
// }

export default App;
