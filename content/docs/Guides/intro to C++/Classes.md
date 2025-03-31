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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRKARJGO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGUZJ9ptv4OJaurP%2B60dMKog%2F5IQ%2BdZ02Xv6bzVc4HcRAiEA161tSJkFeCObUYjvSGoRrRmAterNyMzZaRNxpQEkjNUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJ5rUilPkFSUG3GRircAxl3XEdtMcqcBPJhR4gqm%2Beg9WP3VaKvcnrjON5FBG%2BcCXqqKeXXdKviCCIRiQ1GlE%2Bnj86SdTxYutc%2BdUSu7fR10vrp0vXwA2j7SR%2BYXKhEmUuNEpfdb2UDvbbfmmi4P%2B835y%2BCwFbU9%2F64u%2FDCMvx4i1C6at3O2r5509daNKRTUFrAWs3X7nsfJQgTTWRXlvyPeCzrkHSkDk%2BHmY7bV3RRckWLkxBpdzKe9%2BhZpZsFETd9PpipSIDv4OROn21Y9gacv80IKxCMJPZRf03%2FIKel7cM4Hy8aAIoodYLP8EJqclXgUipot7DIjJ5ZCaFZUTNaihLzVhd2z09TosGZS5XL6lGn%2BEsOz4zVcU9BmBG1wCxo2orEP%2FROdLfSAH6OneFrmDephsz21gPyz1tYoGHYWKhNL1KLWjF9equysYMa9HIgIWyds07dsQMCD6uMDQBg%2Fn0fzsYpv294mlObYa8S3dL3qivXBMkmbtYGoaxbc0gvNbeEIyNV5yFlmcs7%2B47u1yv6XZr2fmYgEy5Lo9YzWNq7xvsqVUlD7A6si4HbKVvqNTF15Ap6yUjkEz4I3zydcU7k723UOYbEBxpGLSIsW99mTl%2FGutwizGx7X%2BiFHwSMyby%2BnNQgsVs%2FMMfLqL8GOqUBEn%2BolwH5HLBIN2TnUN012wqso73lqkP1ka6xSWU1aENr4BO2%2FsDgThBiFJN0EgpoDSQ7TXMzliAah8mHQckRbly0cy8GQ5KyULDDLJ%2FQwY7%2B6bpc6kGHBc4WytNA%2BGE%2BxdOt0mo%2BeU4co2TAUJa5gqql%2BDAkjG2yCGCxSi2wR47IqPtLq3lgEPcPr0thEf5iN0NHxNjJTcg0DXbvirSSQb2liZfm&X-Amz-Signature=ca46f449aa602ad9fd9815bd09845b7c1513796d6bf56d589c7dfa07d316336a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
