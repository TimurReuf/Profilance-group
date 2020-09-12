import React from "react";
import s from './News.module.css'

const News = React.memo(props => {
    debugger
    const tmp = [...props.news]
    const news = tmp.reverse().map(p => <News message={p.message} key={p.id} likes={p.likes}/>)
    // let newsElements = [...props.news].reverse().map(p => <News message={p.message} key={p.id} likes={p.likes}/>)
    console.log(news)
    return(
        <div className={s.newsBlock}>
            <h3>my posts</h3>
            {/*<div>*/}
            {/*    <AddMessageReduxForm onSubmit={addNewPost}/>*/}
            {/*</div>*/}
            <div className={s.news}>
                {news}
            </div>
        </div>
    )
})
export default News