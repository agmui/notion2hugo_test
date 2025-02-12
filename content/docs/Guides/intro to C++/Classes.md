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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRC4CLBE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAo5Ny6K4hYx%2B1IQjhLX%2B6ZJknXtulXyweSbZNb%2BYxtXAiBCWenvSghsp55kmzYHzvItBEnyjbSaMpiTbIsZ3SU2GyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPWPE876GqH6L6L%2BPKtwDFuUWE7lszp5WjA8yOPRO8eFdH0kC2jqO49PiOc8SwaDQTYW662iwxaIl7Il7iEMswE4X3ndisDF4Xq%2BAOB5WshjJKeWoaMvzorn02MTkKowDiocHx%2B%2BoYV42FcJFvTZIT3kxLVXRm9XwlkwuArj%2FMXMhqBb3j5a98dZJ2QqcYOn4ZK3cRzIqVfjx6%2BltvyUcuHwJ7gR85zElS1d0gnSpr5S3POMTxdkNGCPqu0SuHmcNoptnSNeaLrR2vUuCj3miEJNWittLkBfYBLJMklfOuQJUNEa1RrkTAVwzHaoFkSqfHfo9bTtaZokzEBevP3pxIBRRimCGHEkmWo%2FA4HBKPRobWnw3v%2BOCw6GTvmVJj7WZqh0XGePl93c2AjiY0ePYMuihXSJgi4PTuV9iZR5rXVEOwsK%2FIioPWlM0lNy8%2FLNX5nctFRc%2FxSxF020pHWjc3Kp5dN%2BPqDLZPl61Ny1xKBp4o2P0Hp4rFl3%2Bzbmjz9goJtR9sEoIDCjKzQUMf3gKTNaqNtAqdIcKkQvP36piudJjY7j6E1mzMBl%2BPjb4H27R89%2BbHHkYk8zmZ61hx7pcKlDC2DBNrH%2B7l2XDaRTSQ%2FjpzuUuY9wvyMKj2W224Ym6rYBxRFJ3K364KIYw%2BuWvvQY6pgHHPQiO%2FLYDLv8Kf3YV25UbRroJp32yLWSCd66641qSKbgmG51hlVRg%2B11XH%2FpcGU0GG8t0sT7Fp%2B2KnL%2F6%2B4zfnZIZ9dM9%2BjXVKlMkGlK3aPUb7vEbaQnmKuDN%2FvAOBT96rJQjdaH96kPaXJhPe8JXXV5pYr8aqIMXdSUzQ1iKsqw2p%2Bsu94ga8e2HV8ZJq%2FJ71DexktaeB6%2BWoTmJxtMgLbdikXkp&X-Amz-Signature=0d2606cd6dbdb9f4cbcab8298debc08615c6d331b293ca7d7ef3b24cef12a0b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
