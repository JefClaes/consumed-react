import { Reducer } from 'redux'
import { ConsumedItemsState } from './Types'
import { ConsumedItemsActionTypes } from './Actions'

const initialState : ConsumedItemsState = {
    Categories : [
        {
            Description : 'Books',
            Items : [],
            NewItemDescription : '',
            NewItemUrl : ''
        },
        {
            Description : 'Movies',
            Items : [],
            NewItemDescription : '',
            NewItemUrl : ''
        },
        {
            Description : 'Podcasts',
            Items : [],
            NewItemDescription : '',
            NewItemUrl : ''
        }
    ]
}

const reducer : Reducer<ConsumedItemsState> = (state = initialState, action) => {
    switch (action.type) {
        case ConsumedItemsActionTypes.ADD_ITEM_TO_CATEGORY : {         
            const changed = state.Categories.map(x => {
                if (x.Description == action.payload.cat) {                  
                    return { ... x, Items: x.Items.concat(action.payload.val), NewItemUrl : '', NewItemDescription : '' };                    
                } else {
                    return x;
                }
            });

            return { ...state, Categories : changed }
        }
        case ConsumedItemsActionTypes.CHANGE_NEW_ITEM_DESC : {
            const changed = state.Categories.map(x => {
                if (x.Description == action.payload.cat) {                  
                    return { ... x, NewItemDescription : action.payload.val };                    
                } else {
                    return x;
                }
            });

            return {  ...state, Categories : changed };
        }
        case ConsumedItemsActionTypes.CHANGE_NEW_ITEM_URL : {
            const changed = state.Categories.map(x => {
                if (x.Description == action.payload.cat) {                  
                    return { ... x, NewItemUrl : action.payload.val };                    
                } else {
                    return x;
                }
            });

            return {  ...state, Categories : changed };
        }
        default : {
            return state;
        }
    }
}

export { reducer as consumedItemsReducer }