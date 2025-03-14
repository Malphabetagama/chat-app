import React from 'react';
import { Button, Icon, Tag } from 'rsuite';
import { auth } from '../../misc/firebase';

const ProviderBlock = () => {

    const [isConnected, setIsConnected] = useState({
        'google.com': auth.currentUser.providerData.some(
            data => data.providerId === 'google.com'
        ),
        'facebook.com': auth.currentUser.providerData.some(
            data => data.providerId === 'facebook.com'
        ),
    });

    return (
        <div>
            {isConnected["google.com"] &&
            <Tag color="green" closable>
                <Icon icon="google" /> Connected
            </Tag>
            }
            
            {isConnected["facebook.com"] && (
             <Tag color="blue" closable>
                <Icon icon="facebook" /> Connected
            </Tag>
            )}
           

        <div className="mt-2">

        <Button block color="green">
            <Icon icon="google" /> Link to Google
        </Button>

        <Button block color="blue">
            <Icon icon="facebook" /> Link to Facebook
        </Button>
        </div>


        </div>
    );
};

export default ProviderBlock;
