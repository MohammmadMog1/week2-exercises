
## The difference between let and var.

In [Ex7-letVsVar.js](../Exercises/Ex7-letVsVar.js), two functions demonstrate how `var` and `let` differ in scope when declared in a `for` loop.

### Using `var`

```js
function runVarLoop() {
  for (var count = 0; count < 3; count++) {
    console.log("hello var... " + count);
  }
  console.log("outside the loop", count); // 3
}
```

The loop prints `0`, `1`, and `2`. After the loop finishes, `count` is still accessible inside the function and its value is `3`. This is because `var` is **function-scoped**, not block-scoped: the loop's braces do not limit the variable's scope.

However, `count` is not defined outside `runVarLoop`, because its scope is limited to that function. Uncommenting the `console.log` outside the function causes a `ReferenceError`.

### Using `let`

```js
function runLetLoop() {
  for (let index = 0; index < 3; index++) {
    console.log("hello let... " + index);
  }
  // console.log("outside the loop", index);
}
```

The loop also prints `0`, `1`, and `2`. But `index` is declared with `let`, which is **block-scoped**. The loop body is a block delimited by `{}`; therefore, `index` cannot be accessed after the loop. Uncommenting the `console.log` inside the function causes a `ReferenceError`.

### Summary

| Property | `var` | `let` |
|---|---|---|
| Scope in a `for` loop | Function scope | Loop block scope |
| Accessible after the loop, inside the function | Yes; `count` is `3` | No; causes a `ReferenceError` |
| Accessible outside the function | No, in this example | No, in this example |

Both functions iterate through `0`, `1`, and `2`; their scope rules determine whether the loop variable remains accessible afterward. `let` is generally preferred when a variable is only needed within the loop, because it avoids keeping the variable accessible in a wider scope than necessary.
