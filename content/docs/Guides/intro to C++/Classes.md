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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR4TUHP2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeXtWz2dUbEDC946g5n8l%2BCpLfON33KDUCBh9aq9%2FLwgIgYdo2Eh6uHW0C1%2B%2FpOr46LqW%2B2h2teKpIt5Hmi29keXQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJ2qasEqKcWFwwOirCrcA9obxQH4VLxLJH%2FiDJpjGP7bIe11r9WgcCAo3EyoUtnlpXBdvQ4irHfoPPt%2BdXFq4cvMm4ZLoyDFby6A%2FlZ8EJBw9EVUy50ghJMTbfRS6TGCusDbmqb1Wi7qtB0AxGLhZqHGau5bHRpt1%2Bl%2F0oOg6oVlBmFnH2Q7BdjTBDpVCq5NYxWz5nupZclzFG2sxMyJKbMMYctmBidZnC3fQBip50F8lWXJOo7CmWW52PP37fxJjW8HLXXpr8vd8FAsGhsY16%2B1burpW1LPpkm81U5BN3xktNli9bXTsTfcQGHEiMnPjx5LhdRcPtsQ2oP9GO9AXZq8EmtS3LUekQ0y7bOCflO3t0u1JYs%2BJ6LbCkoEsOaL4dwHXPb8lJr9gKm4qNFS2k6bJ6LMmGSGNUZh%2Fwqels7vuWctNLNHZWEfntIjXbEEKltPg7jkMIhxmx4cd4nf8XD0CgpH%2BNJ7NSci3uQwlIHk3ji2O2%2Bq61IF8PYC02NscfVbGdj97lDYXHtBo%2FZuCL%2BWdufnQxpb0UftWYHrhkWW1mLrOgrWhMutmbUugC8R8mOQ1GlisnronrLUFCLYh1WJzJOAC%2BzYewc2GKHoNPbCTOjXC5JOSLcufsVvdMvKL%2FrzMMv4vTew2vvsMNe1osEGOqUBAr1Gz2TgEL0Z8M1d4s2wGKkFcBQzzGxp8aRUdpE75mBg1SXGsP26FAem6ifVoFDHFSsVnLnDINvlNdZ3TXOBam8dN2f56lUwJSlh93z0%2Foj0Jzf2Zw0mDKc2XugHRLTlxEhyyQYKT0a4rIMpWo%2FlFAAEpkzxomXcHevcIO%2FvTGkrA6H1xdaq8%2BY5II2Q5vCWYb%2FBUmIwMHWnvk%2FllVb3%2FypQ2Vfb&X-Amz-Signature=f2f9b56a2f31b282f3a4722996c61aa51f20dd1bbab25a41cd015241165c6283&X-Amz-SignedHeaders=host&x-id=GetObject)

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
