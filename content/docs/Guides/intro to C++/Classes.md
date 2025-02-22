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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRQED44%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkV%2Bt4puhhQdh%2BqPAteqmuk48JzH0fFrFZzPF9nUO1GAiABXQmKXHUZGOoOT2vCPj2OrjjvgtHBHzV0i%2BtIkQPBJCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5eIcSxM5D6pJWplWKtwDdWlXg%2FChmCmMCpe9xdfALB4li9INOVwty4BKjrnz4eGrTi0z%2FOXkCDbg9OczqKW15%2Bn%2FvO%2B3U58YlDcGXQYoh6BPwiqshw%2BZhgxx%2Fdar4aR26JA%2ByRnTP%2B4oMOCWLEN8Dkec3jrAE%2BBjBDlcoLHsRMx9cI3iYnwezX9dKOFDT1hA9ub%2FLDdUwwAXZF0Qo%2Fa%2BsHgcHdbQ6YAUS%2FvDH9D7Rtp9%2BDv2UM%2FPanYtzxxbxx%2Ba6SDWe96eJ64gNyKSyeBlvxSAdil0P5469A8RPgYwxSys1G%2FFOr3hB3R2y1526fpxrosotBNoY3rQU6LO1M%2FlY%2FToH6H7n5QZSjOjx4uVVPdgBFpDzHBeg7aHDlWAPuq1TvQrqVeF%2BZ0yrIRF%2BCDmR0xVnX0iZUNf7cqOKBnPEB4IQbM4W4LCnrUJ8pSaqgx19hz55gzMYnJMUnzM68vwnfivI43VlTlhcHK8dWGq2tDVMS2exrHT%2FofqdpJcnywzev%2F562G6gkWFvJvL3tQQCEZkwmwDwZqiXrumJnoBJlpDGit2Vj7EDOpNYsEkqmX3naAYUmxetoFCR%2FwjFzSqnPoUPZWBHrgNKT0KLAlMC6DUCtZu6paXDoh4f%2B2K9JTgQL2MlwJyb8zgx6AwvovovQY6pgEJ%2BsHdpkD%2BQv3jLwuSSEryr4C1Esb9SZIj1KsR1vMLi1jW46R2p8smaiZxxQ5SMfuYPE78q3W3WqJRxk%2FquqWOAEY7w2be2c1%2FkGvKpRhs7L5z2hPYWPGYeQVO1BgogmIKU32sYZuAoA1p88LPLLIQRMr88JwQdx1nEZN%2BV3C7yN9qubygNaAF5A8e81Gj1iXRIBPaPPd67mAqXp74piCyzKHQ6nPJ&X-Amz-Signature=3c19a850b1bc0279e2d6ad11182cb9d7418c217f5ba1cd58d4138cd06419ab5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
