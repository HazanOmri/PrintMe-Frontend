import { useEffect, useState } from "react";
import { TestCard } from "../cmps/test-card";
import { testService } from "../services/test.service";

export function Tests() {
    const [tests, setTests] = useState([])

    useEffect(() => {
        setTests(testService.getTests())
    }, [])
    return tests && <table className="tests">
        {tests.map(test =>
            <TestCard testDate={test} />
        )}
    </table>
} 