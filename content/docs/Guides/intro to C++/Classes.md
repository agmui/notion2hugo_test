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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QK4NRM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGI2WpHIovlYuXLgD6yK5pNSY9Tb8V96AgqFyrzvqVaAiEAxQ7tFcilF8617LH4j%2B3lPGHya1FYqE%2F21GEu8bJpsIsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKCyeoH3a0IMus647SrcA3RYvhldw4Z4SHV512S33csQGZ6dLHcj4g7FWIcSpl3a9lX8qQRAK8cyhWJBV%2BNTWhdk6OfX1DOxDSLEeLDwDI%2FU%2BeUqpbtl5udlIzDInCLjQ5%2Ft5W54vCXKkCWyliq64s03H9%2FUYzFLBEaEFt82657ubSb43YniqtRfUM0n9HsStG3gPzvelpgrg5bS37P%2F3P4TvMxObvJVhY4SMsSR5llei%2F4XLgu70SfEd1vKKzaHs4cCoerbqksJK5XzqDLORr4OXflCrEXU0xM11H8PGY7w%2FrbDhwmPKPwE8ijV%2Bcd0WTEH0bnMMrsxtqt2kO2zd1G3stYsSCnzdItWoAcgDmWmAZL4B6frxU3eVUzycd0U2XEZd2FLdd1dtqs0VfXbkwjcjdYEK94mmV1PDXP05V1ojxPhGckShr%2BGnbFYibSAwVbX2JstEPCsbKzv%2FTe6o8iFD0h%2Bul9PJX1xyrT1jomd8EKeN6z0yYDeer%2B7Ahhv1R7APUgEn3Vly5OFhW1DpuT6mwzPBIsKMJFfhM3G43jubadlybPd5qfSgkB2CoApQEWD%2F9HIPMvh04CySFeIEA1WO3y%2BDP6lWXbGgZyWkrOEnsSTDGruiTbUcaAvUiGu7IUPGcOfvOZQB2LqMPzk4b4GOqUBhW%2F0Cya0qzSIWeKEzfyUtsAwdMmaSjQMw6YDIakUgd4ZJfKOu1rhsEwFhYtqX6%2BI5R84dfz27JAtAAWqGXk1kZIiXXSSOaXOLkeG%2BRfYtYGiX3KZL3ztIRY5Cvw6N1SaAQu3mt2omU3dnws73ZcaDcbETEpNVuptDxlQl%2FPCm2pw1gPLr1JeIObU%2Fbbq0Taa2RySwc8dcdtcYF16aKQFmlOkdO6v&X-Amz-Signature=270d8c0bc828c5f650a5e372d0303c0dae94899d0d51c3595a177dfde554abdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
