import React, { Component } from 'react';
import { Category } from "./Category";
import { connect } from 'react-redux';
import * as actions from '.././consumeditems/actions'
import { ConsumedItemsState, ItemData } from '.././consumeditems/types'
import { AppState } from '.././appState'

interface DispatchProps {
    addItem : (cat: string, item : ItemData) => void
    changeNewItemUrl : (cat : string, url : string) => void
    changeNewItemDesc : (cat : string, desc : string) => void
}

type Props = DispatchProps & ConsumedItemsState

class Overview extends Component<Props> {
    constructor(props : Props) {
        super(props);
    }     

    render() {
      const items = this.props.Categories.map((category) => 
        <Category 
          Name={category.Description}
          Items={category.Items} 
          NewItemDescription={category.NewItemDescription}
          NewItemUrl={category.NewItemUrl}
          OnNewItem={(desc, url) => { this.props.addItem(category.Description, { Description: desc, Url : url }) }} 
          OnDescriptionChange={(desc) => { this.props.changeNewItemDesc(category.Description, desc) }} 
          OnUrlChange={(url) => { this.props.changeNewItemUrl(category.Description, url) }} />
      );

      return (
        <div>{items}</div>
      );
    }
  }

const mapStateToProps = ({ ConsumedItemsState } : AppState) => (ConsumedItemsState);
const mapDispatchToProps = (dispatch : any) => ({
    addItem: (cat : string, item : ItemData) => dispatch(actions.addItemToCategory(cat, item)),
    changeNewItemUrl: (cat : string, url : string) => dispatch(actions.changeNewItemUrl(cat, url)),
    changeNewItemDesc: (cat : string, desc : string) => dispatch(actions.changeNewItemDesc(cat, desc))    
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);

