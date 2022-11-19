import './style.css'
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <>
        <div>
            <img src = 'https://i.imgur.com/kKHY2yU.png'
            alt = "shoes-1" />

            <div className='headerInfo'>
                <h1>
                AIR JORDAN 1 RETRO HIGH OG 'CHICAGO' - VARSITY RED/BLACK/MUSLIN
                </h1>
            </div>
        
            <div className='homeimg'>
                <Link to='/products'>
                    <button className='drops'>Check out</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default HomePage