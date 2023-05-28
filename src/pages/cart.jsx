import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ItemList } from "../cmps/item-list"
import { userService } from "../services/user.service"

export function Cart() {
    const user = useSelector(storeState => storeState.userModule.user)
    const [cart, setCart] = useState({})

    useEffect(() => {
        setCart(userService.getCart())
    }, [user])

    return <section className="cart">
        {cart.items?.length ? <ItemList ogdans={cart.items} tests = {['ספטמבר 2017']}/> : <h1>סל הפריטים שלך ריק...</h1>}
    </section>
}