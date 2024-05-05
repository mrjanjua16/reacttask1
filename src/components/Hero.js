import './HeroStyles.css';
import homepage1 from './images/homepage-one-banner.jpg'


export default function Hero()
{
    return (
        <>
        <div className='hero'>
            <img alt='HeroImage' src={homepage1}/>
        </div>
        </>
    )
}

