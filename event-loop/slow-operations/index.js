const slowAdd = (a, b) => {
	for(let i = 0; i < 999999999; i++) {}
	return a + b;
};

console.time("add");
const a = slowAdd(3, 3);
const b = slowAdd(4, 4);
const c = slowAdd(5, 5);
console.timeEnd("add");

console.log(a);
console.log(b);
console.log(c);
