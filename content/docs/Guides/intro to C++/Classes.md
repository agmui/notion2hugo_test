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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA6CVFCV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRUvZBa%2BlbCN5JgVcIgob7eeJfzwYgf%2FFrFyinyHS1aAiBv4dIHWo%2F5cA82MOUIuyqaNLt%2BcLRMg65Q%2BfX%2BZhACFiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuOmJMl%2ByXuMpjqZrKtwD%2BDfrFpYbPl2WtXYUDu5FijvBAYhd0wBIgVa26EPEyP9YcQtY5sqwDFFxHQBIGSmEkJnwoRIjhS26mRLhg6dETarl3b3wqSxjSqBtwNE4jaXWE8%2BbFwhD%2BuT77B%2FsUvFPOI2VYKOCeRbffrX2T06zS7%2FuhFPGNx%2Fvg2wjeq4xGOIUGgP3uCeG957ij5SiE8Ic4eScL6cNsKlXSI%2FYeJHDxSr4TasDERUnVu8Tp1w5%2B2e7Wb0mpF8R1%2BAYw10i%2FamQ%2FJcGD5cuOtcWhIXhdSDW%2BbrTbmK6wl%2BYO7KbNOf%2BYdQ%2FXqYBIVNUMgeUOVNHvAx5FJ8hbrgd6QNnR5iGPOPdpwSZcRh6bffHBwZ82S3vHQG0x1I%2FSJVp957Wxm2CQGR1Kvna7hXf8lx7RtSn8R3A4iu1y7Eka74yB1Lq6KsqM2NCtvgk2tq4XKCGLrJOCdEnStXeESxFTlcgy2Tz4iKqP1Z364Kuf%2Fy4tyg9DsgI7WaSDUGP9Qpk2SWQZAChBVS5g5fRoE%2Fwl9J3solJ9KZ1oZNZcipjCd2qnkIDv7CQ%2BZVZLtLM73lJK%2FLLW%2BiWj%2FJOfuHux5z%2FpkuCX5JIW18XRJdbF%2FbfJqQTkWtZ%2FVcuQY4fRydQFvSuOU1yHDYw2969vwY6pgGnDR98c2BzjCZwDXM6%2BYlkLZs1oOke2TgKqkzu3MLtPghbTihC5t%2BS%2FMyiC3hBz9sgvgyU4wCol1Od8WETrZdMsnVmyT3VHHnLK4bmbcT6ugv3GZB%2B7adbODELat6192J%2F8bjWreU3JQ0SSyrBP0UYh%2FPfKoCeagIkVAcSH8Bx3jgqq4fizDU0%2F4fHmdaxLtbX2NCP1ySeIPUZrVpi6wmHDcWjFtId&X-Amz-Signature=2284266392acf74423212a9d90c3a2eb8ac865c3c602f5339a2dfd099cf60745&X-Amz-SignedHeaders=host&x-id=GetObject)

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
