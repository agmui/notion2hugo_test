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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFA5DVJI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDuVjsqICBlrmHYpB7qlT38EXZ03CnfD6Yg528MYhUk4gIgR7B2%2FVV6UVA4eHikZd9RC887TGCQsSNvo9%2BjZmmp%2Fd4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLJyCzzjycLI0rdpjSrcA3OAjg2nD0vVfhqZQRRvqtFe9f6LV1fL9rRcthZAtUN8Soi60z928eUIBLSd8vF97VloNqFgNjJc9DbU2jqmAXdq6b1u7gakqkteS7lzQCGC%2Bmc%2B387o6orMPIruc4nthtR%2BIm4FfssTiyea2Dx8QiAc%2Bt5T32c2y%2BzrkWXhsPJJYKxJKLusuvLP4dZUOY7gLzkyeBKCPfuBewLAjCIh%2FkZk6OAGVFLr7V0gV7WybYwlP77C6QWZ%2F0ell8w3xZa2AIeSA3e3k%2BX6YapOExAc8%2BtyeZhAcG6QUwPKueAYRsjTXw%2F07r2A4YjYgy0yIm55ZcIOSBxVRP6rHVwM13ZttuAGFMPnbtTE0bBkqqQx9CH1DyUv17sjV5X8ahpdBTDxaRq9Nlly3QtJfYU6WzfApa%2F4QZ4i%2BEBxvQDcQKlO0bvMYkbbuwEYnUsROPaS9xMkASxtp%2B3NL6e%2Bnd%2FHdTC14l3cHWr3lqH8AVctcKZUdvzVSsOgSL5MJs06D%2FemG5SpshuvEC1JcGqMpbrlB7VkXVyZ34RB33uMjQ6ndhMPfMdmmuVWaTkz1Vg0Q9EKaSEipt0fslXa8aaz2hpJVP6PFhs6c4MdnNZv%2BuzEwuv1SoR2%2FKvPjdm2ygo3hT2QMNuxvL0GOqUB7xi%2BRGr5evRVeU1eN4gUH%2BtBhKmBTwFiWa2Zt8nhNNIhiAPUM3s38lKjhHMrVjGbL%2BOESlfpn6wpMHA3XyMSU07awx5tisC4DvpFyBqs4YHEoiHYh5ZTtFmTbK%2BNfyt74CM2ZAunGzZv648ElJ3EP6xJhUXL76fCW713kFmU43MyLXru49fjgqHC2PaPPpxmQqnjlrAY1phDR2eU8qsOkJxUXt2N&X-Amz-Signature=2584d9f6a14133992c43fa0ebe6b782e0fb8d28219af1acad4d8e861ca503936&X-Amz-SignedHeaders=host&x-id=GetObject)

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
