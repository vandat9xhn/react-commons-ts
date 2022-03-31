// ---------- REF
export type UseRefType<T> = React.MutableRefObject<T>;
export type RefElmType<T> = UseRefType<null | T>;

// ----------- MOUSE TOUCH
export type MouseTouchEventType = MouseEvent | TouchEvent;
export type MouseTouchFuncType = (e: MouseTouchEventType) => void;

export type ReactMouseTouchEventType<T = Element> =
    | React.MouseEvent<T>
    | React.TouchEvent<T>;
export type ReactMouseTouchFuncType = <T = Element>(
    e: ReactMouseTouchEventType<T>
) => void;

// ------------ OBJECT

// Common
export type CommonObj = {
    [x: string]: any;
};

// DYNAMIC OBJ
// When {} keys = never; string | number | ... constraint on CommonObj
export type EmptyObj<T> = keyof T extends never ? {} : CommonObj;
export type DynamicObj<Obj> = Obj extends CommonObj ? Obj : EmptyObj<Obj>;
// Example:
// function handleFunc<Obj>(obj: DynamicObj<Obj> = {} as DynamicObj<Obj>) {
//     return obj;
// }
// const x = handleFunc({ name: 'A' });
// x.name;

// ---------
