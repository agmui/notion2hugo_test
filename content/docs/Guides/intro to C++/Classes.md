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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNATUBH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp7xsUdzvU%2BXFLJIa7zTvWsIJsxZU71PeOhtG4FxmwMwIgV%2BcG6UlR17ShsWjY3qNnhzH98S8VC5XcHlc2hZE08WQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdJV%2Ftg8yPjPQUX9SrcA6EvBD0gPg%2BY3Vs1KJwRMaMcv71o%2FJKj1HQb2zLM6lMoyrPM%2BFNNZUi5iLGfdOJVXv50DADG%2FOMiiwMk3JnSAacxoYoONCV4cTcwgVmkV155QIo5II2o6HH%2Bmdtq2uMRcYf30Sx9R1RhvKg3F4vU2h6un0HCInDOW13y0uanINc3FZYHSCyZWl7%2BqGMQ9RnQ2MKeY%2FjlcGhfmTXEOjvYBt6edbxvjorQlfvE81oTWHc1VCOtquGvT4yGS%2Ft5ZjLyBTyIhmnVtwd3A0dERj4wSXr7y1HUttLeS8Pk5ZH0FEugWXAw09dYgof2oglrUp2wcQ4fC14nNUYst4WuDXWsf6lMwXQGAP2%2BUgc7CExNuL2ZfpQJ3H0VcAkmCMzaRA0uc2HxvSYn4wKZ8JrRgT3IqQL6vG0iGsdU45nrCfFJKNBa8LUMpEE0p5Qgl7NoGpKquIPr1eACWguIiiT6OqbeZmGCDa06QI3oZ1zu971XBBgTKdOixt7%2B3SiMNdaOW%2FsD%2B7Sb2yLLEGarbB2NiPXZSI0LB6VtBs88V1NGDoK0JmHThQCNUuVwwaOqEIKYleKG9cAYDCDaZVZEIjhit0%2FbJdUbvzly%2BqumtpTGt2fJE%2BDPT2yW%2BifQbj2gpFbEMOm6lMMGOqUBvmVG8HJaiZFrbW%2Be1Z2GG7BHkHvjnrGYRZCPlEAJdgg9jxQfCW743GyxTvx6LZNEceVXYkroTCrbDikS4vugxjpsxHCkfAj1T8zw3rPjhw5adv1s1bD1FAQrbmOaLK125vWt3gQuTntN2sQKM92K3dQfapCtrNSgAXaVQ8DefL1ZnME9SVhKR9N%2FNJwCQ8VSPUgVsVHVCqFZMoHNGOpLQ%2F7NtNAR&X-Amz-Signature=c737cebf14a3559bfbbd1d3f9e16959e7b7f2f809d68bb7b59643e56adac7f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
