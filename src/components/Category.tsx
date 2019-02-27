import React, { Component, FormEvent, ChangeEvent } from 'react'
import Item from './Item'
import { Alert, Button, Form, FormLabel, FormText, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap'

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
    OnNewItem : ((desc : string, url : string) => void)
    OnDescriptionChange : ((desc : string) => void)
    OnUrlChange : ((url : string) => void)
}

export class Category extends Component<Props, State> {       
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
        this.props.OnNewItem(this.props.NewItemDescription, this.props.NewItemUrl);
    }

    onChangeDescription(event : any) : void {        
        this.props.OnDescriptionChange(event.currentTarget.value);            
    }

    onChangeUrl(event : any) : void {
        this.props.OnUrlChange(event.currentTarget.value);        
    }

    render() {
        const items = this.props.Items.map((x) => 
            <ListGroup.Item key={x.Description}><Item key={x.Description} Url={x.Url} Description={x.Description} /></ListGroup.Item>
        );
                
        const itemscontainer = this.props.Items.length > 0 ? 
            <ListGroup>{items}</ListGroup> : 
            <Alert variant="light">No {this.props.Name} consumed yet! </Alert>

        return (
            <div className="Category">
                <h3 key="title">{this.props.Name}</h3>
                <hr/>
                {itemscontainer}
                <hr/>
                <Form>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            type="text"
                            name="description" 
                            onChange={this.onChangeDescription} 
                            value={this.props.NewItemDescription} 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Url</Form.Label>
                        <Form.Control 
                            type="text"
                            name="url" 
                            onChange={this.onChangeUrl} 
                            value={this.props.NewItemUrl} 
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={this.onClick}>Add item</Button>
                    <br/><br/>
                </Form>
               
            </div>
        )        
    }
}