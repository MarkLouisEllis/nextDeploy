import React from 'react';
//import picture from'/me.jpg';
import Layout from '../components/Layout'

//I have used both the card an button components from bootstrap

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//object created taht stores information of the user. Myself in this case

const user = {"name": "Mark", "surname":"Ellis","country":"Cape Town,South Africa", "email":"oemtie@gmail.com", "tel":"083-297-0578"
              ,"profile_pic":"me.jpg ","interests":["Running","Cycling","Music"]};

//stateless component which returns the card element. 
function Profile(props){
    return(
        
        <Layout>
        <div>
            <Card  bg="secondary" border="secondary" style={{ width: '25rem' }}>
                <Card.Img id="image"variant="top" src='/me.jpg' />
                <Card.Body>
                    <Card.Title>{user.name} {user.surname}</Card.Title>
                        <Card.Text>
                        
                                <ul id="profileList"> 
                                <li>{user.country}</li>
                                <li>{user.email}</li>
                                <li>Cell: {user.tel}</li>
                                <li><a href='https://www.linkedin.com/in/mark-ellis-aa4821141/' target='blank'>Linkedin profile</a></li>
                                </ul>
                        </Card.Text>
                <a href="mailto: oemtie@gmail.com"><Button variant="secodary">E-mail me</Button></a>
                </Card.Body>
            </Card>

      <style jsx>{`
            div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
        </div>
      </Layout>
    )
}
export default Profile;