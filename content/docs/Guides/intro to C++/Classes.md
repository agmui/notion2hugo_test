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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROUJD4P4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC15m%2BXbWjWB5Q73%2BGAQOYlYYk1UVRDmxEjTqQXM4JjXQIhALerAHX4YreW2wPO7%2B87ahj4tZ8W7Wt5HvCaszR2gsj4KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmDAepXJ1KmhfvGlsq3AM822%2FILtxGdGDHNWksq8O4I5k%2F5U1utFTyWM0J%2FO%2B7u0n8ufe6DqqypELnOip0yDHf4TDJV3yZCS6HF3GbCgsG99jrDHiul5PP1Uus8P2bIvbGZ6kQXJsgZrmPr5OYKPoRGSUJkfMVgVPHe4SyEFkKoQ%2BdN3fNOMBFGP7W8Bx%2BhZ3UfrtBE3n4oM71%2B4PjMUobk269p7EvK%2Buo4H3%2BqHiVeXc0bVrS1BYf81XpfQjkrexW6Y9sOHtWbXRqvKMrJeoeiIkgfILThjR1qrJRfcw3SeSeS7GfIjKHFpqftqiZ66MDN87l79Rc9XFJ0YIEqS0O3zrkoC4OKMHBSS54ytzZK8jUBrxnmuopZ56ofICecq2NWukz3xNDErQIrZywFpBBjxjKNGP3b%2Fwetens5Eo3SNR0wjqYtWedtgZPkJNRHNpsHs2wB6iFi4cIUEAyDHOXG%2FWHnH5fTcdkzmBBfC%2FDJnQxDX9TwbMUs2TZMUNDCX659mIl49SSYE%2B4GPbmKgLdx2P%2BYfjz8rdNX5kqOx5GrPiQQPXQQZyktLGX4FvDse5T%2FfYFScpknyMgjIYApCoa4ssh%2FFehivUDNy%2BvKGoxON4qgPk%2F8SjhAc8%2Fs2g2fo5yZ1cMfAkCvHBCejDh2um%2FBjqkARADj7WavFBMjNhwVZuK9WMI2nftfMzgIm2JMVYaWa%2BafZUFH1nCZALD1DKqZmLGRm6Bd7TcJi5wA32CyroeOeVWA0jS9gZK8LxJPMYng%2F3EeTsWt2GElFZT0tJCNvoPt6msFLf7GYR5ea6SeE7Hts29mIjJWP0Cah1FEKTlMfh8GK%2BEoqoDXalVrZ4cE0AePwcxlkMfRxOgGbMoTrkhTftyP5Od&X-Amz-Signature=6d41e6414367e13f03ee1685efe86b0ab512a728fc0a17b19e358cb7ce082714&X-Amz-SignedHeaders=host&x-id=GetObject)

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
