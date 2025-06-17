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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEDVXSDU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSRBQBPb9Ssxz2alWkmASD1Z2%2F0UWZkCUp4Wai7CP7jgIgJ62lpyKho4iHznuM30AfxEa4YbeQXo4jG21vvXZcr6Iq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKJCuPZtWdSa%2ByYGECrcA23fF4OaoRMvBtk8OvKjfh3TqvAOSNRuFQ4BU52f819sCE2F%2FieDlmR%2FI%2BXoO2EgMUYdRtMrEO%2FpFoITRYcX5DJ1xZw2PnPyZ2Hdu9ykx%2FYgHvQrOj3ACKVgTIVcbA1bt498Pj%2F1Q%2FriXLte19QRGqEMUWNOwE0kdvCm0TAmG3cW2Jlad4uP1tWJ%2FDtsm4F1eQg4sKNRr1gk2XtjuaDA6lLSGCASjydY0ThVptaQpt5ArM%2FABuuCdLC%2FbwRrxIESYmVAbKH8FHWbH6C8iymyoRzuMGlM4T1hPdM56iofVh8r%2FltzndooosB%2FoyXg0nW%2Frx9rVuxGwIHw4gc5F3EfLKDdwaozCZaf4DqQZJYewtNXf1PUYV5id9XwtUGJKK6dIzv1LPkYFpsJhiAyffYH7rvyI6CndUr3FZfqhGX%2F4XpabSIxBJFqIqtXhKYfkDCAAVIPShhP2%2BtWvWP4uTk7ioCPu3wop9ToQ84HfOYAnwQng4Eo1OMpS0hmK2uLFrFPxHL0AN7132xgCsJ8NFOsnEBe%2FrPLor2AXzqH%2FvLHyYSdEEie%2F5fhXXLCgB3tzTdXf8zec8pgskPjDgBL4%2BcyxYlfosiqkmHww2a5pUXu1QjGA%2F6DjCsqhxwNqXHIMI2Jx8IGOqUBIAVaTUH3tcel9A%2F9L4sg9pgi7es%2BqNbRvOWkxATUf6IfyppzIT4bYOTkPXliEwSTnLrhf72H9DbiF%2FD2SEFH8DBXY10t4rGoAauiVg27%2BueEFcrkCFyzVvM%2FyqpU%2BzcsII5gof%2BZgj0pLFVEfqelXkkxamnkiiZo2FOJQER23%2BIXYR5jFqcobGyh6Oy2nMQ%2FJBQep9D4SEsxlj%2FVTTuyhjeTMAna&X-Amz-Signature=13e3e6d56101cd8603437d75ad5a8a47bde345e9a437b00af16cc6e879a9c712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
