import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CSS/VodPortailPage.css'


function VodPortail() {
    return (
        <div className="bg-sitecolor min-vh-100 d-flex align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} className="text-center">
                        <h1 className="text-sitecolor display-4 mb-4">Bienvenue sur notre site de streaming</h1>
                        <p className="text-secondary lead mb-5">Connectez-vous ou créez un compte pour accéder à toutes les fonctionnalités.</p>
                        <div className="d-flex flex-column align-items-center">
                            <Link className='w-100' to="/login">
                                <button className="btn-sitecolor w-100 mb-3 p-4 shadow">Connexion</button>
                            </Link>
                            <Link className='w-100' to="/register">
                                <button className="btn-sitecolor w-100 p-4">Inscription</button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default VodPortail;