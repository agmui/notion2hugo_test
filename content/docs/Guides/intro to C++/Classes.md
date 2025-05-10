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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO3SW3KQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBvCgpy1t3W35BR%2Bsemccu2GoW5JrFLyPzeLBiGcad17AiEA7YNhi1KW20OwD4Z0MjjNrHTWkwAAeaayQqEfwZpT5CsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIL2c0at1rvPcfxnCrcA%2Fy47rihE1PY%2F9XeZ7Xz6rqjkVX3bryCWLCIjSP3LAxD1Q4u0Qoxq9YgjeHWbrst5IbIF%2B3oHzuOEeeQhiULhkp5Jll6aYVZK9ijq%2F7pnrCanw4aU8iwOmNEvn18zYYr3wzIr1Rk13FFm6FCMsFPikg9ZIdU1WkwpKWQcpQDIZSuj6eJdblOSU2rWSkLFSK%2BdQWBsj5zy5LUW2YKaxzTGwFvUD%2BprjXUt30JHnKn4NeXFEPSv8Ht3sAtU2ntnmmzf4y%2F%2BN9G0%2BYz70hZzXElJBR%2Fc%2BGShD%2FPB39z7SjNi%2BMygoYy2hXlW4Css7s%2BBdni94bbOxSpo1M2HDIqEES60pX8%2FnVAV0wNQm6RX3yQ%2FSZz8Axq2A3ix3ez84LC8EZ3GlSZTK2oCuDLN%2F2nwhsb7oM8mAFpaoxNQO7%2BwkA3n%2BrQEGZJ7Kv%2Bs8NM0mOUXX0vl5dM%2FgNS17W4h0YYQ0gSvot1NlCLxZPzE23K1X6CZ%2F0A1KNoivJn7319cGdrdZOej1dV4RjhwLQIt1aqj%2FaCFiHVz3%2F7rPhDhICYU%2FeX1Z8nHO3DXLbj95c37QOTW3kpa8acdYwfPclSkSzjChwaGlPjR1nfNWAUyEqLyTHlkUaXYEjv4lZVHmu1XrxKMLbs%2FsAGOqUB%2FcUd7WUI3KbPCX0BtiCJVYTKyY%2FGBVIX80yyBKUhEHEwS5%2BAgu3P6cgKTBmaMzktnn3pLBTPPlPeIMv%2FFk29OxnDU5UTkYxxmksLrBiQ0B3WhzsR01VoQ1G9V9FE1ym%2Foe6aEUJYPRbvJH3kjQCktIzkAyPJPO0hmoToUXpyeXFlOUQz7hwGE7HIDFtvdkUwGaDgdyKMcGyOzKq57PnO7lNiMADH&X-Amz-Signature=5bbb4ef6bdbea6120d0f5bbc11665c6a1edfc73608c85b609b279405d2e21509&X-Amz-SignedHeaders=host&x-id=GetObject)

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
