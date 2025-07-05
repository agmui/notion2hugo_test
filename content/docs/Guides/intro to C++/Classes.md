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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHOAHQ3A%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBELpKze9Iif8H0%2FCDqlFcJ9OQZP39T6FfYpPfpuU0e4AiEA9OeXV6s%2BMXTB1CztDj%2FrtYUBQ%2BLSG4t0qxAHnTZ2KBMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPCCOW4D0zFIRuNQBCrcAwLBEv5bD5L0awTPNWb4fmzww%2FE2ysNivadWKu9O3d6YC86a2eRzWNMTjv2w%2BO%2BoFbRbYFayt4XYtSpMFcaM6LuaFLaTcHelzeQWGBFBOgbfbEsXCs64XIPAkcmDqztqgA%2F9%2FaxDjo7dnMSvZmWtT0d%2FL3yh7aSKLAC1%2BiPNSWGlikZ967squoBHJBmYiC3GUFQQ5ewD2h25PPnaq3MH8F7QuPMh3JJ5d4XQ06lEqMICA8OIfnrUllapmAjmEemzUbwNL47V3G1j2yMXISFFs6RQqDkdTLdxE4ccJKwvkgITy4bimKG8kf9Yj0Z8RPHOX7lXnfxqIREnZA5xi9w3Qfu4neNwhLMoO6nbaUJeQPJhGN44Ya7VFhxYfvfhWYGnMAi1T%2FOCZ7UO6qMszhQ%2F4%2B%2BxrS6hsAGDrUOuzewySlraXKAzBaLTyL05937Pw8Lsd19W%2BUOE5lw3q4QIDtjrORdc%2BS7od8p1NAURVq6CHwIIJahU9wV26Ceb9maVGWXpcnVMdSZuS1E%2F%2Fz35pO%2BfV67v3T2FdXqoaZoWuy%2ByoYj%2B7dcGnsyW%2B6%2BR3Ho9gaYkiGZSO2KObauY%2BZmeKaySgifsGIxZkh682YECGME5f5Uj7XybkyeiV8cwsTdYMLzLpMMGOqUBdjdvRyxpCC7bXab20TpgAVG2NfH1BFmlpE1QvV5EbMwRvvCIYijk6P6xVrcPAB9gjKTy9uYV5W89bpvllvPi3HO2jFRLv4ld0l1sVwWus6rtw8KSx%2BLNuJr9SMvZXyUDzMkbDYEAN6D1DLyp50WmV%2FW83njPKM%2BFUou2zqgp9y72pvG%2FhE88jI93n3E1nX5w5nLUZppUNlyZR3NlP35pAtTfz%2Fz0&X-Amz-Signature=d62329e24ef624c36861176e1c942c0a0bbe0086e1d3ee00cdbeb8fb6e29de91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
