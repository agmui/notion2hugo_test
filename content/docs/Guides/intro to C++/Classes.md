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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WGI33P%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDk%2BMbU0aTzAfzj%2F04Dp68uges%2BBcKEdETTDhxYmYe4rAiEAv8lJXxg12h6zbPCSQAefQyoPQ44iC%2B5He0UKoTZsmVsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIJNpLE9LR1GZluJYircAzNfZq9KAKUu2taXF3mmzFAKS37I1ByYJ0mNlEMm%2FCntj46U%2FrUBCGsSN1mdc2qfhG3ltKvF81C1DB8Xo3p8lBGVlFVZrS4irjYgrDRW6ub3oOnmJz5mSFlnKGx74ufgM24YREnFSDZEchFxmfMjHymlyGw8DSCEoAgZPqfDpfdlgXI43iecxCFD14amE0%2F26IWlh4qdFH6jo%2FsbvGSRa4r0%2FI9N8IWlUWB9T7OBQV4Ong9gBWJhDG3YaePy%2BfpXAublKFC0y3tdujMU3Bj10Fjmr0A6H%2BXQAniyDMyi7NyjEiQrpPFewB9ZNgBAsGM63%2F26ybpM0107L0iCrItR69GapSDY3S9hgLsDG8IgMPd7rHuv%2F956o0IX4yIUSef0c3eOQqdvF6ll5hJRCfmDEgoczAMT5PLH0r2vG2Uo48w%2BQT0nn36MBL8kBWGFet6FIyqW74k7Uk4Of7VSJA6xRvR772bc23Yb6%2FVuXKdjr33jTTeTQQCvQo7caCcQH1rtLGYehrTynJi0y6tACFyoNXqRkIaaCcDldmyenAPTfdMhzKxb5%2B2kGTk6C460PMlWtRk9Uy6otuSBt0DVKh55im50xkcyyqGP%2BWRqPglFZttq50QaTSDjlWPRdKG8MJGi0cMGOqUBig5s%2F1j%2B7iOiTGTe3x%2FgoploW%2Bixk6Rq859IYEr2VC%2FN5P7k1EOCgzyE1tHtr9cChT4HQnhxGWw36%2F9QHpPY2QnxNbgnPMucBPDx8Ql6FmzFxzp5okx49xxhtYOVQUFtFSqMLxuxvIfKTebuiYwYiT9%2FvFMPiTHXbXQyTOGRZFgF%2B21osk%2FKd3eslmGKjsI3zKGUqz3nCrqB4WxIjRJ4F1Z9Q1Tx&X-Amz-Signature=0af3b5d8783ca5760b6e48137c5208b04775a7f975c134d95c2948b7c5a43136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
