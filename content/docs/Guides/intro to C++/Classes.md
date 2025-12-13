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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4X4KEU%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCID53XwNxtAoJ9TjS0FTHkRGJAWQedXLiVY%2BWkHju7K3jAiBM3aNOP%2BGMKxAFLynDEW%2FdR%2FGEwNEJSTRHPVLj8AA7KSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMInaepdaIk1s3M0HuKtwDqQ1p%2BMXeCMbloKxpSkDQgOLuiHYrlPT4WMZWiCa%2B8zZqBhp5i6rx0ADlx5YUyzzuI%2FJ8424zZ6L0YPvOpwjd%2BJMB%2BXa0WLukQ9nRj2Y0S3zFnjHi8j2ETa6bx9MpJgBxG5q1G9xt1YZ5PEyR7azQiPSXoQjsp1jJzabeodBaQ6gTRTpy8%2B0zG79S9LanKQGokqZWg4iTLWohAUS2RaoIozXz7wGMWPpHiVInGThWVwTV6OSYEr8BMZHjg02j3cRUSPBsLHS3W%2BrCMI9dpxD%2BUtjitYJl88PPmz1mfSWMX3aguXB3tnjK9KoTk8%2FYxHeN3q5qtEUzmEygOfX0i7s2Cv%2BoBagPkD4eJTy0bV1CaENmnqFY3x3FZrUOcooFaM0v%2BCzFqhj0JKgNHlIGFZSkU7hIrMnI8x9fUB7XtfqE%2FB%2BEIWzvPeQWp7UyVUUBRRCk7q0G5AsSzsals9315orYdOUW68WTKmV627dAjKf%2B7MM8sfg7TsGdKhss2VnSnD9SrgScMKBvDJDlkZOazr1Vjwxyv1MNVapuDMCvZfezSYg6FF9O%2FoFXOUjfWvH2%2FH1PlwMmduso1hZP%2FiKWPlLsev8hDwcOJs2GsQ%2BLHsY7eNrgzZxZh7seflUNpckwyfPyyQY6pgGtRFZ%2BGsHGRLDPfSyF3C6zFqz3fixqkAxQr0jM5fhKMuabqdHwU6xnm7IEkeFHj9Cd9MDddtCcMCz4X0Rs1ERTpus%2B0a75sLJENvDPd97oq7uSv92SYhT2%2BCZ02E%2Fz1smpqXl7njqp5e84gA9LWCCVGNYBHkNwGBWpw2uFFGRSzBzIn8kzWWMcuvQACPteDCGHj0RkKqMCm58DhiHSXTLhnFMq9dPv&X-Amz-Signature=d48a0316a55af14c8eeda1b097d9b0877815749e96c1f09b7c6775b4314115c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
