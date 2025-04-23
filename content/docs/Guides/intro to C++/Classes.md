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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AW72MMV%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCQln7IW4zqFV4pZ%2FKgndwmTSXvIp5dgsldfL59L3t7rAIhAKOvoYcy1eEFmvte3AVZyr9tGHPX1Kj2SlExPwyuxu0eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwymGNtChAX6UqjcEYq3AMCvXXDDIOiT%2FO4cgW1fNt%2BYw8xLn6Akg5vAcmkBYadT8oE8LGnltSyi0fbcFrlFqMP%2FdudJsa7QdlAV8ze9hMM4UCUJPgCUXj7Nai6AtrY8DMn8O2IDHO2YzUh3E5YekKdSXIZw4nXX1yG7OLV8dQCC%2BhF9rWaaKWEnCcgwWszXTB54Q1tBojgXayTAf6hll7HBFGoW5pyC739%2BISH%2BY8MTPNx78v%2F7knJX1vAZuIbr1zx2%2FCoG4zFujhrgl%2BK2zRT9gdh5gSYLpeSv1y%2BHsSqGyVKk%2FrRXeD4cCb3LkwT3tDTooKzm0cUoPb4%2Fq5OhL%2Bn8OLsg0AOC3z8KjPbFpqf1igvyYVtH4BFA%2Fr4wmV1dmql%2FEIuJ1WIONheA4teMJ9FLdxt2iXb4BuG4yM9kYCbQE%2BS7rCL6hTrm%2FKFq%2Bbd7BMYQNm6G1S1BTz49y%2FPF2BQEhrTvsfqnKgn%2FCbkI2A6ruDjnp0IDmr%2Fp%2BskagxgtmVr11aZpYdpKWPYdOxEIIw2FNLM0mmC8RVieBUba7jUnudzP8MtCZLaqbYoyvS59cjCen%2BYA1ug7Zk1EXvBRcNSiOsjkJ1A7dS%2Ft8xZmJ9M1wqgsMMxxuH3Fqq%2BNBVe5qfSzGJwyHcbaOtmbzCnh6TABjqkAQrSn7nMP2BElOj9ViCmZUikMRCXfv%2FNUj1NtAootSZwtBULidzS6vljrHbTKghgxj3W0PWjR9VyvmuYf55cNQ92WCPqI%2F%2FS50VtzrRLbTuepqSkxQzKrkQHoeE6EOF%2FJi7OgOYA%2BT4Y%2B6%2BqR%2F1WSA0oOE5GBKua8oiqUcWwOCLi3n4jCYeromEz8xOWZSy9GhM2yjANXVpWp8g2dyS8huSJRNNe&X-Amz-Signature=e2c3283a4a1cf5b49457220a16e49ea04d6b900d100f76c3a0530acba5a5517e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
