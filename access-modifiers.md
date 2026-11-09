# Access Modifiers in TypeScript OOP - Public, Private, Protected, and Readonly

## Introduction

In TypeScript, access modifiers are an important part of Object-Oriented Programming (OOP). They control how we can access and modify the properties and methods of a class. TypeScript provides three main access modifiers: `public`, `private`, and `protected`. It also provides `readonly`, which helps us to make sure that a property's value does not change.

## Understanding Access Modifiers

The `public` modifier allows us to access and modify a property from anywhere, including inside the class, its child classes, and outside the class. It is also the default access modifier in TypeScript.

The `private` modifier allows us to access a property only inside the class where it is declared. We cannot directly access or modify it from outside the class or inside from its child classes.

The `protected` modifier allows us to access and modify a property inside its own class and its child classes through inheritance. but we cannot access it directly from outside the class.

Let's look at an example:

```ts
class Person {
  public name: string = "Mohi";
  private id: number = 101;
  protected age: number = 25;
  readonly country: string = "Bangladesh";
}

class Student extends Person {
  showDetails(): string {
    return `${this.name}, ${this.age}`;
  }
}

const student = new Student();

student.name = "Mahmud";
console.log(student.name);
console.log(student.country);
```

Here, we can access and modify `name` from outside the class, but  `id` is accessible only inside the `Person` class, while `age` can also be accessed inside the `Student` child class.

The `readonly` modifier is useful when we have data that should not be reassigned or changes after initialization. We can read it from different places, but we cannot change its assigned value.

We can also combine modifiers, such as `private readonly`, when we want a property to be private and non-reassignable.

## Conclusion

Typescript access modifiers help us control how class properties and methods are accessed and modified. We use `public` for general access, `private` for class-only access, and `protected` when child classes also need access. We use `readonly` when a property should not be reassigned. Choosing the right modifier helps us write organized and maintainable code.