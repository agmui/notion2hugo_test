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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQX2VRB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCID2B%2BnBdQ4wmYOL1DJzwqLpXn5AgkLp7Aysrb6jWWDSKAiEApxOsCO2wEeOMhz64udRQSeDlt22vS5X84wDgX5X9fs0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT9lI%2FfKXum8FrkbyrcA4DEMXis8CsCSam9eUbDBflmabYMwtD8eVKs4p1XyLJkisAH%2B7DvFa00YCUw3Fp6YAK49SRZo9b1y%2B%2B1ax8v21fIHjqOeQ%2BVNUhUYN1bXI4rXNGlpAWcZB8LznfxZIx6UE83JWnJ92t2ecxeIzhzd5Gwxnc4%2Bc8cfYTFOqguNAvA0BY19wbF09mGPiHrK8WtahGGPgZy8Rq9rPBoOk%2Bp70dxgG9MGSlWTdkTVpql3xDeIaBh%2F4LO6c%2BlPMrGxCkKcwQ%2BlFTUSxL8T%2FpPJ5Whvc8pnNc3vHQnr9ugtzfYCHmfhD4j5SUoBH391z74lfnnsWipsX8mq9vmGuJKDM%2F%2Biqri5PQG%2FtJptcFrUpsZ71I3IUoXSXYBnPvAUHiW6jSpRqr0dSh2AjRnw4gbVSUpy0PgMTq0czKFetk79P8YyZNGWJsZuG3V7sAuImPktWYQaZK2Xz35rLmwNbkJscSG5zjVJ5CIrSEmHCVUos3hvLHKMNAQWW5tdVyDkjiguANe5vlz3zcKrF8VkWH%2BYNxHvBVmtjgCEdw8jcdy021ptD%2BUS7aWLW0ILveL32mG9ljL%2FO0OBkp6Xl7MSN1fXC7txIPLTzQE0ljp2Ld%2BX2EGrhuV95V4TDm%2F5Ld16DbSMIrL7r8GOqUBbKkN2EW%2Ft3kR9T3KgWCc4GLfZPQQA%2BkMQZJEp038LWlIi58zVvLikiLSE3H7ZQUNaVD2WKurjGxhgGT4qm7Se28GeFx0Q%2F7GB4PkQL4ubtAcSqmvpkRggXfYLIGOZrae9POEkDr9UwH%2B757jBH%2B5DTCxT43beBQpNWgIW8Ae3U1T2H6n1Pd9yyaRXaJfrhoan1rHNlYDJ%2BuC6YI5MRAZtMgcjR9f&X-Amz-Signature=9abdb5edc37087d83bb2a55e679d201bb3fc36e317389f4e6131f9b19f8a308f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
