import './HeroStyles.css';

export default function Hero(props)
{
    return (
        <>
        <section className='banner overlay'>
        <div className={props.cName}>
            <img className="bg-banner-one" alt='HeroImage' src={props.heroImage}/>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='hero-text'>
                        <p className='countdown'>{props.text1}</p>
                        <h1 className='business'>{props.title1}</h1>
                        <h2 className='conference'>{props.title2}</h2>
                        <h6 className='date'>{props.text}</h6>
                        <button className={props.btnClass} onClick={props.url}>{props.buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

