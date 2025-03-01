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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS5RK72A%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHaNHuaZyGW83obM6SJlj3xEcSojnuOi4AaEUMRaYEV2AiBc%2F2zTk%2FxbPQjma055%2FfZsO7J%2BsXHtxXqK6VoI%2BPsVpCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIU%2FdRvxL6mYDny5UKtwD44YEWeK%2BUODOCbPYT1BGaVXa45DLuhCZckTSlkXPX9Zsu%2FqjmV5BZsEod6iF6UOKpw8Q5qMJphXKPC2TWWtOQXWgvdHcDf6L%2BNxTxgTMEuUv2wQzFCairEaGYJVAvhs%2B4vtge%2F8qDzF4RmXgqBn%2F%2BPIQkbWG3sfBVBqmTgjIUIa7RxTozQF59yzdfLJtKZUeiVNhhtLOhgnM20wimX25DIju7%2F%2FAlD0BpFIajjlSlrimpQJQ4CxDKNEsILMsrNd5FO%2B2XYVQq%2Byg935wOy4ExAGoavSwZE2x10qoWNSOwLPjp9kF4gD3SQXFFgZRNVcWHNhGFGsKeCBTczA%2FmSqdAWnDpKIva1Xi%2FM3rW7xldUiOtgZ5i%2Fggjl08bnWKWuPV7XP1Tdo8tt%2FR3yqC%2F2Jh%2F1JCvT2lKM6uxlIO47DvYyAsZjl%2Boi8QoI%2Bdb5D%2BTxxvTuGnwHtBcRHJqFIDKW%2BlZP76CAkWq8y4JvVOC4Clcp30RXtUrg9SXhN04rt1cImeixBsUXPmQRdOw%2BU0%2Fr23%2Fpl1MEOmh7%2FD1%2FcXq1987Za9GAWKW98xTcbg1WdARpHOIS%2FbO7D57IrUYGYVOqMQLVZk0VBx3Vn6%2BjmGN6yj4pm7XWqeS6dCYS9weYgwiLqLvgY6pgEcCpUBcfad5aRRM5zuCl%2FAeDZNfL7SayTxgpi8O%2BJMntE0trxlLcg6LpFUoyeKB%2F8%2FvhRPIu%2Bsy46xg1GxA1VYKz7luC0Fn2wKmLNRGTadZCko%2BYwrE%2FPxMu%2Fy%2FyEvF2oZx2mzKt4NqYnrUvlUwI03UoExE31WbqdWbaIOKT1Tt%2Bd2W0q6q4ssMFE%2B0155CtKKnI9%2FMyMV7AAuAESDaHhv2XOQ37V5&X-Amz-Signature=589fc314cb9fcff8fc9bbcb1c6abec760585357eef639cff65f7249c7f6cea89&X-Amz-SignedHeaders=host&x-id=GetObject)

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
