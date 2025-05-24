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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z6AULFW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCNmB0uMe7J8GME8roP4h4MNhaXyEOe1sPy8I9R8xifhQIhAKUtm37RAluwJsRgEL335Ak8rYIz2hhjED6PTAZucszfKv8DCBsQABoMNjM3NDIzMTgzODA1IgxREgMkqLfRLVvJaa4q3ANlZ85pfoyos%2BV0oxJ%2FhqtQilMBkseavXNYHDPQ8NRu9CxPtOdJwESGNvFOSO%2BYOZYbIii1e9ZNpTpiYEAXOfZT66LyhpVHOeSzj1kr7%2BgOyb%2Fy1vj6KxZceJ%2BkaUbsHb07jtUubc0JcRti3UFxivPIR%2FP7tQWp6eytTNGkO8eywGcmSltF%2FFhqT5s8KuUNQdF99Vu7d5DiAn7C8Nhbwjuvd0PaVC9J8wX7Ba8jQCuTkJ0XcdADoVWD0%2FY6SAiDRuD45t8o%2FH4ZX2KGMUplqj2xaw8XK9xKK%2FTPXMK%2Feon7qQmke09QD4PvVFE18VvOKM60azb%2FKCInGoN%2BfoLOP7CRc5%2Bu0H6%2BwIoE%2F5l0Slnj2DTQ7wdupfScif4VIIRl1HG3O6a2fqVma0nmZFnUplLquVDje6Hk2%2FkFpp1He13PtdSg6%2FJ47TZz1fTMu9ApGf36S4SLK9S5%2B%2BkK5FnBDMSd1Tlq1g0C%2FCDVdGaI%2BJ8StpqMVCh6YQDVsekkFXWsALzcOge9ZpFlsOV5QD%2FJBxlebqikc9rQCboL686q%2FN4HyGJlcRvN6apfaui5S5cis%2BAaZ4iNtwjQM4GE7AdB%2FGef55L%2F3gVsMS4DiipX2NJIvaPpL0GT7duz%2FrZnbTD%2BlcjBBjqkAUL6aWRKP3hAcBd4aFVA5DJnXXZIg0vIJlwyDiCEj5cBXRBhenbtz6DRV1ft013RC%2FBT0xTjgYe2TmlzD9T6v2lJCidoqYsLDTAcn%2F2jW7QH%2F%2BS8qoAf58advui60B7XV8s4qzP2ArRB7JEPraAl20wceBtUnkTdZIc9mmn9FHPJ7acNJhhec%2BfGfRFJeq%2B7nDA6%2FCmoA5ptMqiofDXGgFtARqZF&X-Amz-Signature=5682fad18767e4519563999029381f88914552a4234d089cb438921c63e2429d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
