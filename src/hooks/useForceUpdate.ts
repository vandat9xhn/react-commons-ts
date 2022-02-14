import { useState } from 'react';

//
export function useForceUpdate() {
    //
    const [_, setForceUpdate] = useState(false);

    //
    function forceUpdate() {
        setForceUpdate((force_update) => !force_update);
    }

    return forceUpdate;
}
