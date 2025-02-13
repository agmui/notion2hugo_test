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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652R2JXYM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3V8QsTOwlRxaNUOAEjBC%2BHcDQ6TxVlOKHXITWFEUfNAIgCSnJZPlxEt3dgnR347SLSmTr4BVaB1CKjkvtZhN2BjQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEFrDWmGagjdEDkowyrcA409HZx2DMDnE9963Z%2FgC0NSSBHS4VABWayHercnkQtiZDNd0Lrk%2BlGXU1dN94OIW5vY7czYssTMCAov3PMoBn0JJTIShG2QPaQ7qvP1tqQibCGWHs1KTO6TvPbteOVTA3r3U327QJlBM%2F53EmLzHKOKr%2BVIbrsMDWjhHcS%2BAPgn7%2Fv2vOfW1lY6Gqzu2PapykAEaHdg7ceoHLwIvRmp1yn1J8%2FqNVPh7Kl%2FOvWSjHVdk9PkcvhW3i%2F2vp59WXZp22d6O2rzi14sWuZHX3s6roumHeadeOHeHG76e11%2BuRfdOtdUIGDhSAYelvFbXEB41d9Sgc67wQ8HvKgSM8oUerhVz5DlVu2x8Aoe2abNmOSJYOemFzrKE9NfEZok8PC6fKR58MLjOvmLlTEiPk7qC7q2jmWi8KdSLaIwfSVCvyOMIGkXynwll%2BrDdabr8d8JGxl6ivIJIxva%2BMlk4SmgMYjr%2BQWyX3gryQpwa6Rn1OZ0aBDDK%2FoO6CUM4wiGR8Mxbz7%2BePN5KTAGBvDCPZiEq7lMqtDYg9hEgiL2FTzwIBWjfjrYctoK%2F9Ke8xuY2y2z%2Brn61IFTrq9p12c3PotWHfnyTV1FDRBCCbgpzO0swBL710mdZlX7QnHyh3xXMN3fuL0GOqUBWgSK0YjeWWkdmzC755QocPOvS40NBl%2FLpZpEO79%2FuDMAGfiZOVe2etM4sh5lGyAy1%2Br8dijr50fXCd7XmX8DhSUL9DZ91NWq6raBBEyuVu1Ez0esKSexMFuwBuzBpxeCNf1WhIgK0Jn8hx0UuW3iIFRiRIc48sBrMLzad7peJlGESnzmXh3b8xAGg309p7BRO9eNrD6xcapv1cfnovhFlF4S3bgd&X-Amz-Signature=32d840d7aba33e993a3445b5c7c42062ac2a51195cef3844caee2b86b0b03e49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
