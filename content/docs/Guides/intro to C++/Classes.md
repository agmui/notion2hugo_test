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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QBH7EZV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIGRJA1TrY%2FgueUxp%2FaTYdl14jdrhe3c90yB9tMWETeQIgbqpg9JFjWQf4sVxcoR%2FlQnpQVx5vZFRppPrpGUhJXDQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKkYZcqielMytYGeVircAzJBSoHVHo5xKrIEvvTmOMFgxt5tjdGYkr3775TRBY3eCJUkxzTBvWHVzLa0PfMPYmBZziiCGEAIl2u0SFZ%2BxiHCFBJvuefno8CoDRyXNS8%2FRzRrLCKxUjA1hsrcvg%2B%2B1OWpni0%2Fud8UnZCxtFoqTL8Kte2htXTrzhuMSPx4uWRWMM2ff3896V5SBNdx%2B7pefQ%2BiUGNz08C%2FKaD7qh%2Fu5OEEzAPuE5I0JYD8EU6EYgOZ%2FEA%2BN6K2s10KrInRMRV9Z8400wkmixzAFVJAwKjXyneFzzZEVEz7LVEr5P72biK092X1VcGVj5v1HUpCW7%2F6NgINgIXeFnwHBjcQH1KiLrLpnPoETi7CL69BnJpzTq4ONt8mN%2BjGMatFzzdAJxJg78y1FB1O3wfVqCnzwAaqEu1DZL%2BpocrK9%2FVF6rdARNqWx%2FI2mIUk451URDLjAYtjk4jIXELfQNKBSD4xcXg20qd3ee5o2nqrQ%2BLJGpyCCthMD53THzk%2FSdK3oHv8jjwbbGGIPD%2FQ%2FecrcygpgVu61OjvuVDYdsntba3f949AOFBv0%2FAToKsdr%2FTJY22yANQF6tfpmnFolwqjzNbYI4C8bKyGC4sL92ouxXhJoSOM7y6fhVnpWhDrGLzQknNZMMXkw78GOqUBBi%2BCrVHc77ynxio2Stkh4vIHct8dMlUB2kOb5wQ%2FNL85jjPwx%2FpOzGsRwEyydXKCqYAUkwL4MRLbvwEgzjbPHNq2wMnBHW9zXJfe1zxODHhDBaDPma8k2lTsuBIVpjtw%2Fs1gKQTbyayKo6nO0K6L7zkfo%2FmRHc%2Flt8ROjQosjTBCdLBmL12JCWnPrfSldHg0gPGgHKnaqsmu%2FHLX%2FsrugLT%2FuKTm&X-Amz-Signature=4ca2401763a4172033ce383ab55ac5b7dad1e689d6ac83b1d7559bf05a1c7208&X-Amz-SignedHeaders=host&x-id=GetObject)

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
