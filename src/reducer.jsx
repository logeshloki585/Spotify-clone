export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item:null,
    // token:"BQCYidn6tiwyLzMhYsqJdv3H8l6wOFotRZw241cz_3ILbv_g7dIky0LTletlYQbh3iR07I31GpcCURGEZGL8hIOpBqlzLK2ON1muZHDygiJ4srqeQWr8YQ-jOqR0Z4wF5is-Iy9dgTHpXME3iwk7NICw3RC7j1oqWpaLIwd3tZMxmp4tbsMF",
}



const reducer = (state, action) => {
console.log(action);
console.log("thokodinoa",action);


    switch(action.type) {
        case 'SET_USER' :
            return {
                ...state,
                user: action.user,
            }
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token,
                };
            case "SET_PLAYLIST":
                return{
                    ...state,
                    playlists: action.playlists,
                };
            default:
                return state;
    }
}

export default reducer;