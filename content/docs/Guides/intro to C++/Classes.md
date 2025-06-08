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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PXA5DST%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD%2BJkT535O4Rz3HHgm4S5L5dnm2eqmOxtz%2FWdoGH9s3gIgN145lwaYdhAf1YJe3%2BZyq%2BZpRNzWuWvPbKKlZVcy7ZoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDL8GvQFR2gaWpOHCrcA6Z9qi%2Fvs0IhT5LZ0Dwza8fmjx3oLh90hm%2FccD5hGjoRvSX5QydkA8kX9iDrNFiOu0PBvx8XDcX4YsJDuxQToFILpyQWFSOW6%2BSUD37ClxL5vq8BRp7or7QRV2aHJveQM2FJilfoxkDulWahdLF1IDveQeqLvHzqOYr1heiNKHKkF%2Fq0BxmW71ZodB5dLmcjMylfgtimyGiknMc%2BoDzQ7gq9AW5Vj%2F93h247OS4SoZmvX7dSTw1gWZESAhWSs8kuSDT0GygTpMhxNBr0gtWm19xwpFikl%2FNt0fJ5khmrFm%2BECTUhlBR5aaaET2aD2kkZO4X6zse4Z78a1r3XFV3Ond2U%2BrtYPhWmJYR%2BeAzBz23ey%2Bedt%2FzEs%2FEegXOErSqmy2CQ2gxMRXJ4Lxh%2BW%2FE7Z48q8CyXr8AbUq4tIfrtLP6kKDx8NoMBcPYB5p5WtoGub63PozrLsgysxNTgxJf79kz9UCYwLnOlcaznRQlCrjnvnnTPNRjXWJLtKJnuCSpmeHQENmlFrMafRkaWF4Jr2vEifyakJxAseugb8dzeyg08SvZ6jfLiIG0GbKFmy2G7IeByLDVPrQSV3vU3cxulXdQBBmIFzNUFkeHRGCVNEqUF8Spq82lWrXWt4Dl9MOyck8IGOqUBlaqfhWiMN8wuBE3looruquWOGh6pUbXqMK7%2FoKgrUx%2FtrIh2Z6OUi1HJtR4kg%2BDbIoikbc3deBCPIileuQS3NGHGFpns7vZWl8ho46MH1BLn0wlUjfb4vSnIcX1JEMCrECl3P8QuoDCiqWG90ZOcDKMTF89lRUQb0xKdzxKsg86yVKUSCVRjI7CyuW4fbNHKw%2FrXLd1KTZ8%2BZ20YBMPYFQr72xkc&X-Amz-Signature=d5297278fe2046796ee82f9bb6675ec33ccc338f5ec2f1992d74fad059f76c72&X-Amz-SignedHeaders=host&x-id=GetObject)

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
