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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5BPYPJG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDBflsDUj38jjRjy0aMqCDGVPcj5rO1m%2BMPqWUtmX5uagIgUEr0F8kkTMXstZdv8qM5xZk5bgOzj5YJ63JkV%2FEZBzkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFYJ9776j1y0VJG2gCrcAwj8bqhdailCdP5O5jZyGBt2PrPSr8Cr%2Bt9EEJ1KT0xslK62SemaLOP7Piqwk8IfInVQrA%2BB%2FC5y1Hwh5U7D1T3fpyg77eNLx8gZCwyu1wjWyr90UZudOE5vhwHpkLS%2BxxyAwDu0yxv7sM0JlFta%2BrABW%2FhDqBicjIRG2IcZ7wxhV689fQpQrCGGuKtURzBgBzrkBpMPJHyxRTC%2FeYoWeB4UWqRxgeSjwwsQQcdNjFEBy4tmB4En5kz7ISvno%2FDWTtjbuxaJNEX2VQ4puoAMBeOXPRDqmsZP%2FmKuPxmI25H%2BKS5mCOlQ5Rz4kLLXlLnVw6%2BBKHe1FcdkaNyXkHMlv3prVyMVqgkvf%2FnlSqUAleWzTyNBqVi3UeHVFNGOJprGuo1pmcXl%2FpOBSjIs8LeatuH4esvhFh0bhSnbRFK2YWE0%2FymdJXy%2FftSMELP8JtdLULJX9XPVbfOeJpxW3h1G0TW60gF1t99eh85aOQmuxJCV%2FgVB4PJEDiRfV82MMY%2BHgnsYly%2F9Z6%2FC6XDjdepuDYu5CCyghenh1N%2FKDagonveGBWdG0VTYRJh11%2Faw6xtiezRNnwMobSrjI7hyQg590Q9qr0kwA%2FdYASKCVHlgoyjRB3y14VRd0KBE%2F%2BuVMIKfiL0GOqUBSMTkcGcW1O6v2l7EsKIeLvKURwbhEpivhzdpFawyp0PkW%2FceNZOTfrnKa3z%2FTfiALufFAZ%2F8wV7%2B8uP5dDYjk5HBmB1bHwciD%2BrWT%2FNydievxjZxP0xkQYV%2BVh7akvuL3aYdHIP6BqcL1I7Bnq3ctMHR4uAvS2WjYN0VeHc562SEVpboF2g8YABLhf8lTFz3bMRBsQ8N7eWgcM%2BpbvdwkjmePSZh&X-Amz-Signature=acf37650982f74e86ca135fd9c5567728958bdaf64e7ac768933ffb6b717a417&X-Amz-SignedHeaders=host&x-id=GetObject)

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
