import {
    ADD_TO_CART,
    UPDATE_QTY_CART,
    DELETE_CART_ITEM
} from '../../actions/actionTypes';

    const cartReducer = (state = [], action) => {
        switch(action.type) {
            case ADD_TO_CART: {
                console.log("Done Reached");
                const {prod : prodToBeAdded , qty : qty = 1} = action.payload;
                const prodInCart = [...state];
                let isProdPresent = false;

                for (let i = 0; i < prodInCart.length; i++) {
                    let product = prodInCart[i];

                    if(product.id == prodToBeAdded.id){
                        isProdPresent = true;
                        prodToBeAdded.qty = prodToBeAdded.qty + 1;
                        prodToBeAdded.finalPrice = (prodToBeAdded.qty * prodToBeAdded.price);
                        break;
                    }
                }

                if(!isProdPresent){
                    prodToBeAdded.qty = qty;
                    prodToBeAdded.finalPrice = (prodToBeAdded.qty * prodToBeAdded.price);
                    prodInCart.push(prodToBeAdded);
                    console.log("SuccessFully Added")
                }
                return prodInCart;
            }

            case UPDATE_QTY_CART : {
                console.log("Updated Quantity")
                const {prod : prodQtyToBeUpdate , qty : qty} = action.payload;
                const prodInCart = [...state];

                for(let i = 0; i < prodInCart.length; i++){
                    const product = prodInCart[i];

                    if(product.id == prodQtyToBeUpdate.id){
                        product.qty = qty;
                        prodQtyToBeUpdate.finalPrice = parseInt((prodQtyToBeUpdate.qty * prodQtyToBeUpdate.price));
                        console.log("Updated");
                        break;
                    }
                }
                return prodInCart;
            }

            case DELETE_CART_ITEM : {
                return state.filter((prod) => prod.id !== action.payload.id);
            }

            default : return state;
        }
    }

    export default cartReducer;