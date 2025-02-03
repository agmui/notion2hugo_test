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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WIUAI7N%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEMEo31cRa1tisrfU8nsVS%2FFWAmD5XPISvOIwx9MwsdsAiEA0bQpwKhaIYXawK3z1VhwzVxTJzQXlGUYrr5IcPPAro8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDFuxRWT00%2Fl7RHYexyrcAz8BZJzW3Wk1q2t30gdYSnCfemwCmbv%2F8tsfJoWZ2QKYLc%2Blq4tZ0cGOGgw68dYqF2uAawK0vLsYz5%2BAtd6AdPnF0QlLVvf9eVNT7NjFCOo1on55nlwR425C7fSxaGofsX%2BN4iKNUN1bNOG9oYZ6IUcHvm3ormU%2F5QPnTX%2BWJVZyjen0PE7reXOY5Mdj5l%2B%2BmWRDyWLXzOkf5JrgvAd3m4FPM7RX%2FxRcSXwJvestkZp6gTTqAIM3WgNEAvpU8RFMSykfZtTTLso02Z0qgwfj%2Bs8x1XdEyKiunhI70tXfMKzP8LdwnzccSNX1DHqJhhRPi%2BofKVjcBGYcP5an31ETarJcc%2FXhh4elcoPrM%2B0gBXIggI7UTce2EmS38eKGsIp0Jh1BI1uy8D9zT%2FW6hbWUE%2BoiN%2FfRgNS5QRPJmEgNfu7S8QqjWAhdnkxp6u4xGdSfnZF7l9U9Mkr5B66c0lnjigfEu3jmDGT5sF1dKLMqeI6VAYwq3Y5RFRVK17FjXKl1aF3xw0pyjw%2FFzJg%2FED9eG%2Bzg6FAqSQ5LtKrTER0vFPklItkEKOnmtJDuFcMxZF%2FuLAqK%2BqPXtJNpo98%2FGlwk%2By6YfiBPQRlJfefO9xZPJDqZL0WsUa%2F6B1CfyO1pMInAhL0GOqUBfdT7NbA3YCCENW76mQd0qWWDUkAtvNiAYg%2BHbBk2mr7m5NzSWnsVX%2FDMdfJYHlsD%2B%2F0vPYq8UFVilHf4ITTLIVjR6BYprDZXUxIQEiWSIx8SMK49M5%2BRLMeeb0rU6muU5C8jBp%2FoghdgPp57ym0alNvwiTl62cp9%2BdAn6JDH3LtHF66axGcME%2BhB6EkFe0VmtIxPB2rON1H678JIAE58xS2PB2u6&X-Amz-Signature=0d9f639314a862cab155d2ae94aefaadfe3048b9e0341bef56e6a831f72caf2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
