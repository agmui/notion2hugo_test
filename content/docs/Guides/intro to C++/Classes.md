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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOCVOSL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6PFpzSCQ06Sv8JcbLVUNollgD%2Bc6mLiy8c6Gcb0KieAiBw6w0sOQRHn%2BQUdMdFbl3LgWJk9Rm%2BKKpFowKG8cMjxCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMvkDT5FuLzRAzPjPKtwDPyFIUx4dr3RhFthxdmSS5N39xzC%2FQT5%2BZhq8qBWaAheSrr46x2TXdR97AIXeK6tWTcnHnQbYNQq%2Fp%2Bci3xSGD%2BkJ9lRtzLtN1XCbkfetfw9gAOu3JYpCESdJAb0h00PzhDdfUT5nmKIidJTNAwFAyvG29CzFdR2jAASz7bO%2FJeEkNXJa%2BcZy7hwv2BpacvB02bQRF4M4skXUOneB6QP%2BIgphT6Jc8RWAbOr9ui6P%2BGgB1Cc3xv1jMbKZxd3Cj9lwa0NbxPQfYMa%2FZKD9z3%2BXTNeP5zoZ54pNcbdTRJeNcesiSo4aLca0n7MYoqZBmsGuhjsrEjQYu2tWkT1kmhWDDL3KokOBW04ims9ZXWdQoCFNjjmq0Ott618QOSPAzWLWPh3LaVJY8hSXONzWO9LlA4MgNkA%2BlfC3hjG0TZXFeG%2Fi1uc0Ur%2BWApbMVAg2RORR%2FQwkkkMT2eMJJ4BW5Sv3v36r8gbD%2Bcy8O8wcufvx7fKDEvsoYVylguK5w%2BiE3kbkkEIriOEyp9NEzi%2BgKUpU9k8NmrvGglZO%2Blmmu6QbMXjWX8qRwY96WnZ8KLCd8frWrR%2FH7g%2FP5beqOVjam1xmNsGo45sknarsczKQ0zp60Iv13nTwt1KDy9b1%2BPcwqbLfxAY6pgHEte8R94%2F%2BuOksR5A7OC5XJmJ6O9JnA3TJ6rjgf8Itwnk%2FRuvQ%2Fx0SAN82w7f1T7NdCDEfx0DuS2vdG1y2TFd75AZ%2FHRUbDPEcdmri8Os01oQSf2pLcF1elcJLg0MAOZ8e2o%2Bd1nDjM4OyzPRDlB3nQZxGirqyH43QjH%2BISXRf%2FUdO30Off7zoo6rks%2BN3cpR7Fo89RARVlzgOkKdAx7DxOjk%2FzyCO&X-Amz-Signature=27f89c70bec94866885df8fbc578e563ee53a276503b0bd92544a694da142625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
