export enum ConsumedItemsActionTypes {
    ADD_BOOK = 'ADD_BOOK',
    ADD_MOVIE = 'ADD_MOVIE',
    CHANGE_NEW_BOOK_DESC = 'CHANGE_NEW_BOOK_DESC',
    CHANGE_NEW_BOOK_URL = 'CHANGE_NEW_BOOK_URL',
    CHANGE_NEW_MOVIE_DESC = 'CHANGE_NEW_MOVIE_DESC',
    CHANGE_NEW_MOVIE_URL = 'CHANGE_NEW_MOVIE_URL',
}

export interface ConsumedItemsState {
    BookItems : any[]
    NewBookItemUrl : string
    NewBookItemDescription : string
    MovieItems : any[]
    NewMovieItemUrl : string
    NewMovieItemDescription : string
}