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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4NY5QE%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsdA%2FDNRU12CqujvO0gE1xSWy3rlh09bgAM0jSzy3HqAiEA8NiTD9PJK%2BMwsNfx2Y95Ki6OyG1ddz7wVzItU1Uq9PsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BPOa4aXwMiBwxb%2FircA8Wn8keiMLcHIbTZDmHy6kkGPlswmDmn04H6Hu6Wjib50IBsZaxKkZFClFLMaX5nz2XIqBIq6c50OsGztft3wj4NeX21pC9mu64aYkco7C24ftc2p1wUUwn3vVg%2FHAE%2FAFyj0oXamgG2PQmgvl9GxYuD1m9EnulnMI1vRG83wKkQgKXFQiz15oqeOcA838x66VrLP9AA3cZ00QRi%2FZmF6wJqV%2B6GDr7poHYBN8ngPGpBeTkx57rr7x4cSYiYXeyaRiYpYGXJkrYnDBrZ%2FT1ojL9ezZxhH9VEG9j2l1T9P6LnzZUckQMlQgpcvS7VV6vMwVW6MWlxgxdSuNU4pxQ9gNDjONlU0gIhGff%2FjLU%2F6T4W5z%2BnCH51pcvxU9NvCoGxRbpALIOGDHBEHPTYuGaEMrcs1Oxnmbf7gMOxUF97mh2bMm16d5atI54mQ5QB4gHjlrTD0cdQCBGNYzJW0Qliy6reT9J741GqVeDttmBFcYEjAHtxmQLyHVHcJt%2FIlmYzQKypmSVXPzlcYcimc%2FwrDwLRIY7wRUkIcrwf1PyFh7MCrFU72hDI1EAVQTHLcNrKi4ItDfJUbF9r9Ta1zqORWHzDrSzOcMep%2BtffNoVzqPxrST6q4eL69PThlwp3MLLour8GOqUBSSNeWB8v3AavjgAHr2uemU8sKuz%2FOJei%2FhKNLjwGodopt%2BuLs1FiXDeHQi%2F57YHrfiSH2Z8PrBXXvqVAGOart%2Bx9r3PjQBd2T0CRYzzSDs6dkonJcr14TUo9SnIQ9GFXxHuv8Oqryy%2FonRxgFQleTTvCWHs%2BTk8HpL8vKChoRMCZApEo0f000%2Bgy2f%2Fl4YvXaxE%2Bl%2F1e8YrU%2BZ94SPikhRLIqYcb&X-Amz-Signature=5850aadae5e96060b957ee95d3c39edb4f6504c1a997033a5c9e8b4a65123dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
