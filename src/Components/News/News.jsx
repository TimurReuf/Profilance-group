import React from "react";
import NewsReduxForm from "./AddNewsForm";
import NewsBlock from "./NewsBlock/NewsBlock";
import {Col, Container, Form, FormControl, Row} from "react-bootstrap"


const News = React.memo(props => {
    const onSubmit = (formData) => {
        props.addNews(formData.title, formData.message, props.me.name)
    }
    const NewsItems =({p,...props}) =>{
        return <NewsBlock key={p.id} newsId={p.id} title={p.title} message={p.message} author={p.author}
                         createdAt={p.createdAt} approved={p.approved} deleteNews={props.deleteNews}
                         approveNews={props.approveNews} whoam={props.me.userId}/>
    }

    const news = [...props.news].reverse().map(p => {
        if (props.me.userId === 2 || p.approved || p.author === props.me.name ) {
            let check = props.filterText
            if (check === "")
                return <NewsItems p={p} {...props} />
            else {
                if (p.title.includes(check) || p.message.includes(check) || p.createdAt.includes(check)) {
                    return <NewsItems p={p}{...props}/>
                }
            }
        }
    })

    let onNewsChange = (e) => {
        let fleldVal = e.target.value;
        props.filterNews(fleldVal);
    }

    return (
        <div>
        <Container>
            <Row>
                <Col>
            <Form inline>
                <FormControl
                onChange={onNewsChange}
                value={props.filterText}
                name='search'
                type="text"
                placeholder="Search"
                className="mr-sm-2 p-10 mt-2"
                /> - Введите элемент для поиска
            </Form>
            <div>
            {props.me.userId > 0 ? <NewsReduxForm onSubmit={onSubmit}/> : undefined}
            </div>
            {news}
                </Col>
        </Row>
        </Container>
        </div>
    )
})
export default News
