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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4RTJVU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDEM9iCz2kPm6G3CwJWHEqe7b9c1ZXrKnGlqM5w1sfxpAiB66R6L7DH3WSRvLyg%2FG4gLSBLIRkLd0gr7YvguVqYdEir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMgitvMapCDTwrNMPPKtwDWUjPQ%2Flt%2FgM%2FumlSR3M8iLz6wxcaUK8nbNxFeHvcKsUQrmICgWzZGWfxmoFv5RH6Us5JPJxYBPWNZDFoSArMiepVjl7EazSli9Hb%2Fz%2BwMhkNQLlW6SHKw2Suc5Xmfy4v4CqmRb7fe%2Bz%2BMll4BR%2BDilh0JKKUtmme%2BXwEgEJktc7zQVM7TJ7gFi9Lh3%2FW4G32aJmuL%2FLDR980JXA5x1KF6ZIZk81hzLn97Jc3%2Bpf6qQ2cgEB1Nw1N%2BwX%2FSZtZR9O3%2Fpqgkcb3QAglxc1x3jeoVseGxUrz2UdHnAxQKexniOZQZ5v%2FLvPMuTN1krYFvmCTw%2B6Vibe12w298kckFydKooE5RuTydP%2BiA6YejlsxVEEMxmPOOpMr6WruKdquHIFj7JgZ27ptGPfnh1SW0wCm5GmMTt4KkvOeyV%2FP79dN5GjUfP3T%2BuGkbtAO0hzO7P3qAxrEtp1Le%2B3EHo9Z15TkKIipkeKgXc28IP5XdfgNAaBWVWN5HCTfMOwsQZz8fXdN%2FYdvqNpY0FkkHgCOJbQN1bKjwG0dgytUNeeTGriTGZGnmNcbH4msim6%2FeKyCyQ%2BdbXYugPGahOgLzB9oQnDAYedeYuhBUy3CqHdJhYZQGGY1KsLBBZZuHOP5lf4wmNOTvQY6pgFBhY3O0WilBi74raaRpd9Xvb0fReDiw7S1odaktvo7U6xopqyPFMggH9oSl%2FSoWJpNAdFon6mlqtkrZRtcBZK%2FDi%2BfMz%2BC1dTdhsn3alZhajwmh%2FUM%2BO4pzgz9o9g%2BTI0QR%2BgyW%2Bi3eph3gFBbLvF%2F%2FG1m4HR6d32aM%2FVxy9HGiMoFSF6s9V2uqdRsoIqEXqe5sI0%2F%2Fk1UeJvsJ%2FV9NUwLzrt%2Br86p&X-Amz-Signature=29cecb2087572d26182e880d2927eb76fc3e0b304a9b8300b8991ee52c9d63ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
