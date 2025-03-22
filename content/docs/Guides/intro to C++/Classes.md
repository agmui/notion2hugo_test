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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIAHDYJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD28kKeCWGWQWiO9ggRyYEUL7eOBoyD5KLL5Ul8zYtaEQIhAMmiEL6BdlECmYx0Zg2Qu1GyS%2FVa122ERP7TryTq277aKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGub%2F3EtFUVFVHihwq3AO8UGt%2BM0ILkjkHPxp%2Bn%2FIjA3cPpSkpnkUI4Qhzdyldbazo23SQROaI%2B%2BeHd47Y5D7H3QwsvuE9tCjBz8wl0hb3T62jFLDW5lVP1Wr5pVsdOJtu1HiueBZYXC3NgCVnijx922H0B94iRQNTcl%2B8KY3DjFt69FwQM1y%2F1DFczEbnJtRQsHfgfzY%2Bu00K9Fh%2BLVDXgFNwx37zFf%2FldGLuviqDC04540tLBO5c3S%2FjyM2C1aaLiA8A75oP7jCOONT4NPSiMr%2BdFcHJhnSJnhZ%2Btc5BBKucbltWFE6MrbX8ntHRXcZh%2F8JQNGjE9nSWcIG06S00EPJxp4IQftO6KnJ57dny9vZFTnS%2BJh%2FhC0pvwOFAdCqzWP6oNCNUWxIghPCT4mOe0JNW1m1SfzX7wQPAmYUEGB7t6ZPsoPEOhHV61u5LJ9koXTZGinsRwFYJzS7GhypiqX4LZxDXBo6jllmfrXLrVK7cijS11S7rsdh27v0XDpUB%2F34R%2BZejMQ0fVhNBSsI8GbGPLjluEKWh6ImYxb1uWzCZH4UOcdH%2F2joR%2ByhcRMBg7GfSWQdAUD2%2F5wln1m75tWY%2BXWVY4KzlvW0Hvhw2ZCPoEGUZmPh8wWAlBizc4FXYqOXC2tapjvkT0DDEivm%2BBjqkAc6y%2B79jmnzEYfug%2Bt8HXYUaS45nOigH7Xqk%2ByjTJs9uEzM0Lm%2F1Qhq8%2B9xmVhq77yr4EOaAftjWTGzNmupvJSFPKdXl7NlE807GdZcG3BqXHs9Z7TeoH6xJ0jrDZu8WnhpGU5P9XtAe2QzKVMXYT%2Fqi4f22njallI6MkGPh8yaaLLgCiJCd2WvNHYSYLZ6xjzjpAz%2BFJzBMJfLVduTrQKOWkkUa&X-Amz-Signature=ec75415fd6dc6e545dc6495d743823e7f7abd233306a43a2d4cb58df2927e424&X-Amz-SignedHeaders=host&x-id=GetObject)

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
