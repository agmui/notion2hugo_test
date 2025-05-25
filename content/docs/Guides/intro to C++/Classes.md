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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635A2FP7B%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEkBGLL3fw1DwaEGktbNjIzSMlr96AW%2B8mRPunZHXDYkAiEAgQv%2FCw9QSPdQOVRXX%2Fm3OKR81oCwxxrZrHuMAZhw%2F8Iq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPjui%2BG8YfVTHfXtpSrcA5PeG9wTVqD9%2BgkmaMWsmne16lcMxn9iexK%2FLeVbz81Mfu1gItVbJ3WqNk461GHWHUacbOKvbQAIrq%2B%2FwhQBCpsctPZqVk3%2FJJdjP6ECMB90ZHQehbMx1uP37U4AiVV%2BoDvFXYQCYVx1xHznx2ZD4miyUrlIqjtIaHpXLJT5gbX%2BdB0sSEdnbI65%2FQLKXSCkWE9mIddtTEncgWBCSZ4BSxH1Ea7npIBLWJV%2F7KQlqTMUdJ2bn0o1vTrR5e%2FRpoYZbnpZmKOQ1reBAgHNLBzLpkgfpgrM%2Bst68eQw4SiqmiU9bPi8M0waeXvuCuXxze2dud0wV1P%2BeoooNiYAky4t3zIlqsOv5PStVr7n7EVoyJ7E%2BJZxsClvrfIYC52MoHiak6ytYxWy7u6QTitzwIUoumj9zBd72OZROdaag69g1rgjHjRFoff2EAxm2LDZaYW4k6JGMOpbMGHLDB4TtmBFnwBUqYhczKkTdcM2i3pRwlI0R6%2FnyZYMibS7WbHFnBWnh%2FFGOKyTAheDKuA6Wx2Ph1uJIa4YCTXaqQZObvi6dvq8seM%2B%2Fz2rCB11uUYbllL2m%2BnjRz9rPQO2JDvzOBuAo7QhuS03B5y%2FK%2BuS%2BmiNhS3db1oEdftyFLouF%2BYjMJfey8EGOqUBZbookZEJrOTh7isIHrd%2FhNZXOKi%2FfNsnntEk%2BJGb2XH%2F92wVNYuMADeHAxEkZ4wLDs97myp3zmXFS5XQtzIc8hI7m6t2K5kMXwrvaH6IC7%2BVEfnqF%2BhMAZE%2ByDr0iAfbstvTDTrU%2BzEV8a5Wr8GBgu6znTS1%2BwVB4RKp1%2BeF%2FHTvmVNAA00wRKBodWpWgo7WDhQ8hLZQRqZIppylhzmoJb97F%2FRT&X-Amz-Signature=48b668fc0d2d46d9bc7c66c5799b07f02ab3cb87513fb6f36b0cae60b4a45303&X-Amz-SignedHeaders=host&x-id=GetObject)

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
