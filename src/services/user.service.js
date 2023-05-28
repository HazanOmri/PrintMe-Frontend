import { httpService } from './http.service'
import { ogdanService } from './ogdan.service'
import { testService } from './test.service'
// import { itemService } from './item.service'
import { utilService } from './util.service'

const AUTH_URL = 'auth/'
const USER_URL = 'user/'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getById,
    getUsers,
    update,
    getEmptyCredentials,
    getEmptyUser,
    // getLiked,
    getCart,
    updateUsers,
}

window.userService = userService

async function getById(userId) {
    return httpService.get(USER_URL + userId)
}

async function getUsers() {
    return httpService.get(USER_URL)
}

async function login(userCred) {
    const user = await httpService.post(AUTH_URL + 'login', userCred)
    return saveLocalUser(user)
}

async function signup(userCred) {
    userCred.cart = {}
    const user = await httpService.post(AUTH_URL + 'signup', userCred)
    return saveLocalUser(user)
}

async function logout() {
    await httpService.post(AUTH_URL + 'logout')
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

async function update(user) {
    const newUser = await httpService.put(USER_URL + '/' + user._id, user)
    if (getLoggedinUser()._id === user._id) saveLocalUser(newUser)
    return newUser
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function getEmptyCredentials() {
    return {
        fullname: '',
        email: '',
        username: '',
        password: '',
    }
}

function getEmptyUser() {
    return { id: utilService.makeId(), fullname: '', cart: {} }
}

function getCart() {
    const cart = getLoggedinUser().cart
    console.log()
    let items = []
    let sum = 0
    for (const id in cart) {
        let item = ogdanService.get(id)
        if (item === undefined) item = { id: testService.get(id), price: 5 }
        items.push(item)
        sum += item.price * cart[id]
    }
    return { items, sum }
}

async function updateUsers(removedItemId) {
    const users = await getUsers()
    users.forEach(user => {
        console.log('orinting all useres', user)
        if (user.liked.includes(removedItemId)) {
            const newLiked = user.liked.filter(likedId => likedId !== removedItemId)
            console.log('new user:', { ...user, liked: newLiked })
            update({ ...user, liked: newLiked })
        }
        if (user.cart[removedItemId]) {
            delete user.cart[removedItemId]
            update({ ...user })
        }
    })
}