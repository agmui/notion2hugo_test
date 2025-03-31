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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYAM5BZ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIDTFOvOqnrl%2FQ7OrLFvVX4QLXJDuX7z4k5zlPWUV9ei%2FAiEArQSlr%2FgU6HuwHDkA6G45sT8xwzhWVd8mrts1LxbfGGMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdicDEvDfl01GseoyrcAwKIfSGXWGhn7goEiqaAI6KKSY1k5nbytQmKUkg9djP3Ia%2Fa5JVso6rbHDyzqyC2yuy%2BmIIT0eVNdLFRbFT5fuOkg5VSEuoRbulTRI2n6CJuEzuxeAy7zrKKH0FQHlCYRGc5u8kUXMOksmifbpIHmfvLg0xP3Ajf8%2BCdwY2h25lA1%2B5QhB4IisnuLlr06G%2FMbXwUY9673AJJTykXNPQJ0qjY5TiqLmE56V8s9O1wujwj8hX9KRoMny5QM3IdavSf%2BcIklJTUVkeLKXnDAFQe%2F7%2B3PTBk%2FraIgKbNqVZ9NJtmRwUMtQb50ozo0boHoiHLk124mB30CBziWH6JaZa4xxF%2FPgvct0vMC9QxlJxhjenR%2FNcydCxtpFNtZ0KWJyZI4jEiReXZe6k4HJa5IEzVDQHz7DQRwDOrszh7%2F%2FXzIQ1gUfnsan4qU2M%2BduyFBT%2B0DChYoJGBjyrID9p3pnRR7tFHIJFTxwqvVxZ4iOXMPiesRiZn8frleXX0%2FLYnXk%2F5Jh%2BTjuodU5ZN8rUrJ7faeEfBCj0KFtTvBBHDfCsMD3UOTp5DqOutF%2FBCVp1voP%2BDe6J4Q3o85IyrBpMUKgdNh%2B3rLMxdJw65i%2Bf1o1s265L2LEjQ5X4OxSQSRS7YMLSUqL8GOqUBNrNmCcahL%2FIebtG4kfNLkdOb6nibyaoDdnIO7%2Bf16XaWOR3jvF5OuCVKGAEhDjgM7KelhV8dTKJxo6P6kYMz7GhgU54pPQv8ozdB9BtzjjfQQ%2B%2BWq5UpGbaFYQa53foZeCyLzWW2nuzN2SyruTMB8UJkPdOB0iZtsWN3%2Ba7j6DZtm0wGU%2BY7JcaTnV6J9hPNytG0PK1wE99EJTAODL04mXCCDYGL&X-Amz-Signature=cd6234ae34f890554b976f8f273444549a31dbc821ed23b4460915e51fa76e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
