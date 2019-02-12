import React, { Component } from 'react';
import Category from "./Category";

interface Props { }

interface State {    
    BookItems : any[]
    NewBookItemUrl : string
    NewBookItemDescription : string
    MovieItems : any[]
    NewMovieItemUrl : string
    NewMovieItemDescription : string
}

class Overview extends Component<Props, State> {

    constructor(props : Props) {
        super(props);

        this.state = {
            BookItems : [],
            NewBookItemDescription : '',
            NewBookItemUrl : '',
            MovieItems : [],            
            NewMovieItemDescription : '',
            NewMovieItemUrl : ''
        }

    }     

    addBook (book : any) : void {       
        this.setState({            
            BookItems : this.state.BookItems.concat(book),
            NewBookItemDescription : this.state.NewBookItemDescription,
            NewBookItemUrl : this.state.NewBookItemUrl,
            MovieItems : this.state.MovieItems,
            NewMovieItemDescription : this.state.NewMovieItemDescription,
            NewMovieItemUrl : this.state.NewMovieItemUrl
        });
    }    

    addMovie (mov : any) : void {
        this.setState({
            BookItems : this.state.BookItems,
            NewBookItemDescription : this.state.NewBookItemDescription,
            NewBookItemUrl : this.state.NewBookItemUrl,
            MovieItems : this.state.MovieItems.concat(mov),
            NewMovieItemDescription : this.state.NewMovieItemDescription,
            NewMovieItemUrl : this.state.NewMovieItemUrl
        });
    }

    render() {
      return (
        <div>
          <Category 
            Name="Books" 
            Items={this.state.BookItems} 
            NewItemDescription={this.state.NewBookItemDescription}
            NewItemUrl={this.state.NewBookItemUrl}
            OnNewItem={(book) => this.addBook(book)} 
            OnDescriptionChange={(desc) => this.setState((current) => ({...current, NewBookItemDescription : desc }))} 
            OnUrlChange={(url) => this.setState((current) => ({...current, NewBookItemUrl : url }))} />
          <Category 
            Name="Movies" 
            Items={this.state.MovieItems} 
            NewItemDescription={this.state.NewMovieItemDescription}
            NewItemUrl={this.state.NewMovieItemUrl}
            OnNewItem={(movie) => this.addMovie(movie)} 
            OnDescriptionChange={(desc) => this.setState((current) => ({...current, NewMovieItemDescription : desc }))} 
            OnUrlChange={(url) => this.setState((current) => ({...current, NewMovieItemUrl : url }))} />
        </div>
      );
    }
  }

export default Overview;