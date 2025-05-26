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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPU23OJJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD%2FGRXQLSyKJoh9WKSkxSc4u9fzrf472ouNg8LeUoWTHgIgeK2Q3Wa4nM2HQqWjgCYCAyew83i2hnxeqOhIeImos9Aq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAMI1l%2BFhEIG1EgPDircA2RsjGZEmPGdENECbtXbrjuQrZNs1J%2Bat75i6wnuobw4mY30kUdA6%2BJ3ZpTeMGlftbaIpg97%2FKGN1U%2FAp3QOuwpFQTQ6Up75dooqUXELRI1%2Fx7x43qPh3nQLxYgKChFxh2Ya121AIomb8wirR8ZFmbW5ZSKEfkqZKLvfMJ53oTlk8%2FHOk6Fw%2Btt%2FMHshJbD%2Bqwik%2BBdRMTSOTmocvITTylpMN5hT12p5O5J03l826zuSt6fbGaUVhBCSPG6In9zKyypi0ra6dy33Dh2sKaw7lmnn8PgIhdyX4Jkm%2FttEqLS7%2BKHAeL4mE28bQYg3mdrlsKVN9XelvzUfF%2BTW2z3QILBcYkl9DFrIeoHWoRsdzO1IHnJR9nfYJK86dzrcn3IIhtckmVyT88qh1SQpHH7hN3JvSCD%2F36hYVbsnfK1VeLZboLjNf6ialFdRyYVVTlQDDyCEou2vB5B4ylKHIrGVeaE1L9AyaWsb7UGAd60Fk5sRttf0SMzq9gmMOr%2FytsHEBIU%2Fk9nBcxqaTWnhkr5eXbX6n0SuNA0l1RZvQoBp%2FPgnBuFB3YCZMaicv2w3PfLkUxt60c5uZuDltHt%2Bgjygbh78BS1OrYE%2Bk8OOllT0vAq2lTBo9v0DRLSlTYB0MNvW0MEGOqUBijI9%2FY4UnfKQ1ikL8SLcEGzPRlCcuurpkrbt9Ww6f5Gxvy1%2F%2Bumm%2FeFStEZwfWCkJRUXpADa8PIWHly8ypYiI1Z4J7o0pPYnKBoGFE39jMwf16Slv8AnlMi%2FiP5jH%2FZ58KhF8G7q497%2F%2BeSufNndaWRjgdcw2rcl7%2FSZPXK8OxXv%2BKqts7uyFZjY8xG3i690vw86uMuLIKUIHetusIatMJC04zlp&X-Amz-Signature=72ea36bed04764dff4893b76136effdf668968855f53d226b9f95f0dceb50455&X-Amz-SignedHeaders=host&x-id=GetObject)

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
