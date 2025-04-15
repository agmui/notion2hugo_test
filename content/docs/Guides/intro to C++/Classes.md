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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGYZLPD2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbtJnARmdmXSNLA7CXUdD4TEejoduPIex5GhUxB0ZYwAiEA%2FZklIC9gXyTrNBdcS7hWxy6UXnSZU49cTmYJxW1qNn4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIlSjMESjbiYvN4lqCrcAyDpEUnSr3a96RH1ePCkADQhs1m6v1Dbx8a%2FOnxWKwgJ0i7736i5ymF9AST3Q%2FidW7mM2eG2kasbiOfQNNKpuyYQy5tsmYxPtKMVSCYK7dPGu9FIc7BVCi8z6LHXzWXhohKHls0FAzadoa5MLQrmw3yKiMwAaBWTOHkkWQZaEWSgBPUjRG3TrE3D6d%2FQTlih9sSrQDBb5z%2FFwnadOfntI7hxg1QOCRpyu1rQedZxqWRyjekWQ9gzdZWPLZgwOFtGLmwpt0EEDufa6PPzA2%2BEf%2B4AzsRg82jYSg93xDftPBSjW4EHYnj8XbnuXyESMDWFbWBQrrLzdL2p1g7eNZEIYY0khiIawGSlg8BG5VOGkGJGAD4otet59CVx8aKmmfg0wJ67HR3XU4lmEWMpCjIaSXrgzCy%2FxCItBvX5KS87SDwfTxH4nfRSE%2BXswDkJ14JzRK643wwdMEC0SJ7nxnpP%2Fyt4Qz%2BJHvUG7PcHGKlyUjaRdzGQJA3jl%2FcHT8VxMUbeelWeSMC9da0zTUsUhGaPkHytrcJO5Uearl7n0OnQaRKJkMZ2Sur3aF9%2B1Ck1X0P5EMY0reElmoL96VWkjlx3NaAwb958QI4HJF2mAfzqTFvHQkixNd%2Fa4wWwmaUrMIbW%2Br8GOqUBviyO0F9daXbzvtmTdwqKckZ2IxtxDtZp1nueNXgXh9zeH%2FJiNZ7r9zOTsQvuCcyJIHZXvCFnkb2ni1L%2FgJjSWxh4j8kzcGfblOJ5tTcND5gg%2FgtWkdjzNqJwxEwJFE4zi6dtu%2FJ82%2Fk%2BAldunhIgqQm%2BR%2B2%2FLE2%2FGvDHEOwDUlrIH8c48a4RWe9jjfpjE8YJi%2FI7yGFJUaFaaoWss259H8sauYVo&X-Amz-Signature=175613b358cf9907d9c3d4d60fafe4bce3551d09da090c028e0efa156bcb6ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
