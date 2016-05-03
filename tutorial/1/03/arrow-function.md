## Arrow Functions

An arrow function (`=>`) expression has a shorter syntax compared to function expressions and lexically binds the `this` value.

Arrow functions are always anonymous.

```js
// multi-line
const add = (x, y) => {
	return x + y;
};
// single line, auto returns
const subtractOne = x => x - 1;
const getOne = () => 1;
```


+ Change the "greet" function to use an `=>` function
@test('1/03/01')
@action(open('arrow-function.js'))
@action(set(
```
// use =>
const greet = function (name) {
	return 'hello ' + name;
}


```  
))

+ Change the "getName" function to use an `=>` function without using the keyword `return`
@test('1/03/02')
@action(insert(
```

// use => no return statement
const getName = function getName() {
	return 'Joe';
}


```
))

+ Fix the broken clock by using arrow functions.
@test('1/03/03')
@action(insert(
```

// fix the clock
// http://codepen.io/redacademy/pen/mPjXVW

```
))


@onPageComplete('Great! Now you should have a good idea how to use `=>` functions, and how arrow functions solve the confusion over `this`')
