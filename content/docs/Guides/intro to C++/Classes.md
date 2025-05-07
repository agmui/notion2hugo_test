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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K63JFSJ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5qutZPM%2Fn0wzOI1CjHzc0bRPMj59B7jog4dwOgQZO6gIhAKf2HNplTlRzBr3Xazzcizx5ismPoazMhGp5x4VmEmYAKv8DCFcQABoMNjM3NDIzMTgzODA1Igw%2B0zBarK48hSJIYxgq3AOLmixZ%2BAO6m%2BU1sXVtvZuTM8jNiiijzNDMKXETznvOjazWmJYfxjtwiIcx6Nw7Qb0RmZEjrRhVkLt%2BWGul0lasyQKu5ii8ldL%2FVtu6GjNT0QqEM5YmoEQlGt2AMTI0USYOZwPWhUwWCyCbLTFSG6eJOGXk4VL7BkIqryeP%2Fh59dR1T0eH4Da2GmJskrQr2JeV6vJJlyPU9y%2Fg6eaSJ1AuUUjrs5r95wbTusoKUXIe86D9OKc3aTUetYUdzhIBkjPqy6KtSx7ZwTTR%2BoedVVWrrV0xzkHmW5djzPSz7ih2j9HqhRQtiTaL7DfaKb2GfBBIHWcoymE%2FMsrIO5WLn4eIV8NB6ceG4Xke9BFQTUEVwhc%2FsL4A6PRBL056RDMwY6pbTn%2FvhZ8FM5RvdqFnRiMsW2%2BKajWgP8JWhMjs9vHO1m1NFQgspdfoGHZJY65sJmRVUcsJa6rpjxVCQid76waOfGByaqjMTor%2BgSEQYMhIhpuT2n2xIf%2BkBAAQsFjXineYnTeIY1QxOWzlxpXXk64OHzZ%2Bx2ml98uJ8mGgB4cKZAjy%2Bbsp%2FO%2BDMehFO5%2FGvsbB86VMlH2brUa7aX2UymBrx6iDqTt%2FSXmqmNZ31iraZFZ5%2BkAIm5Tw5PBNcbzD48OvABjqkAcRdLpqprxsJkLmhaMzffCWyE%2FIXysNV2mt3jjx8%2Ba0mGLLBq7upWRHb0oYhLhSJldASt5AXQjTKSkI%2B5tGsp1IXJAipJRHKrg9loFD9%2Fc0rgmBA8tsuu99n4%2Fz3Y8mYsUR4ctE55dc0ARR%2Bc2p92iiJBQ36TRMjPDTDhOQdHB8JJXvenGElAATagUNtCF50wvoXlbihij48dOMP7KeLALR7SC%2Bf&X-Amz-Signature=050b312c40e3c0515181c00bf8a16be6fa841fe7a15bdb6c005642b7407c19db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
