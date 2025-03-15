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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7LHFOAC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSH80PKPFDCLc5buK3mlpiGDouqnyJZNu6BJQ6bYbUoAiBEKSZYMTp4bXr1%2F4vDlD6qlSFcMYn3n63%2BvPeqxWToHyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM0dOaugKP52cdRMN5KtwDIchb%2BBN778C7roll3UDqY6Z311RFO%2Bz8zKthVQHRIM9EklZlSRUA2ey2CN1wwcFGY1WdxFqY22vDIXpqpVJHxqzZzyr1Epc%2BZu2iUpDuu88UcxozmD3B6UP4jmAIk9HrAnxubbfTcHove9Q2Dv5nJCWfRltxgupoAihhEC0pygBcHAAljspkDluUDb%2BBTiqivYJ2MNuETpCyHeX%2FJh3bObuQxhmZUmogbLfCGP0ee5Uak559R216W77Dzvq6AiqNtRvFJADqMYw1CEnH71ucreWvdySkhnTNd%2FiW%2B9gb%2FsrtDBlGIRNRtaoqnS6ZNImnmBU4tp2fE1VY25If8%2B1lLgnVHpolk8zr42LZW22xF%2Fyb9gVpqJ4MLg0IAj28QW228H5ijplcEJav4UFDd93VtELQWhYbrxbTDOfbf9A74mjBHuryFhixmEoJtxttcCHApVvt9y8%2Bsgvrnb22R3v4OhQd8BH2oJzVuilJsaqtP5xjjwRS4Vov6Svey8Zn2VEixgib6Q3ZttIeKHcq%2BCSUShMayRqNg2yrULZWQwHfolKxIcGukuz3SCJY%2BQ2yl8Oiw48t6xLVOLcenPg%2FrRwe%2F4fS8RHGh7Ci8AV296d1Tt3FnB1XMoNleiwW6Mcwre%2FVvgY6pgEFUYW2QkV5cqSTpHQE1iyqJpdolJLfifCvzIZ1s14Q8U%2Bdn0yP%2F8qNRx8ktfW7OQHX8QOKdBBDAJIK9Ab89QjmldP1RKkKizRAGT73fdpajiY%2BVN3lNaz6tiV3pAxkfnnT917z8lwIKQ4EVrXFElmv4Wk%2BilvrAD%2FgHUK3GNrcfNzQRQ0tHUrtE6ue5EjsDYVnSiMflO%2FOKqYThOf3jiwLILkeKJQH&X-Amz-Signature=b59bc24895e514d9d04d950f5d9caa6c07a3a986adcd18e7aa2395a88742bbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
