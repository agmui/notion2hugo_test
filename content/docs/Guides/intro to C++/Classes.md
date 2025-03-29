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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXO7PA5B%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD8FS9H%2FISGYIPomqD0L4ScIz55uGNRmTqJWabt05fckwIgFe1F%2FIWmayfC7Pf%2BBAsEUGy4lq2SNtX2glganL2B1kYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLZx8%2B00OGQhqApKTyrcA4TAbharx35wE6GHCKqM20vmtwgK%2Fd%2Bb9YIHh0dVej7enTSUVKFg6wihbYJDWF2WWCpMwCaIi5azC3eRRMcpzrToxOK%2FngTaDWaOncLbtJ%2B0LDbDDeNaN41AuREsIiCcrJuJ78lFrvRxN86agllTBCHBRK1JBrI0Uxv%2BJPoeSmpqstLODZe1AWExeutaxYAH36Oem4sgkqW3qYFsSOFFfg3cAMyIkZx5Q2YwQQ045h8ARpUcB4H3%2BfejeHdAYO1a4M950b0g9CdvPDubseSJAMtwWB1FCVuTrasYaGJnVajid8wSS6kkvYZZH8%2B8gDF0NEVr1vm3GMTKaZLk2ixdBbWJ9wJWh1KRpzAQzDS2tpETFm5XAe7J%2FxQq5tSkJbM3usizj%2ByTXlDJhhBAzUcSUkxGSitvU0dpAj5ZFySVh8tG3UWIAvaFXMgZ1HFT89r1Os7vuxe5OlEghX5Vfs3vwkHtN2izQQGlmUXhZCYCW5QmDDbtaP%2BTTtCzbBgHsbEYUuNPiNavJs5JM2yUcT1P%2Bw7eEkU136C1nmEjQnnqR1kOxgq18%2B%2F4ChvBxrabNcdOwbXWPDkDm6inp5Iu4f6WINeLpeAkT9G819wJ4RfZd%2FAMQoWIpTphFxncmAM3MPLenL8GOqUBdnMZJKojJwNq807xT9H4zHGeWVHeSjhnYXlX92O5RRPT81tfgl2sN4e8ZkEa7KrQ0VUHj6V%2F5bx%2FgtQhd%2FyCCF%2BRMWUPTHRWbrxtEQiu3DvloZRKJU4bNjLtWyHPSLS1t%2F7zpJdN0cXp9sNJutXouI7k4mJ2a4IIGyX5L%2FVW60FwN9me0p5pHb9HHMlmgmvNc2WTT8w8d3wP7RFRjdntw0K8TtVZ&X-Amz-Signature=14b22840d4f4f5f8089dce3293dad68f23182066741d5b3d6b7bbddb128a006d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
