import Hero from "../components/homeHero";
import Navbar from "../components/Navbar";
import homepage2 from '../components/images/banner-bg-two.jpg'


function Home2()
{
    return (
        <>
        <Navbar />
            <Hero 
                cName="Home2"
                heroImage={homepage2}
                title1="Business"
                title2="Conference 2017"
                text="02-05 July 2017 California"
                buttonText="GET TICKET NOW"
                url="/"
                btnClass="show"
            />
        </>
    )
}

export default Home2;