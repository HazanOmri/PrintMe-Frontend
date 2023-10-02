import { useState } from "react"
import { httpService } from "../services/http.service"
import { useNavigate } from "react-router-dom"

export function Payment({ cart }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()

    function handleChange({ target }) {
        if (target.className === 'fullname') setFullName(target.value)
        if (target.className === 'email') setEmail(target.value)
        if (target.className === 'phone') setEmail(target.value)
    }

    async function checkout() {
        try {
            const res = await httpService.post('checkout', cart)
            window.location = res.url.url
            console.log('res.url.url', res.url.url)
        } catch (err) {
            console.log('error', err)
        }
    }

    return <form className="payment" onSubmit={() => checkout()}>
        <label htmlFor="fullname" className="required-field"> <p>שם  מלא </p>
            <input type="text" id="fullname" required className="fullname" onChange={handleChange} />
        </label>
        <label htmlFor="email" className="required-field"> דוא״ל
            <input type="text" id="email" required className="email" onChange={handleChange} />
        </label>
        <label htmlFor="phone" className="required-field"> מספר נייד
            <input type="text" id="phone" required className="phone" onChange={handleChange} />
        </label>
        <label className="method">
            <label htmlFor="collect"> איסוף
                <input type="radio" id="collect" name="method" />
            </label>
            <label htmlFor="deliver"> משלוח
                <input type="radio" id="deliver" name="method" />
            </label>
        </label>
        <button className="submit">אישור</button>
    </form>
}