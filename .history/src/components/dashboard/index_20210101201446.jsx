import React from 'react';
import { Drawer } from 'rsuite';

const Dashboard = () => {
    
    const { profile }
    
    return <>
    
    <Drawer.Header>
        <Drawer.Title>

        </Drawer.Title>
    </Drawer.Header>
    
    <Drawer.Body>
    <h3>Hey, {profile.name}</h3>
    </Drawer.Body>

    <Drawer.Footer>

    </Drawer.Footer>

    </>;
};

export default Dashboard;