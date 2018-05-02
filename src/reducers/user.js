import axios from "axios";

const initialstate= {
    user: "",
    page:  1
}

export default function userInfo(state = initialstate, action) {
    switch (action.type){
        case "SET_USER":
        let user= action.payload
        return { ...state, user: axios.post("http://localhost:3000/users", { user }).then(res => {console.log(res)}), page:state.page+1 }
       
        case "NEXT_PAGE":
        return { ...state,  page:state.page+1 }
        case "PREV_PAGE":
        return { ...state, page: state.page-1 }
        default: 
        return state
    }
}

