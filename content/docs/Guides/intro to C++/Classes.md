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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNOAS72A%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlUgtUbuvRK%2BRdlVLXmWsq7Hu7lXm9YOq3c8bhu4jEXwIhAJuPBnBvKEl8PcBdSK5yR3l0vCEIyHoy73lz9bRzKskUKv8DCFQQABoMNjM3NDIzMTgzODA1Igx6FlMStHxnLQlUkY4q3APe%2F1J5kzZKu3SfHgb5Pz8WLAP%2FptrnJVLqWkSH0M6P%2FUjKq4S98zVymMHWnFSkDycwzyF73MCOdOpjfVUTdJZio32p0OK8UXSqn5HkMnaF4Vw5%2FT9uM%2BXlNs9cHRNCA20xbvuIF%2FKhebCojV%2BPvgCpc12F5XradEhTmE5UMs5K7667PfV4648ffwiWPpPrBraKqc7a79wGZJ8HJ98XVQJ8i6TtF5C1A9sYGJnLaTKaIBq6rFheStW84uXM%2BxhUnZ%2BDN2lEazQAfXtS88M0ZCmoDlwsyvwUS%2FGc5OZLIX35ueap5bw3nIVQaQGERrrY78cGeLQTHGTr4eAtA%2FRGABs7gMJrCrAS%2Bcrp3EZjxHBEhwiJwMmubSh9JPIXN6cO6ceqt7qmk7uK50GURPMWn0KGxf2bCyZZKgOVjuTD5qKtHAnv1On3c6AijtEPicfLbXunEfaBP7f2tU9yBP1P1f133zRwBtrUXcckGs5V6rVumKrQxq4zIUMPNVgzJi5%2B1if4tAitk3igF5I7QE6j3xZI8%2BeXGzwoTMAProrwH4%2FLI%2FjThicEHgTn41hY11aK0ratwlxvWvHHDyKbsA18tnUSEbdBVeFuj51%2FUDuMUrMF%2F51viH8NyXm2PbofxjDgkuvABjqkAboEwew61yBKMhj7Gx6BsihKucIqlhWKJ%2BYlTErGykroreiISXIaevnH9wQXzUb5iJQSGwCfCbbuKUhkcHG9vEXgeNS6b1hDf6htzy99zNwcYVyXsRZTslAXm2HSOnx66uK9dZEdGHHTxOV%2B5boT8P37Ft3TZwnnRR2ur2W5Cfjk0a6pUNvaAIDVywYEVkRWMYtofLxUQaf1yWdhik39Afkf%2FVwi&X-Amz-Signature=345c79c0b1489c3b275181bdc97afedea9a885cb10d46a8331665d4256e16bf1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
