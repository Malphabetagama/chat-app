import React from 'react';
import { Button, Drawer, Icon } from 'rsuite';
import { useModalState } from '../../misc/custom.hooks';

const DashboardToggle = () => {

const { isOpen, open, close } = useModalState(  )

    return (
        <>
          <Button block color="blue">
            <Icon icon="dashboard" /> Dashboard  
          </Button> 
          <Drawer show={isOpen} onHide={close} placement="left">

          </Drawer> 
        </>
    );
};

export default DashboardToggle;
