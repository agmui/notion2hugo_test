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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7JCHF5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGiiUr1oF5mLfy1pQw%2BUXQ%2FPv%2FwBsCXZjn0oU%2B1lx4AAiEAx9Y3emuxS075293%2BXMdBI3CZ%2FEfoG3VBfTgnOcLlbJIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHTJf%2FTCPelVR4rTCrcA39sMtFmJ%2FM1yCL6kP1ESCoSgr0Ft6obXo3T00U3hVhrP0rR%2B97YTrdENZgaukSsidVMWWqwEaIy%2FBuXJLSn8cTrUC%2BBEwP%2FQnMrOzH9SXpIK%2B1zYSkOLJCXa6JrOsZs4zK9b7kKp%2BjCGJ%2BsVInNb8efz2XQLKUN7PjHeOj4EoDS0R0kASZ%2BmSa9d6YGI9MP9cqbw9qnTZ80ADx9XHaQyd3DM1GlyTPy7oiXZTwktXKTXsoYx184tnYfmPtu0TLD3FRAr3z%2FweGVCKo9EXhSM1agmfi3LdK7FRHpv2PX1ZLBb1%2BM7Ma1v5qNIaitGwE5dma0QizkWmUdKJm1Nmdtd94bX43OXn3oWkzMFCBNqeAQK7LXESNT3JKMKrtHK9zVVFqFHwgXSCBwNWd8ajVbDL5VCvtRSv6b%2B4H%2FubdgmPqN%2BwbAfTjPMvZXLOHXBp7OPx6ZMAVB8x3U6zEhAu6KTWgQhx0fxmSl1PNxGVxng4osesQo8YdI47r%2Bjaoon9Ir4mQ8aWLv1XS5HnHCsav%2F7cw0qk4JIzTu7OnWz6zqmUVwDFqx%2B%2Fwarm3XVBKvo4Ks771wxYINaRtwsDmzKAFqFxJa1Uz90kkr9eTL9QJNOSd9CiaaE2yY9mzBLDTZMIid5cQGOqUBnU5J%2FtRhidhBbm6hONzhgBDOub4%2Fs5BsxneUbcXrURgIdg1OnD54gkArtQunNQoEBWhRBAlAgtkQ1L52JS3q9GdFN%2FFZedUOfIdQgywCGvMglVZcLwVnxbjfv0SkoGAwjxRSZ6K3PYFZpR9g%2Blib1836qq89mT%2BGGxHSB0iZY0rtbxVw4GKglfk9%2FUvQ4YkTetJ1aN1lMIE2%2FDz0LhPPuUwLkCMe&X-Amz-Signature=3443a53f4314cec4ec49cbee83218568ce52ad5e057bbf36b4fe717d0a43f0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
