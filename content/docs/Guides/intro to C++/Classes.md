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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJAGMJW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCFzPliHV4uF8eerYNhTa%2F%2Bwnn7uT6TLEECACCNjXeCCQIhAImri04SXbxjzMSM%2F3l%2BijBmYKBFvc%2F9pIaAXXvaxWueKv8DCHwQABoMNjM3NDIzMTgzODA1IgzxwxSgo5JEnSaUIFgq3AOMWlTIFIHYhfBFgF%2BRVEvyPRsV3LaEF521sxanB%2BMTtPi5QFMI4ds%2F9fiGGwq7kGLQAlgMwnnPihPm6ni8GjBbqd3mxmc5u0P2%2FHCCMrHi%2BvhFqQikuNz%2BcaqaBUr76bRrdvuZFW13C%2BuEEKu8RUU1S0Vmcp%2BW2AZhtenHw%2F4%2FQedlhZDfSk05t3DGStNeKopKw3CcZtqds5oUSU%2B0iZoGe36CuGvZfSalfiu5KeTMOUw%2BIkFURJS%2FWNSy7EcrWZP5jPTQKd3Z0ospqxMJfsHKxgr0fRkM2tPIiwW2O8B2PmEo4sIsY3kPR6uWnt3BZaeyUEL1VzeRJn2sR0z06D4sakjEK%2BZUUYKFv%2FMv6xYTDr6f6P%2BhWfK19x7MWU6LEwF3gVk0FQ6xE6rP583BrfeUZ7rcqyb8gVw1%2Bb2dE%2FfVevuxuLPGlAEqf4p7HeCLlNNgB3VzUrP8YoCfuelYnLzixF12UTTpfUVgGQaLOPiSjPUHU8c4f%2BvPa2JUSZHhCXX8f5f1W8skhhw9OW27rMeC92j1nV7TWrMnShEAHrq1Xy2F1%2Fp9tIYttzbpaax02vUiDTqCs%2BHQzLGwynN1sZEA0oB%2FRJLl5u%2FWdVCe7LN%2B%2FVHvt30nJVsshrMDXjCq8YK%2BBjqkAWh2TIIpsgZfqsLizGphBxTx95%2BxvOHobPdSeV4UaOnSExcDg1FWTG5Loee8CmzFLLYZQsSb8aoTSpX%2BYCc4cQYwBO1peDclP4MZ6Cn%2BsJ4lVR0AN6NWLM%2FAljjaoGUQnAd3G1hdKmKxms7uTUbFt5yNxD2dQtSA10p79UoO1daZ4ShmNRVag20VCsWTATmcL%2F%2BY3m%2Bv4BsMx9kYqGOtyLWK1u3Q&X-Amz-Signature=d175fe486c598040cc1cff2c9ad75ec40d144700c9f49b46173c12875a4e02bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
