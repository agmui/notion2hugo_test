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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHHIAPR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC7uB5WJH4CaHdZf1D7k%2BxhMd%2BfwOdcBDOxdIFYeHEJAiBCVJ7aVd5X3vJt%2BilAgpO1uL6gV84G02dSJU%2FWLvo0ZyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NL5mQxbMu%2F0d6LCKtwD4kgWJM3ya%2Bpa1EDaZpSoHEoLhAbe7Rx%2BXXVc%2FeToq7yg%2BwVOOz94GyS3mAZ6mXOPj7QY8U7rVTsWkKiM%2BrUlTqlzVWu8BSroDZpAx8sWRhJu2cImzDuc83YcT3atgQ5Wj42j0jcv0MLLwEq3ZYLjnuDZ%2F4Sto%2B4SvS6ZDVq%2BE5YqugcFsmuttRJwfTXN9dtwnNQHxgFoDxyn1RyYIeXYeWhMr83Y9qF6MaBfWNzkJF51JUqsStuhVf71aM3h2Kftffk71YQv7%2F%2FyesPd0XK8hSktWxtmnET%2ByS8YVfLdirB7OJ4nfDsEWAfTR2fh9n2SkK07cxUKkyfAnP5I%2B1wiyKDsdz%2BgcmrAxoJSg224AkV0kgPHvbgodnwfjPPie0dVEyDR35e6zwXmb4pdu56KbAOOck6AyiNOTDRGacIc0a37SfDI%2FejSa009RDUv%2B9YrWlDlQ4hAi5Jvy1lPWj8eThd8lA649qJjAjI3xS1vnXQfiFr5WbOFKUtxhcSTgtELxCkYYU9g4djGVATkzU7ITEmRZLLgtDSd3FIFgSr%2FfbjhlsSpYScOzPluyFKRSLhuMoNa6JrKABVvQo7FKW2WgwzJEPR1XR1VDbkuaH%2F3%2BGyhbAbbPbCJiHM9Y34wldLwvAY6pgEEA1ZjZPxJsQErnqrX4%2FcN5Btchpg8q9wfqDLHv6GY%2FhMitWkn5ayyV0AXYCfUcPrERIkMClSbwRReOk%2BPjZmKdbcfHO7kGj8h%2FXh9OXSOdhrCIekEouV9qDbeoZTufqxtxPTSlz23pr49SkaaRONQMZt3GhZMtEfgJmy7jhC7jOHVXRf%2BYtEeQyPzHXYnvH2JpxrMZzEC50JpouQ0x8%2F%2FtFNZe6V%2B&X-Amz-Signature=ce7e818c6386dd98e1230f2fc36d91aab8f366072154eeafb67d0fc84f44df15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
