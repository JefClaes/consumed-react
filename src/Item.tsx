import React, { Component } from 'react';

interface Props {
    Url : string,
    Description : string
}

export class Item extends Component<Props> {
    constructor(props : Props) {
        super(props);        
    }

    render() {
        return (
            <a href={this.props.Url}>{this.props.Description}</a>
        )
    }
}

export default Item;