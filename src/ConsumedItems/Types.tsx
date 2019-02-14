export enum ConsumedItemsActionTypes {
    ADD_BOOK = 'ADD_BOOK',
    ADD_MOVIE = 'ADD_MOVIE',
    CHANGE_NEW_BOOK_DESC = 'CHANGE_NEW_BOOK_DESC',
    CHANGE_NEW_BOOK_URL = 'CHANGE_NEW_BOOK_URL',
    CHANGE_NEW_MOVIE_DESC = 'CHANGE_NEW_MOVIE_DESC',
    CHANGE_NEW_MOVIE_URL = 'CHANGE_NEW_MOVIE_URL',
}

export interface ItemData {
    Description : string
    Url : string
}

export interface ConsumedItemsState {
    BookItems : ItemData[]
    NewBookItemUrl : string
    NewBookItemDescription : string
    MovieItems : ItemData[]
    NewMovieItemUrl : string
    NewMovieItemDescription : string
}