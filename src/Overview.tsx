import React, { Component } from 'react';
import Category from "./Category";

interface Props { }

interface State {
    BookItems : any[]
    MovieItems : any[]
}

class Overview extends Component<Props, State> {

    constructor(props : Props) {
        super(props);

        this.state = {
            BookItems : [],
            MovieItems : []
        }
    }     

    addBook(book : any) : void {       
        this.setState({
            BookItems : this.state.BookItems.concat(book),
            MovieItems : this.state.MovieItems
        });
    }

    addMovie(mov : any) : void {
        this.setState({
            BookItems : this.state.BookItems,
            MovieItems : this.state.MovieItems.concat(mov)
        });
    }

    render() {
      return (
        <div>
          <Category Name="Books" Items={this.state.BookItems} OnNewItem={this.addBook}  />
          <Category Name="Movies" Items={this.state.MovieItems} OnNewItem={this.addMovie} />
        </div>
      );
    }
  }

export default Overview;