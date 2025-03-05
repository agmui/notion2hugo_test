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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YPYBALW%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEH1Mn3oPYELrfU1RclkMPyIGAiC1ZZDZ0a8kNgSkfIgIhALd2ErPYujytz1oMBm%2FrX6tnHkn%2BErRfnJ2K%2BsSBow1NKv8DCBAQABoMNjM3NDIzMTgzODA1IgynvmJXlaI5dTWerx4q3AMwW6B02NAeEw5hB6WjvU07O1HuGwDiEdTUDJ7aRX5o%2BRZkt%2B6diZncIHfPBaABYA2OByyj3aJfECyozjrmlRLsVgWXdDF8KxVa9jj2soWWiMFqJrMs7jSMsFRstApiSqNFC8Sty8mVcSLfT%2BimYd%2BzAOPZEHdpsvx8wpFTBTakkNVjo6rXEyZAC4AkAxGw5ayuRWvfERCM0L0pyMAaKaUNJa69RFBuU4uDbKUOXbvHytlAFH0xouDGBBftlemXrPdkzyEwKbTpZTnHGbhLHFOLarocBa1l9aJW31Wt9yDgMIKOHCmfIbk2IH5iP3CzUM641sL6Uw57jO1BtU5BYSG6Kc%2FcOkt497gnfrcCyjMlmyFuJVmV%2FGU0HcoDKpWeqdwwy%2Bhcx9PR%2FnkoSJIX4G8KaAvd9%2Fvkww3nXdTxqGBkpREF9TL2IQZE9QlkH%2FGFREKJxBmO5kaQNtcjeXPsYiL8jFaENNFuFxd88kMZTV0JYtcYhqDxAEfruGA86xUIcha8%2Fmj3nwaynOkHO1f12aAZOwj%2B9Nk2LMxGAoydzNFscc3tUpsKqG2509z4NNl3xggzKRi76r9HB%2Fw7w3yTcczR8M6iorGj9ocB6r9Vqb693mvLQy519Wf9H7Q98jDN65%2B%2BBjqkAWl%2B5uwt664lqSdRmzAEubMkgpUNMThhoJmNxa8kY3Uf%2F%2FewMxi0Nz8qwsRwNU2tygEWjN3C0HfIgwbIOAGWWwTv65lbPOrFOx5UfPiNfdxH0j4FlrdlFg6%2FcGR9Q2rZnawyasZo8rWjAS%2FKyc79lMqOq6CFVUbtlxngjbhFjRZaZrJ9l6ONGxDxx5CLyAlZsRCB1C1lqJZCEbN9cA5OGWmrPZDL&X-Amz-Signature=c7c2640327a459def5b5757ecea1e58a1650e1b566275b05c317bd35f92eccaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
