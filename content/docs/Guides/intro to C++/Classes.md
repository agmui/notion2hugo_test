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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5FZTUZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIC87Ny5aA2sKGYtkNHY7TxSMCVb6Len7c8dcU%2FhH13avAiEA5OiH79nqAQtToDSBjMccU3vzu%2Byn%2BFionGtfBun6KDcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWjnSkxayeYhS12jSrcA9inKWWdzQ%2FGyMHboxCrslKfVCQkeU4i38hVd28k9URIl1EHVuyvBgIu7GsJgNd%2BdQf8EDFdo%2FTiNFEC5QU%2FDHDGI3WQ2VnOX7fjXIWgSmhtWd%2B7Awu6J5QYSoxaDQBaBKRP5hGT5GvZpqqavYWkpERGGeAObZ5cfNASDdXRg%2FX8iUHPtaDZmI3LG5x8dHpkh83tq%2Fq8xngbFzQSx3%2F2asmw5CLqSrwcYFaGujpaiQkWw18y4LOeDk9%2FY3ML4DLL52vVqsNpSvzKGrbUJu3qQF5cPqIIeEhx%2Bp4qJ1ql3Unv4Xc8T2UHfsh6vEeOaeH7yKzLHcgF1YHCab75cuOUthpiehXTGCp%2BiQAdwgL%2Bpa%2BmPODHm2q8PWraBU1EQNOJGiu%2BKcfcBXnRNsKaIuciDBysb3g%2FDDHAX%2BSu1FM7ywupN5qH4ldas1v9NfqMoG2HU1aGfp5dGM6U6r23ddz9t%2F3BXMGJGNpMasugHmf%2FykdyVp4bf2AS44X3QQuvhW5egbiaXaYvmD8YQvkVBXSRGlRfC7EMrY9Lkpluv7v6mEqoUlLAzb8NRD7LY1yFhvhRjSPTHU4e2ZIA2m7A9SZ52I3Lnno%2BcKv48bwr9817MMlb%2FoPVnZwdFXWvkIUDMMXk2L8GOqUB67YY2bOtaVDlCGIUFUTh1v1Q4lmWla9sgavk7jP4N3LSZWPjmcnyvO77LPsTJS%2Fh4PBZ%2BRz%2FY9WOVkcjUP6WePtgIHpj1qHL2FjGAYMgkVVrklCxWjh7sALPugB5k71VsDlRQ1WDHFYyW0asrLpjRjfrkQecgcR1HAoKnBxxbsxdx8Vbfi%2F40knU4yuudsb%2FkSt6c%2B1EyFUpZvXgN%2FapHcyBtqaP&X-Amz-Signature=93771fd99337bd51cf40acdd719eaa3a253fd736b3aea1d27042fdfb345bc4dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
