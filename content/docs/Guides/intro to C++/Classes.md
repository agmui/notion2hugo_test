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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LONYPFX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHZwPR9SDCh%2B16RKnDz5ApKAvaMFm2iwML9Qa6lR%2BXwIgdylySqjiSg1YStsWv6TGS19U5uMJVbZ5e3V737hM3IEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLR%2BZYt13Cc2rpBJ7yrcAw%2FeTQVfdjkBYAsHs51RdVMGAz8HwCnnnU%2BdMf2GPnTDgm%2BDOPG26JRMFH1AKJAA0nk%2FAgFXURNsZsEys%2FhyGdHjpDk3kgxnczEwO1YDl%2FRD4orb%2FgR0VomaaQxGaIHyszI1zKZaLhemkbc13F20E7kSsCuOGPbymPuy74HCYrbY%2FSAUnY4CyDpJi2h8CgXSYgtp2fUpZ5wr1oSxVyIjnfiKqtm75DnAnvgWg%2BD7BfSapaw7A2qn67fBusrTJ%2BEtS2QfZiDn5BdYvgbvyM%2Bty7qI%2B3mgXBkwMSKLgssw2L0IhM%2FjfcupQlw6ZuqwTRT8CjFhYGQ8uw0%2BwvMX3DMc%2BRsuRR40wAMZ1Xjb0pCPKs3x8O%2FnJS%2Bi4TsJ87M0Z3yrBst9Cc5D8lxKthFNa2k6c1kucFZLn6xjXzWdVKs%2FDfzs92OwoxPgbvDjtjbt%2FaXkGt2vppP%2BgiAPbppbAOs1Y2ptL3X7jk1tPu5%2B9Na91psRK%2F7czHfByP0iBmRhrSjxGln3VrTwODjwEkHislhwj%2FPRm3WBoopYbHcQgJ%2B0%2BERGffMGWDo3KjCHXTxOcdVdbE60qoe%2BhPJ6aEtugiQp2NGWyVUbDga0npDyWans8qapc3DHd7WsrDq7yTp9MLDNqb0GOqUBPF92M5s%2BnYb6%2Fp5r1yifUjdhw%2FruZORkevltQ6%2BLZpMJcOutxTOJ3o1w69FuOMCOvt%2F2aXoaSFp2pu%2BXjlTure1bSUl1QrNb62XIuxfdEqMmJ0oIp25ikDgV3%2F42ZHoC9Nx26zbSn3kdhwmAL4mmFqawj8ll1jDFy0olZ7p6M23%2FlAk0T8tw9D5bg%2FKeMqB2vbPuy6WsI2nyOcHpbxVEsFf6C%2F4W&X-Amz-Signature=0f0348867b0a1f0fcf86a6fa65156680dbec02b0d56c93253766ab2e27846e70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
