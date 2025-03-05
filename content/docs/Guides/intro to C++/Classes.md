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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WCR7BDU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKFYgj%2B3VePfcheo81TXf%2BtlO8JiifJzFuPVEzB7BqgAiEA1SVq1KEWrEN0LyTd84b6lFipiD4ECGg1KYXa2YNdOaAq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNksNazCZgQ1b0ENCyrcAzOYUb%2BUs4AMeg2BQ%2B5UvZWCeNjmI%2BP8zHa%2F9IwAHZtg3seca6VsKe7gYlPfvbpZ%2F9B50DoFn%2Bhq%2FoVIH1wq8jbHqmLztq7hukAMpWDSu4txaSs7Rs22I0I%2BvqXL6bZ%2FTmuDIwI%2B5wbmAeK%2FvLyj2jGxxYBVhypyMmXvHfSZZMZYZdcBDpTQWdaVGdrEXO%2BEl7ygncgGP%2F%2BrS8SVO6PlXJoydfefoZjTv6WcJ9RDTo8rSbe1zwBh%2B1oJFXTqXZNwnD4scjpV5j50EHbQU7FkBcZBX7uH29TBvO8wFS5Uv8yEOzwhdgX7Sq1Zv%2BNA2ZGdDp0CIrVRtNi5q83xcZDT0udrb3vAe24ulFEFlZ50yL2%2FLkhTIb038C9Ck83DsknCTGTjjO4PhuSJ%2B4RIp2zOO145wNpcVPJ%2FVuynbT7Etfo8XsH8V9SPZwXCUjWwgR%2F%2B%2BLZWRxorSeJgO9LCk28Q4tZkcgjO%2F7qU%2BANRaTMllBYOLao1nnsAFe3VItfU16jx2mSc4o5p%2FEIMknfYsOsWegJaQnovTFr8UdA3qCxdAMOZNsW%2BzJwmYJ5iNnvl8PRxln0Ir9XW3pBuz9SvJjdko8bv%2BRqTn8E6r7wXEuT5iP8b%2FOgTZJuEzZSlIlyqMLe3ob4GOqUB6HQZmWAH3%2FafdySMf0a0DRa0iFOVzXXfGlwSmxgpHqlcSGMNxSwZPTL3%2B9tZHp6FKOhUcnZwCrS9W6CtM28IuSoYNzACl6sHjigODa3vKKQOd6%2FSMS2UU4NqoRZl2ZvffQoFGGRykEWzLEe%2FMiLkLvwHkRaRGGtWmQNmhwIpvj7s7eXlINcayPV1NkGNEeM0GRnb2sxD8SuuIcmg3SesVNapildo&X-Amz-Signature=616fe93ee3dc5392f47658d88faf741f1a1b36a8819facba2453efa22f5c9506&X-Amz-SignedHeaders=host&x-id=GetObject)

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
