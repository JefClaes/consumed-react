import { action } from 'typesafe-actions'

export enum ConsumedItemsActionTypes {
    ADD_ITEM_TO_CATEGORY = 'ADD_ITEM_TO_CATEGORY',
    CHANGE_NEW_ITEM_DESC = 'CHANGE_NEW_ITEM_DESC',
    CHANGE_NEW_ITEM_URL = 'CHANGE_NEW_ITEM_URL'   
}

export const addItemToCategory = (cat : string, item : any) => 
    action(ConsumedItemsActionTypes.ADD_ITEM_TO_CATEGORY, { cat: cat, val: item })
export const changeNewItemUrl = (cat : string, url : string) => 
    action(ConsumedItemsActionTypes.CHANGE_NEW_ITEM_URL, { cat: cat, val: url })
export const changeNewItemDesc = (cat : string, desc : string) => 
    action(ConsumedItemsActionTypes.CHANGE_NEW_ITEM_DESC, { cat: cat, val: desc })