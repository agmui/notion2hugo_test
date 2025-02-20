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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZH4RDGK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfSHstBeshn%2BqB%2FML67c%2FZA4Z7u8%2BurgxZ626iCIijAiEArIgIBIOmEqoqvLaULQipiE2yYvYAxHabEV5vczNbIloqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwwMW1ofk%2Bnogq%2BlSrcA2%2BU1F5iWtjflpION2S%2Fgc5lKDKF4EyHpnikBTSAoKwPim7r1cb4IhD6AgjMykYhWMK4BdcqcdLaMdny0L8%2FVdZwTlGZ6ouzjbdAFztQeco3TYsrORlEhS2tAVBGRQSdCPjI%2BtkhNT0bl%2FuAjUzS3eOdr0gjDzHLSEkoAyBZPv1XOztF2SWbFiHtbC%2FciZVDWfby7PYto7ktndmWLDS9ijXD5H%2FEmWosqRLBBRWgsWerU1gH3yWcKtK2QCsgFJ%2FsS%2Fja3uIGn4qwfkLA9ddt798CSyyh4ZeiEjMUZQg%2Fq%2By3vMGhI0dmUFPzEEu4ngZuib5Ick6TvqIKmwM8%2FNhKAZaPjoImM0YspDiTbhTZzLMd1osLdKk8C63zEk%2F5soAL3JokZMFfDkhx%2Fd%2BY9PacKm9B78ARb0Y4QUgTPSOkfsU%2FgzfBFFkloxP2C4K6%2Bt6W42Zn%2F2%2BQqWLqhQhBMLRCb2UgnGPHmnoW8Z1jJwFYkbZDWVecXhQE0FkkgHYVjOs7rkYk1Xq%2BWmozelernn1fdY9xZWlWp5IZFRmKC5p%2BZ17FOr7pk9EAPJauJ%2BpbULJA%2FPEnhmLECZiyz5VMlm4yYqcok4yAsMhso1t3l9V%2Bbrx8UA%2FsSjZnt8ydi%2FKmMIXn2b0GOqUBGXnTv5XXQStiejSiTTbohIdJFMQyStAcQkwh%2BVEAj0aUFQ%2FWMPk7JWj%2FeaaY5Vs8aLTGYpssyiGT0t8R8eDnQdlVfNnLZOEGmkMEJA5ANmpwr7EPLLEa2jInuUSEFUAUAnGye8syOH7Jt3mR7UhefvV5fR6zQ4phlFBGelz9zRpQohZq%2F%2B4HYpnuP1tK7NLWyQcMndjFpitypKESabfUdMbyF%2BU4&X-Amz-Signature=bc5dd6bc612e75d3ee782e7bba8802e88a3b9ccc58706f9a6924eeab794c0f56&X-Amz-SignedHeaders=host&x-id=GetObject)

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
