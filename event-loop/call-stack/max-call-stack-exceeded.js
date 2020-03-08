const add = (a, b) => {
	console.log(a++);
	add(a, b);
};

const double = (a) => add(a,a);

const printDouble = (a) => {
	const c = double(a);
	console.log(c);
};

printDouble(1);

