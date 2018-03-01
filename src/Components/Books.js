import React, { Component } from 'react';
import {Grid, Row, Col, Accordion, Panel} from 'react-bootstrap';


class Header extends Component {
    render() {
        let bookItems;
        if (this.props.books) {
            bookItems = this.props.books.map(book => {
                let id = book.id;
                let title = book.volumeInfo.title;
                return (
                    <Panel header={title} eventKey={id} key={id}>
                            test

                    </Panel>
                )
            });
        }
        return (
            <div>
                <Accordion id="books-panel-group">
                    {bookItems}
                </Accordion>
            </div>
        );
    }
}

export default Header;
