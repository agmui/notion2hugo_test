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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULTF43OC%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBkb72fVLCtoFUL65mXR%2Bxqg%2BRQJXyzkKsyyv%2BexTNpWAiBCMqOjpGmlDRarK4lksn78f%2B7uevKUHe4V6JmKSGYHzSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2BZdVZFgLUNv7f9z4KtwDUXBVtWGBb%2BYauqjQ94dnY42Ebmg4qoXHMp%2B8mSAaSVMpTmDBOv82%2BhR%2FoiWD2AjMA6hoNs3Q1OnY7BO%2F8bSvrIrNVPceCZu1tb5Aw3t%2B1Q%2FE7AmnaRNE%2FrOG80PrDpsoaUTh7fRmGpAYF3oGlDPUt2oDRdNh%2BB40xy0sY%2BaktOU%2B%2FLlg5hs2SINj1bgtqfPMUKtiORw7%2FJ45zVTwclHmQQBr1%2Bm4HdIFSiyV%2BQdK0a3sXVdiOta4SywQ5uwGkvvnXN76q8m5%2FFa%2FdNmo1rKFZVYsDYo0KUtbLi8iEKFf%2BLLHJMoTkTNmr62LN87nnAmOiEpjRPh5k0q51UvdscKiCv5Ahbzn3gZhvVhur4ptTBnBcqcpO1neGB1caJhiAXKiEBvXQXpY8a3ja%2BG5US0gItsFDszW7KL2%2B3vgMFt2COKZ4Smh%2Fn10Ny0bufudbzXNBHumg4RJNRVDbRvBZmzISLLOyMOOUx43z2NWYhvx%2F4johyD7xD0xeRBwFS9lKXS3k1wrLvXcil5%2F2yqGT7eGRm67ro0pthJHbiNQoJtZWSfK7ndyGiiG8hVroxMpNEdQgNIXQdUKL6C01yGxxfYoV3k4W%2F42%2BACb4EGDMyNG27qRFUn1uTaUXCStd1kw6Zb0wgY6pgG4pbGkrS0VpeojJoOwuvkPuWSKCl6E3QYckNPVABek3HTHGYW9V56uKobArVko%2FV6gRhl%2FtQJ45QBWIKFR0u%2BHwjiOAKczIeiBmiUOVmATdFe6js%2FKGV6eGAMrQ%2FgIvtIU2yEzwyobt2XuqwNC9XXoJUvnJXtDOkVEvh5uC72vP2p%2Fz9KpQtC%2B1Qn9h26SrFpN%2FjTmv6qWdXNB1ZtMi47zXzReq3cA&X-Amz-Signature=7882d812067e099476c425bf20115ea403528a415b10571311c3edf8b4a9da10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
