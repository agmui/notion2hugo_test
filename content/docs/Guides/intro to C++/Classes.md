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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDYKV3KT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYzecQ5rvfKqv6q8QzgLEAuQVGMqk3aEmMCYFa0x2VRwIhAInksfoE2O8RjaJPHmRKeaK7VoEYK7DnGjS%2FXxEnd9yaKv8DCDwQABoMNjM3NDIzMTgzODA1Igz4P%2B0ogbMEyd0qwdkq3AMaqQg5niG3rgPMr2jMmDEx7uIr4gI3KCwn8pVcS9Q45TXwpNw9PRn0N6UqeFlQqXmUgDrKgJbMsGtjFMELuIIWdjJcNP0bUWsfItewbAwUhX5oMXcR%2Fw39XnDEBtht4T0qmlV%2BhQ3blMAvNIMU%2BGkAZun3ovOijsreFtzWZZ%2BUAhwszseFzPdjVrBwRpKYcAEEreFqbUYvuJL1xQ0f3ERoQr9EJd6N8Kb%2FIExcT%2Bnrwce5kHuR2jF%2Bkz3xnq5SjtgnyJz5dM9gAG92%2FYg%2Fuxy3D0isoQIagkSRufE0sBhKFoRomO%2FMuntK26YMXz9sDRNOPsWH1Eb%2BiWWC3kQT%2BQMumm0nSSEbOusLtDy9FFTAjvllx4L1M9vpEua9CFDOfcMDMEuDA5UHyOLka7bOB9EP%2BDBPDLwr5rSMw17ur%2FJswKMBt7Z%2B%2FzYfSIrgamMn1eziExZ7ngmx40Xzteg%2Fc7SwGveH9bxSs4Up%2BzSZqAV7NHP2R1x3%2BD3CD%2B4Osm%2FFs3gIKjDuS2qqbtN72U%2FUb5y9s%2BjG9tZUzgjkxY1T%2FrbCRwoMaAAfzlnllUrVUiYFrDbgJHezUbLp%2F18xo6uhe95D0Q0VI0TiC%2BJAIBKvBq6GtA0rhRZYx19b0s3k%2BDCa05rBBjqkAbTMObKTPwHu96gz3XH21olVObG%2F2dv5Fqf5p0tptNzNpjtRpBQbi7LyLCV1c7hdHQxbfiPB9Y65uq%2BLePXsEIjoHe12EFOw5vnV6MkieDlmaIj2EqeyMggnAjrG1m4%2B%2FrIJ1uBmKnhGYg0X6c6SshYbX%2B0STB651zjb%2BBtlc2G5hKY2O6fwMuJvTjJJhM0HKU%2FKW15LpHyEDSMOtnAqaI7GxbG7&X-Amz-Signature=366119823d0a6c50f53af550d83805b766e2dcc7e24742d3faae432f31e945de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
