# Type 'string[]' is not assignable to type 'string'

This TypeScript code demonstrates a common type error where an array of strings is passed to a function expecting a single string.

The `greeter` function expects a single string argument. However, the `user` variable is an array of strings.  Attempting to pass `user` to `greeter` results in a type error.

The solution involves either modifying the `greeter` function to accept an array or changing how the `user` variable is handled to provide a single string.