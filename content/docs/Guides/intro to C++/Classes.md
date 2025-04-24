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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7G2F2P%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEOU43cE3FYd4JY7GbdOB89gqp1kLO4TEi9qtdthsjcWAiEAwFYN9oQ1kxSgNv7JbIEJHeaspo3SfMKWJsDkKiqm4%2BcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBy20YE24M%2B1BP1xSrcA9qS5T6tO0aJWkpgbNsUpc0rR%2B6Vztz5neo%2Fgsv4FaBh5opSxTDjT59brvaFY4pDVeevmatRAnCD6b6hZTG5Yj%2BHxoxNDoTsiFwqEG%2Fv3xPs3WMPXjqcDSW4jMSGs0aAgXUPeMv32wSIA%2BYoK3fZjY27m4Qeym9AhX%2BGRwt%2BWuNN46Tsj6am9m%2F5XaV9HN0H4uqkRmr0eVLrbaG7hglNNRBZASLfHtGSieJTCdC9vp7Buq2ga8G7Hcs%2FDI2SGgEenvaSzoqSfYR2CaOdAPy1TmjHyWZ%2BzUD70M41eA0wbLdUV3Jd4KNLOkCu1%2FZ6xVNVel4VXz1e5DXXVNECeLKCX2QO5baCEcp8HRhxFMNqtbU8EccUmh7b3LlIqIY%2Fv2HIPu9uuR%2Fv%2FFmHkrNH0Ekvdv6HhJx0syzaI87ZRn724NIS1016zx4QuSF0E3cvEWqBC6hjHX8jq5WJhkWru66cOaXVFb5Now4uHxfETaezoecPaSEl0KmGWQvzNLc%2BkyHmMxilPvtW0iAwEEDO%2BDlxvKJ2L3sEoza79v4jOGNl2htFBgb%2BJDzAaE9CjCYGb4l1Ax%2BJEyk3mH9hXHH9ifS5LApgymzdDTPrp7e%2FdBDYNSiJs9qEquczc5PLji5xMOD%2FpsAGOqUBLMoMA3uz9uc8e8J7MkBXQI%2BXFADV%2BcWw2g8%2B96McQE7d3%2BuaQb1Rim09Y%2FZbK19Blh6pD%2Bgt1we0bLOU0Xx3165s4bTaq3nzzbwQR5yp4QxuMwbvrr%2Fng%2BFh6vIRvaHIZR9f3SJofy5mp0tfygNqfl0BgI1xl4MbR4XXz1PM2%2B1Uzo6wRxVexipkmHC2GBz0E0PNE2WUTRVMpPlLiDdhqAazcx%2Bv&X-Amz-Signature=ff059cb847348035896bcf0de5e0227b37c3a71aa1f3aa1003033b7a2fb1f828&X-Amz-SignedHeaders=host&x-id=GetObject)

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
