// import { userService } from '../service/user.service.js'

import { showAddItemMsg, showRemoveItemMsg } from "../services/event-bus.service"
import { userService } from "../services/user.service"

export const SET_USER = 'SET_USER'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const initialState = {
    user: { id: '', fullname: '', cart: {} },
}

export function userReducer(state = initialState, action) {
    let user = { ...state.user }
    console.log(user)
    switch (action.type) {
        case SET_USER:
            userService.saveLocalUser(action.user)
            return { ...state, user: action.user }
        case ADD_TO_CART:
            if (user.cart[action.itemId]) {
                user.cart[action.itemId] = user.cart[action.itemId] + 1
            } else {
                user.cart[action.itemId] = 1
            }
            userService.saveLocalUser(user)
            return { ...state, user }
        case REMOVE_FROM_CART:
            let newCart = {}
            for (const itemId in user.cart) {
                if (action.itemId !== itemId) newCart[itemId] = user.cart[itemId]
            }
            user.cart = newCart
            userService.saveLocalUser(user)
            showRemoveItemMsg('הפריט הוסר מהסל')
            return { ...state, user }
        default:
            return state
    }
}

