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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ7IVXCV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXVdMQVv6aZZPggw164dNTJ9BAoXm6%2BwQVSoiTCuMcJQIgMsScJL6fbeh44eiAqKHNGJIbIEATd%2Be3qvnn4MZqc%2FUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIm9UP%2Ffdfs%2FuQnnSircA8n5r%2F8LKZTx15fU3tRv8Xrh7orzODcHtB3kZ8IlcUfGDJIpjIhMsrIQhnGM0fXisDMqLe0Dr8Yf3J%2FnQvluPl%2FOZGnZlSDzLYiGnf0binEIGIHB6i8mXFyrw93vLzVbBu8XfdAP4c4oY4IOcEL2p1SkeZVDvu51b2pVKF7dVTNGOlejdEK2Xj%2F69P5HOr%2BlghUUb9ERWRvuYvsSb39HSg%2BXNJersg%2BMY4eV2zK2wYQ52K6so%2BBEfWIWA2sr8vcQdWqZ%2FT00gIU5S0Hnxrgf4wmmrtQQGjOWfnq2HHsPr0uB4wtWj4XERSFNnNkNB93TwoIG8WCflF59vbA%2BrR68PVBaEfx8HTiao10BnvmN7MhuElQ54QKzDDAxddeq5GNh5f5awg5gn62vtvvbMunMmKcsKwbhtIa3Kys8ZsXLnXQBbOJ0ldftdsz3NAAMxJVADp0wJ9WEHPRgi2lpLPNYl6l9yfKYXPNnRru441%2FkGVfAoUUDarWRqh9agZ8H%2F%2BlNhaM4wRvpvM2yFLLStw3YNZs8l3cxoRw0aKjDcfiyEiYpjySu8solzFrcjQME2CH%2FXriUi21CKPGIUxACiyhCKZrU1qLTp%2BAxLeCXvvpYUMuxErhsX3k%2FzSTCr9m0MKXKocIGOqUBMqcMxbBz98k%2FqGoMYKrPHJAsFjOO9wT1HX4XtWxHiQ4oM0ElVbYGkndvmDwAGXt7mIPjZAV9NRCANG1SOm7Q3J6jKJU0BcSnulZVrOl2mBTL0GG0f3pY8DaGcJNCZDGYygWvgmXGx0wc38iQ2cYwXPchYxyucxdPFV9RcRosAlWuAPE%2Bq7nTNA4jVPFMCIWskmXHT7G0hATnnWOZrXlM6Bllko2K&X-Amz-Signature=56219d524cdb6bfd8fd6dd6f3ff2712d4de512e838cec9fe4190eabbf2b9f1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
