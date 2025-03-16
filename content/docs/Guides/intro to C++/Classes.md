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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6MIJTM6%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvTzmmKy0E6u1x56Qfkk5WBGhMFljN39BpCq6AurMhBAiAycqQiYrffqZ3c8aHU7Efy7g2wTz6Kmn6Sq583a3YpMir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMlcWJoeWPjdad9jo3KtwD3HYaBvIGHHs%2F89lum7stPQlTVU8O3bQvnzVAC9T8Ws9y%2Fs0xFSqnrdtDkVkJsS3Ozxld6LuzE0s%2BX7rmwFE%2BgDuBqEWkjFK3VXnNdASz2GW922jLk67isCHZtmVgmG11Wf6ogRZ752MTC%2FWHduyHreQUqOYlmB0ArHNRHGJDmuEc9r0RrtLoim6Y9KtxyD0WGmC%2BfrnQvfLKH%2FFa4RdAYGICNigEiHStZhcdOpYFwheweawEC06FkjPYVURHTVmxcrMHsWo7DB9Jl8fnw7%2FM6PhGL8b197Kd2LMYjWFep7QptYJo8loZqmXriwAswJW0vYBZ%2FFi%2Bo%2Fcf8xmL98De7Az9Z2WI60SL%2BkT0SrzxaPSyQth8DSPogWvDJ%2B3ZDZw%2F06HpUjvV3WbXfSY7ojsAwzi5a7CU6SH73qbM%2B6M9dT1Kfgwy0AFm2hTJZ7N%2FCHWW3q2yp4gZBYxEJJUqn55hzOz2SnyLexLQLUUBbU%2BOV3APVK2TAZQZDznAQn0JH7pn2sDcFwTQvfjzzGNS%2BCYCnPHOABfWIFvOXq77%2BpD8Co8qFck0S%2BpbjIQq6hyRK9rV%2FuXkYhVM830HbPmDN350P5wmRJLVg32%2BDI22Q1QRdy6M0Gugem9fDvSDyawwqb3bvgY6pgEhHuGdQavjn5prC1J1%2F5kztCdYUiOaA84jJkcPDMeaKgEtByDMeEI%2FaGSOR%2BXDJuwFkXnKWI%2FnuCL9mRLMZT4%2FjSrYG03hiIU6KZGJ3SZ4zkSso5XOJPqEERjgbUPI82qnLSyt9HigizueO23JiAIjv9vPuxvsezJPnRg9wjWScvSibps6oKxVqZ0Fg6ikoApZLXZbzMAHPagHnfzSOmjGzji3S5R9&X-Amz-Signature=831f8a32d18c47c5c075769161b47a044e94ef3a2deceecdef80dac11abac721&X-Amz-SignedHeaders=host&x-id=GetObject)

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
