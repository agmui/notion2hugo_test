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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WIJKPJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCxGR6Xr629keripyEk41fYAnknqdZHBaiB%2FhApscwDYwIgPBHKVG6%2BKsPzH3kUmCJg2%2BeLON%2Bh2wLZ5iw1ptoBc2Aq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBIOIrUicXaxv97AHyrcA0rIhCK4%2BC6oVPdetUV%2BJa4WCNU6XGjNVMI39J3ZddQyD2FvNxTgV%2FzdTL3H0bw61WzrT%2Fi0VLBGCfpqdjV7GJh2umdGLKfd1OZqCh1U84w5CoIju78Idmh4VkNTnt2bVZA%2Bs73Bt4nlw00xXgsQfOsXNpUJNsVs2GW7sSoDcWbFvM2%2FuVrx5s7o0KmXXLhp5rVf8s4tLXtvfB7zoVjrTBWRCoHiQERsb756KA0R8kIhkCnopRxU20WVLVEZk5bOqANxPDhkJe7edBkVfwP8%2FZuHYKr3DGPbxHSHd1H4GSzGEqRBwWEV4%2FC8t4i3vIQ1Vw%2BO3OumVsP3FvNwffdbdg68s1eL5mx04g5ayJwwVEDpY7G3uEK7OHzuDY7RhFIHZ%2BSOOX%2Bxrhs%2FU%2BMf4qAx5IOpo8FLUSfU2%2FR335%2BMjAgKs%2BtPlH10MsacNZuXZtHIMBH0WTBdMiC1UJmehGm%2BEEA1DBd1KrsMrdXkV%2FIDABGJcc4Vk00SQm6gEcIJtS0moEkB2m721a3XFVSZFqlKbsz1DTgVybfMGSm48GcGBSe3%2Fw8LwfMn7rayfuJ300ZwQVx9m2xFxsyZf3it6QwNK3NAT6mcz1aweKxp85F8oYYhvof6HRKVTp0n3ofeMPuIk8EGOqUBIz%2BJhM1hEblq1mn%2BgvPm%2FVvRlM%2FL2lQisyJ%2BNz9GH5zc%2Bj5k3LUdC3Q%2BXF3chq%2FqPSrqGttW%2F59SOZw%2FhvEguC7YIHJ%2FWLdwPoNuWzs7Oa6rJQWL6LaEtOEoLyDYIWGaBRiUPVEwwyOrtZ3gM9rZklJ5DmZPwSKeLjv0vbW5SSlwdNzbNS5hFr5BqBnjMX9pu79qGyV6phdLq2s%2BBOvPbh1S8mge&X-Amz-Signature=5aa28e24e3ebcb6c88162cc670da7356de47e908730327813471416c6d29ae1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
