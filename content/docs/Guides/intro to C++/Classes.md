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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657QTNBUZ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTjcyCARJ3qflatWdi4sph98wgAySYfusVpp8h6ZQPXQIhAMie0BaLL%2BPHE3nbMwoi60giw4KtLQqVsb05dSXUmFx2KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLKHwI26BsU%2F5TKs8q3ANLvWiJilylGpZIWykjezLbvtVUHqyIplLBk5G9GN1aBRjOxX8hJOr1ebGQx5hNDmm7UXdcPKgsTSHUzro%2FNJ4Xs2dHXdTSFoMCCICnq1r0eLpT7Y%2BVXjHTRMpjo4RWf1C5S3mNmwnG727%2BBikndhjGyJ7h%2BQOJhaXE9AFtbw9y6Fg7oTS0WVg9bGQtQFkCNH3JmqHSAm2NvimEAmYysVFpFmKI6WKAZo6kPq8pfdXnv9fsELXiGDF%2F4CCNQTx%2BrpOPrRoM%2B2HbU8Ec3UgJ9t7FFzMXnbiGif6s7mBc8PH10ENcuBfLydAq5Aum402SJTuEd%2FPLWmz5dKRarfW3HT06bHuE0%2FpESOAxesMZvltb880rH80lFhKDdgSlpJBWwi7RVHIh7OR9%2BDDoaBLY9H4%2BKnhYg%2BXyMWs76bvROHBOBH%2FvmFTQrt7VEPDd7QfNyPq5DQoVqczzz6KX2E1SXenS0sXU1ddxNFgk4k3LVzgeJhLzwTdr98%2BxmeB%2BpWByYnmdfyTtT%2FNfOd1woz21lZbZMtgqgG8ZQ3Y3Ei4pVY34xnuMVSE71lR4LjE6dxdlifpnWQIlBbJ6xFGb6oQclTLDqtaQyLXb%2BmzBwPtOB9Y5DOKtki7RQRM8rnMmPjC57LXBBjqkAS9GnrDoxSYsFENGFfWtnn8cX%2BuGK%2FieG6LAsdeQiDDLQ%2B1r4DR19rJHon%2B140ProaTYpzYU6k1QhUUPlHQatkVKb94BK%2BO8ZOS8%2FsNtpTr56NU%2Fb%2BLbfDtYMh88K2TvViCyVuArD3QH%2B1TFag2GkKcG9x2YqvlzEXTDRcQ0yY%2BIZ9WqFOu6ugxsvG55Xltil5w8bPUP0p4Top56zhbCAseo7quE&X-Amz-Signature=8420f879ca3678da894c399805b3d15f8a81cf3b501a6c923281b2c16511a10a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
