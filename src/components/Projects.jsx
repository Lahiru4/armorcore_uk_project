import {Container, Row} from "react-bootstrap";
import s_image_6 from "../assets/inImage/6.jpg";
import s_image_4 from "../assets/inImage/4.jpg";
import s_image_2 from "../assets/inImage/sa.jpg";
import s_image_7 from "../assets/inImage/7.jpg";
import s_image_3 from "../assets/inImage/3.jpg";
import s_image_5 from "../assets/inImage/5.jpg";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import {Cards} from "./ServiveCards";




export const Projects = () => {
    const imageStyle = {};

    const projects = [
        {
            title: "Employee Training",
            description: "Engaging security training, phishing tests, role-based programs.",
            imgUrl: s_image_6,
        },
        {
            title: "Security Audits",
            description: "Assessing mobile app security across multiple platforms .",
            imgUrl: s_image_2,
        },
        {
            title: "Managed Security Services",
            description: "We assess your organization's resilience to human-centric attack vectors.",
            imgUrl: s_image_3,
        },
        {
            title: "Incident Response",
            description: "Expert security response, forensics, malware analysis, recovery support.",
            imgUrl: s_image_4,
        },
        {
            title: "Security Consulting",
            description: "Strategic security roadmap and tailored architecture design solutions.",
            imgUrl: s_image_5,
        },
        {
            title: "GRC Services",
            description: "Design & Development",
            imgUrl: s_image_7,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <h2>Services</h2>
                <p>We do awesome services for our clients</p>
                <p>Defend what matters most, because data breaches are not an option</p>
                {/*<Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Services</h2>
                                    <p>We do awesome services for our clients</p>
                                    <p>Defend what matters most, because data breaches are not an option</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                    <Row style={{gap:'20px',textAlign:'center'}}>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <Cards
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>*/}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Row style={{ gap: '20px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }} className="service-card-row">
                        {
                            projects.map((project, index) => {
                                return (
                                    <Cards
                                        key={index}
                                        {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </div>



            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
