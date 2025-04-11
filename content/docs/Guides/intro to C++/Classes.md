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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ63AYNV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCYalSRJVk%2BTxxZuQECURUbXDLl1wJOYd6O9ToFBjlsagIgStf3gwEh8JvC%2Bh4IMQpRGzW1k7NJzO3BqGaMwPuErI4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuNVvtIsPLnVI9cTircA4dDSNsek4yOUkxsNwNPJRq2xpdDi618sYm8uGMUXrH%2FxecuAg4yKdItOr4b8rLq1Ynd%2BLm3U%2FHxn%2FpUT2hDbFgAem7Q4JWu8PgwSueKZK%2Bmr5FqqsypUCoO9Nzn5%2FkEDH%2BNt8%2FevhsMGtTu7Uhm7kOynwIidzzVBRfQtp6o7HDQwMy0XagZa%2F%2FXEqY9VHORcl0riNJEjOYYIRMn%2B7IqACro7i7qZc1AGNgPjgH8gxJ9oax0MqLBAexpahoaF4nAr7%2FTw3TjE2rTEuUmTHbN608f%2B8pJSC%2FESxbMyyz0gJpMCGeQBuLHW5%2Bm%2B%2FG436Yv3MepdEW%2FF7PVgokzdpTuUx8nyBUXtDAB0ajHO3ZtvB9sdq18g6VTDEwFkRfIEpNmjb4Mu7LBVRU4%2FXdKvk9NIVT%2FpszoY7%2Fk2vX6MFL%2FRLKPevs%2FNBYYF5Q3Lr%2F9t6BAUa46iv0sGqKIQO1%2Bu6u%2BjPeEibYXZjyBbLg4HjzMWa%2F%2Bs%2B%2B5UWQZJdM6nlo7DMzPqTtDjFBOjqApHX6S%2F%2FZhKnpkeIQfpUK2TAey9x%2F6Py9msaSQbKGOqfGvOSikS1D7KDXYilp61YgT7HQAxo22Ye71X%2B66yrxDRUtdM4n8isHh1o28%2FD5wDuU%2B3nXUMIic5L8GOqUBRaXqwt8FaIY5w4NFWEzfjVQqebVlcBLXWxN3%2FzhXEfR4T6KmKGrCV1iDSqf8EFyNZzR8BPeC6PF%2FJDjFYkwOKSxGkQzu04fTDCsCGRSDFcRKFzvHCD%2B7lDXaa43j3Xllish0vHs4dz4nTdE4fCMwsztJiVe6xdOJGvc%2BcS%2FWPSidGmwwHbCuX%2FfiVQCxvLEMmw1VHVFQSbUW0OHvmbRD8p7m2gBR&X-Amz-Signature=44054b8ff990330a5224f7277d3d7995d260d8d5f7c4671ad3a7cc64a440047b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
