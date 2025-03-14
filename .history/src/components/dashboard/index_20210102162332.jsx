import React from 'react';
import { Alert, Avatar, Button, Divider, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import { database } from '../../misc/firebase';
import EditableInput from '../EditableInput';
import ProviderBlock from './ProviderBlock';

const Dashboard = ({ onSignOut }) => {
    
    const { profile } = useProfile();

    const onSave = async newData => {
        
        const userNicknameRef = database.ref(`/profiles/${profile.uid}`).child('name');

        try {
            await userNicknameRef.set(newData);

            Alert.success('Nickname has been updated', 4000);

        } catch (err) {
            Alert.error(err.message, 4000);
        }

    };
    
   return ( 
        <>
    
    <Drawer.Header>
        <Drawer.Title>
            Dashboard
        </Drawer.Title>
    </Drawer.Header>
    
    <Drawer.Body>
    <h3>Hey, {profile.name}</h3>
    <ProviderBlock />
    <Divider />
    <EditableInput name="nickname" initialValue={profile.name} onSave={onSave} label={<h6 className="mb-2">Nickname</h6>} />
    <AvatarUploadBtn/>
    </Drawer.Body>

    <Drawer.Footer>
    <Button block color="red" onClick={onSignOut}>
        Sign Out
    </Button>
    </Drawer.Footer>
    </>
    );
};

export default Dashboard;