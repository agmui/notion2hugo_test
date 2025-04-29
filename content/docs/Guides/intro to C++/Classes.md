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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P342N4K%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuS%2FziKpx%2F3qMZaHRJrq3Qt5F8DSz9V1%2Bse4OICxlFLQIhALn3Q0pIDWw9rhjzVMFOniMCvuR8CK22GeiuivXmrk1JKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIpoT%2BZRtF5p3hoagq3AMRpyoPeKIF%2BzzmL2%2FIY7K6RznCo00%2Be6RqtevdiL6S9wHDPdK2XQHtObc1qjq1D9YxLYpXaU7%2FWrSrHUxzNJi3PWMmEsMal%2FMLv2%2B6G6y%2B8UT2fVXZPH%2FkJ8NTcF14V1tXh9mxYTqlRdGKs5xb%2BIbm1ciliQc8ipBiu5Ud7rNQ9neblkIYayEuZzLINN%2Bi0%2FexixE2WiNe2AzDfuPtvPEAghfXH%2F1MqbRM0T%2BFEsXQYf22LX2%2B6RRQyq7loLa8TWBENsfgLL0GxrK0D8IuOlfthank3At9L2gk%2B95T3mkFf%2BMcyB%2Bc9r%2FiKmJzRs0jjZytVjlTeX2NmUpXaD1LYaVtr%2FfcVeBCJwGqHF%2Fl1HAi3QUaroz3N%2BToP%2F92qsppBPFYdu0EpaOpWmOLNrM%2FX7VpCRzzpVfYaCs1DMN2%2B5qR7TjgzbiCMxQS%2BBT3BcZOkoxC8KHr%2BtCNFOL8uoTYx7mpi8TTah8wokNfw8SJjYodmCGDy0KjfMR2ehZYOiXDhc%2Bf7nP5WydilB0HTLdAIIbltvQ6rNbo2OoUX32cGzL705RwIA6Ogog0LE8plx898JwFcASsPyuOJ2ojedZDWm8gp%2Fs7SzqDG7N5LmjILY8Q5KCXwQI9N5o3JydJojDxo8PABjqkAVLD6%2B7ysXjRGHfsybPFrMXqANZYL2HcZK59t9gzJtc62YvpajRJ6WRdue1Hw9wOEvUFlrqE5plibPv%2FHOPM5AE2fL8tze44u81Aye9Dc59iXxE72J51MHqtm24OtliEFyfNzRouL1MzcP4ugWPrKgK53nF4WvQOzRbVK9YUnXp%2F7M7D1Pb0AtIMptImi%2BUMFk6kgRsMac%2F79I9DkMxYT8V615Tl&X-Amz-Signature=c10fd90d1a0e8cd2f1b185ee212ee5895de76eb9f799808d0f30f1f132af9157&X-Amz-SignedHeaders=host&x-id=GetObject)

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
