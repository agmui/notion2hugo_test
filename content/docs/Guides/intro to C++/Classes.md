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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXZL5JM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLUE2kZHCru8lhUeL6ZP74IvMr9SHeT9OsUUUqzA1PugIhAOllfST9eIrXIw4m4CB2NUjxKts4XwpeGYcxxT3p%2B%2FTVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwplAUvNmXrXWbwiocq3ANIs0w%2FehD6yal5UCGe6vo87jk4pOX%2FAUt22lj3yFBd8dP%2BpEpdbNf%2Fi6DqAZMCnlZeVgO9A9KnzaLcPVZZDC4qjRbelmnf338b7LfDbAdYB4CDWVTLGIran%2BWryo9ephWAIO36K%2BTzvGBPJTYy33C9ebYcR6ghOxM%2FmBOcgWnZPi%2FrBh0I6ZKX9SNRRHEnHiwRrb%2FObn8ghQ%2FLQ1zF%2BKwjunkoueNWE75ogzjT4HnTvVnLUZHv7Hn9CPZCZSl%2BMMKnCtyYbT6ughfllhPRU8Ry52gY7cmQKd%2Fk8z50qSyE%2FV1n4%2FVJjMLkJ%2BOivXbAoAsbJi3w9dFr6yyQ7AJANdh%2BapHNncdf9XueKsMSx3InLWpEtfldXOYuFNfQ666f5KJIgyJlrxGksYxjb9cmAdw3yXb4DGqRYHP7c0PZkWu1Fh1xrRETuZknZ17yPPZAk8IOC3E%2BRBSDFvo%2FEfZySJ3UBCSfOvPKG2SJ0qaFPF1IDo%2BBIKbqQXPq%2BYOMNtjZ4OdJ%2Fmvep9TBaTELAk70QTV3DrUaRqRF21yDk2CSaKMC0u15WkAMiqAu8UJArBWQ2sZ1qHlc%2FhOGk%2Bmx6qisHKWTNVrJoWlX3gk5aqTk7C%2FiVjOw1BTu7%2FWhyTPuiDDOgJ3BBjqkAYShJ6Kdi4IANme%2B0m0o9rZDRmDTZaQM74sLTALccNuFuo8GlPzOTWVZskXpJTY3SiKF1hH60nrN%2FPc3kB%2BzG%2BjNGEWJEN05mlYPRQeRHg3zgnbnqd4nyPC9dFE5hVc7ad30cs5hPSya30zFRVQ1deyFapS1%2F2Y9TrJKEM552KxAuM5zV2gH%2BNVcbWx1VE5p1VY1s2dKDk1R1aEsHMs4VLffqv1%2F&X-Amz-Signature=ca9ea1a70840ed9d70ea93e1ba9dd23761551d777a8cc17c4c2de331cc859ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
