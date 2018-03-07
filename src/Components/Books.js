import React, { Component } from 'react';
import {Grid, Row, Col, Accordion, Panel, ListGroup, ListGroupItem, Button} from 'react-bootstrap';

class Header extends Component {
    render() {
        let bookItems;
        if (this.props.books) {
            bookItems = this.props.books.map(book => {
                let id = book.id;
                let title = book.volumeInfo.title;
                let thumbnail = book.volumeInfo.imageLinks.thumbnail;
                let categories = book.volumeInfo.categories;
                let authors = book.volumeInfo.authors;
                let publisher = book.volumeInfo.publisher;
                let description = book.volumeInfo.description;
                let pageCount = book.volumeInfo.pageCount;
                let publishDate = book.volumeInfo.publishDate;
                let averageRating = book.volumeInfo.averageRating;
                let buyLink = book.volumeInfo.infoLink;
                console.info("buyLink", buyLink);
                return (
                    <Panel header={title} eventKey={id} key={id}>
                        <Grid>
                            <Row>
                                <Col xs={3} md={3} lg={3}>
                                    <img src={thumbnail} role="presentation"/>
                                </Col>
                                <Col xs={8} md={8} lg={8}>
                                    <ListGroup>
                                        <ListGroupItem><strong>Categories:</strong> {categories}</ListGroupItem>
                                        <ListGroupItem><strong>Authors:</strong> {authors}</ListGroupItem>
                                        <ListGroupItem><strong>Publisher:</strong> {publisher}</ListGroupItem>
                                        <ListGroupItem><strong>Publishe Date:</strong> {publishDate}</ListGroupItem>
                                        <ListGroupItem><strong>Page Count:</strong> {pageCount}</ListGroupItem>
                                        <ListGroupItem><strong>Average Rating:</strong> <span className="rating">{averageRating}</span></ListGroupItem>
                                    </ListGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={11} md={11} lg={11}>
                                    <h3>Book Description</h3>
                                    {description}
                                    <hr/>
                                    <Button href={buyLink} bsStyle="primary">Buy Now</Button>
                                </Col>
                            </Row>
                        </Grid>
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
