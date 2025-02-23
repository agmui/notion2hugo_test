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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPDTAYW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIQSV1wxapfDPbNyWFNXbWuLclber8cmyhsqDdEeKG9wIhAMbloZy6oSCxlbT0lRH4e9u1qw1PKqOC8sfpXPo%2B27CzKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPcVKn1KGnk9POwlIq3AM1%2BvQC%2FU7VX0vHaUn51OS3DQo9aRnFbfD2Stw%2BRUx4LbXaXwRX5VItGXJhD0qA9EuS4UXEtRsoNLLZblS4oY%2Bsf2bmTwIeF%2BC9Z5oY9rbi7zFFC5XIaO%2FrJj%2ByvesTBb6NLL7BkTKgC26HvuoU9HvtifQQPwI4HA1%2F6K8cD4%2F4uslHiu74B%2BW31YVyZAmqyIa5ubRIBteTHlt%2BLwbkY48aRfyriyAYiel3rn5X%2BdGGhvV01V8yZlo6oIQ9Wf80nECPwihdUNNaUgro2d%2FNJcBZYewhXQaL8g9MfhK0UtDZkJOJIMB7CQa3yUlyF2CTrotx%2BKbq88jhy78UIe3J8RPrRoP3WhEdhSDECVhvBc8YragtNx4eDssybuMTGXvQynlNlzEwZgvPKsA%2FX1p84Hc9kw5MzRnCWgfh%2BuXBY0OA%2FMxRYGbwCCrTe%2BNGlUctdOAKDQDvv6LKzonm5jNAPtPTWyEtdLh2fYOcbO%2B4WF2nEOHhNjXbr%2BjPYlAbOJGnpFcGwYjVexblFoR%2FEQOaJdkrdhXyzljGBFrabPxTD47h9PaNqg0ObxdryNZ6QJT10ngKOy%2FzXMPvypCgkXxJNRcndxaR4bjOS8qfYftKp8HSxqgwJcJm7CJJRTkF7jDYqem9BjqkAYeblHxkyiUmtPviZvW%2FZjn1osc4ehOTHwXC80A%2BlL7dr1s92%2BD3hcazu1u5Hi%2BsB3RqO8Ihiuno6apUPSd5pqCwt0UXeI19JPySVcLem2EKQw4dyTlaOW5w4s6Vqg4NV7dx%2BDU3zm9JV1XCYY8DUc0EzG1hHaQ2e%2BHsclWEPguWhfFuNF3qb48uJzeqCUh8oOfG76phRqBKIVx5ABbMd3%2FZ%2BWai&X-Amz-Signature=417321c652f6764a79e27deb56dc3e78782f9b10509f7b80d745900e4f114428&X-Amz-SignedHeaders=host&x-id=GetObject)

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
