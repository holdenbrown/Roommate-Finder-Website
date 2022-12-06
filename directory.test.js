import { render, screen, cleanup } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import Directory from '../directory'

test('renders buttons for preferences and roommates', () => { 
    render(<Directory />) 
    const whole = screen.getByTestId("whole-div") 
    expect(whole).toBeInTheDocument() 

    const button1 = screen.getByTestId("button1")
    expect(button1).toBeInTheDocument()

    const button2 = screen.getByTestId("button2")
    expect(button2).toBeInTheDocument()
}) 