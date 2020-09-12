import React, {useState} from 'react';
import s from './Header.module.css'
import Modal from "react-modal";
import {Field, reduxForm, SubmissionError} from "redux-form";
import {required} from "../../utils/validators/validators";
import style from "../Common/FormsControls/FormsControls.module.css";
import {Attribute} from "../Common/FormsControls/FormsControls";
import {Navbar,Nav,Container,Form,Button} from "react-bootstrap"
import logo from "../../Assets/Image/3133957.jpeg"
import { LinkContainer } from "react-router-bootstrap";


const LoginForm = ({handleSubmit, error, close}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate={[required]} component={Input}/>
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
                <button onClick={close}>Close</button>
            </div>
        </form>
    )
}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const Header = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleSubmit = (values) => {
        return sleep (500)
        .then(() => {
                if (values.email === "user@user.com" && values.password === "123"){
                    props.validateUser(values.email, values.password)
                    setModalIsOpen(false)
                } else if(values.email === "admin@admin.com" && values.password === "666"){
                    props.validateUser(values.email, values.password)
                    setModalIsOpen(false)
                }else{
                    throw new SubmissionError({ _error: 'Invalid email or password' })
                }
            })
        };

    const close = () => {
        setModalIsOpen(false)
    }
    return <div className={s.modal}>
        <Modal isOpen={modalIsOpen}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={handleSubmit} close={close}/>
        </Modal>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href ="/main">
                <img src={logo} height="30" width="30"
                     className="d-inline-block align-top"
                     alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" pullRights>
                    <LinkContainer to="/main">
                        <Nav.Link>Main</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/news">
                        <Nav.Link>News</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form inline>
                    {props.isAuth
                        ? <div><span className={s.logout}>{props.me.name} </span>
                            <Button variant="outline-info" onClick={props.logout}>Logout</Button></div>
                        : <Button onClick={() => setModalIsOpen(true)}>Login</Button>}
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Input = Attribute("input")

export default Header

