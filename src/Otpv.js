import { useState } from 'react';

const Otpv = ()=> {
    const [otp, setOtp]=useState(new Array(6).fill(""));

    const handleChange=(element, index)=>{
        if(isNaN(element.value)) return false;
        setOtp([...otp.map((d,idx)=>(idx===index?element.value:d))]);

        // focus  next input
        if(element.nextSibling){
            element.nextSibling.focus();
        }

        
    };
    return (
        <>
       <div className="row">
           <div className="col text-center">
               <h1>Phone Varification</h1>
               <p>Enter the OTP sent to you varify your identity </p>
               {otp.map((data,index)=>{
                   return(
                       <input 
                       className="otp-field"
                       type="text"
                       name="otp"
                       maxLength="1"
                       key={index}
                       value={data}
                       onChange={e=> handleChange(e.target, index)}
                       onFocus={e=>e.target.select()}
                       
                       >

                       </input>
                   )
               })}
               <p>OTP Entered - {otp.join("")}</p>
               <p>
                   <button className="btna btn-secondary mr-2" onClick={e=>setOtp([...otp.map(v=>"")])}>
                       Clear
                   </button>
                   <button className="btn btn-primary" onClick={e=>alert("Entered OTP is "+otp.join(""))}>Varify OTP</button>
               </p>
           </div>
       </div>
        
            
        </>
    );
}



export default Otpv;



