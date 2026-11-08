function multiplyValue(value, multiplier) {
    if (multiplier !== undefined)
        return value * multiplier;
    return value * 2;
}
// multiplyValue(10,5)
console.log(multiplyValue(5, 5));
function processInput(value) {
    if (typeof value === "string")
        return value.trim().toLowerCase();
    if (typeof value === "number")
        return value * 10;
    return value ? "Active" : "Inactive";
}
// processInput(5)
console.log(processInput(0));
export {};
//# sourceMappingURL=solutions.js.map