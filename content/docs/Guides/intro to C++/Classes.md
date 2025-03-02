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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VCAK3PO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCLGPyfrEqwWEI6ESXY95hbjdcFUddDteAhsqsI%2Bu3weQIhALSmEhzFLGrube9ZsKSQvcdu%2BLN863%2BHPU6SSPjHs47WKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOMvvjl84eel5oRvsq3APrhB8MNZlFKSHggfpglrWEu0LzYXPyyw8W6FM8P%2FYsiz3yf1%2BzNY7z5JeokppP5GriKQ7rzB%2BAE4lVa63HNTI7sWuDyHX4S4zogiZC6jYP0CCbLZ5KUCIBn2olXPvMIRcLU2XxE4KvuNqoPhRshk3tG5XuQckjVvYDp6As3RtDpmodA1arTuduLlwOzWaeB2Vq%2Fb9RFKAWAcK22c09aHsZG80WMovg%2F8cbrtI%2BN6BI3aE6P1UcMyP1mOxIH29gSXhuSmnUmX%2B94JCO8CLHHXhG35e7Wy6zsbrU9V%2FiYPOtLDkrrXh0I0LhYsfCIOfFjqu2n9tkqyE7%2BTZVDoNPDAQ%2Buoa2%2ByZkTkfaMPc7%2FMvsuXaUduIaHpH2%2BAbBuqsgnCVVRILyESVirPqT4QRWygCMfTsHzI%2FPJ34WWvIqugqOmPv0CWXDJaS8BxRToSDHovGoIke8m5i2eXXnUbusI6kuuJRhIGV5PzNQWkVkYBi90rJEs1F06YZOJDwb%2B06rLuG0O9PKG%2BjAQ2lI2%2BQpMlIigjl4dbEg28T9SRjjrV5xQ%2BajVg2DijENH%2BWehZPCv9E0rCajvXdX2TeDwMehM0x6kThbtRRCbv8WDUcLGTWrkMFCkOGPeV3ndxqZkzDe9o6%2BBjqkAXP1iVEwUaoC9b5Wy%2FZUqJwq7bW%2Fs%2FfIDcDFazvp6e5VL%2FpSxU3pvzmUX7NV%2F8mDIndjPxPZrghaBIscxBxpCRq2VIPhO4FyGFCmvJ%2FtMDao1CKuPBzsDomWFclG4n3MvQ%2BBjzBZCB85uqFVQHbBkbscu2hzeeKLOYn1Jc2sBFChMlBPa4EafW1Qpq3f3upXzhIeWrPuAew%2FFPlCv6KbRDO5%2FDbV&X-Amz-Signature=76c82226427745d25de36d9e71a81e57723713c758e307f98030fefcc4e413ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
