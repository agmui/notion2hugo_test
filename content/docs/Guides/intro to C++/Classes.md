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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LXPH6F%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T021956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIETHoM%2BnKfa8QuOp61ygzv2x4KN9RtOduHKFEmhCJZffAiEA6stSrpWyt0vBPqyJqjWOYpFYv0AepwqccW92s7RxtaYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FaH1SD3GMjFcDssyrcAwJUwEOJ3XPj1W7BAqB1NP1LmMXOn0ooUdMYjqqIa2G4Ut0z0tdNujZDawM7s2eyVKrOJOeK3QIDgkSltwSUX9I%2FwQy6UqGAV%2BSH%2BXxgBWHvgYI%2BeBIUY0FKeSQEWFE7Ph73ZKxZi%2FqiQRSGPCza7dWJA%2FO9rJTvHiF4rfTY%2Ft5%2BHPIuMacKQnnirEqT%2F6Noyx3zabFHXr%2BAah8hxeUc6lstmHUmXFPibdhE5G0tKd9EJJ8y0v%2FR2S729%2BkYrmrBYYj6qsIo8OTGZIJDb352maDEo4pPiaSikxBEEdxGjEJ2E3kWDnTmTagAvT2iu3s2EnBl5kK0WWKkZqiGkLlDO4vv8f94xk%2FU3mM9RAptUFl4gGo9S2Hqk%2Fetu%2F4QGBCpQ2HwB8N4ZeiLwLYmoKKkGm5ODZWJW2VE37eQ9VzkgfQtFTg4CfKYjd1CBwAYCtG8DsRl%2FJlxoFSX7WUkGac%2FSQZC4WMagrg2YgPMEx5D61Da3XxZgITVyHEqgMBHwerd4vrqFXm%2Fklr2TYs7O%2FR1WHQr%2FrNQyvpdUY0miru53FVQezjAnrhA8RRyGOv6Fj5TsIBl5eC4J%2FeQHb%2Bc26K7qBeJPJiBjIIeiqDSkDCdM2VmA0npyLS%2Ft1xTPSWXMI%2B5sr8GOqUBv%2BsXVFQfDBv8Yt8Vf1sApKVF5LaFINVldkc6KTPf5BWEfV71aOIz8EowsVo9Q1HguPsrC8DFueu%2BIjh2lM1tVLmFea2AgUEdjHbb2vPdOmecUeQdrc%2FKtp1YvJQH2HXDZwjxQclZBDpeKM7o%2BZzQAXC59CLRJEsilofOAQAWbW4BFt3Iq5sN8z0fM93Fz%2Fw%2BFl1p1777o0X9ARwtBeoNheiVKt9Z&X-Amz-Signature=ea66a617d22d0cb7742325faa0440c5bd0668d0fdb8aacb844d937bd78d8b100&X-Amz-SignedHeaders=host&x-id=GetObject)

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
