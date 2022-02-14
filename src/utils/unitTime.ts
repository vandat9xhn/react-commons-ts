//
export const DATA_UNIT_LONG_ARR = [
    ' year',
    ' month',
    ' day',
    ' hour',
    ' minute',
    ' second'
];

//
export const DATA_UNIT_SHORT_ARR = [' y', ' mon', ' d', ' h', ' min', ' s'];

export const DATA_UNIT_VN_ARR = [
    ' năm',
    ' tháng',
    ' ngày',
    ' giờ',
    ' phút',
    ' giây'
];

//
export function getTimeAndUnit({
    time_change = 0,
    unit_arr = DATA_UNIT_LONG_ARR
}) {
    //
    if (time_change >= 31536000000) {
        return {
            time: Math.floor(time_change / 31536000000),
            unit: unit_arr[0]
        };
    }

    if (time_change >= 2592000000) {
        return {
            time: Math.floor(time_change / 2592000000),
            unit: unit_arr[1]
        };
    }

    if (time_change >= 86400000) {
        return {
            time: Math.floor(time_change / 86400000),
            unit: unit_arr[2]
        };
    }

    if (time_change >= 3600000) {
        return {
            time: Math.floor(time_change / 3600000),
            unit: unit_arr[3]
        };
    }

    if (time_change >= 60000) {
        return {
            time: Math.floor(time_change / 3600000),
            unit: unit_arr[4]
        };
    }

    return {
        time: Math.floor(time_change / 1000),
        unit: unit_arr[5]
    };
}

//
export function unitTime({ time_change = 0, unit_arr = DATA_UNIT_LONG_ARR }) {
    const unit_and_time = getTimeAndUnit({
        time_change: time_change,
        unit_arr: unit_arr
    });

    return `${unit_and_time.time}${unit_and_time.unit}`;
}

// ---

//
export function unitTimeHasSpecial({
    time_change = 0,
    unit_arr = DATA_UNIT_LONG_ARR,
    detectIsSpecial = () => false,
    getUnitTimeSpecial = () => ''
}) {
    if (detectIsSpecial()) {
        return getUnitTimeSpecial();
    }

    return unitTime({ time_change: time_change, unit_arr: unit_arr });
}

//
export function unitTimeJustNow({
    time_change = 0,
    unit_arr = DATA_UNIT_LONG_ARR
}) {
    unitTimeHasSpecial({
        time_change: time_change,
        unit_arr: unit_arr,
        detectIsSpecial: () => {
            return time_change <= 60;
        },
        getUnitTimeSpecial: () => 'Just now'
    });
}
