const slowAdd = (a, b) => {
        setTimeout(() => console.log(a+b), 3000);
};

slowAdd(3, 3);
slowAdd(4, 4);
slowAdd(5, 5);


