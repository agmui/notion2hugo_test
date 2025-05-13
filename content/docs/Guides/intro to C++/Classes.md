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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3OS23H%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAXNsU4eyDA7%2BO3pPtkTt66Y%2FLoZNlpbJoPeDhRUY5IEAiEAxWavybY0rv6nqHNX2Ew4PaY6m0X%2FM7%2FlZ2rGGPsQ%2B2gqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuPnLy8TM%2F2wB7tNSrcA7nFfuPWKKx7j%2FZgtlTkoo810a9zPaAC%2BdAz0t2geeFNpzPYFzlUBt8kvbKooThamMrxpmJG8wuAuK40wSfzl6BfIk%2BJ9hwYJY7SASSxZuJibyobtycjgng9mdPYF8zvJL2bndFKZIHjYDCc7qB4iZ9dm06cxNK8qOj9pTFlM08c81ggxEmwYwXdkCa9rnb%2FwpmGQ4O2wBlFJIJcT1qdYTUc7rKHiUPDXDEr1uiSD87CpvytadQSqboKSTlPpk657Ph0bVAerEWa7ALjsuwmiqsndRIR2i%2Fd5QtdhfZnusW3G%2FS8iiDDgQbi8xUdBtZ2Hxx3V5%2Fl%2FzUSx29DUb5PhV983y46ZAWNoOEaN6dQR%2FybynFgFDIxA7E6ytR%2FtQZhHGfbUONrCf73BOyOrN1kD2%2BsMgBsJ5IspYSv8x1mWci4JZsU2%2BW9DhtnZofkUwgzaCR0zOccgNSp2hNWJ8Ff7cIhmZOZlHborASuReohfIEEAy1BNIU3udRXLUbdGcGDR1moNYjmsMjTYUwOZb1P4v7Z9FvQZJnogPgSchDrN4EiipJk%2FPtY9coYRjYNSuFhxNEA1hnvRRsl91CRFepx%2FZNNF3VwHpTITHv8M7Xk2Xpa%2FPixF%2Bcj9z%2BC%2BCwfMNKOjsEGOqUB%2FhRp41TTcC4X%2Bae7qWEQLK16PHzB06U1muuxW3ZHsHwncmMYS1VYNldGJUjwq1fUu%2F3hjwwUlHIxWgcrWT8u2Syu7uhWRjnzllCPUYee93oWTIbc1ohDQoM9i8cYQ%2BYoPGFasljPP5V6ak5U9v1bHbF8QJ%2ByP%2BtomGDghIR%2B5FO1EN3YfHLGeQ%2FNOotNKLAFN3SYC%2F7kSrKY%2BZzmNxqUQEEN%2Br6A&X-Amz-Signature=c00d1090e56b6b0dc90e3573b02bbf012c388a0d7a7addeca426bd499dd77f04&X-Amz-SignedHeaders=host&x-id=GetObject)

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
