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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QIADQ6I%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDo2StIftNjkMBEGQG7k2FdfRX82GViVRqGM9FA80HjuQIgZhr2F9rT0BZa7TteO2%2F98qLclBFCv%2BPaLcj9oKRTb4sqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjI0%2FrLwe2g7%2FTmHCrcA3BeSq3%2B0A40gYBw3wLx3mLXO9pusokgmerGg4XnDerCJtT4DJZb6r3OxbkNmdDmq7Lq6WiryyLRLNb3WlQDChsPk6yn%2BgkqkIRPECb6EaX%2FmoKruvQzBC%2FFeTYHacACi0iEHshcADdqqDwZzkwzx7yFtsaJ%2FhUqEBSBqZ%2F2RTsW8NkKezoLJTg79YH8s5KterpNEoXXk6evh%2FVsH%2FSmFNM28M26sQ2ZuemgEBintQyMuWi4ymPziU8ZWv8%2BxJxJkoTq16RiCptcFBnKhg9RgJuzjfpqLro3nXZWT1NUvWVVUcG24MQxGhWaSUcpniHu0aewX7nVlwYimHixPqj136YnDJmUz2eNB9nY7e%2F%2F3rwEpZQJbfHrqAyWjRRgbGYdE4B3HVepB0ckVV1ht6Lge0JqZC0FPaGKdkJvPs0hp2NkoB1BsPZ44%2FnO5Ig7T4pd%2Bw2dm3GE8tGoS9Tv9Ufpg1nzdgZ%2FhVDZemzTX4Vzi28hzDdciOeDRgRITdrGcS%2FYlvbLpqqSZD5Dk9ylmcBy8pvMmprobK6wkh0z9oJckPG6YeZT6H5iFF73%2F4v1lzswNW7hVn24E2Z4InzP7gM%2FhH%2B4jw0U87X8iZsH9F%2FiG1pppoVfRX%2FDfRah%2F8vYMLawu8EGOqUBE9FKtUOL27497811AfuE8YjWo5Wzk042Yc6y6NLfKvA8tCrGRCRJRC%2BLNkuwowfJXLSuN5upF3T37UlcQIh%2FAEzVNAD32L4OrTljQVlxwn6IkKWSmLwii1601wuY%2FYbxHOKFj2zSmknpTfIgGuM2K8EIPBgugrtCCB89u17LS6suLgVxJHnNHob91TPEjy%2Blw85gf4gQxxKalZ4naiiuac9NJFQa&X-Amz-Signature=ad8f3f2da03ca6228f22c2db6301962eb6857407fd28d1f7e5ec4b01b3078753&X-Amz-SignedHeaders=host&x-id=GetObject)

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
