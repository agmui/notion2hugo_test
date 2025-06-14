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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VP6HIYG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDh36xAfViGAEtCEsfnsC0klsQkWXNTWZxkrGNUUVeiDQIgSIdQSgxZbfPfuOp94DHq9QcezYlYnLAWmiJ8xqiQ%2BGIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDVogrMzYGgoSTuGeircA8qnS7uYXk0Z4NQ86ChpcYmt0rJk9oibyT2Hylj42PTJfU1sVvMoQITMw5Zs1435fzp6t24JWSrOzvvLi4PDnf6U%2F4o7VcPZSt1xia7nc4bCKK68aIvk31mFXVtOxMMX%2FPQ2LU1Oy2E57cg4UlbqrVj8cFy80%2Bcskrblxt981snEBbTyrdnP2Lu%2FH3nY15KpatRZZEhvFjsql0V5mPOmADcb5gW4SNUHIXBr5Sv8bbPOx3JK3IvGoHcbPo8Vey7NuVuGQfh%2F0rWF%2FvCv5CvBH43thYT8UkC%2FrQHQhxcYB15mvh0Q2jhrPOD0wRGI39RHWju%2FS%2FYm5vvNqOPD6gKq1aSSzoM2ZB%2BaHdaufO8qQP25zUWA1rmHcv54jdU5Mb5F7mA4Hjf4TfHlUEh6ex9Z0RWGrMwin9Ska2qh%2BPG70FR%2FCFuGoqYC6Hx2NCQMd4p1iyyE75yC6reWcvfQzr8QUtpMXxooHZjmTqMAndL%2FfDzpXU0Sl2%2FwKPoirVj64GpUKoxIoCb0OrRu%2BvzN61xU1zXST8BYfDfn6qrlXHrmICVWAFmkBShIrcJvJcweVf1y63mAOfE0ChcLkIEgSykUXHlIWiKO3LRu9e0lW1tJLo6DkA%2Fuf3MHoNpUO%2FYfMNq9s8IGOqUBN%2F2LyLozvRh1zWG2trX0fkXOHT%2B2q0TOyW%2BRkxnX1fS8VF8STjnh8tho245FoI5vkhIGqRfk2KSvNROhqbit35UVn7MsKP3g3qrGacPLPPwWe7%2FN6zgUaoREEoljfPSJKV7fFmUN8UkBeQGtX4OEmbwfrQq0dOVtq%2FnrlvqEThEjTMnGzt3IjJ%2Bpd35BUvoMjRg50bBSlOUSQZHZjVqBFrGHHd2B&X-Amz-Signature=262387327c84924141e179c49fda3c798fa0aa14bf50ed9548534acb43ca6f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
