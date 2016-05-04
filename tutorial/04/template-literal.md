## Template Literal

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

Template strings are wrapped in the backtick symbol: '\`'. Variables can be put inside of template strings using `${ name }` syntax.

```js
let single = `string text`;
let multi = `string text line 1
 string text line 2`;

let template = `string text ${expression} string text`;
```

+ `log` a template literal using `template`. What does it look like?
@action(open('template-literal.js'))
@test('04/01')
@action(set(
```
// change the output to a template literal

function template() {
  console.log('I know what a backtick is');
}
template();


```  
))

+ rewrite `multiline` to use template literals
@test('04/02')
@action(insert(
```

function multiline() {
	console.log('1.\n2.\n3.');
}
multiline();
// 1.
// 2.
// 3.


```
))

+ rewrite `expressions` to use template literals
@test('04/03')
@hint('Use `${expressions}`')
@action(insert(
```

function expression(name) {
  console.log(
    'Hello ' + name +
    ', your bill is ' +
    (2.25 * 1.15).toFixed(2) +
    '.'
  );
}
expression('Joe');

```  
))

@onPageComplete('Great! Now you should have a good idea how to use template literals in your code')
