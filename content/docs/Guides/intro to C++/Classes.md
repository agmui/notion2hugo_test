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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q5TRRWL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDimUZb9x0mjep6Mk3zzpaODT01XZfTl438SFjh%2FtzhAIhAO3iPW8Ldpk%2FUPwmF%2Bvh%2BQRp8T8tQ1ytJJUWwm2eEDizKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySbOl11O%2BcoZ3TNUwq3AOOtmxRsy2Gk94ZfubfpE6%2B5wz6LsoZiK6DnEmitdfZY3jbDsYSRQruAvZe4ozb7C1PCOQSOJYzO3Bn%2BdzW3LByW6X2bbEpPFyj3udZgQ4fwp86QA8eI4nE80XzEHcAWnWlC%2FMyPfI637uDnGF%2BC1SsoY2Hs1zeyvT4btGbKpl2dmybQrf6VZeprgAkN%2Fm5jDCb0v4KPjzof4BTu0nqqm8RNKYCBMgkSZCrWdx%2FTDgWcDNyA1p8K7n3JzuNk1Lux40hRtNHkolZ9DK2vrP%2Botsn9nIBPNNZOyLGhkWVLhEJFrk89D%2BOleDedElFWGAvsfCaqzhCWMMoQvzzpIrEIECPytx6tN6uIfPjauAiaeGUpSBrlM47l0Vo2HdPT%2Bo6k%2BNDEkF8ZKUjTBcWcl5kpvkIRsmRS%2B48K7bHpoq7fdAo7h5O77EsthdZXmO4qiPGAPcSHx8ffczRyE1LcTyajV9a4mF%2BrPMajALsrWky%2B5QTvhoTfpZQVKZGhMgOMN4FLv%2F3vjAgyoREPdFWmJ4EOKLilBH4fO%2B6%2BXj505FLZng3dUe42sO4wbxUbUIYSIjQuxlh9y9NQfNeEvmOw1C%2BnNDn7dmWrIkMSRySewRreXTgSTot6nQxabNsR1zJfDC1sd29BjqkAYPffdPXsQZxBM1zT%2F5IeP51uerSU%2B54fMlUFxAZUhSz6KSFxia2ZpXm9Hkl2rBVeX8E4ecfEbaUZ94ZYd3SA5s0lCum7gfdA5RhpY7ox1zRXZpjHYEcMZergOgyJaMP72shb4T2lk80Dg1cJmHFVNqZX7SM9HGToLIYWNUkhvDtcJtxTDQJHP7Yg6n6%2BY%2BQkpC7hW3DmNhkkXCJ5MamcXSNnR4Y&X-Amz-Signature=fa47c8da25a67fe529112ae1b50131c2f46620e288af5b6dfb5c484969643b49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
