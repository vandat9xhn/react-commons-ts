//
export function unitNumber({ num = 0, unit_arr = ['K', 'M', 'B'] }) {
    if (num >= 1000000000) {
        return `${Math.floor(num / 100000000) / 10}${unit_arr[2]}`;
    }

    if (num >= 1000000) {
        return `${Math.floor(num / 100000) / 10}${unit_arr[1]}`;
    }

    if (num >= 1000) {
        return `${Math.floor(num / 100) / 10}${unit_arr[0]}`;
    }

    return num;
}
