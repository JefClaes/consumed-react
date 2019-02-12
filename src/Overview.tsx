import React, { Component } from 'react';
import Category from "./Category";

const bookItems = [
    { Url : "bx", Description : "bX" }
  ]
  const movieItems = [
    { Url : "mx", Description : "X" },
    { Url : "my", Description : "Y" }
  ]

class Overview extends Component {
    render() {
      return (
        <div>
          <Category Name="Books" Items={bookItems}  />
          <Category Name="Movies" Items={movieItems} />
        </div>
      );
    }
  }

export default Overview;