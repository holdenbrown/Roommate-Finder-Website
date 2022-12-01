import { render, screen, cleanup } from '@testing-library/react';
import Operator from './operator';
import DB from './db.json';

test('texts', async () => {
    render(<Operator />)
    let text1 = screen.getByText(/Students answered/).innerHTML
    let text2 = screen.getByText(/time used/).innerHTML
    expect(text1).toEqual('Students answered: ' + DB.studentsAnswered[0].value + ' out of ' + DB.totalStudents[0].value)
    expect(text2).toEqual('Available time used: ' + Math.floor(DB.timeUsed[DB.timeUsed.length - 1].value / 86400) + 'd ' + Math.floor((DB.timeUsed[DB.timeUsed.length - 1].value % 86400) / 3600) + 'hr ' + Math.floor((DB.timeUsed[DB.timeUsed.length - 1].value % 3600) / 60) + 'm ' + DB.timeUsed[DB.timeUsed.length - 1].value % 60 + 's of ' + DB.totalTime[0].value / 86400 + 'd')
})

test('progress bars', async () => {
    render(<Operator />)
    let text1 = screen.getByTestId('progress1').innerHTML
    let text2 = screen.getByTestId('progress2').innerHTML
    expect(text1).toEqual(Math.round(100 * DB.studentsAnswered[0].value / DB.totalStudents[0].value) + '%')
    expect(text2).toEqual(Math.round(100 * DB.timeUsed[DB.timeUsed.length - 1].value / DB.totalTime[0].value) + '%')
})