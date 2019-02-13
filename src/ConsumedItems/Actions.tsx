import { action } from 'typesafe-actions'
import { ConsumedItemsActionTypes } from './Types'

export const addBook = (item : any) => action(ConsumedItemsActionTypes.ADD_BOOK, item)
export const addMovie = (item : any) => action(ConsumedItemsActionTypes.ADD_MOVIE, item)
export const changeNewMovieDesc = (desc : string) => action(ConsumedItemsActionTypes.CHANGE_NEW_MOVIE_DESC, desc)
export const changeNewMovieUrl = (url : string) => action(ConsumedItemsActionTypes.CHANGE_NEW_MOVIE_URL, url)
export const changeNewBookDesc = (desc : string) => action(ConsumedItemsActionTypes.CHANGE_NEW_BOOK_DESC, desc)
export const changeNewBookUrl = (url : string) => action(ConsumedItemsActionTypes.CHANGE_NEW_BOOK_URL, url)
