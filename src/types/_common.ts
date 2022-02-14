// REF
export type UseRefType<T> = React.MutableRefObject<T>;
export type RefElmType<T> = UseRefType<null | T>;

// MOUSE TOUCH
export type MouseTouchEventType = MouseEvent | TouchEvent;
export type MouseTouchFuncType = (e: MouseTouchEventType) => void;
