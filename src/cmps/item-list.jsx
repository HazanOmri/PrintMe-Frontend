import { useEffect } from "react"
import { PackageCard } from "./package-card"
import { TestCard } from "./test-card"

export function ItemList({ ogdans, tests }) {

    useEffect(() => {
        console.log('ogdans', ogdans)
    }, [])

    return <section className="list">
        <section className="ogdan-list">
            {ogdans && ogdans.map(ogdan =>
                <PackageCard ogdan={ogdan} key={ogdan.id} />
            )}
        </section>
        {tests && tests.length > 0 && <section className="test-list">
            <h1>רשימת מבחנים בודדים:</h1>
            {tests.map(test =>
                <TestCard testDate={test} key={test} />
            )}
        </section>}
    </section>
}