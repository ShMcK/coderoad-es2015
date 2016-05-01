### Object Literal

A shorthand for writing objects.

```js
const foo = 'something';
const bar = 'else';

// using object literal shorthand
const fooObj = {
  foo, bar
};
// { foo: 'something', bar: 'else'}
```

+ Rewrite the object in an easier way using object literals
@action(open('object-literal.js'))
@test('2/01/01')
@action(set(
```
// rewrite in a simpler way
function getPersonObj(name, city) {
  return {
    name: name,
    city: city
  };
}
```
))
