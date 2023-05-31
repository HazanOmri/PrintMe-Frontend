import { useEffect } from "react"
import { PackageCard } from "./package-card"
import { TestCard } from "./test-card"

export function ItemList({ ogdans, tests }) {

    useEffect(() => {
        console.log('ogdans', ogdans)
    }, [])

    return <section className="list">
        {ogdans && ogdans.map(ogdan =>
            <PackageCard ogdan={ogdan} key={ogdan.id} />
        )}
        {tests && tests.map(test =>
            <TestCard testDate={test} />
        )}
    </section>
}