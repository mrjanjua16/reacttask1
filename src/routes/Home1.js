import Hero from "../components/homeHero";
import Navbar from "../components/Navbar";
import homepage1 from '../components/images/homepage-one-banner.jpg'
import '../routes/Home1style.css'
import About from "../components/About";

function Home()
{
    return (
        <>
        <Navbar />
            <Hero 
                cName="Home2"
                heroImage={homepage1}
                text1="The countdown is finished!"
                title1="Business"
                title2="Conference 2017"
                text="02-05 July 2017 California"
                buttonText="GET TICKET NOW"
                url="/"
                btnClass="show"
            />
            <About />
        </>
    )
}

export default Home;