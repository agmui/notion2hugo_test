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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBHK22G%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAdEMLR6AupsJp3O%2FgpJ3qM43PPgESywGG92234UVxqjAiEAwiGeN5kSlgrPh%2BcsGS26%2BeyDVa2o9euC6P0OjwWPYVkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkQzVBhjobxgNoizCrcA9OQroZ0cpeEMhtF854NAvufXEWwX15nyNtA7VxX64uqwlqDhAWi9GFAjv4K%2FyKvGwzTNbPa9eaN0NQv%2FRY2qsF0pv5KecyZ16Q9FxZNFlZoYh6IRiX6clO6frVeI9NwaHKeeKFwbzyKh5vZBUbfGJJzkIFm7vay6unj7RC5htr4PXkJahY91%2FBgS4fMAQYUmO%2BBmtVLO%2BBgkN4fOmAQK0CYUatv6II5sdS4QLiIimnd5viirRulHuKQINin%2F2AKR%2FXrQhvhmbzrS6J1Fd%2FlL85VPfKxZoc9hff6rZdY%2FX6Dp29%2BQ%2FfFJrtSSf6qIjJT3vtqqPC4rS42ZaeJXVZhas%2F5Rjc%2BGDFYeqKMFSWDNt2hHQ0AnEhHaSFfVKpP6zDk2F01IrXbIA4vF90elzNAb3w%2BprcuMQ0ENXfbZrLOXe1zN4De9VPnmAun7n2qUt9dhkyttBfbedm1A8YvjK4KDf3AN8Orp2wEoCnPMpVZkTZdIpyC9qaD7pvgcKz80loXHt%2BXqlfLIUNyW2XCxlONb8YgF6r1EZJFK4dAVa0%2FdJrFa8YZV7Sml0M1gTgLiY0v%2BoKtpXF9Mir0Mu3hrg6ryj7597XG3DX%2BBGd64Xx%2BQftbnTHJ7DGyLMPBLj60MPLXxcsGOqUB4JXgG8AR%2FYICYV983LyoWmjqa141Ok0zaXH%2FP4PrWRT19Hz3u%2BAvOnWjbIPnUILLVdultLTzf4scdocwuzVVrDt8zdoAKzPhNVlKse0C8Gv59MBC05Q6zWj1HbFcnXHVihx%2FnoZn397vkgQZEqcqbsjx6Qu9JOM7cNZAcJC6k4rh%2BrxlFpavHmjznfH%2BEMoYkptN37eCa5KWtlbHbs%2Fo20njR0Nx&X-Amz-Signature=12a7609f6ddd0a3b8e66ac27c3a648edfe184fb92786d416f394e6f93b379634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
