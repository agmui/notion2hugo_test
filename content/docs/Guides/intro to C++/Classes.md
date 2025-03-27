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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XROG4WTA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxsb1qkiz6wWlXZjaM7yJHgIG8OncyBowSChkDZwjPoAiAsBNuBjtsuzd7cAtaCQUjEQajJo8gYQwgvnXJYgT%2Bhfyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMCqrCPse5bDXbYb%2FfKtwDgYejDU59RCSPdgW4swYQnIA2IJJzS%2BbjcuvTzd3LW%2BW6EtTiJBgvOTLC5xnPT1pyLsRf7hligQZojhBfl7R2BeVrQpbzsH4ZXtlFpkJzDQ2Q%2FQ%2BnCv5gaSBqTD%2BRQymScRRUl8GbYnsJuihMJdHJLjhSeGpsBqVpxfeaK6Asd8os9FKCIZkRSUWcvQhjWnH3jCY%2BnqPMmpwfbN03UCfBSCPSB%2B7hyA3GkHfvWUWyZRvqLcOu0QtHqIjvGsHg7%2F%2Bf%2FuXs0lmOfHAc5vxxE3XM8ozftx1ffzZCXd5JvG6mjCJ1NESD1TZEnikbWhlhoA9IOjWKPDBYpAyMIBd9xZhw0Sl13C1TwTP5CkSrGwmqqupK9cHbBiJNVnUuC8AVNdbjcoQawXF18SjaZzEC0rQaooVme8gJola6fVDpXTEaCmSJ93DbBevXTwzXd8muNFRpCaWlnbUpLZdcV1Yj9MBrCMajr7a0pOLnwXpUbSlniAXe%2BA07sYUjzNTaYKh64XMOEljkzu6Q6C0%2FnghpsepF2Ac8sPW4BLrmbdfdPuQSRvR52SfbR6%2F83hGUhhJgtGTi05WIToK1usYHsJmz42jVU9uzYYahn33g90WAO3SgcL3Hh0iop3m%2F1Mxi1CMwxqOWvwY6pgEIcK076Q6ZZtJ7QQTrXYMqXDZZWsS7S9jA7iWN0j%2FS7tWdgCpnSPAfZ8%2BOl2snNnYeiUQvva0yPjsBz7lodGjM1ylJzOns3Pb%2B3QzmlRHrAtu%2FjivJsk%2BCu5D7AD95XvRtK81pt8XoiIVd7mxQSg3FH%2F9g6oEqmq%2BUXlEZUwB5Tc8LfXn3IAd264p5KXsrfigwSx5iGkokkLVu%2F5zBjViY7Q%2FPdHdf&X-Amz-Signature=047f68aceb76bc46e0f5606a6ef16fdbd2a54d13f431074361ac89e912c25a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
