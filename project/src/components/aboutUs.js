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

            <div id="Rafid-int" className="mental-health-cat"/>
                <h1>Rafid Zia</h1>
                    <p>Hello there! I'm Rafid Zia, a junior studying Computer Science at the City College of New York. I am a resident of Queens and have lived in New York since I was born. I got into Computer Science because I had a great passion for video games as a young child, and always wanted to pursue Game Development as a career. My ultimate goal is to become a world-class video game developer, ideally at Nintendo or at my game studio. In my free time, I like hitting the gym, hanging out with my friends, and watching anime. I hope this resource center will be of great use to you, as it is to us! :D
</p>
            <div id="Bilal-int" className="mental-health-cat"/>
                <h1>Bilal Qaiser</h1>
                    <p>Hi, I'm Bilal Qaiser, a junior studying computer science at John Jay College of Criminal Justice. I'm currently a resident of Queens, but I'm originally from Brooklyn. I pursued a degree in computer science because I Always loved to figure out how things worked and dreamed of designing my gadgets. My dream is to one day be able to work in product design and development for companies like Sony or Microsoft. In my free time I like to build model kits, hang out with friends, and do a bit of photography. I hope that the mental health resources on this site are of use to people struggling with their mental health and can help alleviate some of the stress that comes with trying to find appropriate treatment.
</p>
            
            <div id="Shahriar-int" className="mental-health-cat"/>
                <h1>Shahriar Ferdous</h1>
                    <p>Hello fellows! I am Shahriar Ferdous, a sophomore studying computer science at Hunter College. I am currently residing in Brooklyn, NY. I came to the United States of America 6 years ago. I got into computer science because coding seems interesting to me and the things you can build with coding can have a lot of impact on the trajectory of our lifestyle. I hope to work in the data science field in the future as I have seen how data is a precious element of our everyday life and at every moment we are creating data. I love to play soccer, go to the gym, and play video games. I hope this website is great for people coping with mental health issues as it has become an epidemic in the 21st century affecting people of all age groups.
</p>

            <div id="end-message" className="mental-health-cat"/>
                <p1>Thank you for visiting the Mental Health Compendium and supporting our mission to make mental health resources accessible to all.
</p1>
                <p1>Remember, you're not alone - we're here for you.
</p1>


            
        </section>
    );
}

export default AboutUs;
