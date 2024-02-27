import {useState} from "react";
import {InputBox} from "./Index.js";
import useCurrencyInfo from "../hooks/useCurrencyInfo.js";


function CurrencyConverter() {

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        // Store the current amount value in a temporary variable
        const tempAmount = amount;
        // Swap values of from and to
        setFrom(to);
        setTo(from);
        // Set the amount and convertedAmount using the temporary variable
        setAmount(convertedAmount);
        setConvertedAmount(tempAmount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    return (
        <>
            <div
                className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
                style={{
                    width: '1200px', // Specify the width you want
                    height: '750px', // Specify the height you want
                    backgroundImage: `url('https://images.pexels.com/photos/14354107/pexels-photo-14354107.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load')`,
                }}
            >
                <div className="w-full">
                    <div
                        className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                convert()

                            }}
                        >
                            <div className="w-full mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setFrom(currency)}
                                    selectCurrency={from}
                                    onAmountChange={(amount) => setAmount(amount)}
                                />
                            </div>
                            <div className="relative w-full h-0.5">
                                <button
                                    type="button"
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black text-white px-2 py-0.5"
                                    onClick={swap}
                                >
                                    swap
                                </button>
                            </div>
                            <div className="w-full mt-1 mb-4">
                                <InputBox
                                    label="To"
                                    amount={convertedAmount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setTo(currency)}
                                    selectCurrency={to}
                                    amountDisable
                                />
                            </div>
                            <button type="submit" className="w-full bg-yellow-700 text-white px-7 py-3 rounded-lg">
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </>

    );
}

export default CurrencyConverter
