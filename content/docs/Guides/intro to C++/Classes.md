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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3ZPFJN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIA9LzpuS0L1j7wrdI1khhS8qZDct9uvRXE7o%2FZPBEMz5AiEA8MF9h492f7lP%2BYTkZ%2BTxvPimg0%2F%2FAFY0wnU8GdSdvBUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDEG1MW2lNP3d9wUawyrcAw0wIDpbd1vudMDXv3OQFoDJbHplHQZvVmyxuBnRoTN6BoY12j01fruhu8RIfx3ZHhVY9NwyEavXahkkY97%2Bo1AmX2gDZcg4yk62T2vTr1F%2F7XwXjF0ajKtCpKVkJub8GF2uKEj%2BtZxAGeR%2BinAXIWJv79ef882dPmf%2BasLO9MmkGHTHBkWWWsnvBeK0pp3WLWhpGnMocR1KlHZP%2F51lyLETwhKmToZalAghwN2ApXmNK6u93J5ZPJmcLMsqNmjbD2ip7OQHG3VVJ%2FQFWjQ4%2BrGrZDiL381b2uLKO3l2fzOXBbOl%2FlqfbqEyq4wSvol2JaHaS%2FR4dzErKAwSRiLct%2BKAIZ9QhWPkqDsN9bcRtqKmuZWCh8qQGcAa2tsDcj7UDrQSXXvHMnON9ApMD3TBpnOFYw2mpIfwP2b%2FJPHzLUwtPeISxn7%2BjkggP7L3zrBzFYjU2d3vJCNL19u3NCogVvZqOopcxX6Vj1DU3m9VPQ2hhpfYneESvi%2FN25MaWZpf%2FdNK5eXo330LSLe0C3e5pff1tG2jG0ohDAb88aoLee52Zw7Zt8nA3wA7xYVnBD2j2Rv2aNGBK6oPjCMKbl2nHgdZ9cxAW7c%2BoY5iqLrKilgEVZZ2frjDnMxcNKqYMOXLocMGOqUB1wOtDBylH4K7S7VFr15XNfSLzNGWr2SW27FSbEQ15Q5m8KZ5CbOA80oGZQJmdbjzBhDbV%2Fdk4kvamV6hBaRClnCA3eDsEvporQdZeynZO5bD07M5zIcba8SXoN30vfMPCc3sC46fK%2BRX6ei9tIMD31qLz6DwkaV%2BsP8wilNs8LZ%2BPNDXYjM3PP2EZXdAkn8RnR2TI45ZAp2nIKLlp%2Fyff8VrnQZD&X-Amz-Signature=bc884102b754d6cfea4637451321c61eb39b23b295bfe8cd6fc3f5c94b1bad2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
