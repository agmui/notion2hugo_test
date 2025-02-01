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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OERTD3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRy0dXWG2ZYIT9Z%2F%2BXWs3Ve%2BhofBNxcQBzvpXO3JlGyAIgHYe2slTBwdvVigKNYdiFaQ4SKw6qt8%2B2NbSE2m40%2BnsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlzbs5cqQHjmYBMqircA7%2FIufomZRr9yS7NXIqWUy8yuAY9ZW5Ed07ocF5kISx47dL3pXewequ%2FJXdAKR1DIo5ufBLv42WR0KSJn8uzWLzxMzKaZMinacRJ1Jw28jwYgXhh0IeXWvJq4SBRxhf9c3ShUCR4cVRNl2ItGgaYi%2BHU7g1uWhBxvsqiumkPuxDcf8kpREu7ifPOFm%2F1SS5nxcienSrPbtfEtYoyKc3iYx%2BeUYXzio37BSX42A1IQjz5Ib3atu2WW4eEPfQuf2TqbXS1BqCtug39E%2BflpXwVLSEAYsFP2ny%2F3Z%2FoPNEcNJnSqzi4Ol8TEkIk7OgEzF%2BkLZzDfgSTW2CnYIwLUEjHRXDnjGKwkt%2BujtpVHyIbHmLp%2FVfI40gM0PKIBL6pbq%2FGuy15NtsPjzlvK5bD0a%2F1xRAoMhdIdGGW4gqN6eFTDngjFUaTBHHdM%2FLdfd4SNu9%2B2T2nqVI6M%2FYv4i%2B1BXDtw1rSC%2FlNlMycUoAVm3K7F%2B6uev8oH2oH1yleBdI%2FSd01Xns%2B3ygWQUvR%2FgG6gThexRmpIxSjT62WVOvkm6a24%2FUfzLsIYw4dX3DGKAc6Sa6dSCTy58eVG7WQDDfY2gL0kSZIB9%2FjNN2V7QHy5Rryk0cxrcSCOS3NzEwIftmhMMLD%2BLwGOqUBryV5D5nMgBQnFWRea%2FmOcu8CiP6hWyJMpIHcIHMPWynITScq6PeIZvqV6fu72ROBRLhABMbQgghcfJ0HpZM%2FWCYq%2FTn06UkSAAg6DPlXqQ2%2BcMsyKCNHoIcmgI3nIZTA97TXfjZczAytmtERZhOdD1DuEg7MrkfgjAn9%2F9LN8QfQUaa2EXRjo5glmLRlmDr%2Bbo5zstqAh1Qb75G26jYU6%2F6qCgmH&X-Amz-Signature=466d4913a8d5366cfc64e1ae12a4821096b53bc2eb4ba30bafe6d0a08bdc9a29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
