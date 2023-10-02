import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ItemList } from "../cmps/item-list"
import { Payment } from "../cmps/payment"
import { ogdanService } from "../services/ogdan.service"
import { userService } from "../services/user.service"

export function Cart() {
    const user = useSelector(storeState => storeState.userModule.user)
    const [ogdans, setOgdans] = useState([])
    const [tests, setTests] = useState([])
    const [payment, setPayment] = useState(false)

    useEffect(() => {
        divideCart()
    }, [user])

    function divideCart() {
        let ogdanList = []
        let testList = []
        Object.keys(user.cart).forEach(key => {
            if (key.charAt(0) === 'o') ogdanList.push(ogdanService.get(key))
            else testList.push(key)
        })
        console.log('ogdanList', ogdanList)
        setOgdans(ogdanList)
        setTests(testList)
    }

    function advanceToPayment({target}) {
        target.style = 'display:none'
        setPayment(true)
    }

    return <section className="cart">
        {Object.keys(user.cart).length ? <ItemList ogdans={ogdans} tests={tests} /> : <h1>סל הפריטים שלך ריק...</h1>}
        <div className="summary">
            <h1>סה״כ לתשלום: ₪{userService.getCartSum()}</h1>
            <button className="confirm" onClick={(ev) => advanceToPayment(ev)}>אישור ומעבר לתשלום</button>
        </div>
        {payment && <Payment cart={user.cart} />}
    </section>
}