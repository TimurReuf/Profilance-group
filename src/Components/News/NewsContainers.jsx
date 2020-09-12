import React from "react";
import {connect} from "react-redux";
import {addNews, approveNews, deleteNews, filterNews} from "../../Redux/news-reducer";
import News from "./News";


let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        filterText: state.newsPage.filterText,
        me: state.mainPage.me
    }
}


let NewsContainer = connect(mapStateToProps, {addNews, filterNews, approveNews, deleteNews})(News)

export default NewsContainer