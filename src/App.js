import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      app_id: "6edf648a",
      app_key: "214b1cb9e2430304f013a45bfdbc5ce9",
      wordId: "",
      fields: "pronunciations",
      strictMatch: "false",
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }


  /*fetchWordDef = (event) => {
    event.preventDefault()
    fetch(`https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${this.state.wordId}`)
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then((jData) => {
        console.log(jData);
      })
      .catch((err) => {
      console.log(err);
    });
    console.log('hello');
  };*/

  fetchWords = (event) => {
    event.preventDefault()
    fetch('http//localhost:5000/words')
      .then(data => data.json())
      .then(jData => console.log(jData))
  }



  render(){
    return (
      <div className="App">
        <form onSubmit={this.fetchWords}>

          <input type="submit" value="Define"/>
        </form>
      </div>
    );
  }

}

export default App;
