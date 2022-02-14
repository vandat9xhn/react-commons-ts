//
export function formatNum(num = 0) {
    return new Intl.NumberFormat('en').format(num);
}
