## Const

`const` is block-scoped, much like `let` statement.

However, the value of a constant cannot change through re-assignment, and it can't be redeclared.

```js
const name = 'Shawn';
name = 'Ben'; // Uncaught TypeError
console.log(name); // Shawn
```

*Note: Atom uses an older version of Chrome that does not fully implement const yet. Const will work in Atom after a few months.*

+ Declare "person" as a `const`
@test('1/02/01')
@action(open('const.js'))
@action(set(
```
/*
Note: Atom uses an older version of Chrome (47) that does not fully implement `const` yet.

`const` will work in a later version of chrome, so these tests are currently skipped.
*/

// change password into a const so that it
// cannot be redeclared
var password = 'PASS';
password = '1234';


```  
))

+ Declare "person" as a constant. Check the log to see what will happen.
@test('1/02/02')
@action(insert(
```

// declare person as a const
// cannot be redeclared
var person = {
  name: 'Shawn',
  city: 'Vancouver'
};

person = {
  name: 'Unknown',
  city: 'Las Vegas'
};

person.favoriteColor = 'blue';

// what will the output be?
console.log(person);


```  
))

+ Declare "people" as a constant. Check the log again.
@test('1/02/03')
@action(insert(
```

// declare people as a const

var people = ['Mandi', 'Mack', 'Ben'];

people = [];

people.push('Shawn');

// what will the output be?
console.log(people);

```
))
