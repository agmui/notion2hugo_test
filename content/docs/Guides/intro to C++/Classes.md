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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBGMHCVB%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCmeyLOkJjhWDrOLHof0ZDrqjpawkF8pExEF6orKcWtbQIgH7P9MVGlxhIJWUdmAei6u681lElHGF9m1QbDeoCMzHoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEHYf%2BshGO8gjP9CPSrcAzn%2BUa2N8gixOOHP4rIIathgii96BMQC%2B%2BbwC%2BQSIkQPyC6p3YOPR%2B9al2A0V9b%2Fp9BW2kLNb%2FZoAhxRvGOPoq7qKYw%2BlE4cbQoQG%2Fzt%2BGPJmqSRsftw0UN83KVD%2Bqh6HToBgteexrdxPMpNV4hs8%2B1uN%2FxMYfUSu7lDQi0iSPeGkrGCQ3uhUePE1rgBYMEZtSc%2B2uQjo%2FhPHfsEq0fUM%2Fy4ZXM9aUSkN0ljdMSWXI6Ekxj4Ip4U3q0oRSVLKye%2BAFhPXuhmu5%2Bo9OEMoWA6LVoX6YTMMweS5vRC%2FAP85nBSWjzISU%2BwQBLCsfP7Npz06n6sGa3DkxWAgz5TB1rSsPEpFIFim43rbjBgE8mfPMOcfabnBrdweSsTi2qvpWGQ6DjY%2FsG3GO987IATMQp5PzIvtObFiEszHxXXa%2F6yf%2B%2F8rIICorY%2F%2BwoJoYPwNXnmmtGkY%2FcDYYJNxr4KiOBLCp%2BueUZ2P2uWS19JWtcHF3o453RQC7ufHvmhpvV3KoTuXkG1xBxspbATl5or90KR7Tc3AlzQRazSAYD%2FSinxpTItSHgF0YtiFMJdcxyQcMj4rx4tsLf1DpGsaRa5y8zTcVFx1Do06U1dAfZ6hXG5tOvamt12pSoUoBkffImjMLyi6sIGOqUBHWCPUbMLNsfxWtgu7Ud%2BsUtIQ94KmpjGjdvH6x63Q70uMN7kRwqgyfkcjPSIvAwQdmwR6Lzqb78FzzqXkBRSF7g5idICze4R%2FHl5d3O1JaXS5y7qVBc7dWHw%2Fbg2JETpCqO3Tstuqp02YJHSiBAB7wImp0n%2Fr8WS%2FUVgQYGR%2BZdsEDXao8VnKnbb2UW4mG%2FvEXuLAepyGZaId4jLmLao%2BTkL0XT1&X-Amz-Signature=98d36dcb88fa63d049da2723b2bc2e60c4743c943387ad90dc444f0bc1d59f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
