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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XG5UYM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoWWjhPx%2BzYDYHGP%2FWdYnz%2F6j2RVs6Bbc8Nx1UdBcycAiBorEyrYrxoYXuuO4d4%2Bzs4w%2B6zL5h7BZiGarHzz5dpVSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMzZmKSexP%2BPyHEAZEKtwD1BQHclRafF%2FWleDchCJvBS95loZyGTCsziKdLpAt3%2FzFI1%2FKkvN9JdcHx1QB7faSBWGp37KhGYE3IiVsPKSgdhk2vYA94aUchB7ra%2FI1UnfxyCpcIFER9ZIKiA46StThlOrnS%2FtJRwZ26dzaHdT3xoaNFLykoHcjYzZop2IzD8CqP%2B%2FjgI1Nzx7QlgJZsGyxDkgYemKAiY3lRojdvg82K%2BchAn5ExV5WT2jleQJkI%2FpyDkoCpFXkPWhK9jH%2BG%2BN6AJk0HVqKueBX%2Bp20yy9rmzkjJabXyqaCOjSs34HsaHN7vgfCjlVGE%2BnFjeZM3jCHl%2BQ86KyVIBWiegKKPEUBgFCBlY5MZ7Ycb6KA3gF%2B1PpmE5zsExu8eA0%2BwfFTrJpQM68FmjOZf0ssphPrPv87IL1Z%2BGuiqFLbs3ku1sB2z9u%2Fy2aNs2estrUmBPD2LHekkyNwkGvV%2Flw7%2FKd%2BXVqaqWzLXLbVDRbbFpGg6wMt5K8%2F%2BWMdbq8YUD4hP3jxhLxCvUEBaY1YrjmjeYKUtc5eGskhKqnSDveAHg83WoPKRdoicg0xRTGRZgfipxPf0ozOY2rXKqutHkBVgYRjtUomusZdufRHFF9pQZgChkvLzI97VFkf1mWUdLn%2Bv1swlISywAY6pgFJ%2BbeC7eXT0huvda7U4FSZbQsLlL1oy4qTSEGR%2BA%2FPYB%2B%2FGRz9NR3aPhUpoC%2B2PKtWNF6IsRyMk94G2C2KvOj%2BPiKYwFta0e1hd%2BwaFn1uRQZikUpf8p2UpyaA60vS4M7AMg8z4K2BDD%2B4Hx51aS0FR2rwb3R%2B0x%2Bb8iFsirlqsjjPMZljMMOHtoMVcMLcXJCtQvFs8PRlkFONmZMvEZ8FAfkv%2BVUS&X-Amz-Signature=62fd185e3abea1320fab4537e675954bea57c87ec7118b115e06728065000908&X-Amz-SignedHeaders=host&x-id=GetObject)

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
