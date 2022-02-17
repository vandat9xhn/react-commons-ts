import { useEffect } from 'react';
//
import { toggleDataset } from '../utils/toggleDataset';

//
export function useToggleDataset({
    elm,
    attr_str,
    is_remove
}: Parameters<typeof toggleDataset>[0]) {
    //
    useEffect(() => {
        toggleDataset({ elm: elm, attr_str: attr_str, is_remove: is_remove });

        return () => {
            toggleDataset({ elm: elm, attr_str: attr_str, is_remove: true });
        };
    }, [is_remove]);
}
