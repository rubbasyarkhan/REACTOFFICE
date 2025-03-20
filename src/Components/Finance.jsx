import React, { useState } from 'react'

const Finance = () => {
    const [amount, setamount] = useState(0);
    const [type, settype] = useState("income");
    const [transactions, settransactions] = useState([]);

    const addTransaction = () => {
        settransactions([...transactions, { amount: amount, type: type }]);
        setamount("");
        settype("income");
    }

const totalIncome = transactions.filter((data) => data.type === "income").reduce((acc, curr) => acc + curr.amount, 0);
const totalExpense = transactions.filter((data) => data.type === "expense").reduce((acc, curr) => acc + curr.amount, 0);
const totalBalance = totalIncome - totalExpense;
    return (
        <div className='h-screen w-full  flex items-center flex-col gap-10 justify-center p-20'>
              <div className='flex gap-10'>
                <div><h1>totalIncome:{totalIncome}</h1></div>
                <div><h1>totalIncome:{totalExpense}</h1></div>
                <div><h1>totalIncome:{totalBalance}</h1></div>
                </div>
            <div className='flex  items-center justify-center'>
                <div className='flex gap-10 flex-col'>
                    <input type="number" placeholder="add amount" className='outline-none border-2 border-amber-800 p-4' value={amount} onChange={(e) => setamount(e.target.value)} />
                    <select value={type} onChange={(e) => settype(e.target.value)} id="">
                        <option className='bg-black ' value="income">income</option>
                        <option value="expense"className='bg-black '>expense</option>
                    </select>
                    <button className='p-4  bg-amber-900' onClick={addTransaction}>add</button>
                </div>

            </div>

                <h1>Transactions</h1>
            <div >
                {
                    transactions.map((data, index) => {
                        return (
                            <div key={index} className='flex gap-10 flex-row'>

                                <h1> {index + 1 + " "}amount:{data.amount}</h1>
                                <h1 className={`
                                    font-bold
                                 ${data.type === "income" ? "text-green-600" : "text-red-600"}
                                `}>type:{data.type}</h1></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Finance