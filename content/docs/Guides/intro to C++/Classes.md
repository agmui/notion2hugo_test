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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOFJEVM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BTFiKJ7aNmSBDnBGq5vKpP4FEgvq4Fc6pHpqb0SRTawIgCwQGc64B9%2FdDLuepLOCjQnP2xYk02JydC3k8CpBLdsEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBk7uS1ZxL3hCCtUcyrcAzcyHwWkBbZzZFgx6%2Fc914iw90lKiNuuuMAXtlaGAj%2FfewU1gDf%2FM7mjV%2B0x16CydRuMs3Ce3rW%2FY%2F0LiqyePozxF3oM%2BMKEzZwdou6EnerknVfey4Ro8OAlwznzWj5qWpYczSN4MXvbKNRc%2BILBrNBFn3Jx40b9NVJHuPbzhZgw8ldq0KrFgDq3SvDVRuwlRtjJgM7R7jLrzSC2c0muCL9%2FPz8CuIvZoU4pQd1OxOFFmgoMuQ5icjKMz%2FW5OTUS6B7jnclpdytS9%2BTm79XYK2fgDYvD6HcGUp8%2F3zYPv2h8FRGMRBHucmJRGNDnz5IA%2BVZXIyAm8VUKfYuKoS4wqAWA9inLcgjb4xdcf2jKErBVV86%2Bkut9JFhshq8UUpe%2Bnf5gbGh2XBNToqJlLBKFnyWS7iGcvABVEhXCkLb2Dc9MiFqqjh1U%2BHtipFgopJWdqQKoHP68wyC8%2BNCS%2B3X7r7hqmYYZ1lM%2FyyX8CeQnBy6B3%2FsKZe4pwEVc054fgjkcdPMkc0MFzMKgYXstmX%2F2fmZPFrFNy%2BizB9M5tlZN%2BLjeMh%2FXJcryq7keYao2uyzpFZvXc0kc08ko35hH6IptsQXrDtLhakeqtYQQTrzd6jWbo%2FeQBddMoAFEqjsDMI%2FLt8MGOqUBuQ4bIDzYzC53aCLwv5mX8RiyP%2BThMRNnUnjIDrhDZD9bZrs6BRHHErk4YBzGU%2BOALruaY8TKH9lt3r2MjA19XhCGBGp2%2FVEbnpZuawme%2B46nfkxmQ4HGiviojl5%2FphfzeXiEr3DeQw3m2Xe30nThaptHZPH3eYQ%2FbMYjz9PhK8rd4I79QREiKLRzRwov%2FTXn7%2BK8xjX%2Bx6mAHd3lSa4A%2Bj9RgLAP&X-Amz-Signature=2c576ca08d336fec41a171b937dc64abeed51f481415d881f0d9a8be25626ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
