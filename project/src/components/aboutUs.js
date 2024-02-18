import './aboutUs.css'

function AboutUs(){
    return(
        <section className='aboutUs'>
            <div className='header'>
                <div className='title'>
                    HackCUNY Mental Health Project</div>
                <div className='navbar'>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><div className='dropdown'><button className="dropbtn">Jump To</button>
                        <div className='dropdown-content'>
                            <a href='home#hotlines'>List of hotlines</a>
                            <a href='home#online-therapy'>Online Therapy</a>
                            <a href='home#mh-info'>Mental Health Information</a>
                        </div>
                        </div>
                            </li> 
                        <li><a href="aboutus">About Us</a></li>
                    </ul>       
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
