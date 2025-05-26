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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UV3R6H3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIzvCsiAQQHeCAzDibRmBolb6l8%2BKFk8unWahvrrcHwAiEAtYL1gtmVVxackPdjt0FWF4SRlKoCuemWNZXEakwTeP8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBqp4vLc2RRg6loaZyrcAyA374NqrEauWkcgv08DiKZiNQw26iugnI%2BH9COI%2BMzQgf7E2mEYhevqFVombNlCi4noKVAd8gZ1xKEhaQlSrU5gyHY1Tkx5XycLdcyNdU6fxIl88TlAVisTbLKwfQZzcXUKo4STw6467G%2BjykYyuabcqf8Eo7Uu%2FqJIMWzEVRQBSi6uSl%2FA0xLVvm6Qfs%2B5jvE%2FRNFWeFUU1Xy%2BtkDq%2FmUIy8GfIoHld72iTIoPlEtuv0P85%2ByCgsZJGpT6TSpIRry574aXKdJ6SaK0K3WXc1%2FB1ncgtTrnV6vxk73dvywIm2Q4M4iWy3JHAtx0pbqodwZYyqcY7u1wb3Wp2uExAr3tRzU01S6QSidpbjpFEiZH6HdjPLIYbmi%2BQaReEOwMDCPSx9%2FKeOkylipyABTBE5T3%2FTb4f9ajAeYejel1tWsC%2BgorKUYvQzDG%2FXezOi68aSDDgyn7m68lc5l%2FJOVgtpUwsn5HO2Y1w%2BqQR9w9P3pkf4SLF3pM4r7kAZUmx6tVfhoKPQ4ipGMhVcfZHWAeecmRC%2FcE3Y8vfQnoMR9RYqRq0i%2FfY%2FIJttEjic8YHWGclrBOdEgFNr777sAq8axRoeTaTruMbk3R%2FlITZJvHQhUnAEjWrEja250VA%2B0PMLir0sEGOqUBMQcksnvUKgaLrYcicq4TW3vpSF9Rml9tGWBeZhXea7Xaur8DRbsuUpMyCv7Q9u%2BT6ZasKOJO%2BJUMQROdysATpPowaDKwPsU1WNVALNjPyUc5T78epmouYm41KQgtBiq2BGQWSP3CsBCpXwhdGIL42uUQyelBRl%2FB9t7nyInyMSgs%2BwsDzko%2F5Bf4ETPn15FsWO6YawXbjNLkjcF6BR263OJbCyLV&X-Amz-Signature=695c93557f38ca00493a1c186d180a5bc2f438e0b9d8bb6fab139a3e32c1802c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
