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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VP7XUN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCNPepyFNy5pT00OGdvAchtXCBoP%2FUlMcdbwYaOSaUcQIgOHN0uQjnhxrLWvthyBAroU%2BdDjutLyx0RTjnCUp6FSUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2o9CPIbNyJf1izhCrcA8I4e1R6UGpXcSNMlnz1SIqXWlelZxvpPQ41NDu%2BfFQpmewcqklXHdh04KE%2BLp4Ca73gzJT8F01wNv7f01KypiRCpm0Ygo6HoLeStqOuQVT4bd%2Fsdjpv%2FEvCtucFWt3M%2Bd2GAR2iBdLq9pLgUVDuapvMiEmVFJ%2FFB3UpwY4e%2FdXkf%2FUMDhejHywP3OmiG%2B0Hz%2BkY5MeoQ62ZmvShk6nNV2bzBcimAmZHgiXppbWxIWX9wNaQIKqsbibTKek%2B7PDjb2rxygjPdF0nymwW%2BUiRLqKRhn3Xy7ig1SHeEJ7nn70fFDns6VmiJ6xRoSJZRK4bXFs5eY%2F6dQjjAvZ2BuUWKEaKGl%2BUy2uvIenBVqybvBUiLFRPAm51LQtE%2Fv%2F1hFdWMCOZj9eCXaR6XFckx0twZgj7jp7xVvbR1aD1somzOfKxpSRVy7uBJP5IzlPZ1PwIxmOukavHAKMU95InUIScIyWUJyi1VFiC0L4oYeIHSVJTMpdZU15WoYKgwwl5RqDl07l8KIhR979pZvFl5N6oVsau4UaaQeKjxqHH4PQhx5vfvSHVnGRycWs9k5DhJBPDw1Oz29AZbyudYdq36ep9uHqaZEfkez6u4pAIewBNThPdv%2BtZGzG2GhomztwoMKTo%2BcMGOqUBUsN%2BVm2bJU%2B3bCBdClCWfhM%2F4eILLh4rxd%2FpJ%2Fs61wSU5W8qmtaQgKE8E2Ap%2Bf96T8zdlb46XiBjxYnU2W7abdEwRUCmp3SuMgRrKfWRcR2Ie2F5kva7tmlzLY0TCVEDirFw%2BTf2xXpPEtP9StcUWz7sorhTOW89UTB18Lnj6FhbeeyLRAiH%2B0Im%2B0uxBdtNwMfdM9LCb9VWP3laQouedunvbGCD&X-Amz-Signature=3735851e21725280e7cfdfe277bf1d490b1f129749d39fea01141c2a0a3a1e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
