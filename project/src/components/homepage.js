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
                        <li><a href="https://www.talkspace.com/online-therapy/"></a>Talkspace</li>
                        <li><a href="https://www.amwell.com/">Amwell</a></li>
                        <li><a href="https://www.betterhelp.com">BetterHelp</a></li>
                        <li><a href="https://www.verywellmind.com/best-online-therapy-4691206">verywellmind</a></li>
                        <li><a href="https://www.teladoc.com/ways-we-help/mental-health/">Teladoc</a></li>
                        <li><a href="https://www.betterhelp.com/">betterhelp</a></li>
                        <li><a href="https://calmerry.com/">calmerry</a></li>
                        <li><a herf="https://openpathcollective.org/">openpathcollective</a></li>
                        <li><a href="https://www.7cups.com/">.7cups</a></li>
                        <li><a href="https://www.mdlive.com/">mdlive</a></li>
                        <li><a href="https://www.teencounseling.com/">teencounseling</a></li>
                        <li><a href="https://www.mytherapist.com/">mytherapist</a></li>
                    </ul>
                </div>

                <div id='mh-info' class="mental-health-cat">
    <h1>Mental Health Information</h1>
    <h2>Diseases associated with mental health issues</h2>
    <ul>
        <li>
            <h3>Anxiety</h3>
            <ul>
                <li><a href="https://www.nimh.nih.gov/health/topics/anxiety-disorders/index.shtml">NIMH - Anxiety Disorders</a></li>
                <li><a href="https://adaa.org/understanding-anxiety">ADAA - Understanding Anxiety</a></li>
                <li><a href="https://www.headspace.com/">headspace</a></li>
                <li><a href="https://www.calmclinic.com/">calmclinic</a></li>
                <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3336928/#:~:text=Mindfulness%20Based%20Stress%20Reduction%20(MBSR,hypertension%2C%20skin%20and%20immune%20disorders.">ncbi</a></li>
            </ul>
        </li>
        <li>
            <h3>Depression</h3>
            <ul>
                <li><a href="https://www.nimh.nih.gov/health/topics/depression/index.shtml">NIMH - Depression</a></li>
                <li><a href="https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007">Mayo Clinic - Depression</a></li>
                <li><a href="https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Depression">NAMI</a></li>
                <li><a href="https://www.dbsalliance.org/">dbsalliance</a></li>
                <li><a href="https://www.verywellmind.com/best-depression-resources-and-organizations-5114534">verywellmind</a></li>
                <li><a href="https://arraybc.com/patients/ga?utm_source=Google&utm_medium=cpc&utm_campaign=Patient%20Lead%20Gen%20NY&gad_source=1">arraybc</a></li>
            </ul>
        </li>
        <li>
            <h3>Bi-Polar Disorder</h3>
            <ul>
                <li><a href="https://www.nimh.nih.gov/health/topics/bipolar-disorder/index.shtml">NIMH - Bipolar Disorder</a></li>
                <li><a href="https://www.psychiatry.org/patients-families/bipolar-disorders/what-are-bipolar-disorders">American Psychiatric Association - Bipolar Disorders</a></li>
                <li><a href="https://ibpf.org/">ibpf</a></li>
                <li><a href="https://www.bipolaruk.org/">bipolaruk</a></li>
                <li><a href="https://www.guilford.com/books/The-Bipolar-Disorder-Survival-Guide/David-Miklowitz/9781462534982">guilford</a></li>
            </ul>
        </li>
        <li>
            <h3>PTSD (Post-Traumatic Stress Disorder)</h3>
            <ul>
                <li><a href="https://www.ptsd.va.gov/">VA National Center for PTSD</a></li>
                <li><a href="https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967">Mayo Clinic - PTSD</a></li>
                <li><a href="https://www.traumaticstressinstitute.org/sidran-redirect/">traumaticstressinstitute</a></li>
                <li><a href="https://web.ptsdunited.org/">ptsdunited</a></li>
                <li><a href="https://www.maketheconnection.net/">maketheconnection</a></li>
            </ul>
        </li>
    </ul>

    <h2>Additional Resources</h2>
    <ul>
        <li><a href="https://www.samhsa.gov/mental-health">SAMHSA</a></li>
        <li><a href="https://www.cdc.gov/mentalhealth/learn/index.htm">CDC</a></li>
        <li><a href="https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response">WHO</a></li>
    </ul>
</div>

    </div>
</section>

    );
}

export default Homepage;