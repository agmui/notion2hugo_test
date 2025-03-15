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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHPRUBXR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGnvIKVEKLKQhtaMgWaau4D4fqQ6O2Lzwr%2FAnd8pp8RQIgTfBtf4KJ%2BKDtdmEAFQxSPeqWA0NlvoNFlOSKgpuYaygq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDFkDKtQ9BjbWWZ4%2BjircA7Plft3p1W9Cjf4xze41sZ%2F%2BLnUstZhFUh8VpPa%2FrqGChlJl3FuIMveO0rN6RsTp%2BDARlqlVfIXXA4eTJkIV2gX6saMtsQzcbSrVhwesFBiWaZ5V%2B6rO3GXgh5JHaRpxzSN4Xp5W2kU07Dk9s9XWWYsg%2F9eGkVOGRUu1GQmrIB1%2BQg9ndeUDYJhPy%2BfSToOSMUD%2Fdyz3QQTB23GjF%2Fyp0fYxTuXOdKzX7yTf3tneU0fXiS1I77T%2FKWARu3lAe6WmUXW2L5Z6EY0roMLOtu4tsj%2F3BC6wpgeOb48YO43dC0YXa9BNAu4qUDG2%2BKStWZIeZP%2FGISSXiQ%2BQ309pQxfLdD04VR45joB2pMtpc2iuruDqnksn%2Fus2lHon0d4R%2B4lM7yCD5e7V2KwOmkkv2Nojf%2Fb70A%2BYq96Bt50e%2FaDG%2BxGnRwS2B2om%2BWtd1RGAj3VxaUrV%2F1MHBYuVjm0%2B2%2FPxzOcbsdTElbh1AR8X84%2FrHOYa%2FRGi5wlJxHu7Jn2E7l%2FQFneOEpJcIn57oQGoqWdSSbaHNogNHb8ehtTeYZ%2FQR1WuidQzSjomDnivciyfVUa%2FTGxWZL9u3jjaBUcpsHicRXMX05C32btvGWiWYnF2VVmDJ2UHQoexeiyAtZQ1MJ%2By1b4GOqUBIFdJ5CK9QqrPYCt5meBPqOZBmg%2BBgMYS1nFdV1tnyhv6117axqxNrB9sA4cVLpNPoHBZL0wm33aVpp6wUZ99FtJh5h25buxdj7LL2NBBIhnKvHjb77ci%2F6NcjkRkq52M0Pw6k0E9H0yQoMddhDPtXFaUixF5yvJNoR15ZzoL%2B19UoMy1lK%2BArxCOZ6ZzWAXOVy8%2B1rsWR9M%2FEIiG5Jb5gr%2F%2FNonS&X-Amz-Signature=a7c8324b51a4cd1bf5c002103c231719cbeb2729e10b00d781695a3220f0cd11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
