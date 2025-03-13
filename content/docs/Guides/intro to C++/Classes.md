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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRDPSSP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxY8OzgA56zlg%2F5hburtiCiqBULD0GiueSGHK1L8%2FOYAiEAyx6iuuLrQesahzbivRuTfJSEqzGxjgYBrxmFkbg3C5IqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIo5HLh46zQXOQ7RyrcA6R2bcQZNH9uvfdHRZy6KzTl38X9%2Fza3nexopbwZAif3to7hlY1LpR3ZP%2FmvEkP5CSr14likFs9svLvPomH7ikEzDbbqLLEsicWBxBV%2BQjD8cxYXhcvBb7z62qSi9%2F%2FdIrF6La34w7hEsvOrLWyTPYJ2Mirk%2FJKJ6KPOE%2BoE3mSBv29gRqM1eIMtHtIWTFY4oMs5GRZ71ybJWDFhkokUoL6xCh0a3Aj6f8DT%2BuP%2FqHZHeeR563LmHwKqpIghcmFErlZiRvvoNe%2FJW9a2N1v8fQwePyHa9tH%2FBVsDe5JJx4JpIVVylttw8fRUpbR1iaiVMSj8VOxmg%2F2%2Fq5g0G1ts2LNIUOnh1K16BKGwd87iji1wJWCApsa0huOHEugs%2FoDkjxazLa9Xvch3GpEHnpQMJDvuYe4bbF1B6J2DzMZxnFGY%2FoDSICRz0eiFGRsxmT3RcXjmkD50Atd63qhvmv6qSApyiFEfP52fD%2BEep2cGN40OF9PWiSnMkTiHA%2B9lEpWFE5RLWuR20S5CJM7diittrq%2FBKD2eSgeq4HfTEVYXiKVdwvtUQlBZ7pzMNHh8OJu4QoaI6T77tHQgZc7D2V%2F0itnTuypkuQZSJ46ZJ7TbQONB9%2FeNtE0V4A%2Bd3WhFMKjlyb4GOqUBc2XdA1x3pUGCqjYu6baPr7NexnlV7Gmef3Jj4SOofH8VIRV0%2B00JJhS04wUe5ito6MOyGaUQmfZA1MOhvEKX4L5Gc6u%2BXcvs14b%2BxphT8IKplrw9luXTunKK9bwUUQ1bov98Jn2Dta2fMJ1NieMzBTGFbB3tinQnUUzecXUEb8fTAdNWVoQseYxo4Gi9lSXs9wGMbo5ks%2BoMsKbJ%2Bb2%2Bp5V4MqiS&X-Amz-Signature=348ea94322e115a06583da449048f00b4f38c753c3c81ee6672507e88f0d0ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
