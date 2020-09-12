const ADD_NEWS = "news-reducer/ADD_NEWS"
const FILTER_NEWS = "news-reducer/FILTER_NEWS"
const APPROVE = "news-reducer/APPROVE"
const DELETE = "news-reducer/DELETE"


let initialState = {
    news: [
        {
            id: 1,
            message: 'Hi, how are you?',
            title: 'TITLE 1',
            createdAt: '01-01-2020',
            author: "System",
            approved: false
        },
        {
            id: 2,
            message: 'That\'s my first post',
            title: 'TITLE 2',
            createdAt: '01-01-2020',
            author: "System",
            approved: true
        },
        {id: 3, message: 'BlaBla', title: 'TITLE 3', createdAt: '01-01-2020', author: "System", approved: true},
        {id: 4, message: 'DaDA', title: 'TITLE 4', createdAt: '01-01-2020', author: "System", approved: true}
    ],
    filterText: ""
}

const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEWS: {
            return {
                ...state,
                news: [
                    ...state.news,
                    {
                        id: state.news.length + 1,
                        message: action.body,
                        title: action.title,
                        createdAt: new Date().toLocaleString(),
                        author: action.author,
                        approved: false
                    }],
            }
        }
        case FILTER_NEWS : {
            return {
                ...state,
                filterText: action.el
            }
        }
        case APPROVE : {
            const mas = state.news.map(item => {
                if (item.id === action.newsId)
                    item.approved = true
            })
            return {
                ...state,
                ...mas
            }
        }
        case DELETE : {
            return {
                ...state,
                news: state.news.filter(p => p.id != action.newsId)
            }
        }

        default :
            return state
    }

}
export const addNews = (title, body, author) => ({type: ADD_NEWS, title, body, author})
export const filterNews = (el) => ({type: FILTER_NEWS, el})
export const approveNews = (newsId) => ({type: APPROVE, newsId})
export const deleteNews = (newsId) => ({type: DELETE, newsId})


export default newsReducer