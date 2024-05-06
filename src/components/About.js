import speakerImg from '../components/images/speakers/featured-speaker.jpg';
import './AboutStyle.css'


export default function About(){
    return (
        <>
        <section className="sectionAbout">
            <div className="row">
                <div className="col-lg-4">
                    <div className="image-block">
                        <img className="img-fluid" src={speakerImg}/>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className='content-block'>
                        <h2>About The
                            <span className='alternate'>Eventre</span>
                        </h2>
                        <div className='description-one'></div>
                            <p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.
						</p>
                        <div className='description-two'></div>
                        <p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.
						</p>
                        <ul className='list-inline'>
                            <li className='list-inline-item'></li>
                            <a href='#' className='btn-main-md1'>Buy ticket</a>
                            <li className='list-inline-item'>
                                <a href='#' className='btn-transparent-md1'>Read more</a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </section>
        </>
    )
}