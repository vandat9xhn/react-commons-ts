// REF
export type UseRefType<T> = React.MutableRefObject<T>;
export type RefElmType<T> = UseRefType<null | T>;

// MOUSE
export type MouseTouchEventType = MouseEvent | TouchEvent;
export type ReactMouseTouchEventType<T> =
    | React.MouseEvent<T>
    | React.TouchEvent<T>;

export type MouseFuncType = (e: MouseTouchEventType) => void;
export type ReactMouseFuncType<T> = (e: ReactMouseTouchEventType<T>) => void;
