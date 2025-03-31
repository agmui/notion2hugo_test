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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2SEYZ2A%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCnq4kMDt452UBUh6%2BQo1MN%2FfrYG0R%2Fyh2zVofrfKGyyQIgB9deYsf%2FVkcdUF2ysbbdG02xr1%2FJ4gZ2yW97%2FPFBI0kqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqZN2xuMjlavHsNnyrcAwNC4hfUXE1wwPl0QKWz7gX6bwMHgaWfQcVWBDf39Z6LaKKejHN1QV5%2B0721WXqWslZPtv2K5i5FdPvPRJcdlhUBzBWSKKsUkoOxJje7Q51uyNzq3zIAd8sC8JRbWAmIaPAbcIyKpq8k1kByU03Re7a2yhQCzAdj2lWdXPuExnge1twEBcf9gmB5nu37X96lmg0IL7cGkPsPaze7veNzYQtJXK%2FoKHe1F%2F%2FUgLU2L2Yncuu5mav1YYSYUPc1vdIbjAEQlc%2FmWAmfrC1wDwZHkjCelDVQn9gCOUV0%2Bj47WtfXmEoODn8Y7GfXkQOHQsAkJxEWV%2FGiveklS91YSE6U%2FhJU8YAwBPouwf2M90NPOBa%2B43zgG0QsLOr%2BKGQ2BzlfSRCHthv%2BF6IZhH%2BvgEy9LqpLdbyE%2F7MeccNsqt83wio%2Bhlw4chbyQvTZrKd5UF3tn95fq%2FoARjkY6Oa9HXttaPwoGhjStvHGUy5egKznwsmmwiZLsyvzV9NAzrDMAdDeYYreM4XAZomAy6e21EiT9IyawJdk7didKx1xa36GK412E2hkVaa4sXi1p7MuAxZcYnbTC1gLLb%2BK8MfWfqkHRv2hcheTURu30nbDOJPPI6YbICJLtPDT5PVZfGQPMJacq78GOqUB5r8IUc3%2Bhj%2Bnu%2BZCVoOCOV6%2FSXtQcuQwAJP48pczI%2Bh0wgAc5BGl8%2Fxndu9BsrRxOYBReBoRzdFucITH57KMrG2LZfhNYWpNNN99kci5u0ysTPaBhFq3JbA5xtGFdPeqkUKgiMjcUZHS2pkOZL%2FzwMQRu%2FcxOkKsUiVmjDdorj8etz8FEvHtSP9LqQjogkay6Y3aelwbHKy0vxMmiXrqiH2Z1QF%2F&X-Amz-Signature=000c3b08f741ceed9b7db7eee816d69bf9b1ea4e24a3dfe32f69d066f3a8fbaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
