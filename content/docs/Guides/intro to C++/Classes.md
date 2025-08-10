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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RMKMXK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeSiRmD50ENYKx1PRlPdgk3aLOKdxHiUT0QY%2F041RIpAiEApx0lRvAdBftUMx3IwxYkaB7S3oXCydvHuePkKtjVy8IqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHw7q2GWq8Bxn%2F3hCrcA6Z2uYF8n51X7iuUCDQFhG4xgoVkAjPlkFbat%2FH2pUpi%2BS6BmSaocp9KEdc74j94PN8gcwLUcBT10Rrs2kHahrYCWFQpD9hdZaKPQ%2FoYjO5Cwwm8Mw1wMePmd7gJ5kPxg5omP3vI%2BTYO9wcJijw4k86cjfLze7yOxrD1I%2BtojAERlYCA8pLdBMCb%2FAlYGlgpc%2BEYXruo8vkQsRGU3kQ47d2UQ9ufK%2BLC2vde3v1MzkxSG8uoHFxytcRD4bqSunCnIwOmV3OCLXuEs6lny0DfOO2pC3hdwTX%2BVCbi%2FtEw2yUxu%2FRQiewRLTlBcWSdtAN2gUuDshQLrNuNG5PKFbHTrOaR7dfV%2FsnUFKc9Cv02pI7stHMh5qZaXdDrtVYLDtDPlxKBTCBHw1bKo8C3hkORLaWPsMZTnxUFYgScCWtHb0kdUN318cBb5cuKMeSpx2x%2Bu%2Bcc7dheJEioyQCEpXBb6FOsaplggjr1qnSMkD%2BHdMmayF4wbbwdZ94KM%2FbbwKQIaRuAH6RAfDSZtadYmOlAYlWGm7ZofhEWpzWCBCjkjbMBn7yk%2FK7tl5it1mqIL1mARX%2FC9GfjmThl8kWKypc1rl1iIiWS4lLAg84txLTZNuynsF1wy4dXG2JAYK%2BbMKn14MQGOqUBo64RqbJMO0errZaOlidli2ckzCumPCK%2B6ooKdnIIIzpfXyOuKbStUfbVNWofYModjg92QD33iM3ki1Kd353ZpuakjSAdelf0NX6ERykf6lINy8uKMHv18IFH4vu6OxeZUDGMlg0y8R9vTmbf5AqOzRxH5qJl4YlIj6EstR1JY351XblloEikD7ONJIzFY2JL0ZmcxE2D7XWmbe4ldesDJ7sFVkDH&X-Amz-Signature=d48a639e8908e4ba1b606bb75b4a1bf8f1270af3b769587f7700ba6549dd282c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
