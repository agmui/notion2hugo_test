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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFK5PM2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVsHzQiS1p3k6I5CLtIMkpRzY7MK4G%2F4y0HwK3o%2BKiNAiBzn6vE2KRT7R5NV2OmazpFdP0l5rWJxdCTh60AhE8eTyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW4Lu%2B%2F7qGrT36%2BLgKtwD4esnXhPxpUHDWUoUeHouMrEuP945VmR3nW78a1EyZQzMDCbbxxT2jK6FegmDyr87z%2BlKWra%2Bzobzh5JgH9i%2B750oOsx0Jnz4Gba0thE9wKtJRXRTLZtw92c1GXDEYfmpsBYaJeNruMyqkiOzZiG7CneuJwCxd9KtKpzSs9vRoxPUhPPSijU%2F3FbAvTPJcpnyDt%2FBRsKSmAfA%2FjBk%2FdqqshRTqBLA7r8eRSzMssL%2FWGGOd%2Fue7njmFi%2BhToHO1Q26cdMrgtww6i%2Fm1uysDcyQ6RQXgEwbtIsqu1eltcZEwr1gPKoUWgdR1g03ZPaiLV4ktWRID962Wk7ytyKD%2BydEN3M6P6TNkiHkRVs%2FzZXWZ5eNF7DQlzaD5BPjBmDJdCfAIvEe5ihOKONUIEs9W8BfsRjubvqpTQhXR1ctQtsTKxGi43QMhdwxU%2BiLIrhwO6S%2F1pQ2vodVLkfC%2BFmbC2o2GSiGQy9jHm9pu4jHCZYeqR5cd%2B%2FLD9tS5uU24XgYPQVwFKAYAD78iEv8re2jiGoQmIXwKIcGHxgDRNceCITr07tdU2ePaSSODBNUXtWQy5jMDKC%2Bwvoz2hrf0pAWjIcor5uT5DMlTV3wbiKlNWX%2Fc3OYPcZvq0Yi6KLfGR4wsNK7vwY6pgErgZrBYXTU78332c%2Bu7vqzqymwQWuYXEBXGobtDyNXdDo1dERFojiVuYVciYBjW%2FEJzcWVLwi%2Ba%2Fzl8kXtMwR0e6ArVijsb3vOtD7HOlT%2Fedwkz3SsMh5hi2I4HR7M4texxiKG1SImTouFMGl9CY5gIPCqRO0smN%2Bk28Bu3V9ziGUFRnOTG9mGwA95T%2F67b1MqTTNGzFseIuO2%2BKq8rqlPBdydtGmy&X-Amz-Signature=5a1e7d42e2910114e05b367a361cde27c2f0f106695c9edeb837bbdda537f3cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
