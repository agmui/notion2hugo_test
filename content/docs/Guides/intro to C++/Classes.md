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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH5GMMMB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVyKSqgVKQ6al0jrW5J4nyOyfg8WStxi1TgeBg83WfjAiBmvoBuxb5MJxQIM3nYu9V%2BkoxS9PHY3COgmGJDt9BGGir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM1LiuzLHWhKN1lNn6KtwDr689Z4lRCiBczsx1nk9ES7DfiuqGG8Xu8fKoPuZ2sBUvBy4lFAYJIGjZl2bPHEo5Ucg6dcQweCTTEwvBnIndeA2jzryyOoL7NJnmbVPThC11JcGUl8a3L86LhreUazbc84OZlsIJGTZVcHlY%2BWnA9vHVc97VbXddhEMdkENeOSWgF14B2GlH1b7XsebxG%2FcV4ZlGBRLz995xQjSgF9SInXYDWWL3e788rJ2Pet3yqcWh9hj6Jp6Pcp5GxrceVSxZF9Gtdf9rtx1V5g1nnR1e50Sqe407S%2Beg4UpFzCfCtWQkjxjQLVsLNmUQfZCaUiKy0YLOEOwYsUzlHgg3DfdvzlJg7CwxxikjN0Hg8DrFj1pHhhhmg5JuzKklEQi1PThZURjqwhVzq%2FKnh9k0NeAx3RINNtAwWBTSmgWXZMcQp0G9HsOjgCdNRO%2Bb6jP9GPLl2%2F9N6ergQldOjuYCxMa9NoCcC03%2FZ%2BCvVbKcEgT8CYvf0Ut4uP5UD3X3XQthrPcukuKMTwPJqznsDW4LovziiJ9nE8TkM3ObTGCxgrtlKikLQEZYL%2Fo9NRffZ9rCEiJk5aEh3OF1ZWPkZqdoqKnc18TgYvUArh2svq4SK1DoiESfq9yejR8ylN8FoY0wwIeGwAY6pgHpaiAeON8reuTdaMGaJSe%2F2Ei5IvysqyNWoDo%2B6BEAMLKPv%2BvcXpYw4IIEX2k5RbPTAPbFgs54rlZFerpQLg%2Fej3TwC3JOgIb8t3or7oPcpTm044c42VP%2FtnJcvB8H5gMkkBIztSnxKNmOSxjxspcNKYFnSE1HxaAKMN%2Fsbue4vRIRkvSpRg4SXBJt%2B99GkTLnrtyN6fAuY2UUBAEt%2BvLu6X7B50GK&X-Amz-Signature=f8a921094050b21f2934f08c0da4c97d759478add5266fbac8b1910f77ae0668&X-Amz-SignedHeaders=host&x-id=GetObject)

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
