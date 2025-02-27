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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPWBP3C%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIFz00ufS2qLXSPmPTT%2B4jHRcvQ829ljZbECapJsrx6WQAiEAgO7fUXHohi4Qh5uPtuG67LtYFoyTbCO6z0G%2B6oqLhPIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIDFPAWYfHRLzSC9DircA1YjRQrpEv6FVwx7eysagnE5Xax6fDUaYVWaOqwGqlGKwuwFmJH1mrkDQ2xRNNn%2B8ahiqBVuRPFiDpLgW9fSGOpl%2FXFTV%2BuKgpdw%2FtLJBiyBbobEdI%2BZvMH6%2B4XdarvH2FqYy1pAYGtCau%2BtU2y9MFfB8kagPk34Qo0i6%2BpVzlJrdcKc297Lu0G0faa6CAuc6xKf%2FMyrU5ye8PLgvouYDHyYxpM3oViUMCAq5hV9Bs2YY0%2F8UxQUUVzPXt6o3XvNog0DYnHQeGUXCGyMLBGbWsRT%2F6lkNGddqMDLWQlVdRj48oxedwciBuitSpvvxtq%2BBmmzv3FQRx276pyXve9%2F4uXQAt0termfdw%2FXKCIejJRW5IkndbR00SAfpKg%2B3ZIqGP0jErr2ufb0GKnEZiCfk64MAreSTDBpG%2F%2FKCGJImesJ5cjRC34Az6FNCmU5CK1rKphuBA4M51GhIFV5HYD1C7DWqKSQgf5YqABbhLmlOsUDclgX%2FHFKmpL5PbD199NCfN8seiRhsNGUnnYv%2FC29T9YzdhownOt6%2FAAOPhfjKmiOxrwBRya56UxYU6MNYSBHIbrEBaw9jVikDW1PiQXmu9cZjQgNEMTKSUkD9WspJwwBfmlLmoerD2TmFH5sMPazgr4GOqUBiUQFKv8oY%2BRDGg8X6POXpP8N7DsPvefSj00JAParOWo6%2FguyxEjCXvg7qqzv0ys8eUdWSlnMPI3No7du9KLFHMw56HP9%2B1%2B1bjgwSPB%2BZui%2Bx4jBxfKuds5pOUKHkMRdoWYg0wUl7c6nMZtUcKs%2BHI88h%2BCFd3OKxOtnJCqyI9IhfIZoz0dbyA00DvAogWphbP9kjZ9t8sy%2BQ16tmKqJjYznwLxi&X-Amz-Signature=9b856dc77ed1a17ab6c25a9c937c767c0f242da6b8e72ff6ac0fbad94453c453&X-Amz-SignedHeaders=host&x-id=GetObject)

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
