"use client"
import { useState } from "react";
import { AiOutlineBulb } from "react-icons/ai";

const App = () => {

    const [ price, setPrice ] = useState("")

    const handleInputChange = (event) => {
        setPrice(event)
    }

    let money = (price === "" || price === "-") ? 0 : parseFloat(price);
    let fiverrFeeRate = 20;
    let fiverrFee = (money * fiverrFeeRate) / 100;

    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

    return (
      <div className="flex flex-col bg-[#ececeb] p-6 font-gabarito w-full max-w-[700px] h-full">
        <div className="text-2xl gabarito">Enter an invoice total :</div>
        <div className="w-full flex justify-center items-center h-20 relative">
        <input
          type="number"
          className="w-full h-14 p-5 text-2xl font-gabarito border border-[#6e6e6d]"
          placeholder="$0,000.00"
          style={{
            WebkitAppearance: "none",
            margin: 0, 
          }}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <span className="absolute gabarito text-2xl left-[6px]">{price === "" ? "" : "$"}</span>
        </div>
        <div className="w-full flex flex-col sm:flex-row mt-4">
            <div className="w-full flex flex-col">
                <div className="text-2xl gabarito-bold">With Fiverr you’ll make :</div>
                <div className="text-2xl gabarito flex justify-start overflow-hidden whitespace-nowrap text-overflow-ellipsis" style={{ maxWidth: '160px', overflow: 'hidden' }}>
                {formatNumberWithCommas((money - fiverrFee) === 0 ? '-' : `$ ${(money - fiverrFee).toFixed(2)}`)}
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className="text-2xl gabarito-bold text-red-600">Because Fiverr takes :</div>
                <div className="text-2xl gabarito flex justify-start overflow-hidden whitespace-nowrap text-overflow-ellipsis" style={{ maxWidth: '160px', overflow: 'hidden' }}>
                {formatNumberWithCommas(fiverrFee === 0 ? '-' : `$ ${fiverrFee.toFixed(2)}`)}
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center h-20 mt-4">
            <div className="text-xl w-full bg-[#ffe38f] flex items-center p-2 gabarito-semibold">
                <div>
                    <AiOutlineBulb className="thick-icon mr-2" /> 
                </div>
                <div>
                Indy charges you $12 per month. That’s it. A flat $12.
                </div>
            </div>
        </div>

      </div>
    );
  };
  
  export default App;
  