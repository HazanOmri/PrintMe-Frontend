import { useEffect, useState } from "react";
import { TestCard } from "../cmps/test-card";
import { testService } from "../services/test.service";

export function Tests() {
    const [tests, setTests] = useState([])

    useEffect(() => {
        setTests(testService.getTests())
    }, [])

    return tests && <section className="tests">
        <section className="tests-container">
            <div className="header">
                <p>מועד</p>
                <p>מחיר</p>
                <p>סל</p>
            </div>
            {tests.map((test, idx) => {
                if (idx < tests.length / 2)
                    return <TestCard testDate={test} key={test} />
                else return
            })}
        </section>
        <section className="tests-container">
            <div className="header">
                <p>מועד</p>
                <p>מחיר</p>
                <p>סל</p>
            </div>
            {tests.map((test, idx) => {
                if (idx > tests.length / 2)
                    return <TestCard testDate={test} key={test} />
                else return
            })}
        </section>
    </section>
} 