const add = (a, b) => a + x;

const double = (a) => add(a,a);

const printDouble = (a) => {
	const c = double(a);
	console.log(c);
};

printDouble(9);

