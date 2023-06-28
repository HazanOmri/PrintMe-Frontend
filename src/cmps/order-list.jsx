import { useState, useEffect } from "react"

import { adminService } from "../services/admin.service"

export function OrderList() {
    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        loadList()
    }, [])

    function loadList() {
        const list = adminService.getOrderList()
        setOrderList(list)
    }


    return <section className="order-list">
        <h1>order listttt</h1>
    </section>
}