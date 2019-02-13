import { Reducer } from 'redux'
import { ConsumedItemsState, ConsumedItemsActionTypes } from './Types'

const initialState : ConsumedItemsState = {
    BookItems : [],
    NewBookItemDescription : '',
    NewBookItemUrl : '',
    MovieItems : [],            
    NewMovieItemDescription : '',
    NewMovieItemUrl : ''
}

const reducer : Reducer<ConsumedItemsState> = (state = initialState, action) => {
    switch (action.type) {
        case ConsumedItemsActionTypes.ADD_BOOK : {          
            return {            
                BookItems : state.BookItems.concat(action.payload),
                NewBookItemDescription : state.NewBookItemDescription,
                NewBookItemUrl : state.NewBookItemUrl,
                MovieItems : state.MovieItems,
                NewMovieItemDescription : state.NewMovieItemDescription,
                NewMovieItemUrl : state.NewMovieItemUrl
            };
        }
        case ConsumedItemsActionTypes.ADD_MOVIE : {
            return {            
                BookItems : state.BookItems,
                NewBookItemDescription : state.NewBookItemDescription,
                NewBookItemUrl : state.NewBookItemUrl,
                MovieItems : state.MovieItems.concat(action.payload),
                NewMovieItemDescription : state.NewMovieItemDescription,
                NewMovieItemUrl : state.NewMovieItemUrl
            };
        }
        case ConsumedItemsActionTypes.CHANGE_NEW_BOOK_DESC : {
            return { ...state, NewBookItemDescription : action.payload }
        }
        case ConsumedItemsActionTypes.CHANGE_NEW_BOOK_URL : {
            return { ...state, NewBookItemUrl : action.payload }
        }
        case ConsumedItemsActionTypes.CHANGE_NEW_MOVIE_DESC : {
            return { ...state, NewMovieItemDescription : action.payload }
        }
        case ConsumedItemsActionTypes.CHANGE_NEW_MOVIE_URL : {
            return { ...state, NewMovieItemUrl : action.payload }
        }
        default : {
            return state;
        }
    }
}

export { reducer as consumedItemsReducer }