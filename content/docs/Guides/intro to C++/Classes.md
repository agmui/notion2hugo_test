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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFTPAAO2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9Fokl%2Ffb8g%2BYnPvOmWweSMXER4YVKOgAP88LEkCmKMQIgGfHdnLW7tVJMGaoUocH8uAl%2B2gan06NvGAAC4QDg48kqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfA76QJR4iT1l%2BBYCrcA7uELFgXSmQo1A1mbjVRemQ3vj1HjUFmmDXj7KGqEanXHk1nxwi8dyRR6CGaTgyXUXcx80205HxtYo%2B111UtFHY0oX52do2Hvg5GsnPh19jejKiHjDQP7xsL4PAqjNasgrxWQWpuv%2FFxMWyMgY2UroMvy9i%2B1yqJ7JCZE3JrrG9ZJMSh9RhyaII%2F%2FH277QWNSMkiYSRArOtANTCNYBE63gjloYcqGX0E3mKlyDXGycINCmNH6O4BR1dVBgk%2FaBuIPtjcDo5w%2BXj7pizybsqcYq42SH7VeGloNzui21RJhs9Qq8RV6yQCtllWCS89g4vIO0t5DD68bCFZODPIcppp42S%2Bs3lYlGmRndRR836o04%2FwiMesaKcklv97J4nmr7M%2FQUwACbudk%2B4P9YLEyKa%2Fyx9vYLWNenfo2%2FqqZFISqtYC%2FEnnS9OeksDfOjEeBBk%2FSoT1W7Yw11hB6ZHGCR1NUUt5PHbx5buLeTgk2SZziQkEBEroYgN42%2FHBVuW%2B%2BLSQDHmdybBt9J0nH4R%2BhoeKCpfQxoS2PcSRCZD995dG3Wlxzlfr4ESAdAupF6PuEDAfZNmikSMJyskzoXEr%2BalP4Axq9oVpRw%2F8%2FO80c1M4n4LvgNk14AFdgTGf2jRPMLav38EGOqUBB4Ff%2FR3n5wuoBf%2FHm3oQct4ogqkIDXD9AsNVlX4KT7rlGxr9G0IVvn5RqvOTbJUXWLJ19pI%2FARDLfuKWEouEciLUMi81Ir9WBmqxEYkWz%2BQ7VOFiouFe6Nr2oykxe08FBoZs%2FFKAflZ17mq5Pcv9IDS8TQ9CKS1P26NAhWxOktiXyKdj3C%2FIR2pw1%2B7Gy22K1dJvhCRPnMxAIL5Hkenyd6Z5c6A3&X-Amz-Signature=5653d108abf094309fb7d4a3a4c46c1148d36e5f281d01763f3dbdbc767b9a67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
