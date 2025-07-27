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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RH3BDV2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIHODJsDbIoenbQRDKz1TC9633nOp%2FRXLzCEaO8RMET6FAiEA2vEWJpj0n0ezmBL6kzPNoVPuyVLpz2n431lqpIPa0b0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGARDRtVcYHki3InjCrcA1dyHRoYoh7kNfgURxW8nsMHBOsvCLR5fD2DcHzCYVXWksiiIH1EDefvDdnoghQ8xLoBaJiTEHJ1GobncfN29fz0YPoHtFAO%2FnSr%2BON6TEIFENCBXeuAKVrQrL4%2FeeG%2Fwdz9gq4Pf7RLmuxx44LqvkjtlspL3y2x7jihfRI2dCuftfRdBOqPaYOZ2sH4qlzWRfuUkb90wj%2BzyOn3AVCBtyOaFS%2FgbOQhUYV%2FhSGCYNtfnzOquW%2FP1%2FoCk5TttYKXEWndRiIn2aAMQLNxNIlZfC5rusVuHndOnuO5r9ECNYNnh1vljdkNytoCn5UmRVh%2Bp2IzoUWhBOHbZCtyZ95DxNEgBXln6%2FQHzuNCtKSddWeSeQRFkJ%2FpOeskXbOjB5qgL3kTX8Vhb%2BfNCggdlxiVSW5Cdv2TIY9e4%2BT1eA1VHyHe9oaixoeZLpnVMrGcK77YH6487c0xHZMp99VI6WzsUhV2QQ%2FbFcKNkoqlJVetIPGqpQv9g5%2F7pUj4azVIH6IDuVau2ZchQdGjAc3yJD4k198U8vq96cjf3ikbqtd5KtT9YUXKJbNtq7hKH493%2ByUJboFAtPcVneqNywHibnFXl%2BeBcho7HQUDr8GTJOAhUq81175tVAWIlaUFA8h0MImImcQGOqUBxJRK5obACBVL7aondLo6mk2uLjpVBFt3ZXO0N0YKwxGGhQ7t3%2FarKoPkwIehrR7gLkf7oSMjMW3OQD%2BAeEggLg8f78mgobk9%2BMKnkG2fwAyo4VRNay74weWjyMV8PE%2FhC%2BrBptATUZRLfpw0UdOy%2F1aJv1gEIPzKrM8dGEql6ILzWgjx4ctTVt1cdm7viAkZp99e%2BA0a9P0zhjQPdywaN%2BsiakH3&X-Amz-Signature=85ca37d82ac733b00975219b028f49efbb45e59b9644591f3fbcb2ab18c17873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
