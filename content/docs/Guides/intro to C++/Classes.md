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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672YQFZIV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDYSU9uX6b612Ez%2FyiQmf4tzUTHb%2FZrnyYdvgUR5e%2BcVgIgEyeGGXPlnhcN%2FKJdIiRvdOm7yDTL5yVUUWRyVOus6qcqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBYq69XkE4oHVQhYircA90Q1WIzmmzoHMAY9s%2FYdwULH%2FkK6fMTP7cK6bORnPeJ2fa6LiwaEMBmDkf6YmQRlOOgkytAp7fbGfSY6DU9onoIfivnLV9hUgZ7lBBq%2F9NpSr4LaohJeWOsFgalCx8EdA5%2BYShe7AuCft%2BHVesZOv1G2mffSV3TAtdjVG4dQG7IKNgNgJyiErLKLSN%2BwfLD9A%2Bh2K1ioV15czTU7uDHdlCd4ha4KeNlJtcZlaSKhUbCqoDzI3n4w%2BqeDgJJk9g6n4TkDu1AyAFm8tk0TLfAp2Jxi3fA8OzUZj%2FTXxMzVyaSRm8yCvEcFDl6O1cizejteusMEVcnVtuI%2FCzhEcCHiyJ4uqst8gD8yfICdMK545LypYJBtQBM1m2M2OHOJ2tcutZYt5VZlhQptLhhpi1EVpBfWnSZLhxrQIVbM3%2BEWyHgc8Kpq4IDrTIwx02h9CtH2rW7aqDrin%2FhctJ7Ktjcbu2MFWbM4v5KEJXLpY%2BdOg6y2%2FRD93pT50wOYzclbLsuUbDV2fu1rFTk9LF2v0umxOPcWUYbpmJordijdNkyf6%2Fh79J1JFCmXbOmVgBDq0BnEajLv8Sm2Gtmfe2fj3bxhBgMSthdRIfN%2BSTM%2BN1VbQCViU0iwRVvVRFk4ylwMPf6uL4GOqUBp%2BWrJxugBrEWsiHW6R8rHx8PHJhHcEMB%2F12KZrSsmQeJL02axEkeyOERTlUTHk3OYQjw5WSzg15nhtrmYAw%2Bk8WlSH%2FGHgj4ofB%2BX%2F9WgWJ9CA54vhuKFbHtYuXbf3AA9YBgWDOWzbBFFOqCi8zqaOQpFkcqr%2BoYi7gXZDPicIRSWO0zy4t5Nxa2KdagDGHPpmk58VmGNSPBxwgsUFoQmxN7KDuZ&X-Amz-Signature=7d5b85b06e399d39c811058134799a43f1c3c7e340475a58f0c06c80c6d5bfcd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
