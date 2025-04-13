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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RCFGGOY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFKC%2FFriuzw4itT2yQonCJWOxtUzANikycN8TPcoNpDwAiEAgfWTIu7FnWVmjWAslDSEbUwqjrStgqp%2BQ%2BRUpXJMtNIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQsjwj%2F%2B%2BhLjxivyCrcAy27XqLTii3B9DCYcSieLVEXxHNO5nsG23FcfL5bA0ADb5DJfV6KHF920j9VPx1ZkQnRhvhHB2bQm8ks7n6j1s0vw8V1cNnOts3mAXmfW9KPhwbHSAlSmXKp0ty6sGFmUT7v3PdC5MVV42gCcBYw4KPV5Isyalp1OUa3kTaHl9gVaWz5DZOC7ytE7yOOrVbvs%2BAquikEdvLe%2Bd4vhehvc1HcXdVFyvrm7Kx25tUt%2BNng5vBi2UC%2Bgcs%2BQXt%2FvQUMX3vQonvJIfCyIfUVbahccm%2FbhSjqaY4UPaFZBlwmoiC%2BBioANDLvpj4HTsgnmK9zQQ5lFiFMallMtotsAHCgmqdPgzDMLptN5xJlPtmSpCO2xJqy%2BDwvlo0g6NXdceYV1xG9b6n2K%2BWMBYAfqg6tC2a%2BS252IGvsUGmqHttM33H9pdx0SxhqWlg4Yzo6s%2B4GclLVXwnHMPt3%2F%2FkRFqVYj95S58SdT0RNf1RVHGOkAalfTi99MVXZcN8PjXMbPZfXqqMXTPI3J%2BozqHTZeuxh1QuPAg4cvUMdb6rmGvbVM2yKGmVyXqDr4rj1kQblkvhSappqnZVc%2FI2ZOIdV8ps7nmPqZB4HHdeyG6D1cGsyA3JPy5Hb3gzy2lL1AR5BMN2I7r8GOqUBtYuwNk3U9QtuCJU3FnEgkjt1h3f2Fs766L4w%2Fi41LWhs5MCdKtnauLfz9MgHga4Dp7x5fmUEokOKBXBzurRNJqSLBoaFVAWlqszw8w0pnP%2Bp%2F3moXTtoGInevDs9wIUUym%2BRV%2BSqVLO1tI5g5SOq171U6rSMq5QkSBebfv5OiyQ6QM7bhpn%2BvRAHfHArebh24huW%2FqU1zOszbrR3HBXrGBYsdDVa&X-Amz-Signature=a50258fbf4290297aed0c61d209f34e201e0f5f17a0da133afd933e10c0423da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
