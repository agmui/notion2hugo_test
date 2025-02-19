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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47RRJPN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQClYOO0KQzUFv0kUin4ziAwpGvm%2BYr6eM3kCs8lt4BYxwIgcp8Pg%2Boufmf%2FPnS5xwv498%2BktfPuX3JuaCRSSjhfngoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaJrifp6Ds9xHYXgircA%2F1spyIViXjRMvJZcvOKdDoL7zBb6l2UI8szweEAjBW0OGax0FzYGdVdoHaf%2BteYc%2FqskpfsDo72ScifKbi4lEwtgJPmQ22Ep4TYLi3d0IFE8v0K0JoIQiVHEgc%2FwRxs8ZLPJzbsG9LI1j536XlfK5lrX0I0eICaEm8Qs%2BnFx0sABmsgpkBeAltOqYI5HRx4vOfdwV93DZmrA9sHNqI%2FQI%2FUA96AfbwlYPO2xpLfFCu%2Fc4HNCETOVNhSivXDHpP1lQ9jZ9gB9vmIh7LD1wJySnvXnWbXQGV2nYCCPUGddlQ0uQ37%2BzL8ZFoy6DGrSZUCsWq%2Fa5iYGLKZ1mEBAk2TTEXEQCZtrpAu6SzmwWuUfQfB%2FOJTENcHwcjnlgk%2BcPaUV%2B7aoJP7HCu5QWVRmTEdC40nKQD5VTdhIQ%2FDVad7E1LMSXFGaB2TA6bUFoULKRHGhCAftKz28EoFTJeX4wvdVuzDEHxCKLAd42E1LntJVt%2B3XKblq91MTPONNIAHI7XpILvsrT7oqVDLsN8KhPvOqEWKs1NL34hsi7EktrXOrEgAMqNSYSlGnQYwKa7o1eanoyBJMeTot3NcRtJ3qeY38EclBVafJ%2F0aY7tG1q2H77GlOcZ9DvPHsAcAP%2BZAMNf61r0GOqUBK%2Fp4XARZVG3zj9bwSzZyazBFbUoef6m8ICjFf4Cvuf59iRVwBZnEYpz59EZbQdZ4RO8NeVtoIhSxNTE7pBk1kyn2sHeglAtrCsO%2FpEdUjUcPMuphqzi%2FdzB7nDHBL8IH1oemGoz%2BOyJMvPUoXtdwehaYF2EvJ48y6LcLkEaBzNOhriltH3cOahR3TbsK5ifR0nNtjl%2BVsrWRcwsZmhuD69NUmQbj&X-Amz-Signature=1b2762325bfc75301fafa081ef317a587e2daffcc31c94a5a0f706459c9247d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
