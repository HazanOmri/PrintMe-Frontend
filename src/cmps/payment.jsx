import { useState } from "react"
import { httpService } from "../services/http.service"

export function Payment({ cart }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    function handleChange({ target }) {
        if (target.className === 'fullname') setFullName(target.value)
        if (target.className === 'email') setEmail(target.value)
        if (target.className === 'phone') setEmail(target.value)
    }

    async function checkout() {
        console.log('cart', cart)
        await httpService.post('checkout', cart)
    }

    return <form className="payment" onSubmit={() => console.log('fullName', fullName)}>
        <label htmlFor="fullname"> שם  מלא
            <input type="text" id="fullname" className="fullname" onChange={handleChange} />
        </label>
        <label htmlFor="email"> דוא״ל
            <input type="text" id="email" className="email" onChange={handleChange} />
        </label>
        <label htmlFor="phone"> מספר נייד
            <input type="text" id="phone" className="phone" onChange={handleChange} />
        </label>
        <label className="method">
            <label htmlFor="collect"> איסוף
                <input type="radio" id="collect" name="method" />
            </label>
            <label htmlFor="deliver"> משלוח
                <input type="radio" id="deliver" name="method" />
            </label>
        </label>
        <button className="submit" onClick={() => checkout()}>אישור</button>
    </form>
}