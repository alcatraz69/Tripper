import {FC} from 'react';
import Logo from './Assets/logo.svg'
const Header: FC =()=> {
    return (
        <header className="flex justify-between px-5 md:px-20 items-center bg-white shadow-md py-4 md:py-2">
            <div>
            <img className="w-32 md:w-40" src={Logo} alt="logo"/>
            </div>
            <div className="flex md:w-60 justify-between">
            <div className="hidden mt-2.5 md:block"><p>About</p></div>
            <div className="hidden mt-2.5 md:block"><p>Contact</p></div>
            <div className="mt-2.5"><p>Login</p></div>
            </div>
        </header>
    )
}

export default Header
