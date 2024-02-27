import {useState} from 'react'
import './App.css'
import CurrencyConverter from "./Component/CurrencyConverter.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <CurrencyConverter></CurrencyConverter>
        </>
    )
}

export default App
