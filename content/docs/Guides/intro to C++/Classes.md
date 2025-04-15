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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4SRG76%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDseehyKNJ%2F3vW0wp4ETk%2BaodxJXygYm1oF15SttXFmFgIgAv9cCjWIdOkWRwA%2BR0ATdOwib%2FibPUtyFGBtrkuDRlcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFSQL4IAk1313ESxySrcAxnPJw9r%2BECKEsQ469N5uzGPkfICgH3%2B070Zsidpe9%2FAloHIYtVtNROH2M7WPdWOJSSUevsug%2B7kTiwfNCEgOG6uoCHYhgvBMAPIONqFy1GdrJhynr%2BN5MsWiK7R4beCcSMYUcfGclDOmX9F4lpD0ehLUXNpeNF7PmLzka0fI7GLd3bMcZPBILtcz1IyxZuvBgRUUbfshDKMO5AkhJ0fNbUa0zrkItXQ3NVlu26ghCt5N7h82jz8%2FNKpHGgMB1hCYo4HSiuzmwaBN4uRxvjNdIwdIbEtwvCYae2y%2BouBMa%2FAP%2Frn7SabD7bwrYKmxkbfSoukcx0Vw59ROcOA4DDjTZ%2FJtrn4fkGv7Diw1LCD8RlO5pLd2IZ1VJwgVo7SJx%2BNJWRlvwdA3O%2Fdudtlsr40n4vjiIGfiIV%2Bb7CoMSguYTkAJxRTJsf4c2Zkg0qLOs7w7PARPSrj3ebkJNsQ2TSSbiefGMETypf5PTKQjDrOeioT5%2FAR9sSFcFAa8dUpYrBVlon5WajG2rIrlP0MtY0wv5McbTpRkEVvixUFW5xm3QLUjjrUBqaVhiDXNS88Ckgui2kVB7zd4xRbHRQOlghipRkUw5tQHzbzGCAxuNTEEDr7NdDwZnsFNc%2BTe2P1MNvC%2Bb8GOqUBKfgcAqmNEwB4q3a%2BX9Lmsu1wUoftU6dEWOWBr10mt2tfCqXllnCrnKXfeu6UI%2FXjW6ieIlacNglNtYTyo2wdS4MG5hQiR0ZVE1S9D1QdpluzF6Ve4IF5hgXWbL96G9WacxyaAh7Hh7YIQpo3FeHQSZYP2A0%2BfPC5x03UpQJhPri6KTH72KUnlbwCCUNIE0IkM8fYziRofslX9vsREeB8YbeS8TsO&X-Amz-Signature=7904ddd8b1f602b7dada11571164b47ec6190bc0725fefc34f93764b05d2aff0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
