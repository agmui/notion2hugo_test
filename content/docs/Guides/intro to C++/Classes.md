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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D7NQFAB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5FRhrzJ4lbCDgCslFw4bK40P3fIMQXd1g2FIX35ZP8wIgSwlrQhEHcriii7Eb13x%2FJ1K8vzHj95vY%2Bo%2B5YYBQ9C4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMIIJADe8UzDZR19CrcAzk%2FCzKeR0aoc0LzneFvaqr65gXsFXG3sav9ikOIQfioEHn1HKw4ZNe%2BIH4oR5b7bgcZNjDKCHAEuVtv4o88VcamuyAdS1K0v95XtrdVU9d2zyHh4ffBdWNCbEKcpx%2FC2D%2FrrsGoiH0yj3fLbEhpmuK65Z2%2FakWYYQOov6v6QAbW2SLOzq1iCNx8t%2BJmHl%2BjhgFluta%2BFKj%2BiRPZQEkFSsM9fnmr5eXnuDq1JQiuSPYff8JYXELAiZrmqpZQvp0JjjzSrga1hQ1zjN4FpLqBM7Fj5r5H5Js7UlmwmaFh52EPbiB6LTBXbF6wKUx%2BCYocHQq0UDpSjv22WDHU4e%2Fh2Zk0ec2CGol2W8V5%2BfpkSo0ZkwITSC6F1CgV8JxDIeXHcKxeUmcr18gpF8GJ%2FJ8Z8TzA3h1uSz%2Fukoj5wqcGX%2F29WmLwWogSKOvf23UYjOdnk%2FP%2BC6ju4Pj2DdaC%2Fk3vRS%2F0zpgbbUTCoAXfA5Av17NsKJTrL8tK75DOzn7YMXuaxicRdrEi9JEaRDggl86ovvyNlfrTxnYsX1025HKOF4apT7k6Cvtcsv%2BG348JzDv8o7UD4aN0EJnK6PSdWGDNldDJSQC75qt1WYIbhfMROQ%2F3OkdUPeCzi6N%2BfM%2FqMPSPtcEGOqUB0siuEv2HObe%2Fhj5VpDIEwlZuqpbP07OYpbXvZnIF8a4GPLEIyK8YGzGB6gsFjROaGZKqJoCv3r1ZDND6Yj9BezzGSD8oBRLHT%2FAdXovuFtqCxsPD3K7sSz3sCQ0qfSAAJtdmnc5obEEIgBx9g3crxxFBph7QxJ0tDeVRfKhaOIRHaEuRR35oaEK6Jzh5yJ4z2ikpbR0fmRZ%2B%2BT%2FA%2F%2B2mhJYdJqZJ&X-Amz-Signature=ee8db7ee19a5c10b0366dc56ed76de1cb75a57a2bc364eca3fe925411ad69c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
