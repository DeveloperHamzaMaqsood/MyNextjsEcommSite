import {combineReducers} from 'redux';
import prodReducer from '../products/prodReducer';
import cartReducer from '../cartReducer/CartReducer';

    const rootReducer = combineReducers({
        prodReducer : prodReducer,
        cart: cartReducer
    })

    export default rootReducer;