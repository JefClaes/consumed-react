import React, { Component } from 'react';
import Category from "./Category";
import { connect } from 'react-redux';
import * as actions from './ConsumedItems/Actions'
import { AppState } from '././AppState'
import { ConsumedItemsState } from './ConsumedItems/Types'

interface DispatchProps {
    addBook : (book : any) => void
    addMovie : (movie : any) => void 
    changeNewMovieDesc: (desc : string) => void
    changeNewMovieUrl : (url : string) => void
    changeNewBookDesc : (desc : string) => void
    changeNewBookUrl : (url : string) => void
}

type Props = DispatchProps & ConsumedItemsState

class Overview extends Component<Props> {
    constructor(props : Props) {
        super(props);
    }     

    render() {
      return (
        <div>
          <Category 
            Name="Books" 
            Items={this.props.BookItems} 
            NewItemDescription={this.props.NewBookItemDescription}
            NewItemUrl={this.props.NewBookItemUrl}
            OnNewItem={(book) => { this.props.addBook(book) }} 
            OnDescriptionChange={(desc) => { this.props.changeNewBookDesc(desc) }} 
            OnUrlChange={(url) => { this.props.changeNewBookUrl(url) }} />
          <Category 
            Name="Movies" 
            Items={this.props.MovieItems} 
            NewItemDescription={this.props.NewMovieItemDescription}
            NewItemUrl={this.props.NewMovieItemUrl}
            OnNewItem={(movie) => { this.props.addMovie(movie) }} 
            OnDescriptionChange={(desc) => { this.props.changeNewMovieDesc(desc) }} 
            OnUrlChange={(url) => { this.props.changeNewMovieUrl(url) }} />
        </div>
      );
    }
  }

const mapStateToProps = ({ ConsumedItemsState } : AppState) => (ConsumedItemsState);
const mapDispatchToProps = (dispatch : any) => ({
    addBook: (book : any) => dispatch(actions.addBook(book)),
    addMovie: (movie : any) => dispatch(actions.addMovie(movie)),
    changeNewMovieDesc: (desc : string) => dispatch(actions.changeNewMovieDesc(desc)),
    changeNewMovieUrl : (url : string) => dispatch(actions.changeNewMovieUrl(url)),
    changeNewBookDesc : (desc : string) => dispatch(actions.changeNewBookDesc(desc)),
    changeNewBookUrl : (url : string) => dispatch(actions.changeNewBookUrl(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);

