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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXPPUZ7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFqsmOi35xBDwqa5g06OOZaqxuo3A9ch6Em1rMof%2Fz2jAiBVwT8Y6zfSScrFxD2AQdHzxHofeLkiwcT7BtgSpqLXpyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMcCLJxzx%2Bwkts0GSKKtwDraQO1TFjLlPVvd6ZN76eMY9FJ7vaeBFj6Rv4gkwhqkutQ36Mc%2BKDM3%2F7GPuFrSqOlrLw6FYTHbIrle%2Fx9iQSca03JGNuUvABPl6vRy9EaOZJfkwng%2FtxuPBinqEboYegFb%2BhG33IxNY9KEisqolQSfsA9xCAZpAuMUcNnq4cMlPLQIrcivo%2FQhrTJjCz%2BVzvgGt2HrahfPcY5nAxSiK%2Fljwm%2BSlGX4Vo31Aw8azcFhgS8RXeAylAEZyxqr7ZLtedqpRoeMrjFMkGeGre52vmRMKns942Q5yC5fJTR5eOEm8KxtgaEmIiisO%2B4mmLDUvCJbuImXas6JiZD45UY6uAbhCV8lAps43dl71Qo3KIdarcLJ2HAhzApPLE6T2%2FMJixgJRL6YxIzshcZkdsbHqfpA1irHbeGjKRVf%2BGyX8Tea6ZfgptyZT%2FIdzoCksTzuHRA2eolJ0TLFmvhz1HvvqwYddVR8JEfEDuOnNW64%2BMD85j0TumZSftsfAqh6KwR0RZo6xgA3dEuRfhDDIulY3yeCspjPKQpAqDcnTWjbzq%2Bqb5ZlIGxAnUv2keLbL0GSDPA1v0WioHTCNz0ZdjcLi1c84t6QNASQVzFA9tXg2n1EEQ%2Bd89%2BvzGOMjU0TkwgK31vQY6pgFmsy2O5d1UnSP77mUbWgUeN8l4DFHKBl94M0bkDiTC6Cz%2FojtoLrIK%2Fc5Od%2FCzMq39vm4rOtMZ5qA7fQbw4zrcb0G%2FnT9TivDwDgue%2FToruxyaNocipEEVMKM3Af49Bv74WjfYJ0E7EaIF6H6wqtrXNumtI%2BuId0YenFS1Ahoe0uYunNhjiMJq2CX5j3xyeqMqmwAbVJPl%2FKnk2CEzeQRsUrgF%2F5Zl&X-Amz-Signature=3cd50e99eba3a759dd040533d72f586695481ca36cf833bbf16485c47a229891&X-Amz-SignedHeaders=host&x-id=GetObject)

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
