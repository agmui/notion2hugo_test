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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB6NSHD3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZh6QUvdFdFAvm7aw0KIK72NgVJ8oyWUd3GQMvN4QgMAiEA0L1U%2BoQ9S1n%2FobIQhO5NBDf3jtpnYCN2b9CDz5NX2E0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtBmnNrw5V2yEkIgCrcA96puvNBVCiqnuI7wZCG%2B1SQ73AWqJm27s1CLgfbcmXa8ukDu0Jn%2FsyOprCM66Cb4suMeoio4PYzbf5XdvJ%2BMhoogjJmomW%2BBtaCpwYAxCNIze2QgXkna35pckRrYbYi4dH5UgEEwgo5gJQJqMZZQACejJA5htK0xYOiTO2dKq%2FW8d0umUUAYbq6FJZrng7tEmCZCNSLvbGvFBsuGxrztIMrOSL19caAhUVigAtR32T9GoFUs%2Bye2mu5QOwHJo7Uduslvx7FdDmUTpQnLJtfc7u2WWBnljq6sz7pJEYtMczztk2%2F9HoW3luaeud3tDYBKNZPNZbpMaOZHO39JA4K%2B93JFwBG7bxhfa8J5c0%2BrLhfZE2nKfk434%2B3nwTv1i9%2BB3z3qCOnRReOGFzwNgY7tyK%2B%2F37kQt1Y17qoFfCLbFwZ6%2FsGrIY48DwwaRdL5c%2BR1H4ClL785NYQQT0DFPgQ%2FmmlenBSlVJe0NGfyQxtCLcUc%2BpVAO2A0rpW3%2B6vhISZ8IcIXxo1D683DlhoAuZyNud1lPokEamB4PAHyGb%2FELPHn8OSYWAtxVH6zEEG3IjG49dEi97xezC6Bbl0CZEduHqyQcIjtjvccW2kyHwLk0qaeRPA0s5CWIwfxE2yMOnbqr0GOqUBMf18gMKohFMLN3JJ0ro0u4yLLOJSRBsC4e2i7vYKg9RPBTcQR0EWRzERsuOlA%2BHCch28GSo5561wEa6YRgVTxoW0Sso6Vpz5j7JZKqhfANJx2p%2BPoE0cqGkor6Lw6p1knx%2FtnaCdo7W45eM7bu1nmiF1C3HiwenilsftvQBBRa0CstcZAlcjSUdUDbnLFJJYGUe%2BulLr%2B1gAsZumY1HXvjbGqYzo&X-Amz-Signature=ba6d9f79c840f74ada2755dabc7cae9b4050ee518ab9246b4fd194ce3c6ac891&X-Amz-SignedHeaders=host&x-id=GetObject)

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
