import React , {useState , useEffect} from 'react';
import './Header.css';



function Header() {

    const [show , setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll' , () => {
            if(window.scrollY > 100) {
                setShow(true)
            }else{
                setShow(false)
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`header ${show && "active"}`}>
            <img className="header-logo" src="./img/netflix.png" alt="netflix-logo"/>
            <img className="header-avatar" src="./img/netflix-n.png" alt="netflix-avatar"/>
        </div>
    )
}

export default Header
