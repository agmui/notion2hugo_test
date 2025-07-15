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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIBYUHG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDQZWDQG9X%2BhRpqPkuOIrAhg4tDD%2BVjIxnGP%2BnMRmufZAiEAw8B1r4YWfOQ5nHRHA0K405lQMlQpAwj39z41Ob1hqJAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIhAo3nqqnbRVmLfVSrcA7oKxXfy%2BPjQNRqJrldOMk9Dd4RE2Us7RjMWmXHJ4pQwcyXJpgNMh27xUldz6eK%2FeHHi4cHD98EP0nV8cys2mNR8iIadSZsbijxoz2JGxPfTkt3%2BMRWe6j90vhFd3zWRjJWx9wrqMWlcBfn6JUM5Jk7FI6raPmU8t8rZpFbXAzmE%2BhHnp2zfYWgRHJEIKu5HlXOrf1DTJVIMNDV%2FMtJiJqi2rYEz2vpWVAH%2BwLFGnos2ZRySu58LNKkUNCquW1EnJAz%2BzkWz07ISm8cku4RSB0h0LmFZzTRoX6dCI8dTLd18XgcsRwsaoTcmMLDXyaZY85YaCuUfZxdEimpiYMfEEVVN7V4iNuE0DKUdaM305mT%2F%2BTe0%2BEVKO99XIuMNkuHVHARyWzYpQZuxA4GjiJxlgi76fEga7yKpqzR4tvDKl3P6Gb4Iu0eiiZrI5kMMKk1k%2FkJB%2BveuzZ1L1lOkNZNvXt%2Brt5O1Gcl66Db0WxlpQb7kKOC0XQ5WX8LDk5ZbBxH2wzGrBDiriQFMnEnT6G6Jsb0voZo5RHgesxuK4KlRqcwnhHfXwaehlgD%2B73i9D4wLp7m%2FlvkkV%2FzlznSqOMIaPijzjXm79asTx%2FereNUAwshtAny2qhojgjAH5diSMICC2MMGOqUBE1nEziaQpFdsmcefNnKSLBrks6yTxj1v6yGKIDLBrNlOAWH3G4bWYsAZifoweDy7ner%2F4iYb7ejTJ8HY1TsTlw%2FNuKrkv5h427w9Loqx1TC1KEMpdtmKF4XYo4POfM4VYsVUxtbbEAUV1VBs4IpSjESCzYP9JVjp4WjIx1A1OC7tP37ee117mx4Gm%2BQua3xx4HbggPi4h6OJLOd%2BAmAislAM%2Fus3&X-Amz-Signature=d122aa02325de1ff21f27dbb7c9d589fc8c60d3a1e0b1166f1fcf8674fef47c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
