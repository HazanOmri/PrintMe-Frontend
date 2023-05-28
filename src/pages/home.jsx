import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

import { userService } from "../services/user.service";
import { setUser } from "../store/user.action";
import { ogdanService } from "../services/ogdan.service";
import { ItemList } from "../cmps/item-list";
import { Hero } from "../cmps/hero";


export function Home() {
    const [ogdans, setOgdans] = useState([])
    const user = useSelector(sotreState => sotreState.userModule.user)

    useEffect(() => {
        loadUser()
        loadOgdans()
        console.log(ogdans)
    }, [])

    function loadOgdans() {
        const items = ogdanService.getOgdans()
        setOgdans(items)
    }

    function loadUser() {
        const user = userService.getLoggedinUser()
        if (user) setUser(user)
        else setUser(userService.getEmptyUser())
    }

    return <section className="home ">
        <Hero />
        <ItemList ogdans={ogdans} />
    </section>
}