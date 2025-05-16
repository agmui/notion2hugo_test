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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EOMQJIF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFevTF4SoROGonuczVhtfx8G3hLS45IXWbn%2FH2tQXjOdAiA1NRLM1w4JFis4MzqMVwG89%2B1T9cQKsB2HRODwd4MhESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMqFVe8pZnuWTpiXw%2FKtwDIiiaOFsUcN6PpPm%2BbK9aJcYZGXwX8Z1S3l4pjc6kSUWABfj9beb1O7PESxqUjotaNBCeTXxBXzZNu5XuOvI8WJ4brymbpZijh6javWKS6%2FJZOHLtZvqTEfIL0u018qVrkD89hNR75yMEgxrlG%2BxU0vX%2BFjpEh3IfWSSF%2BcGP4FGTWylygs6zeDaYu2qdCndRV3Wlj1hetnmGEvy87DBOw7S%2F5mEjpnOuCryTtCHKAvxd07NPrSHb0e%2B4ybtMIe8Bwk00nrwVEyJZOTn8bTVSVquBqVXT1inQ0Zj5Mdh2aJyvWX1aKWDeZ32Czr%2BhWIcYhgLqyAk%2FB%2Ffl%2F9KMV9BubeDOsowgT1sblwROgq3OdC4eKw%2B%2F9g9LIBCljq%2Blg0NGQN1zX5Fpz2%2B29iI%2F2c37lTNLtAusYS%2FoYdxPtcZ4Rl1hs44GdkwXr2Ndpun7ViU1rMwGfn6%2F6xl2KLN9dv%2B7oNfBZJOLkzQZaLz%2BweSOuqZMLNo%2F0wz34gJqE1EgcQbCHzani7fWR4X3Br6wV%2BuMiv1AUKTgRCCMEzdmtJfElVdChF3Z6jwmfYrOJuSontnQ6TIv78ysgJkO4L5WRZFmEXn6%2F3it8dqDqOfv3Lc2EO%2B3m59LrDsqN5Iw32MwzPWdwQY6pgFRZTn%2BzY8wmQYFKcTnYFF8yFdUvg9nPECM6fttpfNxP%2BlceqeB8DU96xsKwjgMMUeCY7NnYmCfi4tTK1NybOos12D01DXi6nDkbOJw%2BftxTm3JADEJQcEGxoWOa3dUlltI7XmPvp5TqCiqpjKD7PmuEPVk4nzMfQCCdl1dXZ%2FB3Hm9VCLM6BgC9WmLNHC6cpH8z0ru%2BN%2BAJ%2FqekHFU78vkDqDW2uIl&X-Amz-Signature=528f6dd5f52eb2f363a7ae49065d4371f525f8edd00a546992dfbd21dc454c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
