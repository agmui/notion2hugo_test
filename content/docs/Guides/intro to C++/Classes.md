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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MMRAUK5%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDMqe9V3S1lX%2BdHpo7fV8WDcN8KfpR29PKP3kLBFyu4%2BgIhAJdWU9hpOEiDyQCY9YnyQKz5Hn4d2KTX91Pbsfrgu75nKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0B8BnwYd%2BsoSRNAcq3AMTJFLCkVX0cuJlrydcq1q8fzsQ2AokHRZPtXZMM%2FN3%2Fk2O8zVPkSvs0GfHO99kwB0T3LWPz5K%2BQADGwWo3AVQPJv6jPGRQW1dgxdfqb5LbsC3R4AHC01PXhkp8Kjxf5lFICTKA1ZUTIPF8O%2Bvx3ovQx912boSMVrxi7%2BRmcRTbgN%2B44GZjpK8rrUReo%2FHmCb3%2FkqLgb%2BUX6Xeh%2BzFG3SWsgTsIzIvP%2BFaTiMm1Ob8bg9f5oQRpqAiaLXc3oS1ovJKL1aoX4E238rSi0%2BVSek77XK76eqX5YgTFbbY59%2BoHNLsBbCfzcDWWpYoyB%2BfVuf6VliS30h7G%2Boi6Kwoxx9JNO0zOrpk0obQZHSwrg8IpabNdZCIVIzlb50sA7bk9etLiiqYHO9InGeO5sOaVHtU8UqM0C%2FrUGXswXpAC56nRcd9J2EO6%2F1j9SYY2iB7DxyXLl26ATZiC2wrxTAj8uab4SSCfNo0M9RhoDWvdY65Gmn67FOJBOg7IIs6cjnawnVtCJdGTE4dqfwDWB331MpyNB%2B6PSrtMI8sWL6MQ4j0MOQcgy3U8aQrCOkZVPQxUM8mPvEyKseYcKukB4P68nmREGrsihaP23rr%2FxVXOKaE2laZuLBFVmaHymEW1eDD%2F9fq%2BBjqkAb8kgTB%2Bz0FWuXZT4N4WfNa%2FdnIyyR9YDW3D5Knj1%2B4L0VrgWt0N6SRps%2FEcaYCdj5nSGiQ1%2BwEsr1pFuye1eXBoVoDSURzchj7EQXhYSDJ2S7v%2B9%2F798DoPkwScYfLPg7DPn0oVSOMm%2BSEgdwCQKsXMM45Ngl3b4HL789jYyFMa6vFb7ujrndKuf4aYRz8nhshvuQgAT9r8uNW3%2BJieqr%2FBlCA9&X-Amz-Signature=3d348708852892b24834f82c84efbd0f97d8aa2a42fbfeae1f61780514b7fc84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
