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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZD3Z27%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW6s5R4NRkrFaO6YRis1nO41bPZ%2BH9e3Zia%2FwwnDtTRAiEA%2BrTyu3EBGlOLxEtA661G%2FuC2cZpAPZfb5eaOqgYx5e8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLNha%2F2XNzYXV%2FhJkCrcA5GNvCbSZ7c6%2BVX6GmKh1oAVcSkLFdOr5D391TVrO90aeXoZFxKs39D1yAMCuFK2eWxSqkQUw3r%2BJXa0ToUT%2BEz0zmsXNTHAsaiJrqxkqa%2FTOwHjAbXVyBBTMEZ3gX824kcgF%2FOKm%2B19X4HVR6JMiXpCQEnIGtmFkhqn4xaux8tak71eDVEX6uyVWb4bQqHR6%2Fd0Z2NTcxj9deYooWF2loEYpy%2BC%2F7iikWsMCrtpoFsr2sCvl6W9CZgm2sD7yWuRnOw4lBlQrlPsG%2FRD3HAtMJuIUoJjs8VPKzWcCIZ3%2BHEdq9PYQb%2BcLEOe23FA2Vl%2Btg5jtPE1Sxw2GUGvQWQ15InwwfeI2LntsQ07UfTAllaGv1yu07lAIW1PVIeA%2FIQCBAbINjqfj9YzGyYmpWYNeYrrPhmqQGJu3Fa4%2BX8gZaAOKKa09z7GjiCDUYgM5QlaTHgModOsOR24JtasDF3JBhsmbxUjdl4emqt5%2BDEGqWa32u%2FDeL66Dy%2BEuGe%2BIbKxtCVMWI7%2FFgg8fVpCOsKPg6Y%2FTNs9rA39vl%2BGxEra6ZERS8KCsNCG%2FJTEVbTuL5esonqqK2Gb9Yu1Au64YaTWYft8eUVFI6As23T5nqzxDCY%2B0IqcmtPyNq1X%2BBCRMJeRiMAGOqUBodojlut2c5D6zLJySdE13Df0IzBxAZ3GcDTUUrR5DsZKlFK4ScaWyD1a%2BY4PT5xvA6D2TQuTP1vT9ppOi6SFkzPDnwO062zj%2BPhHL2qH3RHNqtf2uH%2FGZ5jzo4B0SUCKb1QKouRzp%2BQAiYqxPGf983CVOhsxEWdkJAhsI9NnGqdLU0%2BD08gniOlYCIk1LhTEMtmjmDVzb4xGKIUnY4C2wKCuJsU7&X-Amz-Signature=1edc6f134ac065ce0efe198003796bfe3febbd1f0ab1fae9a96b2c1fca1d471f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
