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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3PICQW2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn4eIyX3fdYOaXiZOOWmoyWLI9CcrNBPeGxWo3SpxT9AiEAu1FOzQ2erRf0IZ1RWzqvpwSZA5w9MQ5Yi99yjkjE1icqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCWxzrLszmNRva8QSrcAzQvoQPo0WQqGxrIx53Ir4uKc1o50Nkf9F7JxVlJMQGAzN08MlUGZqWwukeRbsNWCFfUUMvjYz4p4WiI71Yd2PzK88vej%2BLH%2BsHZvbvqT2Pt33qeOycCiICyPpQP47ow2voR94TvIrPcFtAgNMHwDeS5R50crgFujRvxjFxRnxpTrr98SgarMKrmO6p%2FPVp6r95D2S3CeKR2ps%2FTwc1iVVds7RGDk631avXaEqw1vDJpmiqdmSq33OreZm9QbhAvb73aGp2T4MsgSjnkn8lHm7PNmvgPfNpv1V%2F5yQXQrPVELlQs8m2P7hu20nJmUN8LHRTVukqLk0Hig5e4J8GcUYT00I5cA3nQe%2F8xEOG0JWqNysu%2BoKyS4NLPuumcSZ%2BZ4jYS8votC4gvto4J%2Fxemr6ljghDatAuaByhA4Hf5PCrgFKyFQKip2wz60hc6umHRYwH4Jw93E1k2kwMag98vue9pZN0kr5oPs%2BfHSdFvMPq24ucO98pASO73Ymc%2B1Vz1smsXU7PEXHeXKDWxA4EfAnXAUQ01KRKpHiXUhAbpvD%2F04HxfUqQuAE5IQCEgorcExipbwP4blnw8%2FV8HoZGJfgSjgtk9DkKFiZHCTbQ15Srkdf2DZNJeRZGXfiENMOH6hcMGOqUBvraawQScBZT%2FFzByxUG8o2zQ4yvWNLkbHBFUm04IzcMZ0ae%2BTEfJ6ZgMtw2%2BH%2BUY5MkVmVQ55IJhW107RXgsPIHuzy5IC1JOLoUI6GW3ww5v%2Bzl64Pch2%2FzzW7ZYB88lmsPVi5IptiIis7FUjjR5sGCGR0d1Pi%2FBV5Z%2BoLPNDL1qdNAizAgX9LxZJDki2n7XYZy8C8IMvAJDiZ%2BbxcwDtB0jHyzs&X-Amz-Signature=511129f29f8d9641a2486fbc777cacd433c904c316e247711d4786c46ff0d20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
