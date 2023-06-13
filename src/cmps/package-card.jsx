import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import coverImg from '../assets/imgs/cover.png'
import { addToCart, removeFromCart } from '../store/user.action'


export function PackageCard({ ogdan }) {
    const user = useSelector(storeState => storeState.userModule.user)

    useEffect(() => {
        console.log('user.cart', user.cart)
    }, [])

    return <section className="package-card">
        {!Object.keys(user.cart).includes(ogdan.id) ?
            <div className="add" onClick={() => addToCart(ogdan.id)}>
                <svg width="28px" height="28px" viewBox="0 0 56 56"><path d="M 45.4157 28.8504 C 51.1548 28.8504 56 24.0676 56 18.2867 C 56 12.5058 51.2174 7.7230 45.4157 7.7230 C 39.6349 7.7230 34.8519 12.5058 34.8519 18.2867 C 34.8519 24.1092 39.6349 28.8504 45.4157 28.8504 Z M 16.9061 41.8263 L 41.1736 41.8263 C 41.9844 41.8263 42.6914 41.1609 42.6914 40.2668 C 42.6914 39.3726 41.9844 38.7071 41.1736 38.7071 L 17.2596 38.7071 C 16.0743 38.7071 15.3465 37.8753 15.1593 36.6069 L 14.8474 34.4234 L 41.2153 34.4234 C 43.3779 34.4234 44.7709 33.5084 45.5614 31.7201 C 43.7727 31.7201 42.0883 31.3666 40.5288 30.6804 C 40.2171 31.0963 39.8218 31.2834 39.2397 31.2834 L 14.3691 31.3042 L 12.6016 19.2433 L 32.0654 19.2433 C 31.9615 18.2867 32.0238 17.0390 32.1694 16.1033 L 12.1441 16.1033 L 11.7698 13.4624 C 11.5411 11.8611 10.9796 11.0502 8.8586 11.0502 L 1.5388 11.0502 C .7070 11.0502 0 11.7780 0 12.6098 C 0 13.4624 .7070 14.1902 1.5388 14.1902 L 8.5674 14.1902 L 11.8946 37.0228 C 12.3312 39.9756 13.8909 41.8263 16.9061 41.8263 Z M 45.4366 25.1490 C 44.7088 25.1490 44.0640 24.6499 44.0640 23.8805 L 44.0640 19.5552 L 40.0923 19.5552 C 39.3853 19.5552 38.8236 18.9730 38.8236 18.2867 C 38.8236 17.6005 39.3853 17.0182 40.0923 17.0182 L 44.0640 17.0182 L 44.0640 12.7138 C 44.0640 11.9235 44.7088 11.4245 45.4366 11.4245 C 46.1644 11.4245 46.7879 11.9235 46.7879 12.7138 L 46.7879 17.0182 L 50.7600 17.0182 C 51.4670 17.0182 52.0492 17.6005 52.0492 18.2867 C 52.0492 18.9730 51.4670 19.5552 50.7600 19.5552 L 46.7879 19.5552 L 46.7879 23.8805 C 46.7879 24.6499 46.1644 25.1490 45.4366 25.1490 Z M 18.5489 51.9326 C 20.4204 51.9326 21.9176 50.4561 21.9176 48.5638 C 21.9176 46.6923 20.4204 45.1951 18.5489 45.1951 C 16.6565 45.1951 15.1801 46.6923 15.1801 48.5638 C 15.1801 50.4561 16.6565 51.9326 18.5489 51.9326 Z M 38.0127 51.9326 C 39.8844 51.9326 41.3814 50.4561 41.3814 48.5638 C 41.3814 46.6923 39.8844 45.1951 38.0127 45.1951 C 36.1204 45.1951 34.6024 46.6923 34.6024 48.5638 C 34.6024 50.4561 36.1204 51.9326 38.0127 51.9326 Z" /></svg>
            </div> :
            <div className="remove" onClick={() => removeFromCart(ogdan.id)}>
                <svg width="28px" height="28px" viewBox="0 0 56 56"><path d="M 45.4157 28.8504 C 51.2174 28.8504 56 24.1092 56 18.2867 C 56 12.5058 51.2174 7.7230 45.4157 7.7230 C 39.6349 7.7230 34.8519 12.5058 34.8519 18.2867 C 34.8519 24.1092 39.6349 28.8504 45.4157 28.8504 Z M 16.9061 41.8263 L 41.1736 41.8263 C 41.9844 41.8263 42.6914 41.1609 42.6914 40.2668 C 42.6914 39.3726 41.9844 38.7071 41.1736 38.7071 L 17.2596 38.7071 C 16.0743 38.7071 15.3465 37.8753 15.1593 36.6069 L 14.8474 34.4234 L 41.2153 34.4234 C 43.3779 34.4234 44.7709 33.5084 45.5614 31.7201 C 43.7727 31.7201 42.0883 31.3666 40.5288 30.6804 C 40.2171 31.0963 39.8218 31.2834 39.2397 31.2834 L 14.3691 31.3042 L 12.6016 19.2433 L 32.0654 19.2433 C 31.9615 18.2867 32.0238 17.0390 32.1694 16.1033 L 12.1441 16.1033 L 11.7698 13.4624 C 11.5411 11.8611 10.9796 11.0502 8.8586 11.0502 L 1.5388 11.0502 C .7070 11.0502 0 11.7780 0 12.6098 C 0 13.4624 .7070 14.1902 1.5388 14.1902 L 8.5674 14.1902 L 11.8946 37.0228 C 12.3312 39.9756 13.8909 41.8263 16.9061 41.8263 Z M 40.0923 19.5760 C 39.3853 19.5760 38.8027 18.9730 38.8027 18.2867 C 38.8027 17.6213 39.3853 17.0182 40.0923 17.0182 L 50.7805 17.0182 C 51.4670 17.0182 52.0492 17.6213 52.0492 18.2867 C 52.0492 18.9730 51.4670 19.5760 50.7805 19.5760 Z M 18.5489 51.9326 C 20.4204 51.9326 21.9176 50.4561 21.9176 48.5638 C 21.9176 46.6923 20.4204 45.1951 18.5489 45.1951 C 16.6565 45.1951 15.1801 46.6923 15.1801 48.5638 C 15.1801 50.4561 16.6565 51.9326 18.5489 51.9326 Z M 38.0127 51.9326 C 39.8844 51.9326 41.3814 50.4561 41.3814 48.5638 C 41.3814 46.6923 39.8844 45.1951 38.0127 45.1951 C 36.1204 45.1951 34.6024 46.6923 34.6024 48.5638 C 34.6024 50.4561 36.1204 51.9326 38.0127 51.9326 Z" /></svg>
            </div >
        }
        <h2>{ogdan.title}</h2>
        <span>האוגדן מכיל {ogdan.amount} בחינות</span>
        <img src={coverImg} alt="---" />
        <h4>מחיר: ₪{ogdan.price}</h4>
    </section>
}