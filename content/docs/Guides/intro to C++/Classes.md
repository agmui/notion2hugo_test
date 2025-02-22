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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CYGUX4Q%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6GZZ4NAAGj16Syc%2BoGiJwwIQG12f%2BWVw%2BzyGcn5yVIQIgEp5W89%2BJgd69UdLdfnFr1RS9mdHxLGoIYQttu93r0r0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6MaYWXj7xP69u%2BOircA%2FDPCTdSMWPkD5fiN6tWe7nwT3ruMTlyxU5dOXZZ6S0ij9wjfEf5yuZWUafZ3cPdhYwXNt%2FQWYYHC9yfU2Dt9zoB2k7qzSixkTMheI%2FgfSsfMHAt013JUilxRjTEFH3YLy8%2BQ6n98RVxnZ3id%2BUjLC8zeI4mNXY3UE0BQAn59iXrz%2FyfjjaE9NV6ybXYpfmdjt29hsEn%2BLZbtSNk2g16YMTk7R5G90etsbymmyFkG7WP0yOadlluY9lewkJYDrU1VMzGmHeW3Fhr3XM2OKLmcpxkvSiKtjUgBSQc1ielYeMDZXgnYFC8V4qpnn%2BBjw%2Ftxu87ZXsjuFaUb1yAdAsjH2BVDE2vNPwyOfmEUqF5g1Y1Ya8bKrox3c8kJnH4Xw%2F7CscCkVhMHkiHdFggVe%2BSab9LV%2Byslh2KpwQJasRxPbnBC0EpGd4n5F4HYp%2Bnq2mfViP4RSUKexknfdxheHM4FJZAEuGWEecaUOldC7KbYmszjY8IGMwAMK6PMqRkseFcL4NxORNXN%2Fyn1aLHtWjM3IQOtz1dpSQnJDxauZil1Q6zlfvAWMBuORRDvULDsuzB2AJbkdzdRsd29F9Xq5micCA%2FWNPJ8cof2cg%2BQGZuG90gTyQG8W5GVpxvwmgaMMSI6L0GOqUBn%2Frm6KMwXBBabtGPV2rkKO1U88Hho2wmnAIswUw%2Fmc6Ivhvm2%2BV2SvEKFrS%2BkRb1TB7e6fFdNuFhsXHmr8zomc8e0tDPfloQqRMobAbYTXf8v1yIw9EpFram4d1P88kKL8mri5klwkuOFm9Br1a3jq6ePTcqw00dYuu1HXYPnDYSDtURaCKwpT%2BaUv6KYFgIylq0hKy5ZxcHcvjY0911VCDjLwMH&X-Amz-Signature=3453b6717c3019ab585db82557b97e166c3ad4f7dfcf9214ea218eae450ec3f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
