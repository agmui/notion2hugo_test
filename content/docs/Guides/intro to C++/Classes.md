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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X44JEQDV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX1WK%2BjV24yBcOGs8KbLLPAkVYf1QPkBZZAvPN4yNxsQIgQxFcGwTsqZG05A1nO78OGXEqyG4xdGI7WaQTerCsACYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN9ABKmyUMtr3vHu9ircA62q%2FGr%2BDQIZHFOOeRQSQcRXaNrMjB7XwegS0mP362sgIi2%2FQc3fmpHSms3JqLIkCpnZqxKz9STtrM84vVc9kJwwzfIsv0boNiLLPq%2Bmb%2FSsZaR29Rnw0Ch2PZE0CyOkTGffUZ%2B9WoKGr6zpptyt6zvkYwSkLaOvb9Hpm%2FFGv2vjIJAZgXGU8HaDkXEzb12ThGZFpCspdVPgMBxP8vw0gycUOX%2FYgvXpEbArFujhCLW7abH8Zhvz79p%2BFJrQYlZmnC0oF4HGQLATD%2F1GRPPnLrqUIjjJ7U1pFvYaZYtR4A5A8uNvZR6hQF%2BqdOkELkuB%2FDLUwDQj4ORZO%2FKezfZmx1M5E1lQD1ogDKpYFPpUFur%2Bfo5aZGfTGFRgbIdpTmvTFm7NYqsT3ZS%2FStXNsznCU8e0%2FWQUiqBE8es3oX6xbbrR8zEbcY%2FTMrOx5rUQCxgeZ4PIKyKUVoZOmRXLL9Vd0Scj4uhDfIAhyKxaGeSfMW8e6mhJidjiV7fMyeLUyAzByWlW%2Bp9hA9NTpf%2B8rvcEJD88ablyeOSyGRmxJsz8LtpIXGwI2EvazTVG3hhVmUQaf9cY8Pgljev5O8Fdv5M1hVpoXOUL41Pk6NDt%2BxHXGnxt6LiuM2KhdIXViicMMPmj0L8GOqUBKPbyuBNdsN5xJarm3ZDRgiAcGkYOPlvM4JaeZ5Nu51w9%2B4fsM9%2Bm5D02HeCPeFREYlB9b%2FIhxP%2BlKq2O3lMBJh2xF3eGY11vFkWyA4ModBVW0mqvJ%2BbWFr21CzODLPL9oNU9jgL%2B9%2BG4Nk8L9KWVb4N%2FdI6d5HQbpoNuFdOhXIi7YgMT4%2BBAmIy4DIgbeoELeVw0DUEjh%2F77zjb2tsZRznKJgosT&X-Amz-Signature=46b5ebaeed8821845c1d0a09d4f24487e65d8b8748d7473ba6f95fff224b9cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
