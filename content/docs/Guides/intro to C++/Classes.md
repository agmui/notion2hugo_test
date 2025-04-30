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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWSJE4U%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCID7pm0OVKYydGjLtvibJO5rCwj5iLXBwbk400YpmBgGxAiEA0a08VutDdgACi7qZ4tz2hU91wuvvcdU35FXqI55MQnAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCm835omuJ3eUSI%2FyrcAxCk3bb8JOMMjE0jistMyDgnor3eGy50sg%2B9n%2FHKW%2B3mA0mooCb1gjq%2FrJf5ftAfnWjx%2Bkkula4N0A8zSibSSCd%2Bw8Uy9SejPZ%2B76nVLYFVtOveXB0EXZkai%2Fxm9Ijx%2FkQeBwu2gXik7e0Lisqrj2EiaYRpl6cVaiija1D4LvlY1JGZ3NYqIoD4J5IOOXr4oc%2F8Z8gLEmka%2F5VYtyTWM1HAKLrCJyZCqjdBSEZ%2BcmgH%2B5Z8f9gb03Zv3z1SvajD2Df4N7g2IOLnG2z1bfbbQkYWhr8Q5PXJkQ8Qa0hElgQ1DIsAhwPbDTMaeuLNVnUUekF367TIDmLIu40AwTsaxz6iDZg%2FPGOodmJZaat1OwX%2B5U%2B9E3gBf%2B4z%2BtM2soPIJXcuYBXslI4ffpXED%2F%2BL7KaXFOHG9gHlWYi5TeHSlMSNhKJ%2By4X0QFZnDa6yYgQqYTxsPf2DG0EVXasy5FsC8cNKDohw1c2kcz0bOdUNqNLe7A7qAZFTABAsrEdsLoNTHgsEVWbLRaQx4fgkXPXbcmrZMvq5%2BN4kavuRa%2FUC%2BvZTyT044mYGKJWQ%2FMka9BVLFftDXQ%2F2YbjpLZijzznAigxITNsBXaWE7IXLzYBj%2F2sPAV1vLDKJpMiE2wfvrMOTEyMAGOqUB%2B1pd%2BHdw9iZj8v1YSIdZYNsoNBU5DvaiEVUBzDxW3ESIeXcHpmvEBIp6Th80kbm7lb9vES2rcTIbbYBv5Br9f1Vk0CGE7HFJLSiuxaiepa6ObP5%2F2DaJzW13SuFD6N7Bved6NSoHdUuCRBDvON5rTVmKWI3CgKT9U0paPpARvfRmhsmsbkX8n%2FiW%2FsJQoFZ%2B%2BBa8Yq0uzFJh84ox95yD0CEkQaV5&X-Amz-Signature=1739407f467185b9f9c8077ca2f26b7d6231f73782b9c4799c83ece97a8a3581&X-Amz-SignedHeaders=host&x-id=GetObject)

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
