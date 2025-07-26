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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDN533C%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCjUZPMtATfMWQE6kFBwMsARvU7r0AIuMDinumcnZukjQIgS4Z%2B4njflsrZoJNkun2DsG9s3dN6KUQkyQ2vqY6eeCYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDhhHetOL1qPvKRYZircA8eZUmceRfZoCquuTFnzhsU3YeDbKPyOU4latPRi%2BE0UjK1J3dGbXpkNy3%2Fkx0xyjNcRDRlBAd3K6YFrP%2Bu6XTw4KFSwp5YmXKswihsCZi5x6u8ChfZXsa1Bq3oBje63dmayEOv0CJYwUt82d42lx6MfKbWJ%2F7kZvrBeWa4yWllSe9%2FxAxsUBL5D5EayoidKSDBslC27gw4xqxYwBByL4Ist38m6CSARKU6uErhIuAIAmrONz7%2FeJ1Sjc1%2F08t4TcMkpYTJvd1%2BZluBnbU8mbIxcGSqp%2BIIYIJNaV50cKfwMM8E1wnj6rczTjENJH8%2FoRkwIX0ZyohMEnNbfwO66MCsMLpsi7cZwGHWoCQ%2Bf8LXpDLpra5OpEXaLGYgi%2BMukA9l0y9f6bSSj%2BIEWnr7CqmLJVinhsTdfJKNdrZSYw4rM4c48Aft7cK9Ee9dSH%2FFdvRFbgZup8cNDDxTwKHj1INJHjNZVyCqb%2Bc1d3drrnLQuFgSUK3KMXmT7UuBT5jjBi282FemJa7bqDT%2BFFaOeHKJgo4n3yxmfcmHXKT1s7A7kjDj7VIbWUE%2BGfesp4P%2F6aHuK7ZZZEdE3jdhIn7znGNh5jbaI8Khqsjtq1jy0Lzl3YF%2F8SJ2iaaq1oQa%2BMKPBk8QGOqUBZvKOLRz8JAGeED6Hrsv40XD0FtcZfVlOI0SBLnate7%2BvRsG9usRbRN0hVRS%2FeCapyWph7l5MeV%2FSmFrBZsFPSc7%2B%2BB4arwpwUxGOc%2F%2FHucCpxQQxjg5V%2BSgp5sq8lWFGGdhIVYKSzoce1xoXZ8CdHIwxT4uquHYL%2BuVPyWwXPoJITAJBAkroaqI8ltTCgtiGg9QNdLUwT2CWnTKgl6kdyR0HOH8%2B&X-Amz-Signature=8ccd44bcb68caf20b23d06e6fa795ce11809fdaff7dde62e27c61f28128e7ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
