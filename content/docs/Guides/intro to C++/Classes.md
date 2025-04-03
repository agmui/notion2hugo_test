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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMYTDGVN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKtr84Kq%2BPA2xtQVDpmuikpYveOXSN4czFHT14NJbuaAiAevZPnfumPEQLcK927hWNqunO%2B1q1pOfJY1xwrB%2B6QcyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Ji%2Fm1HFV09B6TkaKtwDayo1O48fjq9Fyl5Ip%2Br3zR0R1GTpQM7oDwAnJDsRT0V%2B7GpRnyJXexpTkXhg0SPrWIBNHkCHuhLmItcaJuDXjtweyJcVntIh7Go7VwyzevkTpsbkBEA4%2FdXkjcwEGJ7wwkMlc9fDUsqTQJQvbIkR04ECrmf8EjVN7qvq%2B1fFh42wc9NxUJF%2FEEGY%2FeW0Yj%2FJMR1TmoDPvxMaCLkRJGDD2Mg7uejcxCc4rNuOMLEDLiJTK92Xba4ELTaifFq6n3wfyXOrFOe1zXLfTUGZ0AJfuGJ0NbD%2FikyrI65Arkjbmu0YrFO7TRpi%2F2klab6znKou9rwdtqMAigCA7OroOmonfiSLbacd9SwzhvVqM86fFG%2FMLzEBrY0fZF1w6eQbSfUtQ37KJuqUFG%2BfSoKOPteZxGhc0ZR2aGXJp0ApT0QtEREZGF%2BnM3%2FKeLO%2BuGoIoBgamwXTrbML%2BBh1jnR3nbS6X4foKiF4Gz%2F%2BxAdfkO13iQ2m6VjvPm8DEki7HNZ5Z8S4uduKxWxWYJIWldRli3VD8A%2FbwLrF4grTT%2FteXCdl2YoKNSHMvL08G5l4V%2Bi3K2eX5I0fOacf98EflBXTu0zR%2Fz77KAgAkAgfjlUW2ZWuMdT37lRzqanfQf%2BnPLQwvbC5vwY6pgHemFmeKyfL0Q%2FAVBFNsrIcxFNaOL%2Bn%2BPQZWNlsHFRh12EYoPEpQIHR3BetgPGMNYULG7xSs%2B0sLrjAMP8BbTyMpGSM6yVfC5LVS2w67RHQH%2FDgvB31SyRMC3coo%2BAIXcKNjbyEVHAKNB9pumJoDofuhn9qEy6L6vkgncugVcpQsZcLtp1kDE6CVUhj27sHoFSlT%2BCaHlQdg3CaNJzEnBIN0QjFb8m0&X-Amz-Signature=598bb90eeaaaec25992040df4e84314166fb183c56f597c103792ba71c3acde6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
