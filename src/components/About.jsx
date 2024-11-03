import 'react-multi-carousel/lib/styles.css';
import aboutSubImage from "../assets/about.png";

export const About = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12" >
                        <div className="skill-bx wow zoomIn" style={{overflow:'hidden'}}>
                            <h2>About</h2>
                            <p>ArmorCore is a cutting-edge cybersecurity firm dedicated to safeguarding businesses in an increasingly complex digital landscape.<br></br>  Founded in 2022, our mission is to provide robust, innovative, and tailored security solutions that empower organizations to thrive in the face of evolving cyber threats. At ArmorCore, we understand that every business has unique security needs. Our team of elite cybersecurity experts combines deep industry knowledge with state-of-the-art technology to deliver comprehensive protection across all digital assets. We offer a wide range of services, including.</p>
                            <div className={"aboutCountBox"}>
                                {/*<h5 className={"about"}>Address : <span style={{color:'#B8B8B8'}}>colombo 07 galla rode bambalapitiya</span></h5><br/>
                                <h5 className={"about"}>Zip code : <span style={{color:'#B8B8B8'}}>2500</span></h5><br/>*/}
                                <h5 className={"about"}>Email : <span style={{color:'#B8B8B8'}}>info@armorcore.com</span></h5><br/>
                                {/*<h5 className={"about"}>Phone : <span style={{color:'#B8B8B8'}} > 011 234 2343</span></h5>*/}
                            </div>

                            <img src={aboutSubImage} alt="Header Img" className={"aboutSubImage"}
                                 style={{width:'200px',
                                     position:'absolute',
                                     top:'45%',
                                     left:'9%'}}
                            />
                            {/*width: 332px;
    position: absolute;
    top: 50%;
    left: 9%;*/}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}
