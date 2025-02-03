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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XRCA5CD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGK%2F12VLWzD5Pl1m5qbSVd4dm9tXggxJuA%2FM2%2ByDMTi7AiBkt1ws1lG%2BjhXjF2cWo5kbcWn9MwBcN63NJKGo%2BFeE7yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMxCEHNSRLYo00nGkoKtwDZv%2BHDNYIIOgETwSSZ8bAHiUvzvB6nNPRe3yFj%2FhRaMLJtzmiKUeXhG7K21L4fpiVyajdPZnawbIbPWInPhCMdvl0DfiWoGXzSSodwwqU734UtiWE43g%2FPdsoHjPgwk%2B%2Fzyb0z9tV0eIe5zIYRN%2FkFAUCBATVrJ%2FK4W2cYy8T1jBu7T7rd1wTVtxhUGn9WFS%2Bk4SeA4i7Ap6mqZI9HvRXQkLbqNx0jds7MRqJKTWtk8uhCWlSa6S9I5grHQpiOfo3GW3mC7%2FYTs74O6LMF1ueV%2FeQaWViQu3RKt333szdkg7TYGpo0xv8wakRDRXuaU58GQD4tHLLGhZZBXM2cgHj5mua%2FSxCyBsp1ZVks8gQWK2uD7SER9%2BFICtRFi1WMXXJxfDtd%2FEui%2FBEOLwGdJnPULFq%2Fsy2TdExkwnq1d0HLAQ2KIGE6XefFkSdILGwbqjt%2BgIetw4z9judZHr2W3A9JZAuri3O6HaeCKZ3R18%2Bxx%2Bp1NN7BD7bO2F0Taufg1D7fo9rWiHBJAMIq1KA6S4fPwVjzvLFjofsDB3AKh0vX9JDBJy1OxQUMvF3bBQ26kaKzCSFZLi25Vxg4AHP5wZKiFl8EqY7EnGrLi%2BJZYWtKA3%2FWwrIX7TJQCTkl40w%2BtiBvQY6pgEQGWcDxl3u3I%2F%2FCnBgAXDaStHLv9eqDRu0gIsP%2B6LqyGx5qrW5nU7x9fe7REK1U24UNeMoJhq3DdSBqMQY1u90vwCx%2BcyBa7MMhBQuh5vGtJlGgAiXTes9gfyVA0RtLdRh3abpv1QMQQmE%2Fy%2FM4EHLXp7lolRxssBNSUQivrTaC9QV%2FOZWT2VjP9EkKYTbQOZK02w%2BIBen9vRvCeB3eRund4c32%2FCu&X-Amz-Signature=91d195b0da2f7770b9ad9dea75b3ef2a09485e56af7b69feca023d5b3387b972&X-Amz-SignedHeaders=host&x-id=GetObject)

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
