export class Brow {

    static fetch() {

        const is = (nav) => {
        return navigator.userAgent.indexOf(nav) !== -1;
        };

        switch (true) {
        case is(['Opera', 'OPR']): return 'Opera';
        case is(['Microsoft Edge']): return 'Microsoft Edge';
        case is(['MSIE', 'Trident/']): return 'Microsoft Internet Explorer';
        case is(['Chrome']): return 'Chrome';
        case is(['Safari']): return 'Safari';
        case is(['Firefox']): return 'Firefox';
        default: return navigator.appName;
        }

    }

    static isMobile() {
        return /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion);
    }
}