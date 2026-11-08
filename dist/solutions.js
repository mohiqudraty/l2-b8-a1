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
console.log(processInput(true));
function formatCoordinate([latitude, longitude, locationName]) {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
// formatCoordinate([23.81, 90.41, "Dhaka"]);
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
function concatenateArrays(...arrays) {
    let newArr = [];
    for (const array of arrays) {
        newArr.push(...array);
    }
    return newArr;
}
// concatenateArrays([1, 2], [3, 4], [5]);
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
export {};
//# sourceMappingURL=solutions.js.map