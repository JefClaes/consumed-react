import React, { Component, FormEvent, ChangeEvent } from 'react';
import Item from "./Item"

interface ItemData {   
    Url : string
    Description : string
}

interface State {
    Url : string
    Description : string
    Items: ItemData[]
}

interface Props {
    Name : string
    Items : ItemData[]
}

class Category extends Component<Props, State> {
    constructor(props : Props) {
        super(props);

        this.state = {
            Url : '',
            Description : '',
            Items : props.Items            
        }

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event : FormEvent) : void {
        event.preventDefault();
        this.setState({
            Description : '',
            Url : '',
            Items : this.state.Items.concat({ Url : this.state.Url, Description : this.state.Description })
        });
    }

    onChangeDescription(event : ChangeEvent<HTMLInputElement>) : void {        
        this.setState({
            Description : event.currentTarget.value,
            Url : this.state.Url
        });
    }

    onChangeUrl(event : ChangeEvent<HTMLInputElement>) : void {
        this.setState({
            Description : this.state.Description,
            Url : event.currentTarget.value
        });
    }

    render() {
        const items = this.state.Items.map((x) => 
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
                    value={this.state.Description} />
                <input 
                    name="url" 
                    type="text"
                    onChange={this.onChangeUrl} 
                    value={this.state.Url} />
                <button type="button" onClick={this.onClick}>Add</button>
            </div>

        )        
    }
}

export default Category;