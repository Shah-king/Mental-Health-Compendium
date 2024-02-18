import './aboutUs.css'

function AboutUs(){
    return(
        <section className='aboutUs'>
            <div className='header'>
                <div className='title'>
                    Mental Health Compendium</div>
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

            <div id="About-us" className="mental-health-cat"/>
                 <h1>About Us</h1>
                     <p>Welcome to the Mental Health Compendium - a project born out of passion and dedication to mental health awareness and support. We understand the importance of fostering a community that promotes mental well-being and provides resources for those seeking help. 
                        </p>
                
            <div id="our-mission" className="mental-health-cat"/>
                <h1>Our Mission</h1>
                    <p>Our mission is to break the stigma surrounding mental health and create a safe space for individuals to find valuable resources, support, and information. With the amount of information available nowadays, it can feel overwhelming looking for what options you have and knowing what resources are right for you. That’s why we created the Mental Health Compendium, a website that does all the hard work for you.</p> 
            
            <div id="our-approach" className="mental-health-cat"/>
                <h1>Our Approach</h1>
                    <p>We recognize the unique challenges individuals face on their mental health journey. That's why we focus on providing a user-friendly platform with curated resources, informative articles, and a supportive community. Through a combination of technology and human empathy, we aim to bridge the gap between those seeking help and the resources available to them.
                        </p>
            
            <div id="we-are" className="mental-health-cat"/>
                <h1>Who We Are</h1>
                    <p>Our team is a diverse group of individuals brought together by a common goal - making mental health resources accessible to everyone. From developers and designers to mental health advocates, each member plays a crucial role in creating a platform that makes a positive impact.
                        </p>
                        
        </section>
    );
}

export default AboutUs;
