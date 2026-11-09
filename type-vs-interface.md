# Type Aliases vs Interfaces in TypeScript - Core Differences and When to Use Them?

## Introduction

In TypeScript, both type aliases and interfaces are used to define data structures and describe the shape of data. They help us maintain type safety and write organized code. Although they look similar, they have some important differences.

## Core Differences

The first difference is their syntax. We define a type alias using the `type` keyword, followed by an equal sign (`=`). However, an interface uses the `interface` keyword without an equal sign.

```ts
type TStudent = {
  name: string;
  id: number;
};

interface ITeacher {
  name: string;
  id: number;
}
```

Another important difference is declaration merging. We can declare multiple interfaces with the same name, and TypeScript automatically merges them. On the other hand, declaring multiple type aliases with the same name causes a duplicate identifier error.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

Type aliases are more flexible because they support primitive types, union types, tuples, and intersection types.

```ts
type Status = "active" | "inactive";
```

Interfaces are commonly used for defining object structures and can extend multiple interfaces using the `extends` keyword. Similarly, type aliases can combine multiple types using the intersection (`&`) operator.

## Conclusion

We should use interfaces when defining object structures and when we need declaration merging or interface extension. We should choose type aliases when working with unions, primitives, tuples, or complex type compositions. Both are useful, and the choice depends on our requirements and specific situations.