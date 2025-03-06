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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDW2UEKW%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGe%2BVG02ht0pY3vfHOrsrxaZEWkFQZB9F3828AEk3%2FEAIhAMoKsy1UMxgBnM%2BRab5rI9Umcyv6WGWxHcJDCKlIm9HhKv8DCCcQABoMNjM3NDIzMTgzODA1IgyH2HhWGRYHNmMo5jEq3AP9%2F9NIPB%2FJMO54xYfHZdLLlCNnOIu1bOoLZLZBnLdNmjC2yYjmOZxsaX0NnGWoLbbT3%2FwDQrBUEOpCPkYTcQyG4AY3vA4RZcs47Sybh1g8MtOiKHo5%2Fgjhb7t9Oqa2BzrwTuWAsfnRG5YFdmEzcCm9rVsFPLy02hcXIpGLZumEoYmg7qZjRbL1u191kCxkICmOx68u%2F7rvefrC%2FdDDr8siNqjIE8Tdx1p%2F%2B9sdT%2FBuJd4JGcpJAcB3YEJ18FvwpUwmX%2Fwyk8IzbA52qjaRGBKEREnf5bAKphg8TckLj2gAXr6pBNcwK09k4hudhlrhvbH2AEwoWEOjhFIo22Dmb0Z1MBPFN3pj7KggjeUbjYRZiJU4Qru4Q9vewJLc1mulD3GPEQ70JKtTDnXZ08Yk8wG%2FJWaOnVXrQ6kQVgcQfChRY6D0Vo73WmiQ1X%2BVquIntm2Xupk6J96wQMHK9OY1ZBz%2B6FnOAWgJs9%2BB0EIAvJBM9NSLeA6lsSlUNTq41O%2BN%2F4IjD%2BwhPcyWkmBSBHRPOIl1Rti9JbtNfAC2PId9%2F0AGYDezusESKV3otI57%2FhjGjMtO6h5PNkA2c%2FTe0vJ5K%2BNoowi0MVEqnlySC3hJNoEsHJeahqSYFgS1WIVg2zCu9qS%2BBjqkAVi3w99QLdUoCDHo9pyDNku%2BEcG4OJG7Unk9oGZjsIVb6ZbEgZHQmfUqxPnp6KfShaFgZN0YRP%2BL7CcVrGBQtelVHT0agcqmrmaHoiaZP6m8k3k7sheGME3%2F020kYTPHgp7s%2Bo%2FdttUS3a4DYMmF3Lu8al3G2o76SBrPFtsj6X5zi9zZoeuMBB3wMO45PeFaLEcjadhNhBKpsZCKGApam%2Fb0uIq0&X-Amz-Signature=2a6f49f60cdd52c832cb9b870fef5274a9220a98172d7eb2bbc3628cb5bf0bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
