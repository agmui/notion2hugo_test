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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNTFZF7%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHt%2BKaH%2Brgmtd4P2s1MfP7ggv4P3VitAz59ftTIVzpojAiBWyT7ch%2BsP3GiuFS2Cc40kzAy2OfTQxdVX5mk2FNPqcSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjwIkeMZ3l7Vp1ThlKtwDtxP2jUuXd67pvCh4dsn269RoT%2F2XRN3qF2cyAx1tc340mNVz8fNzZ2CD0wNIkMQbd38xG6RMAfLJ8WJIr3hHksuWf2xQje1UzisWFBnnKMYKkXSRac0OzmpSu5bkHAgSamuzMgrrhz3DUQQ3DM4Oelmp4ktMRTSontH%2FXfRkouKnCKJ%2BDmcJMeLSR8osVzyY8W1%2BlmkOgj5WX4PDgPPGDj8AMV1g9hUgTXn2WTWtIYlChbfRABCkAVN1338ly3CSq%2BL3gfaAltAqBPvRA2SvUFmNNNWoPj1vmFifXuNCT6qFzGuN2ky%2BVbuZ%2BTDNK7x1wAEu7AVxTv76H%2B0lwDXl%2FIl6E%2FtoCE3RucOEauRJOXT78CwPnUsDVX8iQj5Vw7hNdciXOBmrswVtBs0LHEe3kPMeDDgXTjiAyeebRs2NK9%2BeirHrijoVV%2FD9f7KdjGNSaG2uJKS2yh0Wg%2BxhNqGJs05EendVDFQ0mp8Wanyci12n0y5uYVyINFpweHVdb53Ek1rUZIRKnStVTfsmgdZH%2FUDSo50eITdiEYCjGL1iq76U0S1BzWF49VWsOFwi0ppTCvQ4q8YEejWZjHqXnoyGI2vAn4eYBNNIakmQimHJkptioXzn%2FBkdvejMfiQw%2BsK%2FwQY6pgGYU8Qf20HNG5r1YWvYmbOOpuLYaNMasPzTezIKzZHd5km2JPjuZftiEHNjUa%2Fjz9bscINUrVE%2FZ6xxD0dSUoWUHqxtqKk4%2B7b1lKq0UTWgxaqmbjINtK%2Fuh%2BDWY8J%2FraznsI%2BctOi5j7HdDGosjkfPiQGkPok1xcLTLx0BXZs5uNl8APrwd%2FtPQv90FPQK9wVOuWVSxf5VOwYaCZoloqvLnUg7cGVZ&X-Amz-Signature=12b65c566c3a60eb875d3d1e89bb66b82ef398ad2d2a2a9977301f01642d0438&X-Amz-SignedHeaders=host&x-id=GetObject)

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
