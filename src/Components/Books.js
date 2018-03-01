import React, { Component } from 'react';
import {Grid, Row, Col, Accordion, Panel} from 'react-bootstrap';
import PanelGroup from "react-bootstrap/es/PanelGroup";


class Header extends Component {
    render() {
        let bookItems;
        if (this.props.books) {
            bookItems = this.props.books.map(book => {
                let id = book.id;
                let title = book.volumeInfo.title;
                return (
                    <Panel eventKey={id} key={id}>
                        <Panel.Heading>
                            <Panel.Title toggle>{title}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                            test
                        </Panel.Body>
                    </Panel>
                )
            });
        }
        return (
            <div>
                <PanelGroup accordion id="books-panel-group">
                    {bookItems}
                </PanelGroup>
            </div>
        );
    }
}

export default Header;
