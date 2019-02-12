import React, { Component, FormEvent, ChangeEvent } from 'react';
import Item from "./Item"

interface ItemData {   
    Url : string
    Description : string
}

interface State {
    Url : string
    Description : string
}

interface Props {
    Name : string
    Items : ItemData[]
    NewItemDescription : string
    NewItemUrl : string
    OnNewItem : ((item : ItemData) => void)
    OnDescriptionChange : ((desc : string) => void)
    OnUrlChange : ((url : string) => void)
}

class Category extends Component<Props, State> {       
    constructor(props : Props) {
        super(props);

        this.state = {
            Url : props.NewItemUrl,
            Description : props.NewItemDescription,
        }

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event : FormEvent) : void {
        event.preventDefault();        
        this.props.OnNewItem({ Url : this.props.NewItemUrl, Description : this.props.NewItemDescription });
    }

    onChangeDescription(event : ChangeEvent<HTMLInputElement>) : void {        
        this.props.OnDescriptionChange(event.currentTarget.value);            
    }

    onChangeUrl(event : ChangeEvent<HTMLInputElement>) : void {
        this.props.OnUrlChange(event.currentTarget.value);        
    }

    render() {
        const items = this.props.Items.map((x) => 
            <li key={x.Description}><Item key={x.Description} Url={x.Url} Description={x.Description} /></li>
        );

        return (
            <div className="Category">
                <h3 key="title">Category {this.props.Name}</h3>
                <ul>{items}</ul>
                <input 
                    name="description" 
                    type="text" 
                    onChange={this.onChangeDescription} 
                    value={this.props.NewItemDescription} />
                <input 
                    name="url" 
                    type="text"
                    onChange={this.onChangeUrl} 
                    value={this.props.NewItemUrl} />
                <button type="button" onClick={this.onClick}>Add</button>
            </div>
        )        
    }
}

export default Category;