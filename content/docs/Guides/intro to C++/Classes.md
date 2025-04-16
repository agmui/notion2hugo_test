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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XRJYRUH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1aidGakj9o5OIwAk0vrSDahbFDgnFx4sdv9Q1Wuke8QIgQ3hW6MGVP%2BqTDCmLAUfsc8KJumTBPgstE%2BXScXsl8pgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDM4Vro4Rj%2Bk6NPTPRyrcA85et9zH3CG63V6FHiy4MbKw4kTY%2Fj35rNsmvdJD1a%2BO1QO8VNdmp9nhavwNkA58%2B0dg0roEDh3BbErm10Cf0P7NncL5hg7I1F2y2XStspAWIEYCYiooUGTO0r56wIVDSK9p72rgNP6WoTAou0XCBFrnNTPrF4Rff5HshSAHULUJQtsrtD8RE2D3i5VnC9RoJ6zbCHtU2l5%2BsdDhLyzSg53ZDKzM8teRsl%2BHAX1eUcnR5R5VswOB7d5lZGhTP45VMfYN7zwTNqQeh1Jai7ZvDZMVOR%2FYJyxn0AU2XN3gYjgS81BcbsmwrENHPZKhIw3Gh8HbujC7YEMBn7%2FFCQND7PhuvlcNP2bGF2drXEw4%2B1XR4nA5OJPG3wdGlEbJrWGsdgGXqv0PD4EQpNltgY5tT4CX4qyhZji6W1%2FqfDvDRmVmGxabuu%2BzGy5pVFV8H8rQ7%2FYdMHLEu7o7Gv2wuhOghWUUg%2B6WSKj%2F1A1jgBaEwvkW6m9nGyG9NeFV%2BLMRYlkx4HcDGqyiw4ikesiokeICcMNGKXqT3vJriqOoCJUH59ZbQp5Yub1NaY2GcqkZMS4aNA5WQZhxQpqjVQmcNgQ0JE1L4jD0p6tzcrEHSnj0%2FhtkE6Fb98dppDQOUUq7MMDZ%2Fb8GOqUB%2BQSKMjrj7kbO3EnaidIf3JZFENg%2FCd%2FkxowZhtl93UDqf7ZRwhzmp%2FfSgNPz%2FjH52%2Bv7%2F61yG%2BpXMq%2BgI3JXAPNvRDTgEMOE9peFWVwpMPu%2FmABroJb0Ku2UyFwuKaWdXmd6lGnJNxwJK%2BU%2Bzczz6Hgpq12oM6BQ2BRrDlO6D7pfZF%2FN%2BnFN5gJdAbhV7WvBYq6dja%2BukEhun6%2BJnCyG4cMHZnp7&X-Amz-Signature=61ca72430457114225e3c0a45d83256f833b711a1b5d16e34374bebc0a15e6bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
