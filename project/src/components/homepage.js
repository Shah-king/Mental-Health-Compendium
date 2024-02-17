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
                        <li><div className='dropdown'><button className="dropbtn">Jump To</button>
                        <div className='dropdown-content'>
                            <a href='#hotlines'>List of hotlines</a>
                            <a href='#online-therapy'>Online Therapy</a>
                            <a href='#mh-info'>Mental Health Information</a>
                        </div>
                        </div>
                            </li> {/* this buttons gonna be a dropdown */}
                        <li><a href="aboutus">About Us</a></li> {/* about us page */}
                    </ul>        
                </div>

                <div id="hotlines" className="mental-health-cat">
                    <h1>List of hotlines</h1>
                    <ul>
                        <li>Mental Health Emergency Hotline: 988</li>
                        <li>National Alliance on Mental Illness Helpline: 1-800-950-NAMI &#40;6264&#41; OR text "Friend" to 62640</li>
                        <li>Teen & Young Adult HelpLine: 800-950-6264</li>
                        <li>National Domestic Violence Hotline: 1-800-799-7233</li>
                        <li>National Suicide Prevention Lifeline: 1-800-273-TALK &#40;8255&#41;</li>
                        <li>Crisis Text Line: Text REASON to 741741</li>
                        <li>Self-Harm Hotline: 1-800-DONT CUT &#40;1-800-366-8288&#41;</li>
                        <li>Family Violence Helpline: 1-800-996-6228</li>
                        <li>Planned Parenthood Hotline: 1-800-230-PLAN &#40;7526&#41;</li>
                        <li>American Association of Poison Control Centers: 1-800-222-1222</li>
                        <li>National Council on Alcoholism & Drug Dependency: 1-800-622-2255</li>
                        <li>LGBTQ Hotline: 1-888-843-4564</li>
                    </ul>
                </div>

                <div id="online-therapy" className="mental-health-cat">
                    <h1>Online Therapy</h1>
                    <ul>
                        <li>Talkspace</li>
                        <li><a href="https://www.amwell.com/">Amwell</a></li>
                        <li><a href="https://www.betterhelp.com">BetterHelp</a></li>
                    </ul>
                </div>

                <div id='mh-info' className="mental-health-cat">
                    <h1>Mental Health Information</h1>
                    <ul>
                        <li><a href="https://www.samhsa.gov/mental-health">SAMHSA</a></li>
                        <li><a href="https://www.cdc.gov/mentalhealth/learn/index.htm">CDC</a></li>
                        <li><a href="https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response">WHO</a></li>
                    </ul>
                </div>

                {/* add more categories of mental health resources, leave list items as filler content for now */}

            </div>
        </section>
    );
}

export default Homepage;