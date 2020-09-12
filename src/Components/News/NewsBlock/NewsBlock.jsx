import React, {useState} from "react";
import {Button, Col, Container, Form, Media, Navbar, Row} from "react-bootstrap";
import logo from "../../../Assets/Image/3133957.jpeg"

const NewsBlock =(props)=>{

    let [approved, setApproved] = useState(props.approved)

    const approveNews = () => {
        props.approveNews(props.newsId)
        setApproved(true)
    }

    return(
        <Container>
            <Row>
                <Col md="9">
                    <Media className="m-5">
                        <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src={logo}
                            />
                            <Media.Body>
                                <h4>{props.title}</h4>
                                <h6>{props.createdAt}</h6>
                                <p>{props.message}</p>
                                <blockquote className="blockquote">
                                    <footer className="blockquote-footer">{props.author}</footer>
                                </blockquote>
                                <Form inline>
                                    {
                                        props.whoam === 2 ? <Button onClick={()=>{props.deleteNews(props.newsId)}}> Delete </Button> : undefined
                                    }
                                    {
                                        props.whoam === 2  ? ( !approved ? <Button onClick={approveNews}> Approve </Button> : undefined) : undefined
                                    }
                                </Form>
                            </Media.Body>
                    </Media>
                </Col>
            </Row>
        </Container>
    )
}
export default NewsBlock