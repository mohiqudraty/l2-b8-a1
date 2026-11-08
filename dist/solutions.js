function multiplyValue(value, multiplier) {
    if (multiplier !== undefined)
        return value * multiplier;
    return value * 2;
}
function processInput(value) {
    if (typeof value === "string")
        return value.trim().toLowerCase();
    if (typeof value === "number")
        return value * 10;
    return value ? "Active" : "Inactive";
}
function formatCoordinate([latitude, longitude, locationName]) {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
function concatenateArrays(...arrays) {
    let newArr = [];
    for (const array of arrays) {
        newArr.push(...array);
    }
    return newArr;
}
function getPopularCourses(courses, minStudents) {
    const newArray = courses.filter((course) => course.isPublished && course.students >= minStudents);
    return newArray;
}
function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
        else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    });
}
export {};
//# sourceMappingURL=solutions.js.map