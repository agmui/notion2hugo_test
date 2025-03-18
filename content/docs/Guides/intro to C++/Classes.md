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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4FZ2VA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAE7C6qb%2Bkm7arKrur84G4e19hIJkUuJX5wUHacDdL9SAiEA%2FOhzz%2FotpiwMEGczM8%2BTEIVyelt5DtOMf2T9lcBE%2B44q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMlxB9PWXSlRh%2F096CrcA5IIA4CgmL35eGQ3S%2B%2Be%2FXNNy%2BQ01Vflm6xvTnyTMO4QRbI8F5kpECT2NM%2FY67%2BJ6b%2BO4eXDrBzcspHRcZkA4eItzuIMGr3ZTaRgyn0KBqqEyo6peAInPOAA%2Bn6RRoQ371sp3HRiJHC%2FPSKSDB6zoF0VFpeg2Q%2B1SKHv5v%2BfjFZah9SQFe85ZUeug2BWN7sMc4D8waRhW4%2BkG7vCn88owvCgVTwjSHLSawLzmXflz6b%2FrAp1vF%2FD4vEE2%2BsOZKB0qO1VDQciF7l%2BCHGHuIhOHWXbsUUoRpbfEx6Vi5pDsESwEvwd449on4%2BvqH22UWyYm3TWpXs4B9fLR%2FaCIuLC6jrWP%2FNvtAADbrIauNvA9nL3pFGkHPrdTw3MThbNtg%2BACRQuRo%2FjSTNKs3oGE9glaXJMAXXUFzgM3DQo24M6S1wxX0Dee5OlEG3cfdt7FzayWbGWPjEYa2WHkQpKT3dah21TaiAylduhKZIyCTA%2F8%2BMad75JZIOUgZfY%2B7d3WHl%2FPpgyiS2PTEv8xl4QX2vPOoe7pFuopuXphTikackKmo2fcVEl%2F2q7z%2Fwv%2FYWYmrCwEEpCH%2FUFtRQUGsn%2FNC8Y09Cx%2BWT9ZvHgTW12Hs2nrkA8m6ubHViy15lJLEHpMNG15r4GOqUBCE58dlhSd%2FKLzt3XUdsVUhkeeN3jO4Ur8EjczT17vLFkgb%2F1YtgHjnsw%2BCPUlplaBzbhrgxRyiUIQtKHUlmVVYzMddjJsZolsDLIi7kcykG1DPgUoRUJEUJQDLRpx5wjTLX%2FJlcNirKrxDNtfO4rre58uyqhmmydVVQuFxy%2FeoE3Kf0xOmBSjW692cKFBULM69V40oqC01uwGR73YZXYo1XJ82%2Bd&X-Amz-Signature=f60b866378524ccbb265d2fb8c06c14afe531da17ee726433017976b4893ea19&X-Amz-SignedHeaders=host&x-id=GetObject)

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
