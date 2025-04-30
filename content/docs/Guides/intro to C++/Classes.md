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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZKVGUNE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBIIdT1N8fABCcF%2FOBAbQx6nkAEpqOmMUfdUwOQ1uYsHAiB4etYCxY1%2BJ84aHqbSVpF0Jf62PveYe%2B3jVWkMyJFxsiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUmkEY%2BybeyskKZ9xKtwD5Rcxu2og8%2BjlQ%2BdOa73vSB7cLxSYgureruVHR1A2iIaYdz6DiuqMa9ECC15HqP3M%2FTaO1L0k8DO%2BMEUDfGAIdr81Fox3t0lp6yGDyjTDfa1k6WXi21hTineKRFSV7JPXs9Fh%2FUAL1NFpjx7rFQThRftbHK8dHtVTopyYCJuKjtmJjcAmnx3bqD4%2Bpy1aHfsLk%2Bv0XAodEl38UNGQZvoDSt4MOm2atzKuVzWN6wkDhBTBTQxlz9CtXal%2Bd97wEpnhIBdxbm43a3%2F97iQMlbawoTIxG%2FIFEzrfAXWCuaZozow7XFj6fr6DFKhT8vfo7mKXEmImqhO6zCUTv53fr9P8%2FZxD8IewD4EfSMBYoKqhbjlMgjTA4OT8l9pjLkSULCoWTSnOg3lU3W%2B6eDrUqbu9bGfte%2BT8GCDFFWcL18%2BGbno07k6vDDezKmqL6GlWaZWq5Er2rZzuo%2BP9xNPNxPb7a2lY1aXjMGHicjzGBalgauYf1W0RK00M1odG7UUS%2BKtWpg9%2BNoUo3iJR8NBlNJHHxRH9NbqELELC2tnW92Co4WwL3eS7ErXBUxyuOEFOwk0nCYUD%2Bm03oMPzcjvxWVn8bKwb%2BmlbG1%2FRtIWkS%2Fury6tYCmN6wAv9vN29yAwwqqTGwAY6pgH9or4OqTm3ZFOJLFaKxuzFaIaybkvuFjE9pOsfcl9lw%2FNZfl4NPKa9OJ19H2XyxdM0O70J8ga0S4H2WiHd2ro%2FxgPXgMVV1m%2FuO%2BjuZOazZ%2BGcFVvEaXdofMWVoZRnxAzDhw5H%2F4IMmKK8v2nyDocJSKr2zewePttxC6ahntZz0WF8DmeyHX2zhiPTXitgyfYnoLpyECMpPaGanrgRO6QA5EuqKk1F&X-Amz-Signature=8a7d96df7fa97fc7d70e9596b99e51ee88cc908f2b0de3bbcd8ac9e597c371ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
