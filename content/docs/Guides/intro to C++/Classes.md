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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG4URB4Y%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIE3p27nsi9FPS5BBUyHV%2BI9SgxDas9w7WC88pl%2FUeyLsAiBI6gVgEZGYVroqkl4o1C%2FotLreyancX3Xk71Nx7KvVFyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMg3nHmaA8Rm07ztO0KtwDS3mv0AyFua6ByL%2BxjPoMx3sLWcRWySCmkM55PXV14cs0u2ycOSxZHgyTVniGJak45zRlap7XPI40nG5xBO5GPtgEoxAq%2Fz5Jqd9P9XwWK3dLw1kdoGQNZLGwdU%2B0RwiuSekJmDBo4%2F1aAowtYR8vjMscQeGtGCDHhnZPKrWddEGXRSibln3X7WPKzk85h8b3IUHfIdYKeWYN4ez4%2B2A3bUCzCjTj6LnthsiugGQYRNksn8ETsUTb10OMNG%2BBOE5DF428sCOhQd1WOVhLbH7T3IGrudTTOxDukkJHz50NugeEDjO321zXtMDpBEVvWquuL66cCQffPtDmFsAMCHlJKH%2BWpSQana0qwbIck0djTLlcrCOAbLaWFV59MZ0z5MXKUxHPD%2Fgp5GU%2FH%2BTH7wp1lDfoWBh0dpB6RswokY7bcBwrUIL8QTCxWc7iIFdJKW%2F5cnZjT3Bk4%2B5IIvRy98B0HdAX3LMg6yZZdN8kkDvYeJSHBIH9PNIzWuJHrIO4vmAPID%2BdR4OAwf21RFq65D2xy%2FSRITU3OhaBQYvyL5hXBOmD1TzrH8Dms2EcV1MRCHiC8FideQFruFFNPT7FYJocy89Esuc6Y%2FfXfPOgkQFi8RiR4ybiCYkA6Ag9HMYw%2B%2BmVwQY6pgFf2nz6IsihN2UJtwXCVf17xRt5QZGU1f5zyI4s6ppBXQKwEUipdTZNNY2RawgZy5rOcmA0I2njEzJ4Mww5xwZB8L6zydsduYcwu4jKTwf3D13M2SGTpWw98cutiqiCMiSKjQDkNKPOj4r1cNB6dA5aPS0PKAtWO8Ee2RrWWdxMos26I8B2%2B%2FWMSXO7dDogy3LFtFLMIQ1zgL8ptm3PXwLhoUYYyiKo&X-Amz-Signature=6c3542e4e05c3b157795aeef759d0783e98cb4bd432ce6ba851e9815fc0e2127&X-Amz-SignedHeaders=host&x-id=GetObject)

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
