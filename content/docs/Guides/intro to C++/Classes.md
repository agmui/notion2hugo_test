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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVNSMCDU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5V%2FfPIEH84wtCdBvHOedQMJRocEwYO7o0aLTghBRy3AiEA94gwZQWgu9GJs1a5Sa5ig0qcpqDhU329UhP25M2wjX8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDDAdMCIZbij%2B4tL%2F5CrcA70Mly1lgcOxfQPLtLCqnofHAk6qqVK3lGEX7tptbyftLudJMBPDX1yrrke4n%2BWxQMvzl7bF6IR%2BDk5zOa1NclbgU8J25EXxkZ2D2iZrm4UXjSqSDuF3uNHUlwBQv%2B7cOh3%2B5TKu3KRQZFTzjQXJatkdHVzZzomMWBvPQcz8a8eGDBPXAVTRB6n8bLBzivp4GVCr351UYeLucUA0nAxXp4QVoEiLej30kVV6MrM%2BMe63iXDF69ivG8FIIqF8sAha71wpqP%2Fkp0ylwKipadZJx8WHtQIce8%2BjakcA5yi5Eiczl1fiAOeRqV9SA2qLOY2DlngLuGRuzFGmFFMMQ2ITaUq6Mx1aUpJIXzbSdHi%2FfQmo49QwGwTWHDXrA36VwUgjiXBbAFJkfFkfj7s9WsGTXrUcVtdyVdJlVjV5ps2Wm%2BJ%2FfxlIUIsJRGsGSG9pRhrM5H6ObVSDBD8E4ZmLrg8VOMt3Oqp5nuEmalnxbAaAqpYsQfSboTQ3oMHxsHTpauuLabCaHT9GcGDfuC1vBG0%2B7wvARBqNjpMjQbFtsjgpirB32TQTASNU%2BhYBrVjJfjxl9wmhycrP%2FnIupgywwVICU41G6qNMrcSVqifiMa65mHi92I%2F4G3YGsb6TQiUXMOvDucQGOqUBvojAyfW60050RVNGBToKxKP6oM175QX9yVzoB8SK0ebXC9A%2BDY3X7FUldPGvzXxetqwO2LRalBkyu%2BfGQuvUX7D66mtp8eFxR5QZzZ1ghhMB%2FZZns0RtVhkh9kgvV3W0mpFxpape8FUZLtufy%2FQ6be3scBehtaMA0mYNz%2BwgZMXpwUFTpLhxEps02Bu6IvJ6vLdM40E25r%2FTZ1H64z2BQmz%2F%2BfpX&X-Amz-Signature=3c07276dbaff2698f31d0135b9f6f0b55b52d7e95ee1db6ff440d31f2d932cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
