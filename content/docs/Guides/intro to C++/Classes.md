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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAUVEWT%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB%2B7jnVseJETyCD6xtucXTyHozJtU%2BsK9TXuxtMjSt1wAiEAmddSHz%2BkwbAiktvnY7bL7vC2wDVQpv%2FVgwGDpGiPDskqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiPsoEo12nmJuzfgyrcA61OGWL7xTkiAAviOe3JjIbUXMB9IaTz0wWhneZLKrv0SoofwAjtZzmc0qG40XOPDBk3XAAXknZE2dw6RdeyCywYdLbIFpZOV%2BIzr%2FzDPDQwN%2BfQ0l2FoJtv38A2bhuFOr5BMvZZhMyjzc3kmnJLp1xQzdBmLjjqmofC3tUtVSsU4DjeCvfJj5tUzt%2BJf4OGjUQgSB3U3GXfmtuMIq9xi7zOgtsWmuxew4wpXP9xW4H5AjVxHyFxGi6MCzPmKdQz0uqKJqXo7g2mbyYWjYibWXMfZ1xhMEjVAyj30SWoPhjMKgzfh7XvG4zw72KCJBSqFccn2JQpxQ5rfGSLn7P9R%2BO9eDpy5WIjSe8fhQnXtNFH5Uo7me5RYV3t3YffDefSTs6CDekIdsU%2BPZciM5ja9rvGGcwpOWZApXA%2BdCwFnmb%2Bl2G9uFWyhRmA%2BVpjqvlv47lFBSpzi0Xi3gqdsQJSAsCZ%2FuQFGpN2OYA7heuWWEVEqbas8r8RHG3iQw7En%2FeT7hw1%2BEx6rBuOMI1vqslWEfbsBfLSGgvaFjOhJLVhUgsOnq5VXDf%2BmHdKcqd%2FOS6BWD%2Flhzfh%2BYqcDszBh2%2BJOp8w99sQAnbYwgFnVpv4PeRJJr9DiUQ2x%2FNGE00GMPLaw74GOqUBgGu3L3toMc6bzXB63SQ6BItBUQMyopWoTiBn93MClc8nFhkeujs26F%2BpG7rRLus%2B3moW6GMxrWEgyF99FvaDW7AsuGhAAGqjoT98t%2BP%2BXp%2BlDF9pgahwR5HX1xYQf%2FavW9bNqn88u0QfHzsRs242pclXYb%2BpKOSZ%2FzOlJvpMqtEqad5Cn%2B11XyhrWqvny7l5e26A4%2FStmss%2FIrWJ8a5oY2vvkp8o&X-Amz-Signature=027102456944ba8024068f0f8212228ca2c620654991b6d3402d5f0aa16d8431&X-Amz-SignedHeaders=host&x-id=GetObject)

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
