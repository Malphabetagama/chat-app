import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch, Route } from 'react-router';
import SignIn from './pages/SignIn';

function App() {
    return <Switch>
        <Route>
            <SignIn />
        </Route>
    </Switch>;      
}

export default App;         