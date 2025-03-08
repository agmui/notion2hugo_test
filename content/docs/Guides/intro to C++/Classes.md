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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUWFWHDF%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDZGy3VV7zWUWinzqX7ZrKbnMT5UEj28aC7lrpil5PWgAiBPLbGv35gtwZioaCadEe%2BUAuVy8OwagxVcdwNV9PRmnir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMigHCtwedDTPKnRdMKtwDDFzG7waj4jpj9neKU5ajGr%2BFViA7JjaRWZ%2FY%2FQOPqPU5K8e9AyqrbRtWy4txpiq57%2FyRfxeHUQM9Cci1eASubPqgcB9WVwt6LGHJLZLAu4oxL7wiBXz2p9M3uQQBLrbq4Ruk2xbZNKpgl9N9LTGdo07PqBMWYP%2Bu%2Fkq9vWkoC8CtWsQsO%2F9UeaYDar%2BI1O%2FzoUJ3NbnA2lausO%2B%2BD14iJWvjd3jkgbok%2FXAUguxNBLF%2FzF8TpPv2Cx4Kpawd2WfRtk2bmp7ID%2Bw3i6svZ8kV2cqeaVXwhwgTGugaat0KPus%2F1lpl6%2FquZ4d1EORiBqIC8MJxIdyAj3XyrhcvkBLTfRXDoXWsZEDjknAPJblf1Qof%2FCJ2q8rcZ9IjTqxLBhlsy1%2FHiyqAifSXSxatVNPzk3mV0WqOpKxR3ZS2JXbUggIsn%2FDlrDGFQHqTsr5lexB%2FFeptUDB4tb7j0s1S%2FaDXBfkJve9FgS790HaFzlVvuqq8soZUz5cKHr5UnHXoZ7s24kBZtEp7ce6X2bIBXnmVa7m%2FLYoy8kZ4lQabh%2FdhKZjXxoEPxAxVRJRWjK1wIlmjzxG9Tbw%2BR1hUm2tLTT9oDwewuopOk1lrsI6YbdxrScix1nyEFSwRRI0Aapsw%2BJewvgY6pgFDsA4hs7LaTUbfu5l1vF8MwTz0L5rfEBR78MajrYfVWpdEevfNgXaaw2A48FcQB2FRxAIBbCJxx1qZ8NgK%2F3Nq%2Fm%2F%2FzIJ38aqUtrzA7meh%2F3%2BFo1OW0hDhquW2D0RBV2Pyva3XpVxE0f6xd3BU1LKStQ4qMWeK327Ws9NKP9s349MsamD1QpwGhX%2FVDsCSUyulB5dDVDfUf6qFbLjTSpjS6jwaBEvj&X-Amz-Signature=e2cc4e49ff487febeba9b11c4dfb39e6c8efeb7c0f663941cff82755a79cd6bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
