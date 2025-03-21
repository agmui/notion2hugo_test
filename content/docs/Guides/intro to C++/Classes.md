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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVLZCZ4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDqL49zoyxAjb8AIQX%2F%2Fn3nf%2BcGsWo5s6txtxp4sdFDMAIge0n7VYhyCBqAh2orfyA1jldBcY10GsZn9hqElA4EaOsqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGdARtp%2FrrdOmXn3ircAzlUQEqRGiacD0vQfEZhrz90i4kheibEN7MTL9jYdhp3movEO%2FBlX9U%2FFNjN9Q2y3QMDJdJiiHBTYBuzmFzL7uIn8YwWlQke7kHTx61nUSzOqxgYl8M2i3DtI6uC%2FgI9NhhU7Vb4L%2F0ijqQeZmF%2FhllB5SJcK8pGorxirMqQT4x1Fb0UOs11lRnrBfLpzp0q0Xs4zCaqXFXHu6tqnBCV1WOyyzcLO3sw4916Nwvk%2F6BIRCcWB%2BdMBeJdumXwvLA4peBlqvNJ8H5mA3UQvqceBQy1%2Fvi8BD1SrBwT1wkRjDmp7GH6oGGlb2gZiVrJiiwp6dH%2BN1QpRASZ2rTqJ9v2wcYq%2Fgr0Dh1DeTSvWUeCxY45%2F1uqHtI%2FNKqZUDaPepYnRXILuwrwV%2FU8lOxTppNSqDWlHkw6syqxXDgG2jdG7xANTkJhL0XhLRVEdNk%2FHqlqFNu6%2BugxTbU7lTNWe5PtodmejNeDWGjxhRdp96AgBKXLWNBzjeunu%2FUPm5GO1uPjwurzxb%2BVPN6asQ%2F0g3sn0IteEdqKeSOZWClu0K%2BrPOvnN%2BuaZNGnnMkyrvSHvWfqL4c2uGe3%2F7S7WeKY6e8URRmuWwIL9x7r%2FWp%2FExb%2FJZFgfSWsH6SOhA4uSnU7MJ669b4GOqUBs63Q5sehp7U9cPxkSwbEY6PtRxvqhpt9G5I3bUWHdUlRbY%2B5SHZzhgDuGYLhsLbfhavwSKI8GgSuxHzSdAyb3k14GQ5YFoLFIJLXHjvk6XC7C3e5pn1y86Dhy1xzjY6s%2B2BVv9keJ45tqb92ALQ8EVTpuF4r44WPmYiOFndRrdqMNeDvaoReLKVjf7IzK55C1EB%2BU6%2B28gLKiJilgBaNd%2BFxhF32&X-Amz-Signature=f743ba8a6595a991013975a6bee96a36f973c17794e629e9a602ceca3a7fa573&X-Amz-SignedHeaders=host&x-id=GetObject)

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
