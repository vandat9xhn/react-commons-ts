import { useRef } from 'react';
//
import { MouseTouchEventType, ReactMouseTouchEventType } from '../types/_common';

// -----

//
interface useMouseDownToWindowUpProps {
    handleDown?: <ElmType>(e: ReactMouseTouchEventType<ElmType>) => void;
    handleMove?: (e: MouseTouchEventType) => void;
    handleEnd?: (e: MouseTouchEventType) => void;

    detectEndTouch?: (e: TouchEvent) => boolean;
    detectStartTouch?: (e: TouchEvent) => boolean;
}

// ----

//
function detectNoTouch(e: TouchEvent) {
    return e.touches.length == 0;
}

//
function detectHasTouch(e: TouchEvent) {
    return e.touches.length > 0;
}

// -----

//
export function useMouseDownToWindowUp({
    handleDown = () => {},
    handleMove = () => {},
    handleEnd = () => {},

    detectEndTouch = detectNoTouch,
    detectStartTouch = detectHasTouch
}: useMouseDownToWindowUpProps) {
    //
    const ref_func_move = useRef<null | ((e: MouseTouchEventType) => void)>(
        null
    );
    const ref_func_up = useRef<null | ((e: MouseTouchEventType) => void)>(null);

    // ------

    //
    function onDown<ElmType>(e: ReactMouseTouchEventType<ElmType>) {
        handleDown(e);

        if (!ref_func_move.current) {
            ref_func_move.current = onMove;
        }
        if (!ref_func_up.current) {
            ref_func_up.current = onUp;
        }

        if (e instanceof TouchEvent) {
            if (detectStartTouch(e)) {
                window.addEventListener('touchmove', ref_func_move.current);
                window.addEventListener('touchend', ref_func_up.current);
            }
        } else {
            window.addEventListener('mousemove', ref_func_move.current);
            window.addEventListener('mouseup', ref_func_up.current);
        }
    }

    //
    function onMove(e: MouseTouchEventType) {
        handleMove(e);
    }

    //
    function onUp(e: MouseTouchEventType) {
        handleEnd(e);

        if (e instanceof TouchEvent) {
            if (detectEndTouch(e)) {
                ref_func_move.current &&
                    window.removeEventListener(
                        'touchmove',
                        ref_func_move.current
                    );
                ref_func_up.current &&
                    window.removeEventListener('touchend', ref_func_up.current);
            }
        } else {
            ref_func_move.current &&
                window.removeEventListener('mousemove', ref_func_move.current);
            ref_func_up.current &&
                window.removeEventListener('mouseup', ref_func_up.current);
        }

        ref_func_move.current = null;
        ref_func_up.current = null;
    }

    //
    return {
        onDown
    };
}
