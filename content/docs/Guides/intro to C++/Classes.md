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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXQPYBYI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC3sjdsnWtydxMGQtwnfxat5uinFrz64rMBPm7m66YRuwIgCcOz1sW61wJeR8FnYrGScC2DY0%2F8mmhu8U1jY0lL5eMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBkL%2FLPG1GKg4Qt0nyrcA5yaLUbuCBcjP6JIiZcJTjEOnNVbCKfPYHqbOM63978OWG8Ev64j%2B9%2BWs4ht4hSQ%2BnBLiA%2BvKTU%2FkbzvH%2FBbPuF07ViHud5FLHPmwcG4KOzkUHC%2F7O%2BlYaYg2G7xSOaGn%2BEk05lTQ89m3kKPtBbrctL8lJI0B0Ea2Yd7DP3ic9%2Br%2BuRuReKO2kAOa0I8vea6r7KSr8lDGNk7zuDe1uBVy3yZdOKDMsoYpR2kM3TWW1zqwa2rj8f254heYGUmTZIjVkSGIaWxIreDNk0jMvaBz6WfhCwoAdU8KiaTUeyoimbMFcgp0kFi1njKt7%2BIf8NiLzZtjbkTlIxzC2lGTj4ymFoAwSq9VcB96elE8CO0zjLhTfxJNT6krS7oU5mkUbjHnA2vwWkD59HLuTP0S3Y9ycBMTIWgeNd5u4X2SpOEsPYZWo3uP%2BiNfpO45nC03buNLMeq9Clz32PyGdq6oh2uW%2BGF5dEEer0Yw%2BXuZ0dh0Up7Dr30qimSWEvsF%2F2hXECBaNnnEYL3Aq3tVVv96HS%2FdNJrxI4bwZeB3XltpcFxzbvJ4%2BKy%2FuDULeyqJL7riNczUEAG217E46c1tb1RHgWNaeFejceENXRRo6b5PJu0JceqqvYCcuUhLxzIDJPnMIvnz8MGOqUBZadDcj3TH7mXNG1Bw%2Fu7FiMiFrXm%2B%2F%2Fh7jHztNRruLHr%2Fq%2FNX3uoc1q%2Boxt6X8qYroNCqjRql8fAtzIe9XLrA%2FdRKqGE3cT1oMkmaY%2FJV2NNXXmdIQ8roXJf2DCfJqZItW6voswrkzcklNRuB0S51X2vCHSBBRVPIgiTWvSaxOqpuX5bcPgVO1SUOdu45mzdq%2B5%2B8O8QWJU7ZK9DPNO0hI1v3oyk&X-Amz-Signature=c328260c0c93d0dff21b19e4f787940e7a513ad33722f03cdac968b6b8167477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
