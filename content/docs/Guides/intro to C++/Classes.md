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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRHPXX4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjZwpKigWT%2FnZNeiHdjWYQwF3LUo7ItCdQWbPF9K0mpwIgfNKItifjRhC2nsPubKPIHN7BXB3Cdw5fbGBk9TnCxuMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEXtGjc%2B0CD2AmimwCrcAwYxGdVhh6MmnleSxfZHldfbK3JaN8ioo6gapBaAVD92H0sBAAUQhb6y0i%2BovYtnhD468wWNoUtGaR0RoBsM4ZYzmZs%2FGFsR2F8PZN8TMc8u2G%2BHcQASxsH8oj%2Fn4Ux5qVQKpa5y5kVW9TWgV72K0iREbk5mKRCogBr6gH5umQifSb5%2BzrC%2ByawgtAjtmTLNY0swGjg4GlWW%2BB1V06SQ%2F7Sd8PJONV4bUwAw7I1HMIb4aUh4ehouT8dFMNbkoYrUxtRb3AoL%2BlyY5z2jHJhdANNS5aPc5vw3Zy05smTe7pMDnO5okXTtracR7RlvWKfWPoiDK5lDBNcqyAM2WtxRRUUBVXEdokFhCO%2Fsa7qdsMl%2FCiMwkVpH%2FpdO3OFSsiwx%2FCvdccAZnhLGWhazXE61VnZmtsO6lEKgr94qs%2F%2Bvqh2zKs2d%2Fa9dfUlgmqLI%2FY9B7epo94WEvC%2Bstq6A%2F%2BXZaQ%2FAot6jmnIxFM7OGBL8LOyxwyZJIY9c9yRshfz7zm%2BgWvZpu942NIpuyuBAqLB4iqNkUlaGE5XNqlW2ZJ%2Bgc50DYgxhpjhtW6o7ZNbeB0ItEqj1ko%2FLc3HvhmoqnshWjrhTqAfJKmujlziavPUQ%2FN18xodOgc1oW7eqsQtwMKeO2L4GOqUBX2huj8LjKcOPuM5r8CijOSNZFIeIMmqg3bjNtMfTo9%2BX9PCPyo7xRsRCvR93G18UuCOXgzxv%2B7TusJHN6M40GoLo5XllIto1ojX7rkBNXpTUYrrHNJVcU2uIV0LzfoTiylRbVE7n4zwTiB%2F9x%2FAe5Y9yhsPpi4lIKJnCzKvXKbkB9EHiyOQ2sx9WsA5ZR1fFbq9ajqjbAPiHQybiIeBi%2FV51lnjj&X-Amz-Signature=ffc12e00231b691475a50f1a1e7e1e7e70b40e2eda67bf6bd7a90e30dd053195&X-Amz-SignedHeaders=host&x-id=GetObject)

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
