import {useHistory } from 'react-router-dom';




function Header() {
    let history=useHistory();


    return (

        <>
            <div className='wel'>
                <h1>WELCOME</h1>
                </div>
            
            <button className="click" onClick={()=>{
                history.push('Otpv')
            }}>
            Send OTP
            </button>
            


        </>




    );
}

export default Header;