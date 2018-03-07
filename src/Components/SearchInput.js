import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {Well, FormControl} from 'react-bootstrap';


class SearchInput extends Component {
    constructor(props){
        super();
        this.state = {
            value: props.value
        }
    }

    onChange(e) {
        this.setState({value: e.target.value});
        this.props.onChange(this.state.value);
    }

    render() {
        return (
            <Well>
                <FormControl
                type="text"
                value={this.state.value}
                placehholder="Search Books..."
                onChange={this.onChange.bind(this)}
                />
            </Well>
        );
    }
}

export default SearchInput;
