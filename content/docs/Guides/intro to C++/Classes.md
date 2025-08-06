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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPWK4J7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBRp4zW%2F97SuZ6qjLedUHNOm2rKwbYM%2FhCU9zygHdKFaAiEArPZnXsN9iTwMwYPcdWx1%2FlCtACQdwV5%2BeBjigAoFYEQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAZbKOPgHnjLpaYmQyrcA0FpNx9AuG2hlXVBk%2FpRJi%2FgY5Vzv5VfRFGX8hhr5B7XIHvcLzWh7xiFALoiikWWqRSogVXTHFL4XI9yjAkTkEaKWVE%2F%2FWqAue3x4il0pVeuzCNYbHKCoi4Vjq8p9DvgkC5YXX3HLQTWd%2FJ%2Bi%2FWAHQPi7YGaIyoYRn%2BPv3v4Ufm75zs6g2TIno0McMQGfXG8Nmm2bgDs95O3uVhb%2BVrVZqRnoxhXnjwIdEvXpmuuBbjEXcrMQgFH0zUyg8%2BHPP7%2BX7iR05e4EkOTFmDLDDn2uKtVz5m0JD5ChJbtMxTWuFYIAvmb7jLpLzxk%2Bu40YyANgSQux5XZ7RoliI9Pc2OZzvy9SR2jUL7cDvjsVv0xnoIbjbfWAEoFGAuTpnlVFEUptgIYJ09nqoG2bxFH0bKDWghCGLbFKyHesCPynqC%2FaAVAv5g8N7tJZnNw%2BT2SuanM5FCfdN%2FBnSFNnMS4wtRTfjPciL2qLO%2FqzmULKGjyKPNwjj%2BHpE01cP0i2Azjcb7AskT78hNYh19gq8iwV0RuH%2BZVf5GnA1W7PIrhtXJQGwZWm%2BCPz0YsvB0bi%2BGXROhoh4MpATPJE6NtPf5yrqjsogDBTJO38jimJMtbmgYMytbgJbrFuR5vIDdMFQzlMJSXzMQGOqUBGEuqmxmx3XgifTCXGVZnrr5q3ujVHbrHjwnrsJr1k7MYyLnkFukbFH2rPgE810MW35xH2ojxxSeYQ3QDjxrojlBoVe0cY2rIy0QCpz90HDWJULnvXJFwK1eZc5nL0bfjTqS5%2BojFQ%2FO1GdadjHOiOBMowd3GvzMpS%2F%2FpEOWHuCnckDiSkwkiemS2UvkcooOejRvw355Ng%2BHTnCTnZWRLYuMZ6RGX&X-Amz-Signature=afcda9027d8a325cd86bf6ea0c2c6353487ebc4db7fd5104a8add4c0ad642461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
