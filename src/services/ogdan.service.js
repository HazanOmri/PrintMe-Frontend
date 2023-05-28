const ogdans = [
    {
        title: "אוגדן א׳",
        price: 50,
        amount: 10,
        id: 'o1'
    },
    {
        title: "אוגדן ב׳",
        price: 60,
        amount: 12,
        id: 'o2'
    },
    {
        title: "אוגדן ג׳",
        price: 70,
        amount: 14,
        id: 'o3'
    }
]

export const ogdanService = {
    getOgdans,
    get,
}

function get(id) {
    let item
    ogdans.forEach(ogdan => {
        if (ogdan.id === id) item = ogdan
    })
    return item
}

function getOgdans() {
    return ogdans
}