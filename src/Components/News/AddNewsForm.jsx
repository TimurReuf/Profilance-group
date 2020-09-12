import {Attribute} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import style from "../Common/FormsControls/FormsControls.module.css"
import {Field, reduxForm} from "redux-form";
import React from "react";

const NewsForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"NewsTitle"} name={"title"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"NewsBody"} name={"message"} validate={[required]} component={TextArea}/>
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Add news</button>
            </div>
        </form>
    )
}
const NewsReduxForm = reduxForm({form: 'news'})(NewsForm)
const Input = Attribute("input")
const TextArea = Attribute("textarea")

export default NewsReduxForm