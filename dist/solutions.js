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
function getPopularCourses(Course, minStudents) {
    // console.log(Course, minStudents);
    const newArray = Course.filter((c) => c.isPublished && c.students >= minStudents);
    return newArray;
}
// Sample Input:
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true },
];
// getPopularCourses(courses, 80);
console.log(getPopularCourses(courses, 80));
function pluckValues(items, key) {
    return items.map(item => item[key]);
}
// Sample Input:
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
console.log(pluckValues(users, "id"));
export {};
//# sourceMappingURL=solutions.js.map