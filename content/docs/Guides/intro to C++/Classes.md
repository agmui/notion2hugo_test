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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4KLXA6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrksLkAxvF9d7OtIWHYldlgqgTjj6foU1cbZ2JSjSJsAiEAvGgCoLAdjIeqVmsoM15otHtoX%2FWYf2Dc8VyGofC4ytwq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLu5IRBdiBS%2BSEqKwSrcA7%2BRiJaXyQ0mUBLBgqRWVOOSXAmwNKXV%2BUstGqpuF8tZBZnGIpXSwM01i3aotliBeT85%2FXk7fiI%2BSCZygbqXPv0OwMdL%2BVOmr7PtPEHQ5xRLdtcrb%2FVOJcH0Scr5SdKgKczTxbLrEg%2FNPfp7eL2o%2Fx%2FUttz7pUbPayXHYtWbPalF20Vs1wVoFKPk%2FBHSxLONte9zNLp7xs%2F7laQgz5nJliMkabwj8ftZj18fSoXzbE5sa0Rrpz7Cj%2BQBJ062izpbmZ3qLMCNPm8t%2BI7WAFPbceR0tBaCe8ptN5c9J54eS%2BCd5h0%2FDvBZq28CDh2T2FrQmmzffNwBKYWwVHjIqyMdcaTdHbdoQOkANI1YvHe%2Btq1F3SUW7QNnmY4SWXzDDe7Za0L4ELQ6bJ2qeNvuVgWoouWS%2BiOUEOP4aLY2ngdB%2BAz6K1JjQFuyGjSl8tENsRSPHzDEF3O3kSgmMb2zfF40Fx1mJjWiqcARWZidVPgKXG0OicthcjzFFvDU%2BLddJn%2Bp2zvt5Pyp1cmQTq1FwWtBqefRF%2BU07p%2FzCWGK4BfOQS6r1eZUQI8%2FiK7q3l8UCLggTrBsQ1vVwujbyCjQdluirGYHmDEEZgdgElZL7K7rib60uzQ%2FtmCJDpnayF%2BlMPGx9MAGOqUBLmDJ4YGy7GVEp%2B6Nh4pFlQLsKiahvc3DWGjuhC0ppZNYxAv%2FSo0CuTqxjAuJ5ca4E8D2CsQwzhlpCDfibjR2din9XLgrnEQocpx0Vi%2F6zWvwpM7s3uyG2gOjOMJ4VtkJueYXlkQwBcpJtxXXi8vBCjFAVDtlw%2FoXdpszY%2FWnrdJ%2BDkTzRFSvg65%2BDC3%2FDgky%2BxL27moXa9TXkmUmTnmPnOe%2F5PRS&X-Amz-Signature=7c3940d66124264cc8bfad6082650d31c4a4c756f96dbc17f64949dec35e46a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
