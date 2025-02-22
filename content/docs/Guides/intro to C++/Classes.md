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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAGOF3H%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbReXn%2BST4AIhjwkcJ5ZR4cqxEA9T8n6BrS9B4QyIDHgIgOIFr7%2FcD89jiOSSD25qqEzpTjTU2YzPcjC8QKInI7hoqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjXGNLUKVWhzm2SayrcAx68xvpO%2FzShNOvLGyFXkhp2v8iTatMl5iG7xt%2BdSZKVDUuG3S1sLI%2B5tEy1S4tZIsZyuva4DBYFi46RHQxonkC8hoNBE8ZYqvxtZuCEg7XaqictBMpR2qmZjgYd5ac2XdJ%2F1CY%2FEd4Pj8SPCgriZ2W12X5LG5cA6UuZkPnY47%2BxWU7PtdvWrhalZaDDACbs2Qt5wKGbZk%2FusMEyDwsszmbdYzp1Vn0Ia1eq3jrPsw8QTACWlKUTSQV%2BhZteey1%2FZvzWqgBWN5RCsE3xvLqhV32LarxVa5aR8KHaV0SLF%2F3xSnqkEyUtIB8V7zclIaHBo0EEVeViw%2FBzHRQAfT3in5UfbvbO%2BI5OTeZ%2Bo4HUFpiGQdUSsCweXNda3nicqkIpGTnaiXKwEeumZmi7v%2B4EHEpORSP5drPd1CQ31RchOH4VMrunyGiUVsEXVmNjUoU4MAvdxovcK3f6MsEr35gRh%2FSZVcX0KT3y6JxcLXBpdZq%2BJ3VCKPGDEjUeaspYLVp9jRF5VEb6php0nEzq0bohX8HfBQMy7yyWLIcenje1Kl5Dmv%2BkrU5AmurMA3fAtdUcDkwqyaSEHcGgb%2FNo5%2BviO6%2BeTV%2FrA%2B4sSzrZtgYpM5IOYuHxeTxaBCgD8Y9KMJf%2F6L0GOqUBOhaUHLFtlw69vdLV5bBRNi0eIPjBtuJR8V3pAez55LaIAM16GNrAzE0mMLlAm047exB46PcSFF%2FT5bI%2BsVL69fuk%2FWV1kS8eRRodPSm7AuiC4MKG6lv5Ooa%2BkZMXH41CIx1tqzmtF813e9b%2B4wwCWbMdfkPKABnLGAkewWrieqYEb1QNgmnTXY5jDvPjuwllL1U2%2BoXTVYoqkpk1Ozdd8DqvaGel&X-Amz-Signature=fcd42bdb3801844d44c1e9e8433e6d587a566438352a3f57ca55d377226cb9e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
