import { useState } from "react";

const Loancalci=()=>
    {
        const[loanamount,setloanamount] = useState("");
        const[loanTenure,setloanTenure] = useState("");
        const[interestRate,setintersetRate] = useState("");
        const[emiAmount,setemiAmount] = useState("");
        const[totalInterest,settotalInterest] = useState("");
        const[totalpay,settotalpay] = useState("");
       // const[error,seterror] = useState("");

        const Calcu=()=>
            {
                if(!loanamount || parseFloat(loanamount)<=0){
                    alert("Please enter the loan amount!");
                    return;
                }
                if(!loanTenure || parseFloat(loanTenure)<=0){
                    alert("Please enter the tenure!");
                    return;
                }
                if(!interestRate || parseFloat(interestRate)<=0){
                    alert("Please enter the interest rate!");
                    return;
                }
                const principal=parseFloat(loanamount);
                const rate=parseFloat(interestRate)/100/12;
                const timeperiod=parseFloat(loanTenure)*12;
                const a=Math.pow(1+rate,timeperiod);
                const emi=(principal*rate*a)/(a-1);
                const totalPayment=emi*timeperiod;
                const totalInterests=totalPayment-principal;
                setemiAmount(emi.toFixed(2));
                settotalInterest(totalInterests.toFixed(2));
                settotalpay(totalPayment.toFixed(2));
                //seterror("");

            }

    return(
        <center>
            <div className="calci">
            <h1>Loan EMI Calculator by Riddhi</h1>
            
                <label>Loan Amount (in &#8377;): </label>
                <input type="number" placeholder="Loan Amount" onChange={(e)=>setloanamount(e.target.value)}/>
                <p><label>Tenure: </label>
                <input type="number" placeholder="Enter Tenure" onChange={(e)=>setloanTenure(e.target.value)}/></p>
                <p><label>Interest: </label>
                <input type="number" placeholder="Enter Interest(%)" onChange={(e)=>setintersetRate(e.target.value)}/></p>
                <br></br>
                <button onClick={Calcu} className="button">Calculate Amount</button>
                </div>
                <div className="output">
                    <h2>Loan Details:</h2>
                    <p className="ans">EMI Amount: &#8377;{emiAmount}</p>
                    <p className="ans">Total Payable Interest: &#8377;{totalInterest}</p>
                    <p className="ans">Total Payable Amount: &#8377;{totalpay}</p>
                </div>
            
        </center>
    );
}

export default Loancalci;