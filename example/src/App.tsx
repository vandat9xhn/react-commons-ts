import React from 'react';

import { unitNumber } from 'react-commons-ts';

//
const App = () => {
    return (
        <div>
            <div>{unitNumber({ num: 1500 })}</div>
        </div>
    );
};

export default App;
