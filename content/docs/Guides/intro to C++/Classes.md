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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLSFJHQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9s7vzZkupudb%2BAWTmjeJo7zu7%2FB%2B7HRIn1wgRe4mrTAiAMxjBB5ONXCXojVzUhdoou6EuuTkGU0PU1pUGi8Fv1JSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvHNDcvK24wvfrVKTKtwDbvrK7pNV4TCOOuJvE%2Foia%2FMpHe8hf7aRrN8Cg18yVvkUG%2FTFklm9Y%2FtF1jQNoGAbnvqyOGwPK2G1EV%2Br5PzsGxRxUjbRxSrR7ZU1D4cgbA0bKdtompaYUe437hseFN89u%2BHCR4i4bYt81FRKJVu1ActIDAxFdojyLD%2FijsL0SyXISqKtG4wmk2toUV%2B8Uw%2FlSksHiSTwXFM6DMyCeXwc6FZcBW7jQbO%2FYnLi0QSnQScVRnHZUI6GNPgMO%2By91rdqr9Z%2BIgGEwfJWuQENgx0pz5xDhh%2BQFFn2g9q4pg5WeBzhYxxY2SyyPSDqfIXJ5WjKJnK2PCJrSMkrou9aX4pBrR5bQT%2Fro0HZPeHK96IFbWHzQ9Hd0W%2FbuZdn1w1Sy7xdlocm41UMDcENeB6EKEgAQBhhFTjCtTz456K7ETVkQLVqWAsgrp8IEEzzU2XpIDZiXYr2hvLhDz3Q9pI2%2FG0ywfRx5ay4xG3gg%2BKcx2c%2FB%2FhpvszT8iH7uhouOREQ30fTN5gshKjYprGX%2BU0SIXEKFv5NJtRYyGNwIX5PVc6wROjCh72kZe21z6ueTJoaTc0obOGNxqlWg%2Fr8V00sUQ7CKWxCQ0Enq4I5CoCArmlrtvf6uqT80FTXsrgZHeYwrcXPvgY6pgFEVKfMEPG08xNzZEYWTyDn5pVWgIZdTuBh2igJwUPui2NDPVpoyb7A%2Fc0%2BkboBYq1nQg8eecv6zM8eqUpApj5UDpaldgM%2Fh2UwGEjZud5ZaRNEbn1bjf6yELuFUOLPlx%2Fi9Pq3JarNoVAfTGwT908syBnGUgJSF%2BaGSt%2Fons94p0CpfhtODLKt7qT4zw1UjRkf5h0vRROSlOxKpbovWbzZvRSBeTJi&X-Amz-Signature=99a1ddef88d665ba551f562f7a64770b4605dd36b8796ba73cf4f5d95be2c0ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
