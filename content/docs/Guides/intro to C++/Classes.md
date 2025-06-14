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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKRN7V47%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHh%2FwZRV1tvio2BN9sTZ6RSlz4mNZXBmRrIwVF8JavYlAiEAw5K0vPCtlT%2FLWf6GPQ76LcHwaRme5O9vZUwCTk%2F3lW4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMXoKpqBJX2v4hRYNyrcAxidHh%2F1VMXLoKvwQy9ncQmuK96m8x576e6MB5b3oJ%2B9BacBUR6fQsSSaTdcmoL1LC34WUHWjJyUE6LYCm6zm1xnnCw9eVKeiiAKRjKZO8LYRqO%2BGudxGihxyzfwmI0YMXIQxaQO6d3A2GP%2FSb6LazBeH7m%2FLjr00%2BA%2B%2BJWvZnqSuzNfoeXdJhyoDx57Yzhg9eYwgoWKfvnYa79sSqfqc0TJLgqveuFJS%2B8zT7Kh8fbQWvg0m0TU3yWff6L5IKre8Os6RnKvQYg5PayWnerWuJytqqFTD2KEDfOzl2B0e9btw4LonRsU24UxLCZdfMYNRBAIgX%2FfM1lXHyC9bhU2k69A316P8ZbRtSt2Iq5sLkhBi%2FYthCS%2FgDb%2BFmpYI9gBU9o4rwMlBh47oIdGxqtdejuLV7Ri1CG%2FCy1x0ExdGrI1gdBCSiHuQjSqrtSD9P%2BORlCP2dDoBA1MAR2%2FEw69%2Fzq4E3WggDjgnpxFP7MvCxpqVcHDVysuA2Z5M5RASD7anDjaERf8lYpWS4Qf5bI9AYgTiek4pkknnq8svxW7LPHlaSsPrPQAisNWIDn2PXt9gi7gjgcsM%2BBD6HuYs2Wkjx72FtcJgBKlvc4Zl%2Fh8GmBCbJNf34d7sFgn15kpMOn1t8IGOqUB2hVZK260qCEC30YNb2gNzutv7IgNsrkywTykogsW7QRvSSoz76QWcYuWbCFpYB9cjvthyLrO6r1spwnkJQ81Mpcx98Ajzjvt9GcxnT4mRIzt6uyu%2FC%2Fv4bUnxMwy%2BkQCQTbi02cJ9CT7OB3mhGF0PfpiomIUC8Mel6BUes2Mu9kKtsdvuBVeB1iLIL8VjzFSgSluBHhve1UwXSBrqpU9tvGTeIoo&X-Amz-Signature=d64e3cfd957ba45976a49d60c1f43e9189c82b975e3c3e53892effbc046bf769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
