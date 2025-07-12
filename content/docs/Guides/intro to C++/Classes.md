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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TUZHOY4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbyLvDUrZs2eoPCyJDQYo0Ji9sSrKWtHBxfz5K82cMTAiEAgI94yMKBesEeJYzIQK1SwGC2GCooQ3xhCnzbNeMV7WYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOLgy3MTVJiC7UeuSrcAxkMTQ8ihCmnbeXuhkbITQI26euwl4uHLnH4zlW3q79rzW42LviSYa0oLBYrOSZqWSzBfypKlVJ7h8UFGDxH6yXaBlDvKKzcuQKjIYXUcsw5hFEluRDsYBWqEZ2ePcfXyJhkuv7nHZKE2IDE2wPCF%2FIyEfDFMOCJTLp2PgZcIixUzF0VxdCFfVsd0qrT3Q6UB9XC20Ra2hOFNd5OJJdv18atAwO98ZL%2F5fM%2BPjEx6JGM2ltWjS0uefpH8inCDcDg8MUlgBkBJVAuzg1F7kUYvleorLpE7QmgPnssUtMJuaPkBwUbLmQJKkj%2Bxz7UHIGqoi0TxO882SeN%2B7AmUeDhWhXztkGVBzcwAAupc%2FRFRj6tEujqBJK2Tr%2BVYILMQggHjeUTdCokOBUcUmZd2xx%2BkDzc9EMdP186iF2L7nl2zqtf8WheHSPDXzJmh8YYdU8dEqm1EjJis2g8mWvDUbGZ9gQcYt0Zn1gq4%2BYqpl1S1IFkP4RfEckTLKxffsDFZ1wrl4B58%2Bqs%2BM41cEScFQsuWS9TeQkgCv%2ByO97aXRK0nSFNllDizOV0cYuFHdSiwGxb9CNZDq5RF%2Fy5CJ96s2ePaG5HZFmLEce%2F%2FGTYq6MmScnONx3l1ETS2mbjog%2BjMKTLyMMGOqUBwaNyvo1OLhU0mme3eXPJCqEH5SLDjH4jNnIi7QcWZT2gntiPExuUosey4kIEDdC9uE5Zfzv0laMXo1%2BRurO6jxDRVg9NXto9WOXDtOnS6%2F%2F88PGIpichf14tqIaLtRXvWiMYp%2BjuOhqQ9g81vKTZnl0vPmMHjU5WLNtHAiQ76T0q4RY2N705TFRS0mFKxOXuWNG%2BkISlMXRY3%2F5LDAhluFz2DPB9&X-Amz-Signature=fe7c7f2dffbac47eb9d96e98469f19da88ebde495d5e62003f53ea916f1e0265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
