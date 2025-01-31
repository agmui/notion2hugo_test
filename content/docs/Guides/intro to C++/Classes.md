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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVYJWUNV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDld4v7ksjqTiwM2RMogNQyFjHFcruTLQaKvzU2XR30FAiEA%2BcLzrg34Dsll8LxZ09wFZZvL1xRg55HT%2BWcnE6bOZfoqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpKkrpU0p29xFAZASrcA0vsLXmo8psqCNj7YXhgryldCNZawy%2B14SPFDsdw6L5uxzH6wPfA6veu3uXzjvEPdmzlWv0jrKqsjVHY%2FJSULIGXs3DiFvpUxo59dV%2B3%2BDwHXOU52U%2BJzQ9JBme4AitSx3kCID4PNmMayNIve1yVs387e7W9m0GBNNHkyMi8H4cbwCMkJSaaTJH3qfFLbyOnxkxPuTKWnuG9uBgo%2BtMFAtb0PLwCqPSwvumvx8JtaKCmnjI2GCunbBnEZmNhyAiV5g1iLCaz1xB5YjadiNda9sCjYm69OilcvXKaDqacD0yWz7ZwrLysT5eoTlG8ygPJn9yyMcOYd%2FD2NSjUErVduhSci0CBSuwIOwdU3RovrcMJ9mZV%2Bjm0LGCOiK8hm7Ct9%2FSuoBI%2F9Rliy%2FyIEC1SqIGU00RhX6MhD%2BOiDuLRhSi9gwLvPjqJRSlOi7%2FcCzyaZgnxhloCSRXl42Dda1VTKgcpIcG%2BdAc0Am1jDqkChnE5Tyg90jqvKRMK%2BIgqSFfht9q89C%2BrUX8i8qq7zFRXzFjUspWrhVGl5CCeN%2BkclL5sRCNOWM648zvTNrc0iABkxlSFlIbbgX5fjPnrWeHO1NYmxXU58WusIrJ6zXjngnUerLfQzHIGIo9IvKH4MLm48rwGOqUBF7xglfOWNvWRPjZ4j8VXP2brO%2BdDizWhvdOscgIt0HCyEaDMbtrNCzNFMUsK10u7%2FbgQ8gtYjrmGFPiUyl4kJ%2BxggaxxAO2C%2Fi5w%2BTYc8jzPb%2FtBKSCfdGMG5Cn8oKksn2GlmCh5kBgdsOsagLgHxbdTMH4sNlNf7aBjsyTZOEHk52DzvVOW6LRq4BQs3W5r23jmILvJtJsAYC2pPNbAr0hvGu11&X-Amz-Signature=df0383559ab1bbbdeb6be83607d0c26b25af6a511938f4fa76c1b469f6a9b118&X-Amz-SignedHeaders=host&x-id=GetObject)

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
