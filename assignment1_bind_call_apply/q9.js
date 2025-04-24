let obj = { name: "Alice", hobbies: ["reading", "traveling"] };

function deepClone(obj) {
   return JSON.parse(JSON.stringify(obj));
}

const newObj = deepClone(obj)
newObj.hobbies.push("coding");

console.log("Old : " , obj);
console.log("New : " , newObj)