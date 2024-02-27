import { useState, useCallback, useEffect, useRef } from 'react'



export default function PasswordGenerater(){
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")

    //useRef hook
    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)

        }

        setPassword(pass)


    }, [length, numberAllowed, charAllowed, setPassword])

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])
    return (

        <div className="w-full h-screen flex flex-wrap justify-center  items-center bg-opacity-100 "
             style={{
                 width: '15000px',
                 height: '300px',
                 backgroundImage: `url('https://media.istockphoto.com/id/1669453980/photo/3d-render-padlock-security-network-on-circuit-board.jpg?s=1024x1024&w=is&k=20&c=mVsVtfq7bJoPPKo8kViHwy9C6QbFEba5qnGGEe3fHuQ=')`,
             }}>
            <div
                className="w-1300 h-screen  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 h-70 bg-opacity-70 text-orange-500">

                <h1 className='text-Orange-500  text-7xl font-bold text-center h-50 flex flex-wrap justify-center '>Password
                    generator</h1>

                <div className="flex shadow rounded-lg overflow-hidden h-30 ">
                    <input
                        type="text"
                        value={password}
                        className="object-fit-lg-scale w-full py-1 px-3"
                        placeholder="Password"
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className='outline-none text-3xl bg-orange-700 text-white px-3 py-0.5 shrink-0'
                    >copy
                    </button>
                </div>
            </div>

            <div className='flex flex-lg-nowrap text-sm gap-x-10'>
                <div className='flex items-center  text-orange-500 gap-x-1 text-3xl'>
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className='cursor-pointer '
                        onChange={(e) => {
                            setLength(e.target.value)
                        }}
                    />
                    <label>Length: {length}</label>
                </div>
                <div className="flex  text-orange-500 items-center gap-x-1 text-3xl">
                    <input
                        type="checkbox"
                        defaultChecked={numberAllowed}
                        id="numberInput"
                        className={"appearance-none bg-gray-200 border border-gray-400 rounded-sm h-5 w-5 checked:bg-blue-500 checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 ease-in"}
                        onChange={() => {
                            setNumberAllowed((prev) => !prev);
                        }}
                    />
                    <label htmlFor="numberInput">Numbers</label>
                </div>
                <div className="flex items-center text-orange-500 gap-x-1 text-3xl">
                    <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        id="characterInput"
                        className={"appearance-none bg-gray-200 border border-gray-400 rounded-sm h-5 w-5 checked:bg-blue-500 checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 ease-in"}
                        onChange={() => {
                            setCharAllowed((prev) => !prev)
                        }}
                    />
                    <label htmlFor="characterInput">Characters</label>
                </div>
            </div>
        </div>


    );
}

