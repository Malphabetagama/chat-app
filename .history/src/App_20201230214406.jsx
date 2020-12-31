import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';

function App() {
    return <Switch>
        <Route><SignIn /></Route>
    </Switch>;      
}

export default App;         