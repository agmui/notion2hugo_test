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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTAI4YT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDXN47lCyBomua1iVZuwEGACSJzTzulhj3g46s1sFgqOAiBx0S2yAwMu8gGy8ctiah%2FHOJcxxxkspFTZqUegYg8LZCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMkTLtMGtEELTbtvnKKtwDQ%2B%2BliRVzhRG5bYiRghzoU0Gfy4NKgY%2BHNz73JGiXiQcAIF78G8ed7Rgk2UEU%2Be10IV8BUSGLSwaG2YQQqX8zMZ6d%2F6r%2FbibtHMgRxM8yZXRDVez1y8zhqGbvvBxd%2FEu%2F5NGJG%2Be1a6IwdWFOWWzIYsK2HCsoot%2B%2BD2TJYDsO87tNyNAPHJC6UYeqw16soNpgtasgynxgC%2Fp1IswibDhfVfH9JBTrLsqx03reZujhu%2BEWDKypSwVGeKdc7%2BW%2FPpeqSCUI9028UzBoff2VRYYdNKOszT1gJmTl0h2AeX0OYYaonc1XfbZfgL%2F9SJjeBW38ozFrpCk3rk%2FBEnu0iJSe99hFkPD7v95NVOWStpNOJrVlHzUnQvJ3WvjQ9hlnI9b9oJdqI%2Fh5aWxHPW4%2FP2nKydl54g70NwSJnp4QzWe%2BZWC%2BZ8CXeo9MeUfSd7hesOeSqQ5QE5%2B6xPDkSU%2FWyj0urD%2BeavxKHsBawNXJmR9e5ukgu4Sd2scNkhVZ7oQqZZGGT5t%2FVStpnXSgZHPVZVJ%2BQqpCpkUliuEW23eRebNJYEgIJ784veKv5J9KGfKqyIP4hxuqdk6KnwLxQOajFfsUnxFXqRuHYlyCuu68%2BMxshGei3ItkIOeyGldbljUw%2BdnLwQY6pgFeSFUqZM4gSBs7UFJUAyvWLxlk3UaqAePoPG6w0GPC1Hx2Ru%2Ff1EG0XP615R0IujySflsiPVqwHXrPhqMWaGrEhEOteD8JDUalXH72Z8qluLPEz5QRKswRjd7qwVEImEiPl2LJaHWc4TPq1q2cj5z59OsgVzDvzZV%2BwYiex9FtVlHhib1LP4isiOxQCKEVDMDm0qm6LwP%2FTchXDY5h4tmS1XR2hE3j&X-Amz-Signature=2d97e3029ac7b27ce6e0b643f4a7a2a92bd27cae8c94d6b9522061bdb3cf7f48&X-Amz-SignedHeaders=host&x-id=GetObject)

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
