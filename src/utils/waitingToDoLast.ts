//
export function waitingToDoLast({
    ref_interval,
    time = 200,
    callback = () => {}
}: {
    ref_interval: { current: NodeJS.Timeout | null };
    time?: number;
    callback?: () => void;
}) {
    ref_interval.current && clearTimeout(ref_interval.current);

    ref_interval.current = setTimeout(() => {
        ref_interval.current && clearTimeout(ref_interval.current);

        callback();
    }, time);
}
