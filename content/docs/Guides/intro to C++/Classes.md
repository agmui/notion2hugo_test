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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OW2I2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDO2u%2BFt02vne4vkiP7nlHU7NR%2FPwCfYH%2F8BJK5wGTcAwIgYoLFUg67jFz%2B%2BXaNsr4QDQDb4j%2FWslKi%2BbvzZNMZWi4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEviZMyBQiRxzgG%2BkircA9OYYKaKHaBxn5bLTn3CbAL7G7OwsBTmL6R1SP22LirpE8GIost5YSMT6tvKBG6Zdx3bVnPWxEFrFaWLWBCMFqXMNXzuiOngF0ZHk2mBlFO1XDNMk3YULFmKeCYXE617chqYrXEMvnhP3baFrBvqOBetJoe9UG0rH4FBAcVFAgTdyBeUBqtGnpHLTPM8PSANQCXqDoErHAsdkUjIX5DPxAe%2F68Q%2B9vDv3MRRl4%2FodPcLSNegN6ka4LP6N45HHw%2F3RjplGUQRCvEEXVimkbtrvptF3N2hFGJi63sRzyCx%2BSblSo3i12FY%2FQAVhjNfcIl6%2BqTa5Vfn8aSTJJgEAqfGpx1z1KOOkDZ2nukiuH%2BkjudNoZ5KhB1GWqNvL%2Bc%2Fd4ixYroqJETB0Rs0uvJ5yVkK%2FIvjz0xWoBb9n6d2WFHXK%2FA%2Fn%2B8LZIW6pgtekMQI2YIthr5oKz3KjGL8BX%2FUZ8fXb3ulRPxtZj3pR6ClvokmM7MrlkqPa6%2FisimOa%2FAgIoz0WMgVImYidtsQtBVqXHC0FCxNdcU0wduZXcjva0A9ts36%2FdMwpHEL2h1lWYoniLI1KbQjNEuR%2FrRnSB75bBwfvM6FVmwjHzarH0V%2FBYoCVn5luKGrRdPCeEonnx5yMMygx70GOqUBNkb7uu5iFKTKwFYJ341hOTrLsBMxR38lJDn7m6TP0%2FDbRC9ztAfTqQVNJ9dqzdPQIuE0U8xLOzhbd1mUoTcwIdUyhif7gsaxGv%2FTTkThpX%2B5RgNj8QV7ee1UKiXJAGWOuU0dc5YFZxnaELBU9r1mryViS7Tz%2BwjtozogDjx7p5WHML0f4qMbWhoFsUPeirJZDn7nmoS4VHlOuRHDcGsvtRKQIiQ9&X-Amz-Signature=13ba49ec22fc90cf2eb72e8c6496ceda5bee0030dbde676d5bd89ac025ecad43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
