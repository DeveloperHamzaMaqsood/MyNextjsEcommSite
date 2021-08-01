
    export const ADD_TO_CART = "ADD_TO_CART";
    export const addToCart = (prod, qty = 1) => ({
        type : ADD_TO_CART,
        payload : {prod , qty}
    })

    export const UPDATE_QTY_CART = "UPDATE_QTY_CART";
    export const UpdateCart = (prod, qty ) => ({
        type: UPDATE_QTY_CART,
        payload: {
            prod,
            qty
        }
    })


    export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
    export const DeleteCartItem = (id) => ({
        type: DELETE_CART_ITEM,
        payload: {
            id
        }
    })