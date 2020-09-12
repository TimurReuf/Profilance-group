import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import Main from "./Components/Main/Main";
import {Provider} from "react-redux";
import store from "./Redux/redux-store";
import NewsContainer from "./Components/News/NewsContainers";
import HeaderContainer from "./Components/Header/HeaderContainer";
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderContainer/>
                <div>
                    <Route path='/news' component={NewsContainer}/>
                    <Route path='/main' component={Main}/>
                </div>
            </div>
        );
    }
}

let AppContainer = compose(
    withRouter(App))


const TimurReufAPP = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default TimurReufAPP;
