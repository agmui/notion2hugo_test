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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JMZQPAA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVVvFEJjkxHKw2fnh2XW074w4PUTWUD3WNENvFgd%2FHMAiEAvi3XAG6rFESNFR9r2%2BN6ddmGdf2kKRK%2BE%2B3fsdfsCJ4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFm8p%2BwjBkcVEqxMeyrcA%2FhDmr005uk%2B8yZmWHQdKxZ%2F2gvkPpYYOBLFMRS1CI0uVmHYmPy4cvZaufR4Fl9CFvZkuXOPvqXZpOFRBQpO2TfWd3SrTqutZKwqSsPgmR5Q8tznpVZTxHayi%2FymheflCqZE8MKUNFVbzO6DqtStsdRd6Y8izc13rvi8ussGbxY7JM8nnN42QLtqTyTdYXWAompSRCbX40wTwpCR4xkQwyxgcLP7WreSyt4WHORrM9zwjo0ovHWch5mQJiRxmc1%2BpwAiL4bp4t72JFtntGZPbwKfKDdiF4p0WZ5%2Fqk8w08otw98sUjnxGFi2I1Vy4Rrgp7JoHdrf69I5or%2BFbxzCMVxnKLK5U1vShixKrJ7%2BOOnX4Twf0aqvAk5XxqcubHD9L11lSHWpXHsu0Ca6EQcwCxMwI5QNOhg78rLO1NmnhNtblLqNSUcIRzTD6S7j7S3BSSwastPuw0TVU%2BGTjU5xsIOkMn5BrK4rB%2FRv2kWzpdsR%2BAPEClFfNSsjZcD1blnTV1STkMcWlXADwdjBJFEj9hdY0130txvglZP1tq0GoXoyfTb5zggwLSmoVux61lEukVshho%2BUEcnsYlhlcENZqZ13sL4w7QtVy6fSPaH%2BezTBauIUjDu99KPrdU1CMMTjisIGOqUB1T%2BQ%2F6hFG4ZpCgsWAjibYU22e6auFHN4PxnZzHxl80Z7zzBw7pekqlkkuTw%2BITx3cSSiKk%2F%2BfDINEy3eIkYssdS5KPj5APinw77a7YDZKuZZt8NM5eX8qRRgl4YzcVQEDYvdizC4WzA74T8EzxZqCiYGZzWOdhyb5ZtwX2LjRrusvF43%2F40gIPCCIzf1cH324X1qi8PtnnLg4HqqmkY43UuHjurI&X-Amz-Signature=8abd072f9ee6e102786cf76b12fd00770eaec119d1fa7e0d87897375341bb409&X-Amz-SignedHeaders=host&x-id=GetObject)

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
