"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function jpWhen(promises) {
    if (Promise.all) {
        const results = await Promise.all(promises.map(p => p.catch(e => {
            e;
        })));
        return results.filter(f => f);
    }
    else {
        throw "Your Promise implementation doesn't support Promise.all";
    }
}
exports.jpWhen = jpWhen;
//# sourceMappingURL=when.js.map