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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKWXRFV%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDeibKBGGiW%2BUm%2FP%2Bw4ZZbqmWtvgsM4dOvDKKgmq%2BCRDQIhANeZpoJSIr2JSq0v7t8vFyWm2VKZ8uOxbkmCaXajoBL1Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwBCEeInO3023gtSRAq3APO88skbQcpWrLilA6S0vqwE2uQ9Cqu7Kkf8%2BiZ3mymhsISB%2BKctQ5N1ma2d2ejomsP3Y0Cl5JyNaIj2LvP48oLcKcaSJbLEQgB%2BMilrHSZ5qBmIjDxhKQApVjDm0N4UIQwtJl9tDrNq%2FIqWL3XnMXilV12yObXiMy5jk6IBSZfSoqQFWF8FeByxYoaR9EebhuppQ0JEpguoAzw4S%2BKQpgtmcFDv8nvkMpDS%2BMCXh7b%2FuwcLFeEMKhnkQ%2FxzJZq6KXFoOw1lPn%2BZyAP8en0%2FPwWsgZWVc5%2BnSd65UKrskY3WjEbQolPvgb2OgUdH%2Fi6fLGr%2BZmgNoRn8xX65d7uZURUvEmgbhI%2BUlHtZ%2BuwoEFn7beTWzX8EhBVkV1rE5eJBz49kMU5xoR8Mt%2By6K9RWUWYvR%2Fx3Jn5LXFXr7kJ1LS5NG6OC4NkHXpp3wa99Y7gOX6f42mm2EFMeouZt1B79b9WS7uRIYw9yRSjlvZPr2CeTrJL1Q3bLdzNYFBhPweEo7P4bEHs6esFs2u7GlOVvNM32XscXOUGm9SdbXRdsGAgoFQyqElgp03L784dS33YAdNznTbnSWeXb366P%2BE2GQOg3%2BaVRACe8MTYbuQhyvZ3%2FaJBPhZ%2F7Z3wFrWe5TDdhaLDBjqkAYdPUUaY5nLplG%2BejuXfco9p0E3sZjOT0teseoQFg4%2FUSiHT4aXSIQx6R%2FouI7vahLoo%2Frp2%2FTZIzBw6jxlTj6Qs6ORMxS9P7GbXdVZQkAg1S5TiwJEWP6QTOr35SZ3DpMFKpS%2F7gPHXH2GvxrKBmIRshggwplbThevJh2mAjpZDGT1EPjUE1Zl89CmTwV5cg60elfBWAEgiRHM%2BPKOIIuOnEatJ&X-Amz-Signature=ac8d01f38480a29b8e66f224aa0e497c1fb95cbf354a3755269855bf79a2ed72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
