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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3QFY7BR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEOU30vc5qIaD%2FCt3fJvUdasWeYW0TZsByobmvVEspNpAiAMPO5y87b30b%2FindSovw1EL4bDpW6OB93JiPYEy9u1RyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntKgZO1qAWH4vEtsKtwDdoOCnu5VzoK6qSZ7v%2BjSbeBnoMSEJuJWqzqzRqA6r5X06mJiQhtHVgT6%2BeWMBJs74rAcoNQOrC%2BNz6F4HEr2AVGrAHr9gVeZS9EEc5eIQLbEj7Ba0L7j1tyzmSWJlSuG2qAJVtDpoXhsVs3nIUFvsaP0gnEscDGWa%2BgWjGZFUW4P9V80vYkCwNK7gBteUvlLrb1Uq5manN%2FgI2VG%2FOAWgzwY%2FlOyZGUXM%2BF6HOCY6Lv5rpgb4uxrM7FxH6wIkIZMBCXQkd8Ikha4sZzOFvxIRkdFUlZzD3SAm1ANg1irAT9hfbqxpYGMEjecXW1YEf2Xbx%2Fakwapw4nKa5Fl%2BrKi3gaXo%2F3PVaYEAOzzjqp%2BHEWnqHkOrqrCeeuXhXAPU%2FhylXhdyh2nS%2BEP%2BvX6nX%2BD52jPKIQZegsWNLlU1SAx6IcjsbpV1jmJQhZvyzPL4SMRl6RgyfuWSgg3uU9rALOZ%2FAiVP3fJtTDpyTyiB3Zi3n3dSKIz7uohUejI2crCEsc4SXeuk2il6Vg0GiXz%2F8VUdWvrdZg6w%2FOLQ49Y8trnMBhTAaSaz8fBkv5GSG6BTdP0eJOZc4EAIAB9BBnx7sJEh5%2FCDN3k4%2FJVGtpqh%2FlpyaXQZmF329LNZXa7Mrgwr4advQY6pgEO9ww7Csfr7KRzSTx0Iv1NBlvqAdl65SpNbUGThE1lXqOeWQCKM1QNuFGy8rg4nZ5MWwl%2By0UBVaSkuwAP9FyTtvYxvidHr7OVAP1PxRyCgTr39pbGNFbwf3HVZ%2FnTFII5bI2bDvuxRwyN4tr%2FVUfj67uZvFN7gV65QFFVnjYOXB%2F9QQG2m8dUAGmV3tNzUfHl7sUkkRIGYIHxDZo653Lyp6Hg1s6J&X-Amz-Signature=14259ecd859c8a15795befcd77a4aaa0bb123732d06aa3e158c639beac082c18&X-Amz-SignedHeaders=host&x-id=GetObject)

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
