import React from 'react';
import Layout from '../components/Layout'

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Projects(props){
    return(

    <Layout>
        <h2>My Projects</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    
                    <th>Project</th>
                    <th>Description</th>
                    <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    
                    <td>iTunes search engine app</td>
                    <td>A basic search engine that allows a user to search the iTunes library and add/remove item to their favourites list</td>
                    <td><a href='https://mark-itunes-app.herokuapp.com' target = 'blank'>iTunes app</a></td>
                    </tr>
                    <tr>
                    
                    <td>Minesweeper app</td>
                    <td>Basic minesweeper game using create-react-app</td>
                    <td><a href= 'https://marktask12.herokuapp.com/' target='blank'>Minesweeper app</a></td>
                    </tr>
                </tbody>
            </Table>

        <style jsx>{`
            h2{
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
        
    </Layout>
    )
}

export default Projects;
