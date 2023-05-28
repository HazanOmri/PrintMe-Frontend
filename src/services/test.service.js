const tests = [
    'אביב 2023',
    'חורף 2022',
    'סתיו 2022',
    'קיץ 2022',
    'אביב 2022',
    'חורף 2021',
    'סתיו 2021',
    'קיץ 2021',
    'אביב 2021',
    'חורף 2020',
    'סתיו 2020',
    'קיץ 2020',
    'אביב 2020',
    'חורף 2019',
    'סתיו 2019',
    'קיץ 2019',
    'אביב 2019',
    'חורף 2018',
    'סתיו 2018',
    'קיץ 2018',
    'אביב 2018',
    'דצמבר 2017',
    'ספטמבר 2017',
    '',
]

export const testService = {
    get,
    getTests
}

function get(id) {
    let item
    tests.forEach(testId => {
        if (id === testId) item = testId
    });
    return item
}

function getTests() {
    return tests
}