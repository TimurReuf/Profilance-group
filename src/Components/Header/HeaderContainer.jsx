import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logout, validateUser} from "../../Redux/login-reducer";




let mapStateToProps = (state) => {
    return {
        me: state.mainPage.me,
        isAuth: state.mainPage.isAuth
    }
}


let HeaderContainer = connect(mapStateToProps,{validateUser,logout})(Header)

export default HeaderContainer