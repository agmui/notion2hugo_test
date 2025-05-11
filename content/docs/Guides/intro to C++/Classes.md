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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NBVQVXF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD8t0ktluVIa5wTF261r5MS%2Bc1AP1rVJNzKPLvgNjCW2gIhAKD2i7Om5VklmjOrTf1%2FGXPxHl2hGNzgn7IDFzpQitW9KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4I1tYDcN453PNVToq3AMItuK0s1fu7U1LuzZmsMkPNWFeYLnrbdNXf7XAJJ1p1Tb5Q%2FdkwB8Kq3HYVEYNnxk2GiCO%2BdcS5XtkE6Iayx2XH8XJSJiYZVmYRowwo1o%2F3VRI0zcvxL9Wi6pSBhinbKatlWP4vs1%2BrzFb54XLPkU%2BDF5UrpiyibU4blCl81e5kOsNzfl8G%2FWv29wc%2BVwe0W0ZO2ItomsDy2dJoR32hUP%2B6%2FPetfaYeTLQY%2F9zsk%2FwGVffEiM94pTMWSx480ZcqdQbdUIwWJJ7jvMCmWPE0omHhldqJ9iEn1LBNGp25Z8%2FJWcGCO2r4Nv2KLli%2BCs5%2FVb6KB0upxKPGx0my5JxOYJFvUVM3%2BpHf60yBR%2BI0IGUs386H9G6iaAsj6lCY1iAxOaayI9RKj%2FycNDbadw1JfLfQbiag3y7x2qaUPzzpn2dbvvtUXIjsxnzbJdK8wJ6p4b098p8HCReiuDavyrWhtPOVjtQ9D5y8zSaLdjHlU3NX2P8ezDoo3z4LNrgFmi1BjvU8Xr0p1HtLLWzvJCigdo%2BYOY1N6gCS8hMIakmZ940RMRtx7aXsGHDLBoceZvgufvTFpJWXc2tkn9nMSJvzKks4zD%2FhMUH0TuXOgOVocJokR5lpOgmmIkMHdF7aDC%2B0v%2FABjqkAYRmsrK8zYiwo6rZO%2FrP3Q1reZLRxh1MjPtPAWYLSlSrDg2Y8gKyuRsQB14q4a3%2FC2J%2Fx9L3klJKrO91ixEQbsJKWuUkg35myJ9oYHXroqkaFusqcyVKWLLuoPVq2tE4aqJY4G9XOz3Xl957az8Xqyx%2B21Rr9K%2FanXnJ%2B6AXj9hAqDEX8Yte0A1WfQm8fy6LSeA74d3agf2XqZ86nOCNoxAD9VjB&X-Amz-Signature=35ad4e684a2127c371c1516a1c41de0833c45a49a0459165d375b6d8c48933eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
