---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JASODRP%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDoSKs6LcRVz4gbUtMK%2BuFQeBUUJ8YKWFeMpaf9EUyYtQIgQX3N0cteJQDWWa7nXcRAj%2FDCd8o7djaU9KA2QXsCTCEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHGOH5HRCP4yV5vs3SrcA46HHoxl318BtEwmDtUhwNLKqINfFbISijnAf5WhjVRO3LOimrCgUGDx1N7yNO%2B3Gs%2BT43KLGsae%2BAj2T0eEqEw7jeTxRXilaIx7mwryOU6XTZ%2BSGb5bc2Gdh6dftOlVdwTE%2F4T%2Fj%2B4i6h1TkrUJQSaRBoelauRdJDJNCOsM6aNnXrokUgh9wwn1411u9nTfT5XsWYZOuJfg6vID5jxyNjq6igbbo32MS8a4690AZDSw%2F7JMewavhAhgHNJFUoe8SQpiquu9ljyorPgvsKvDDqzjC3FZE6gdEsYlEB1YA3h8Hoa0ehDWOOF59WSZlUZY7SAsfvNRQNOCO87Dho963GWEFFt5AWpuB%2BQBhy44gt3NM0yncOtKF4EQYfOStOfC6BdMpCb7nFr42ULleZZVgrXUtj3cpiMdqQCJ5apGmqWi9rPX6EY87slw4CS6UYPWrGxezW7rPioFix9TSBCGLtjTdttS4C%2FVI%2FsMfYoxpdpEI9kno8nTD%2F5KKgnKK3T4czg%2FLJLpSN0%2Fil61aEUDBC2bQKvOa645glxGdVVJkitbPA1OQD3xlC0dp4HI7vJhagrpQNM10oShMsfu%2FsSIl6JgacHmgL%2BMz0txwW3%2FPkh2rpLQ%2FrIoW8i3WjrhMLHMt8IGOqUBx2easZ7AJWzY4hnHQL3pOqG8dFb678tmZfqjFuR3NoIj8RwXLfJhVBYQ1CAX3moYfSXHU3UlLVUVY%2F9BYaIiZWtIietls7MT%2ByWeMklOxk3uE7ZXbqmhR%2FxMNLH%2BZBQW86KfOUog8bjD2ozkMHbe0ucDPvDASEiWJypHB%2F2dbZWjhsptB3lhHM9cPcJxJM0WpohjSl7%2BcLQYefWL%2BAF975vqDKyQ&X-Amz-Signature=e1b0b9ac60ec149e214824ea2414e7c9bbbba1f4cf301f0aff9414548f76c234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
