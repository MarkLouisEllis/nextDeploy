import React from 'react';
import Layout from '../components/Layout'

//a simple component that returns a <p> elemtent with info of myself
function About(props){
    return(
        <Layout>
            <div>
            <h2>About me</h2>
                <p>
                    Most experience gained is in the live performance and music production industry. This allowed for the development of strong
                    interpersonal skills, creative problem solving, efficient time management, the ability to work in teams as well as individual and
                    detailed approach to tasks. The underlying building blocks of these successes lie in the Bachelor of Commerce degree in
                    Management Sciences with extensive exposure to Industrial Psychology and Information Systems Strategic Management. Taking
                    full responsibility for all technical aspects of running a recording studio for the last four years, one of the best skills acquired is
                    the ability to conceive and formulate a well-defined vision for a product/service offering, conceptualising its execution into
                    achievable smaller deliverables and ensuring the client is informed and involved every step of the way. The big-picture creative
                    problem solving capability requires long-term planning, patience and optimism with continuous people contact and logistical
                    management.<br/><br/>
                    Although most of this knowledge has been applied to projects and work in the music industry, I am keen to
                    develop and build on these skills in a more formal work environment with stronger ties to industrial and professional human
                    resource management, business development through the study coordination, analysis and conceptualization of people,
                    processes and technology in an organizational context. I am honest, hard-working and highly ethical person.
                </p>
            </div>

            <style jsx>{`
            h2{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            p{text-shadow: white 5px 0px 10px;}
        `}</style>
        </Layout>
    )
}

export default About;