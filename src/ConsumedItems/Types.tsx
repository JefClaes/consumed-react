export interface ItemData {
    Description : string
    Url : string
}

export interface CategoryData {
    Description : string
    Items : ItemData[]
    NewItemUrl : string
    NewItemDescription : string
}

export interface ConsumedItemsState {
    Categories : CategoryData[]    
}