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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33JK5PA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCfsACw6BMevMj4wAbOJXf2y6QvHBiZF81bWaR%2F2QsYKAIgRx4WmlHed2gLdxxexgomps0EceOxi13R0F70lUfLHEAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNBabdiIeyn4%2Fj23pCrcA6xsGUYqBD7TfLOnkEJ3k43Yp3cdbT6Bfk0kPPwG1RxjbuXdLeNueLTAQK%2BijPYTildsQAq4aRZ4mESEvRydxArYYmOHSB35tIjFDkFC5a3cpBfrV5o8i1Lr3ImRK2DMEGgqrrfoWfD77zqqVHU7JvGFzWfaMJ1ahFsbjrE49Ng1oNW6OksJqGfARYRdDztzRlzZCqFXrbJTdTqy6mXVavnOq2ZUKCZraEz9ZcNRtUSPFSyt7wL8Af03KAvZ%2BkkLh7xyOb%2FXTqrxS3Ak%2FkT3gOOv%2FFWOwG2wm6YdOCoNQFU46sy0z4X1t%2B8jCwU4e6HzfaIweQ3fGDm3tXZjzgPR%2FwsvQ%2B7ot77oHyVG2XtGcmcKw6vfEM2R%2FR1VjPnIIayfoKfaosw0SgEMbpUeftbISPvaB8uCINPtks5Z2FDH3goOqctMyjWEyyHHBg25wqcH9uSJYort7Bkn03TWo%2B1%2FXQJs5PcZYgFMl5t0k%2FKbmv0uRanogn%2FMBpiKYHxtGkaLBzGa%2FgBTu%2BJJHok2EuS5DfWnNbgy5WXazl7NJOkt3XNG26N%2Bob4C0PKzDdiAY5fsY%2FRp2Z17RF3qMaOTmEbXNTxCydA55OrWg619ZM%2FWVqaWAxcXPLRE4oYvlDX3MLuI%2F8EGOqUB9Oo1Dvj83e056ONUZer0eYUKl9yh8lP3AQIFBTd6dpnKKAocy9qXIWs5eEynTZPGHEyADUfYdsr0%2FVRhsB%2Br1%2FPhu4sLDIB3FAd2%2FKm7ig867%2F8Ff42eo57wdrPBD3QSuLTVPDstHgMUmTghjwolv95QyfjWLqfofZ%2FjHsjDdw41INDGenvuyogqOq7jjE%2BMvVG7tlIeYpnZ8uNVap%2BAmursf1Sp&X-Amz-Signature=0d8e39c70da92f537df0f1e665aaaa94e4207519324795a061753ad2f4f76347&X-Amz-SignedHeaders=host&x-id=GetObject)

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
