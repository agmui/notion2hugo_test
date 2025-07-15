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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD7K6YDC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCTUJC0Xb0Hg64q03%2Fjzz66cr8tAYEonnT9wI0J8uUGQQIhAIaJfjMykYgRMB5wfPig9UnD3Vr4ZWesE3m9mNUOl8AZKv8DCDwQABoMNjM3NDIzMTgzODA1IgyHX%2BUoRAxX95MjUfQq3AOJ3frLlBkRgLnrR9l%2B3%2BR%2BkV9NtwKz63no%2BqwckszsFFJRIk1wdioucCrQ3umX9%2FmjPxuuEhGKEOXUtw%2BUMBINo81SBYIDilMXzaXlRH8dcnCf7yvHchWFdJg4SsigpGdhhNG0hgKDJ%2BdNsmaBId8MCiSZ80RqWObAAQRNNWXNKq3J2AOSDHQoH0KQ5qIDq9oWWi4uG8PQ%2FfRws0aZBsF%2Fzvh6%2FICFKIFQjeoysiQ%2BtI2kKPo0FjC8v%2BzLkQ0qHj3LlwvVuom5QwP6UyMT%2Fe%2FJroMmOViVZ1X4ewQGX%2FlIURfREWx%2Fr9bKgp%2BWuShAhw2R2C1j%2FXjANPAPoPfDJ9W0UyloMsbk4slnORKEql%2Frt%2FxxlQ9T07POPDEG%2BEGKQP2r3x%2FqwwfWW2Q1xWHAnvysLARzxDFYk6zC%2BY64Ax6U3MO3hmLb7BTyMBHcJ%2Bwac%2BM%2FeUOhGsl8eeVxgHk0iqBSbKrkKNtqS9%2FpAwIPEzu6k6mbGQOm1V3U%2FudBaEZdYER2G3FMXIWIUxizIOwowNMHxbChXHQAxJlHcCXzgG02jypXMcN6Nev6Frac5E5o79lHkE2DYEiPJLtYsQzPMjft8G%2BZc4qYR8PS3Yc2GnKZlWZk5GWmuPVaFYP2bjDi%2FdbDBjqkAZCWLbxi9Oe%2F5RHAiHA2UJt4RYThlJk4Flqkbz7AdickGsmLIm8YpR8fOJB%2B1zhg4QkB2bV0tjL0zMYx%2FoiVZeutRavDsjZo4wC%2Ff32GjEuc8UwMLP2GYK3PaU84LUmipz3Puef1okCmv3PG9t%2BABYzJ5nIBqK4IuHY50JYXOeAWT%2FDO8GSSmkzmfAcGo9%2BE51Wihpv4eE33zKyNsyWPz4I5MJ8h&X-Amz-Signature=310f5d7b9291c60f0dfa0b556722ad8c7cc29f8e23c3603018ca1fec926523e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
