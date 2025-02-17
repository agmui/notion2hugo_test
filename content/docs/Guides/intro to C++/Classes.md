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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667BBVK2U%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD%2FPger%2BuS5TW%2BQTEVsj7pD40oosCESy41V6csQiGFEVAIgENjXzjGOFQn6TC1wdZCFmNxA3megEzuDCpyu7XX%2FFP0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIX4L5mU9IZ53GXhNCrcA53pINXdqowcv8biOFgIaR%2F0FjOBBhiuVzTaPnOiq5W6XQA%2F5IJp1EGCW4YfwqHnNtM1ZD8rxxkMJJXeTpGejnffuPnfwbORxjSZCPaKwF%2B7NO3opT4B8O7HBM9j3RPobroXZ2BkZZKw%2F6sZVMCYuer%2FCk78Ox3qukgDqHrl5uilp0fkDO7usyteSU77KEQJC0rDIBR4XJ5uR1GRUwhEVBw6CBSVD7%2Fkr8X5yNNi63F%2Fo5ETfcgNQeUlsz406TVqNyZTt71hNIG%2BKL6l6oM946VlKt3WNxyWsG2wPFTLNnj0kWJp0vnBg4pMXcYf6ZMstR1LXFH0vqiL0B5MPN0LTVnWDpF4Affb3W7JXu%2FPOEVRYWxK2g%2FcVNl75TwO20%2FjFFKkH3pCIMspm6ffOOQykLZo2pw75Thdm9OCOsByhxyEUWakuw4rChAxS7MPLdX4rMZUO7xRMkZGI2%2B%2FFaqSrklb11bM3VMjfuywAkdzv7sFIo311MNbS%2B3ato2dDEzvs1OYCdiultnkmsCLwiowsarKx3S8hlWRijUF3DQMGdn7BY454w60O3FvGrAuG7vJERE0zgTyJIsR15roUe7nbOk798yL344t%2BzsK7otm2cbK6mVm1as0y7%2F8SfQ9MLPczL0GOqUB7K390VOS3V6qJP33w2nh8zjus2Hh8z3Xv9U9XQE76p9B7jcdP6k02AW9IpTBvttrDye08ZlAMTRpumUKrbtAeiD7ij5cZimlpBVZNBcsxY1Dj2nO02N%2B69mLtChjBh5VcZElWlNVmS8A6EuRlezI835%2Bny7tWVPfp0EC8wT3G0CeSeWLdfL6zJy4bx7tMDwznTX5%2FMtnAloAOA40kX0pXesLmlxY&X-Amz-Signature=b16421e6092b128e7a3e23cba54dbf15982cb7f83bd5b799be3c624349e96805&X-Amz-SignedHeaders=host&x-id=GetObject)

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
