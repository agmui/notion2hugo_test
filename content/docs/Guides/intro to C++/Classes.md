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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDMGDTP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIE7bvZjmQaP8LT6%2B%2Fq%2Fp%2BNUD5oN0rjHqVgsUuzpp1VPzAiBOotOioJHLEvvL6JfsTsBvh4IlCHIo%2BCRaxMqPIovqLir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMgFA1gOf2sv5s%2BnmmKtwD%2FKyGitNKYPLNtI%2BCGVGK89nXQqXiMWpEDO4zKsVVJXYv4k%2FzHp6JezYnDGzj9OzPTT%2FhHN3v%2BzvqDII1AWLBISUnEPD0TnE1orU73Ib7hWhEJnbYLLekreyrOR46W9BKNxfg7RUa584rkxzdM2aXCJhpK2sYU%2FOv43euscPs%2FJDP5%2B7oInpjNT9zTtdgGiD9PC030ytkP1pfrMm4SdD0kflElxArsIzigmgxGEiI0v63YphpuVoUT8rsSxUOzBCLnCRBCk2WMTb4QfokfY2WRJIdwQVP%2FfSazUoHCgFimPYg44asF60L9w55s915V2wH%2FJ1CX6Nhal1RZ8kNnyz%2FIsFyuAZWGQISbDTbf5vNrXk64h%2FC2gU5y9QTrxpJ8J6fOK3ZlSBu7b2oz9b44tvzcuu8Qf2CX81X7dWLsgB7rh8EpQVQGJ89R%2Fo%2F8Me5i7fRbgXTc69QDlNjHZFfdtuGxRcV7iK0MAepFYPTENo7gErwzBXw5TP5aVWzTsvt8oVRUeX%2Bi0GbKoqf71zOGccwiNfe52v5hHQjCS7FHKMR26pLSC%2FHe5Wh6wh3PEySESfoq4Jy%2B1pu7hJHxCqvLB47hNDmvNANSkm2dojtVHivrBWO1DgrHcBLi%2BRULZgwuauzvgY6pgGfRMBHuDWltHmFjJYrsUA0dvH9ccNWS0lDcoNssyZF8OLrLC%2FtSVaF4WzJxqnf8QMtqsSQiEYnPm5nkAFc6syCXzPC%2BTEgSuJdRYGSQee1cj7jL3r9y9zs02GJpqm1D77MdsLSlmUuQ%2FFtcgYZIkMy75KIXScw0bV044ssyi7qSnYnqlFgwU1w1DyJLtnOTCzawTqgRgsQtip%2FHJmKtFnFcTkzeYV%2F&X-Amz-Signature=7442ee2fadadf9dd29c2bb2b87c636aefeb526c51fe3e7f164f01180c2d3f39d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
