### Let

`let` allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.

This is unlike the `var` keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

```js
var global = true;
let blockScoped = true;
```


+ Run the `varTest` function and look in the console.
@test('1/01/01')
@hint('Click "SAVE". ⌘ + S on Mac, ctrl + S on Windows')
@action(open('let.js'))
@action(set(
```
// call `varTest()`
function varTest() {
	var x = 1;
	if (true) {
		var x = 2;
		console.log(x);
	}
	console.log(x);
}
varTest();


```  
))

+ Change `var` to `let` and run the `letTest` function. Don't forget to look in the console.
@test('1/01/02')
@action(insert(
```

// use `let` and call `letTest()`
function letTest() {
	var x = 3;
	if (true) {
		var x = 4;
		console.log(x);
	}
	console.log(x);
}
letTest();


```  
))

+ fix the broken loop to log numbers 1 to 5
@test('1/01/03')
@action(insert(
```

// log numbers from 1 to 5
for (var i = 1; i <= 5 ; i++ ) {
  setTimeout(function() {
    console.log(i);
  })
}
// 6 6 6 6 6

```
))

@onPageComplete('Great! Now you that you have an idea of how `let` works, continue to look at declaring variables with `const`.')
