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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOVM5KX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDNgVkBRSYoEebGgzWg5HP4JQ%2BBbIKakhp4zUjPSci57QIhAPrKNCybcFvb9Zwlkxw92Fz0Hz2JNfSR5F9PxsolgD2iKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxeCFXSJWNDyZ6HeIq3AOBPeT%2FSyiVdJPcmvUWbzieRJKK0WAQoboiXaHgnWYI9nU%2BaQ2qEDn3rCOfmTBznsTd%2BYjgm31CDAhb%2BtfxE9YCqjBIs0AntUvRXef5U0pn%2BL%2BHGmBw3ptS72h9GucDOOBRuSxL%2B5CEg%2Fe%2FvmKAvLlX%2Bt4%2Bx%2Bf0VTErezPbp6Rc0ZMihaptACOeR0zZeRSZ3j5SxwtooFYI6Wd8yAA4Z2yX8cECcYCH2AQGXf1WU%2BiMUFw4%2B%2Fmz581dtjckXDMRDN0zvNh9fX5VZMNRB85FmKfrKLB7yi8rMHp1%2F7ygMyb48TIvHu58M4MXZV0X0x0AaGAITyrSpnX6yhrU0zD4M%2FkNS3SB8ZUE%2B4j%2B4YQDIbFO%2FllPbR4MCoQHFEyeLH%2FqSnWiwIqvjKXxMqqNsHBtRWSjwMwLRmesnQMyblT%2FAW9d4P53n2ktquLZtvzNWmH8v0wAI7U%2FykpcsHM2lAB%2BcFvrgNNqbxk66RC2ZN1Orj9y6mAgY3FD0b1t5u97Fb3X%2FkEYcMT4fzhMyTr7WxSC873b2444AHOjVV4WyS66ID%2FV2IFLwq12Rd639t2IIOCMbfuRTNzqIGBBLcUHiqlRJsdd7SLGWT7CbKa%2BG1w3J3Q9Qq25eRBZFaFplqPmmzCk2tnABjqkAcxk0RbA0Tfyi5jc%2FM%2BBXxWqajQ2aDRHwrhwNWv1n7SDxT%2Fm3GabWKdYr90Pa5AyiNrUHNoaRXZd9P1obUTJKEcSsKQ%2F1oH8tNFPQhSIv5sL6NQZTDkAC5s6%2BUo2ZlGH%2Fdh3H5mzMTe4GqFOrFs%2FdP01DmrTad%2FYBexD5rEf5yFIA3w3aQVkjvE3LGXwuAL43iIwqDeV9RzrngyGiJaModKHPNzo&X-Amz-Signature=4a7129df2e3be2059471abe3f50eed389f67500a1c6d27f38b82b573bf41e7a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
