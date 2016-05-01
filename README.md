# ES2015

Practice refactoring with ES2015 features.


## CodeRoad

CodeRoad is an open-sourced interactive tutorial platform for the Atom Editor. Learn more at [CodeRoad.io](http://coderoad.io).


## Setup

* install the tutorial package

    `npm install --save coderoad-es2015`

* install and run the [atom-coderoad](https://github.com/coderoad/atom-coderoad) plugin


## Outline

### Declaring Variables

Using `let` & `const`.

##### Let

`let` allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.

This is unlike the `var` keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

```js
var global = true;
let blockScoped = true;
```

##### Const

`const` is block-scoped, much like `let` statement.

However, the value of a constant cannot change through re-assignment, and it can't be redeclared.

```js
const name = 'Shawn';
name = 'Ben'; // Uncaught TypeError
console.log(name); // Shawn
```

*Note: Atom uses an older version of Chrome that does not fully implement const yet. Const will work in Atom after a few months.*

##### Arrow Functions

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

##### Template Literal

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

Template strings are wrapped in the backtick symbol: '\`'. Variables can be put inside of template strings using `${ name }` syntax.

```js
let single = `string text`;
let multi = `string text line 1
 string text line 2`;

let template = `string text ${expression} string text`;
```
