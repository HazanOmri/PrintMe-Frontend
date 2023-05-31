import { Link } from "react-router-dom";

export function Hero() {
    return <section className="hero">
        <div className="desc">
            <h1>Print me</h1>
            <h3>הדפסת בחינות הפסיכומטרי לנבחנים בכיתות הלימוד וליחידים!</h3>
            <Link to='/tests'>לרשימת כל המבחנים</Link>
        </div>
    </section>
}