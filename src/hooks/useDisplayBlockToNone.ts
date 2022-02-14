import { useRef, useState } from 'react';

//
interface useDisplayBlockToNoneProps {
    trans_time?: number;
    initial_display_none?: boolean;
}

//
export function useDisplayBlockToNone({
    trans_time = 250,
    initial_display_none = true
}: useDisplayBlockToNoneProps) {
    //
    const [opacity_0, setOpacity0] = useState(initial_display_none);
    const [display_none, setDisplayNone] = useState(initial_display_none);

    const ref_interval_to_none = useRef<null | NodeJS.Timeout>(null);
    const ref_interval_to_block = useRef<null | NodeJS.Timeout>(null);

    // -----

    //
    function changeBlockToNone() {
        setOpacity0(true);

        ref_interval_to_none.current = setTimeout(() => {
            setDisplayNone(true);
        }, trans_time);
    }

    //
    function changeNoneToBlock() {
        setDisplayNone(false);

        ref_interval_to_block.current = setTimeout(() => {
            setOpacity0(false);
        }, 0);
        //
    }

    function toggleBlockNone() {
        if (ref_interval_to_none.current) {
            clearTimeout(ref_interval_to_none.current);
            ref_interval_to_none.current = null;
            changeNoneToBlock();

            return;
        }

        if (ref_interval_to_block.current) {
            clearTimeout(ref_interval_to_block.current);
            ref_interval_to_block.current = null;
            changeBlockToNone();

            return;
        }

        if (opacity_0) {
            changeNoneToBlock();
        } else {
            changeBlockToNone();
        }
    }

    // ----

    return {
        opacity_0,
        display_none,

        changeNoneToBlock,
        changeBlockToNone,
        toggleBlockNone
    };
}
