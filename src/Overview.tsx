import React, { Component } from 'react';
import { Category } from "./Category";
import { connect } from 'react-redux';
import * as actions from './ConsumedItems/Actions'
import { AppState } from '././AppState'
import { ConsumedItemsState, ItemData } from './ConsumedItems/Types'

interface DispatchProps {
    addBook : (book : ItemData) => void
    addMovie : (movie : ItemData) => void 
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
            OnNewItem={(desc, url) => { this.props.addBook({ Description: desc, Url : url}) }} 
            OnDescriptionChange={(desc) => { this.props.changeNewBookDesc(desc) }} 
            OnUrlChange={(url) => { this.props.changeNewBookUrl(url) }} />
          <Category 
            Name="Movies" 
            Items={this.props.MovieItems} 
            NewItemDescription={this.props.NewMovieItemDescription}
            NewItemUrl={this.props.NewMovieItemUrl}
            OnNewItem={(desc, url) => { this.props.addMovie({ Description: desc, Url : url}) }} 
            OnDescriptionChange={(desc) => { this.props.changeNewMovieDesc(desc) }} 
            OnUrlChange={(url) => { this.props.changeNewMovieUrl(url) }} />
        </div>
      );
    }
  }

const mapStateToProps = ({ ConsumedItemsState } : AppState) => (ConsumedItemsState);
const mapDispatchToProps = (dispatch : any) => ({
    addBook: (book : ItemData) => dispatch(actions.addBook(book)),
    addMovie: (movie : ItemData) => dispatch(actions.addMovie(movie)),
    changeNewMovieDesc: (desc : string) => dispatch(actions.changeNewMovieDesc(desc)),
    changeNewMovieUrl : (url : string) => dispatch(actions.changeNewMovieUrl(url)),
    changeNewBookDesc : (desc : string) => dispatch(actions.changeNewBookDesc(desc)),
    changeNewBookUrl : (url : string) => dispatch(actions.changeNewBookUrl(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);

