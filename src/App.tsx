import React, { Component } from 'react';
import './App.css';
import Category from "./Category";

const bookItems = [
  { Url : "bx", Description : "bX" }
]
const movieItems = [
  { Url : "mx", Description : "X" },
  { Url : "my", Description : "Y" }
]

class App extends Component {
  render() {
    return (
      <div>
        <Category Name="Books" Items={bookItems}  />
        <Category Name="Movies" Items={movieItems} />
      </div>
    );
  }
}

export default App;
