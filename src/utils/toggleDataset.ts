//
export function toggleDataset({
    elm,
    attr_str,
    is_remove
}: {
    elm: HTMLElement;
    attr_str: string;
    is_remove: boolean;
}) {
    const value = parseInt(elm.getAttribute(attr_str) || '0');

    if (!is_remove) {
        elm.setAttribute(attr_str, (value + 1).toString());
    } else {
        if (value <= 1) {
            elm.removeAttribute(attr_str);
        } else {
            elm.setAttribute(attr_str, (value - 1).toString());
        }
    }
}
