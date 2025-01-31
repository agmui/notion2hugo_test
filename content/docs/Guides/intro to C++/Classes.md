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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RK7EUN3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4FqXmN6t5bPpjBbD6Kq53diP0aDFSMD%2BTc9E0KZNdywIhAOrr0r10whIqhKu3ug4Ui9hy%2BMGk96AE0mG90Q%2BRyO7vKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqvsKEBDb9sbo2%2Bzgq3APGMv12D9yQddv4s0PNcDWoRsyQnIvGsfXS%2BYHAB9G3TZ%2FUxAHzOELXTN6tgy4JGYJOl0v6GyS2twI5j9yUGo79l1vaK1II29Br8MygHtHooZIVpkmenFfocfkAhkmPVu5y%2Fg8mEAfQL4qyvfMrs2Ih26XNuBMDTZ5fuvkiTb4%2Bx7ctx5eBZc0ZN2iCwkG0RU421q1TUNKTpIsJKlvtwWIPklZWh87OHxJ5p2WCh91mzAaJH8fEXSFm%2FEU9yokrT2raws6ZJoQs8yAM3upylzu7cmmzRKW3i4d5ygwj%2Fgd07iApiuHXdF2SQK6ttdlORnGvuXfx3hNgWdePesvidssmLfbfcDrqaKMopLBoxgH6vhYeHkJ92dzge%2FAvgkMSI75NnKqSUW0qaPuKe9SbDa%2BJC%2BQNtOSzu72ZYIvJsVqrOejFnmabvkgtRHLxmuUEzk9lszJHhj2KxFPkwpJ2jzSgHLvriPS5sc7WrKbBlXlRiXXpaRdc3rFUbpiUrh8Obj3iUiZxPKQl6kBLRjQyfNzMyicdWuVaEbgduSBVtdBNmtrh5k4SXt8APzWGSI8vKPrZyRkOyw6zV9PAJ3XPbemzV4sN1L3wRcW2iSIC9IDKt321pTAp5F6%2Fpi0lVzDapfS8BjqkAY1rc8Qeeg0oHUREpaPbXyMfN02iznVwhZdid9E%2B1AsaVx%2FrhTYsLDaFrRqX4gQk0R757ShGsKP8Fm%2BkNC09JpXB9MVGMOx1cNN13k2PDaadRcxkvrbKKjGvJP1JdU%2BScNakNhWR2xLwGL8omE5o%2FMjw7CbvzNwzjQnvp%2BmNbnvMQRFGSNQyUs94%2Fz8YQqrjHxKeKJAGUBmYSoqcnm6ULW1%2FxdUg&X-Amz-Signature=2c08da6af2d3390d37e7de85707f2c9ba0dfc1d8d45ecf33f1f129159ff15a07&X-Amz-SignedHeaders=host&x-id=GetObject)

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
