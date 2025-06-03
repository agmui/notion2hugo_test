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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO6QN7GR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD9aJdGgjW%2F4%2FJLeWYQbxsA6gC5yJIL0q%2FFnK87HnYZ2wIgMzMG%2Bq0%2FdQwnoHNTRKL4w6BZgXNdp8eoHiTLgzTfNFoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi16gc0RgvgBEu0nSrcA%2Ba0QrUQM54kuCDCGyWCU5Q5my0wXKQbko4ttPij9PFDbtusQnCQ8ZRitY40vW%2B9Ck2NsSyb82jbE25LsLUd1G%2BLWiRFx9asRI23pbCtsiA5Qq%2FvlLnrPh8tq9mmqKaBlQu%2BfZKOG4b5mmxGL8Zz9O6zV7jCoxno1hBexXIP%2B5R9Ln4lAhdX4MEbc3K3seFq1QEL4sjkvGA48IzrOLTb9jOx%2BFKEjsXiSXNtUpobodC51yC2fJp8yqEqJUMfjsP1vp14KoQEvKz0yBJxYrKrdwzzofJ2OpHkeJav9f1Y4wDmrS2pHum7JYOgmV5g%2F7IiEZixOkm3U%2Bid2U7%2FmtxqWgF%2FnUDi9OhcvxjUw0SAQe3Ci4k0JvBLicxf0CnFaM%2BEiDdSIxjA9rC3CxIgnX7We7GCoHWDfsv1CSeiY4Tqpuw9RvnpESqrkO2WoEjc1aMFlmCPlDUYjolARWy1uvJCuYNMsZkoYFJULcA3VmopP3ho7I8xL0BkhFYATiSEPM7BILHSl3MU666H2Ma%2BaTOaTJ3Q18n4GL7EnrT9yRTp%2F59IrEs38WuEOFiwBSqFWJje4jqfQPp9JKCwUVDTFzChVMhlof2v%2FgULcX6Nm6Kqs3bF9ebfUb1kwCcG3PtnMKCC%2BsEGOqUBwy6Z7PxOtOsA9SR2OaY2S%2FI%2Bf%2BAJyJtUp8kBFEK%2BCwnJxcFMwhD7DTcu2yb%2B2Af1qyxskM%2FmQBcBUPepaZDFJiDLV%2BBkrQQu0GlSAkePdW3EiFUkfm506DqZkCag20nsxgOkUvfx0us68yOWlCqFaDepeQKz2FFA3pkFFJptKLPP10F5WKmeakyPvueqqw1cTMn0zSC8T%2Fp4E2qZNmrNEvIVbQQt&X-Amz-Signature=e08a3e626eab9f678d7d07cab96b3a46aeb4833dd42d8be74fc7666324a22dde&X-Amz-SignedHeaders=host&x-id=GetObject)

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
