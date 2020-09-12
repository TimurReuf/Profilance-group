import React from "react";
import {connect} from "react-redux";
import CarouselBox from "../../Carousel/Carousel";

const Main = (props) =>{
    return(<div>
        <CarouselBox me={props.me.name}/>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        me: state.mainPage.me,
        isAuth: state.mainPage.isAuth
    }
}
export default connect(mapStateToProps)(Main)