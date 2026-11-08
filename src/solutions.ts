function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier !== undefined) return value * multiplier;

  return value * 2
}

// multiplyValue(10,5)
console.log(multiplyValue(5,5));


function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") return value.trim().toLowerCase()
  if (typeof value === "number") return value * 10;
  return value ? "Active" : "Inactive";
}
// processInput(5)
console.log(processInput(0));



function formatCoordinate([latitude, longitude, locationName]:readonly [
  number,
  number,
  string,
]): string {
  return `Location: ${locationName} (${latitude}, ${longitude})`
}

// formatCoordinate([23.81, 90.41, "Dhaka"]);
console.log(formatCoordinate([22.35, 91.78, "Chittagong"])
);
