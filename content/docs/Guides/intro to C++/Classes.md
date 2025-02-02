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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFN3CBXE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1AtC0ziOkGUSv4PawdGV8q6SOgABqP4Q%2Fwbx%2BFeC4GgIgXmZlr9LiStkpC5kGw6TgCmy9YajzywSPwmQQw8jOeGMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC70K0J1d51ZpmoZDyrcAwbY%2FWxtVFmdISbUgpgaAtRgAgCaN5f9jh9PpsPPFDYKMrjpNVhotP4OPMa5YD8Plz0suXFZLnWkq1h5DYMT%2BFSQkUev2NJqD1GClokiIZyDLD2%2FE75otsGvCOB8jompX3LPEA5xRWVlPsCa2s0NWCxJ1QNH5g1zGNRNHLfEb%2BUf%2BwzBBM%2B9hzzy3hDUR5rVKy3hWfZReuhauWancORwzZkRCQKxp4ctlePPpRxNbH0%2FdSS0ScAR1A%2FajOOH34MymGoE5jE4wDmXGhm%2BtHfP%2B97vaV4PprTLXej6zH%2FqJCBVyeZKWb0WoXoIXuFtrhRTD%2B4w51NTcu9ZEqROvHEh9HjcFPtnidgOVd%2FjpF57dqnaZuCGFZyRZscriOwhNV1mLQbKqY9pALtcu1lI%2FcjYs3IQ0zarNhixQm1yW5n9dnWaPvRng2Pho7VBy%2FWPsQJmpkr5CLaE7eEDA6ZS%2FAKk%2BtjUBXiWPUJrqDiya9aYtAwPYr%2FRxxNvUCcnqsd7Kcu11%2FIK%2F1jkOlpV0tCtGqmIvZs0OwUN%2Fpeo%2FgosFY%2Bf7jh%2FgWKnpQd2FgFA2rfLF1zRcWhrodU8dUGxXeWEe3QGE%2Bc%2FzYNEsaa7EcWzwB%2FohvDkmAxtd1izmsDhh%2F%2FfMOqd%2FLwGOqUB0FVJji2ERJvHz0n7n1fM%2BKI5iNrM4Y0Cf2w9VDOi%2BBYovY01LNih2SYScikQxIziaKWZayZ2jE4k1NoGKXXQIGQgEH%2FY%2BNjZw4%2BWn45zLOORRypzB2J5EpBECiPudmz6B0%2BbLoGvX%2B4pizVo4UVLqpfA4SiJ880cKzyJxx8RQALgT0wp%2FWWoShqNt7Dhu7ZAi0rOgKDIIYKdo1A5zeiTm%2FRLc1In&X-Amz-Signature=c010da512705735a390fe18bd6d72ab7251a8d19b9fb76760d9e95a9b16fbe3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
