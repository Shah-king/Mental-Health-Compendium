import './homepage.css'
import './assets/helth.jpg'


function Homepage(){
    return(
        <section className='homepage'>
            <div className='header'>
                <div className='title'>
                    HackCUNY Mental Health Project</div>
                <div className='navbar'>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="jumpto">Jump To </a></li> {/* this buttons gonna be a dropdown */}
                        <li><a href="aboutus">About Us</a></li> {/* about us page */}
                    </ul>        
                </div>

                <div className="hotlines">
                    <h1>List of hotlines</h1>
                    <ul>
                        <li>Mental Health Emergency Hotline: 988</li>
                        <li>National Alliance on Mental Illness Helpline: 1-800-950-NAMI OR text "Friend" to 62640</li>
                        <li>Teen & Young Adult HelpLine: 800-950-6264</li>
                    </ul>
                </div>

                <div className="hotlines">
                    <h1>Online Therapy</h1>
                    <ul>
                        <li>Filler option</li>
                        <li>Filler option</li>
                        <li>Filler option</li>
                    </ul>
                </div>

                <div className="hotlines">
                    <h1>Mental Health Information</h1>
                    <ul>
                        <li>Filler option</li>
                        <li>Filler option</li>
                        <li>Filler option</li>
                    </ul>
                </div>

                {/* add more categories of mental health resources, leave list items as filler content for now */}

            </div>
        </section>
    );
}

export default Homepage;