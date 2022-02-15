// REF
export type UseRefType<T> = React.MutableRefObject<T>;
export type RefElmType<T> = UseRefType<null | T>;

// MOUSE TOUCH
export type MouseTouchEventType = MouseEvent | TouchEvent;
export type MouseTouchFuncType = (e: MouseTouchEventType) => void;

export type ReactMouseTouchEventType<T = Element> =
    | React.MouseEvent<T>
    | React.TouchEvent<T>;
export type ReactMouseTouchFuncType = <T = Element>(
    e: ReactMouseTouchEventType<T>
) => void;
