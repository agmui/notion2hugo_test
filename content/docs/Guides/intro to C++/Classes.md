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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHQ3PXR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgygr4Yx0%2FL3Sidojc%2B3oLxl3FFEAbuT%2Fu0PGdx2769QIgWij4p3MHHabqEZDRSrmIuHnYW%2FAAybPYSX00BavASOEq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCCVdas%2F5xfEg0JWmCrcA4Fi4fAR2VakuAmRxPfu6CnsdgIjaQlDvYIEYvB5YbQ0aOnABq7ZEMsgcBsURYeDWsKpkvzjgIkxmtzhNL511GatUVpu640EjcAPEAA3tse3lxZTcmMnP7rhgdXRIeWYj%2F7zhOjOgv5GjGsS2dzg2h30GMw%2BIJwMWhzHV65CGWtGM51LILhaDIcWe3j0F1mG8TvG%2F%2BAg4BeVwNZzkXDbRVMK%2FPj6HCwl72Bc2cgfuv9KhqmYU6R8kqlCDfvqDFKk5pnhWduMTQ4dlYkKPOm1ud3PFubc6Ss8zN4ilDX641SBxXZflQFxpOTuhln3Cbchq2exD%2FZT1RWyxuF%2B2UjJd%2B6bEjI5amDeSc4SmWSHsUVJZFBIXSr%2FqU9zZniJfZypQax2IJrfu8aj9PUf6fAqxfkOvSVKP4WIrAzk%2Bon6ATQ0i42Ktx3UoJxG86KqRb8AWzLR7j80BBcqCholc2q1h3biDgOB9wG8a9kjg6UOhoNo%2FlicAIWHixV91UIc5%2FpORirEQwG3E5ZQriMxS%2FyBffnHUBnSGcYFIFnvc2iEKxGWyO%2B7EauF3%2FUvROZcloi5uHnzqejElzIEsgLBm92X5yTBFFpHuTcHkEAqjn46cebUwAGYqoIHs6kG3nm7MKLx7r0GOqUBIDae5O1Uey6iQC3NdQp7XlcyeNxUpmLZaql2kVLHeJ6wIWMXW8S3JPuDws5fjjqRsEIzWJoRr8KtHaHNSIiadysHj2P0KDMQbt9uGvh05XwKXy6%2FgiqJiMeqOHehD7Px3TOou9UFPK7o5T%2Be8hifFUCm%2Fi%2FkvO0yg%2BATto7Gkdfyzn8JIcOE9QlIjkRIheDeg%2FnMwnlN8kh2Y2XioVZ2Lb0iwHdd&X-Amz-Signature=feb69fdb57da67d79f8e841e0cf5786eb42983915c16ee8545939d3f1492c0aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
