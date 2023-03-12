import { ADD_FAVORITE, DELETE_FAVORITE } from "./actions"
import axios from "axios"

const initialState = {
    myFavorites: []
}
async function postFav(payload){
    await axios.post("http://localhost:3001/rickandmorty/fav", payload)
}
const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAVORITE:
        try{
            postFav(payload)
        }
        catch(error){
            console.log(error)
        }
        return{...state}
        
        case DELETE_FAVORITE:

            return{...state}
        default:
            return {...state}

    }

}
export default rootReducer;