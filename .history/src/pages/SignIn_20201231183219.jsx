import React from 'react';
import { Container, Grid, Row, Panel, Col } from 'rsuite';

const SignIn = () => {
    return (      
        <Container>
            <Grid>
                <Row>
                    <Col xs={24} md={12} mdOffset={6}>
                        <Panel>
                            <div className="text-center">
                                <h2> Welcome To Chat </h2>
                                <p>Progressive chat platform for neophytes</p>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </Container>   
    );
};

export default SignIn;
