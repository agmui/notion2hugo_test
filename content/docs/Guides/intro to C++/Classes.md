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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XN6EX34%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFZ0gkdKmRDrUY6BfyPWExAx%2B6eWwQsycfB%2Boc7wluhAiAIELuaD8MP1zpdV%2BBeDUVUedVOU2NNwsQwQ81nStGt1CqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLsChtnBA5XKKf1iCKtwDtJ0Vu7E9o9nz%2Bp%2BOgdclOaiR7eKQgDBAGL%2BjqhtUcsWq0A4SvftxMttF9l6kEDa5k33o1n7wEPeQf4NJzm%2FeUycTiTuRNHGnqnGGjrvMc5Kb6%2FRDfKW7FPm4%2B8LfMMvTmHqmhLIXiuJYyDrtJqrVaPoWlCgQaNOIV6DOrMuXc958w6U5IzqDM9ebMCe6bqaYytxW%2BOkwjJeT0XLXAUQK4JzaNuBDBQHNaPDGnehsQi5DQ5L2%2BeW0O1hZRZvFAniG235g32MnJbsRQZCYlYT%2FXFU%2F8vHn8D%2BXr7pfhauaOsJs4RQDb5QAdz5BJAIKUNOQN5XdtFwKFnzvxCPLfj57BGmGaxtYp7ZDuDWxH7WBKbr1QJMtzpcgU8zAciEgiGwPpe76GpNWPIqrkVPc2vb63F9y38hqBLyGaTMTD0uPHizwRvsDqFI2KI47l2Lp49AcLZxRxQF74FWbl2LYzN02X39xsVzlh7nYiWns3tVpN7vF7xAHi7ZR06fR4J15xEDNKu4M6ruDwwCZkkGT10Lp0DpAYfYX1jGB1MU37qI1%2BV8RumJOEALZlMp72qxv2P75V9BVqILpcSZCpM%2BGtA5HleUuJM4wBZNtJ8rtmlGkTgjBDrgYFDD%2BJ2TjWBEw6PiYvgY6pgGKqEBBBvlKEal0saZXZ8FUgL7ZGpJgzbwr%2FcVW%2FS6ayso4nzC3hVmp02pzBOmytrzBVmqwajjeK7D6KD07pa%2F4jAatwkF%2FV2UmZ5VHlNO0TatyKQGBjA2VopmTVxYzYY290SJpIIbd2QkVsnPbhAJi3DewB1tUvz0YNP9RbuiW1QyvByhcS%2F3tGyNyoaKiDpxxftxfgWw4Y%2FCxKQwTOpqwD9o4%2FqQV&X-Amz-Signature=ceb89790a62cde1e158a0bd62f74868a2a6e123bd0cfb51b48be62740f39496c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
