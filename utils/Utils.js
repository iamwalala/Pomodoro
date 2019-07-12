
export function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

export function TimeFormat(seconds) {
    return FormatNumberLength(parseInt(seconds/60), 2) + ':' + FormatNumberLength(parseInt(seconds%60), 2)
}
