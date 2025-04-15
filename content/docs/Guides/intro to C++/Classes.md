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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCHKVBJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB37vwTdo5IpVFdUPcrV7nt3TBes%2BUTdAIPXSiHrcnkwIhAN1esva%2BhWMTND6sU69gZcsVbwufbBXStrqPeLPx3wKdKv8DCCYQABoMNjM3NDIzMTgzODA1IgxIiFA8qtRnCl5iZrUq3AMLavM789F2%2BzPINWfN4SIJ84Bb1%2Fm%2BdjWJiU91%2FhozXwl4eHiGnP2wW2BhNBkeHNnSy9D%2Beiabh2iDojKSKdTBgY3HtXdpG912E%2BqVUrfFV4DR%2B0faj%2FxIvH%2FarGUX9DG6hcUW8F%2FjFLqZ934iqlDbPavaXY3KBOXW%2BroiZ0yrWOQ9A3M43vHH3zFrTxPxTYn6AbevqlGhqoDeZpADIvTwhCVuNUbV6s%2FVZOLhzfZVM5Yzj8hFYk5MMvGD9biM7WQPX8XN5123j%2BhYmUI1tuyHa%2Fo9YtdIQObGwTciEjUj45%2BCnIkcQlhq03IF7M25cBN3LV4Zy6rZ%2BLHgtPUEPili9i5BT874QOtIKhpTd99gvHPIsqRYtYgVwg%2BucO%2BgEgcZTx3oxoIKmbctvfhBpqOK8L3Gr6xJbeArjg3ZlLS1SQDJ1g4hInRhAwpsXpPizkLScGZCudz%2FdY1QakMzJX8nfBLO55bERbCDGuN7cJxl4119JEeske5qMSsXK8ugRz5GTC5%2FFvTjlfTV4kLXCrGQJadodnqh4RM8a29auEx14kv70I1pABN8Zhx6ofr7zBKmkJx6ezurMR1%2B2JyUo3SMvCETPPk4J232GPyOBUtayMI8t%2BGB1%2FiCiXyQozDu0Pe%2FBjqkAZ0%2FeRPd8mpsR9JL8Kyuos%2BVAbjznbJxkXYTP6oSdF9gJ3hkwtmjNV06QXPvlSbmjswDNj5A7VjGi0F661N%2FvI9%2FqoA%2BbYOlp0dLQzEoFT7x1z0KadAfSGw5c%2BNf9N1KeAKK0%2BMX4%2BVHQ7RqxY9ORPtUTllDZaHqe630Io%2FJ6q2DQQZouPo8R5dXbHWSkfF0fD4HVi0UFPaiQtiWCpWvYSIRHbkV&X-Amz-Signature=650558b31fc33bddc136dd9fdea415a511ba66b2ac1d05fefb6f79ce38432fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
