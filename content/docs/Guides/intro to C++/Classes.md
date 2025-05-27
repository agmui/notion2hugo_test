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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REDMO6AT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6cu%2FjwzcoDdLbhZmB9p%2B3YTeHNey5DBziEgHWeXlsgAiB1U4z1d1aGbMLBqCtu6tkbEGWaeyoad6v6SLdHWNLy3Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMTLwc5YDEWMUrBCKvKtwDgY4gYTdtvymTx5UCArGPGVjI7aCOP6vUeOXO845LoyCOfgUxVlpigbwt6yDxrjDzSM8uVu3OxwDIzAiHx407rFHZegyxqZHj5EjtIvkPQ7EE7%2BsJU3FmsHWvq%2FyuG9b0pSfu0L8a%2FUaLY38cIFWdZS29muU7uUoXDyeCXpHKUbhbG2nUjD5fPek%2FSwNRY%2BV3RRmDYOPGYlRBeTPv7GbzoY%2FtOrAcc5MlLQ1RzFk%2BwglNZE4dPLFNrWUU%2BtjesbyLNnCzhil0edyYuwjo4%2BkLvUsz5DKRUCrT3t0XEneyrdag9lCY4gIn9%2B36jRw97K9dZaUxOArsQp9S5aBrbuTP2dSGEV6gXo5oIpz2En54TBFoz30OjgEVyHcK5nNw6xxnUaNzkyhifA9zz9etST21eAL4HpNQ7dfr9e5pUrEDpQJ3syP7bCp5lU1rYxjBbQ7rP%2F82%2FXQlx3NJrUgQkHl%2Fm7JNDKuZb6br6xapmQXw8L9%2BAuqp36qx88Hn324k66%2FdQOLe%2FiLq6NmiJGZ%2F4RiNdd%2BXy%2FoD%2Br%2FSRGapFlIR4vtIqLIVUuCFJM5l3SnN2tBKorNSmOv9ZzC1M%2BteuLozG5WT20qWwfLyO7KMrpSXlethyvoU5cgKLIGC6AwwvNfUwQY6pgGBBTdLhDpiwoIIAFCrsfOcOgK31Y3xnXADZD%2Fw2eM2Q3txmj2I6CWCkN5Ask%2BZooNAhYGMidVrNK%2FFmevX1yb6syzssnwf38lPhpZ3BPxbj4OJqtqht7YQQwCjoV0t10e%2FXkZtuqBy6bTcUXlPv6bndww%2BfXAZjNOog2oi7mpfMOZkyqA3K09NT10HcygefqNmDARPorEOzB992nQTVwwmlaxbmmdC&X-Amz-Signature=601f178a5fa17026029bc152137cf7bd3f563276c6f7ad68190f42b401c4a720&X-Amz-SignedHeaders=host&x-id=GetObject)

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
