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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TV4WIB5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxG86hrYNyz6ZbN3q4VJDdwoZg%2FoX3up%2Fmzrymh1I1VAiBcF%2FZjDiq0aXvuQSh0GqjVkBxjmRxpa%2FEHJwFb8fecSyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM2TYClFC66tzwpFKbKtwDGMBP42l7zv4UxDf9B4kN7zJ41tdImxDG5wlfJNIaPb1Pb%2By5MuZ0LL2DuJiC0K0Rmb0SIfgdxlchRzG7506LoodjW6rQPyoe1zdZzeS4YlcuHzwiFWmoSVv%2FEtsgaAGX0r88iGqfVXOBlr%2FVJjqxjVEkJP%2FcCl5CBIDCkfnyFeP7e80ZdOhS1P8tCtkpDEl06O1Z%2BNmr61FFI%2BjQzpLLiu9jrb0BAWZWK2X7YgP5hpZDmUzvxKU99YI8WDVh0RV7E96mha7EWqo4O6ced6IClW74CuVTgFTnXsBJ2w9QqIu%2F9Cl1Ltz7H%2Bi3%2BXhtBA40JhN1XD0tXcgjiDCb4LhvIGx0IlxJFIOKc4g%2FLMDDTjkV6uDPgvzFvr0kitgdLhyvkXhZRkdwauXVjbplOgRQ4RipCTQpm9tMoyi0EshpTJT%2FQrSwgT6zBRcbr57jROKUt6ocmsvuWedofnca3basJ5LMeXdLWDjS2Z%2FCv2IuTMjzLbK6gloN4BFwYzpvKOwolvdo6JlROzFfRsPoIARco9jT%2BuPRxO2LNjal14sr%2BATDmkvb0RtHoqo1UxgG0FMLLvS5JMBOd5Yz8NXehqovYEeskivO6cGrZMfgUzRrGgqYU9Bxx5FBu83bovYw353dvgY6pgH8IFu20IJZr1KullP6QMcGG0GzIhskCc4ZSKS9qmz8%2B064YReS403%2Fiqmkm%2BmYfp3jO2tJL2jImBCpLLepY%2FAmxh4GwOcUXVEO44b7g1BqllezfSMtK2SDTDj4KJGc%2Bok3IW1AJ4P425NoLPe7wVeTeX1hpKw4KwZGALBJtI4XpxfBQBIsql2YyNL%2BPrPI1Fu3J9SzogfxNAPPSEHxhSm0tH1MPMd9&X-Amz-Signature=a4e3db88c5aaa6820a43efe893f7a9f34ccd586b9e7142e9375c7374217724b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
