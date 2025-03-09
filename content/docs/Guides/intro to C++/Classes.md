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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBSYLNMS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDGU3JGkAbexRAxB9VaAp30V86rn0EkgtcOOJrbmN0NSAIhAMOfvlGJyOU8JosBXmEC4zj6LJtbo2FLAtfZVK9HvIFQKv8DCHYQABoMNjM3NDIzMTgzODA1Igyo03W48ye6VtARiXwq3APrD5saVFM6g8kfAjcrKcq%2B7XPYIPdt10O3tSgeLWKShH0N29mrMASF4UaIj4GjUf4bNzOVyun%2BYQM4JnPSNBhuIxfv92gyyVWKGvD4ZIleWmji1uQNopj55RXCV4TrTYajFARWjjzyzjeIh%2BP70IX7RjhMl%2BpuQShry4zTGGBHKxKLXNlAsszjok34Hho%2Fx3pfZZTMoFvkHneBNTj034wicqvh6BzLR02d9rKFzFqcr8Am9El%2FlVLZWXPHad%2FbXlxJk6rdHpyf6AcKnXAhW4OEFWyQEt3KlQ2XtMEQ3QmERvVokxv1iHDUy1RDEvL778jK3fQdySRZ%2FufDPY2EOEe9yGUHaQuhrLg%2BUnD0OBOCoDdjZJM8lDvJiKto1HkzOkIOOAtedN%2BQ4M5fpdFc%2BxFhf0RU49ESSxYBBK9GJr31h86%2BMFw3Fs9gdRGlr6pnpqDzUrim7QAu1m%2BeVl1Dor5Qp2f3bHnpbHv0EQlx7WlUDLvPhyOHviWmftbr45NDNHCOK%2FzQXLS0fNGrzlmvF5drPDpruVb2q%2Bex9paEQlBgTbsvqd4W8AtFsu2WfgvRHzgw%2BhabSlJbURUE5IF2PE5iOTEgs1EeirgOjpaXigFJ6G6FDaPiLO41yLSzwTDkkLa%2BBjqkAeqRjdLXR5r75MFwusHs1VyMtIb20K1Q4ljEeTQKH9OhW2uPqnbrlgQ7o03Ixxk6shjrG2aNwnkakEL0MakhruSmWNK5trCkn9HNKmZ%2BUrrikHY2D2EhuqoDaaokd11QvEXC9Engs0bs1UX1uELagav1%2FjUn93fw78Re4%2F%2FdHAMo%2FpHJ9A%2B520FB%2F%2FqQrj9WqdRZptwl7oxivFsLdT18jMFFqp1E&X-Amz-Signature=0809bca294966896647380d9c8eb3d7a2753f1c0db8c2d2f3be86f1143490a11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
