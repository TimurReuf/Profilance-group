import {stopSubmit} from "redux-form";

const LOG_IN = "login-reducer/LOG_IN"
const SWITCH_NAME = "login-reducer/SWITCH_NAME"
const LOGOUT = "login-reducer/LOGOUT"

const GUEST = {userId: 0, name: "Guest", email: "", password: ""}

let initialState = {
    users: [
        {
            userId: 1,
            name: "User",
            email: "user@user.com",
            password: "123"
        },
        {
            userId: 2,
            name: "Admin",
            email: "admin@admin.com",
            password: "666"
        }
    ],
    me: GUEST,
    isAuth: false
}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOG_IN : {
            const cred = action.creds
            const result = state.users.find(
                (user, idx, mas) => {
                    return user.email === cred.email && user.password === cred.password
                }
            )
            if (result)
                return {
                    ...state,
                    me: result,
                    isAuth: true
                }

            return state
        }
        case SWITCH_NAME : {

            const result = state.users.find(
                (user, idx, mas) => {
                    return user.userId === action.id
                }
            )
            if (result)
                return {users: [result]}
            return state
        }
        case LOGOUT : {
            return {
                ...state,
                me: GUEST,
                isAuth: false
            }
        }
        default :
            return state

    }

}

export const validateUser = (email, password) => ({type: LOG_IN, creds: {email, password}})
export const logout = () => ({type: LOGOUT})
export const login = (email, password) =>(dispatch) => {
    if ((email === "user@user.com" && password === "123")
        || (email === "admin@admin.com" && password === "666"))
        dispatch(validateUser(email, password))
    else {
        let massages = "Some error"
        dispatch(stopSubmit("login", {_error: massages}))
    }

}
export default loginReducer