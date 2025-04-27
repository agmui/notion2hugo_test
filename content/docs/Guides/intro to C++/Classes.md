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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FXMMHL5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5jOng%2F9Pm8x7kW1E01d%2FJAHr0nbYLw05H9SZTuu%2FGBAiB%2BSCKw6xC2wbdoF1RVOxL9bIOVSFtubNMhNyE7T9Ja1ir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM4Qa0Bcsn%2BV%2FUM67FKtwDaQIQqm55BRY4YJZkZtljeszedUEJZ%2FGinjAFRVRlCssJ%2BIE%2BttNP1Qf%2Bghu9vwiLguLQcnz5KgfPreGqohQ9Q4DZ1FYZeeo3oJIzKOmh0X%2FDG%2BUIbYsvrr7KiuE1itRq0oDCW7gBrbcjDMOIfWKASWAiTwWTUt0N6srbocWnEB1zyxI0G0JVsiHWNVmsOeNJk8OJKw%2B4jK5Yt%2FCxma%2BZckkk5yaZS3b30nYyFgHbTDXMiROrehz34TdMu%2BpFOpxhZjqZ8hg3XiMjPOm%2FBgE7H1EcSlPALQ%2B6fonPx%2BO%2BU7B3a6N2n0kUr4b%2B1HKd6gCgOgofBnb4%2BtekRsI%2BMZqDvRhb7i%2FCdjPZEekjSG6%2Fet461NSAC3WlJ5ckjDksrXOkxbdb2%2B0X0kOOPfuPUeRrAB3jsqH0ermcu3owUCzewJ7YkugHoyBk%2FE%2FYyekDQjhpgKJDHpiWTDyI%2FO7mgGymSZgj%2BvhsM75Bqbwe8wJHP8smxQt80HYF7h%2F%2FVr8ej9NqV6zOptU%2B%2FDZ%2FgCWsFGnZ%2BLWBTFdTAI9CJUso68SgwvBPwlwrc3y%2FcsjrEZ5RjMdXtuAstKMKTIwN9BN8a3EneNZoSGfiQYvKpvtLLsjS5wRXnrhLhfA6l0nyVE8wq7%2B1wAY6pgGDm8v3Bitql2c9A1TQapn5Ufc9EqtrEUrP7zsAqVdp%2BTNBHVNzQwrYwCR5jU1%2BfX76pk0BGimKwpM%2FZu7A%2FcyfWcxGxnFWYnFgZiUlZv8Mvse6BSPTfImd4ZmW%2FQEZlzxQblaDxsFrDVGOpqNH24reP%2BlcpnK64AxQS%2BpMWRowfdzd2MwmUE8UFmmigj23VAGvfOw6d3z5RJoAjKXOxaz9MW4syh0X&X-Amz-Signature=68a4be39e23f97068627efe09fcabb3e2a84da49e329b967d52aaa57a9135492&X-Amz-SignedHeaders=host&x-id=GetObject)

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
