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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFTR4HYB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHPHpYkg2ucGBgykc3IpYt5PDGc%2B%2BKsDvBGqct7JAf%2FzAiEA23HuV1fPA2d2kzlecctsnWkYFXPJ2TtrghXohYItBggq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPc6EGmNT9%2BCNdpAuSrcA33LA8ZkaRaTFVGNW%2BfjQ0askZ4Ewmd%2BdNB%2FR0zB8EQVyi16BYJgSS%2FQ6TEhErMIzYOnUaoYUj4MmyQsz5lI1LIeEL61y0W4zyWQta%2FYIr%2BxZEN71QAhlPIk%2Bbo6wvL8LfKCNE1AFoP0GXnsCbcAAZpsOtlKFVySJjFs%2FaUt78ULV1sJn6zYWdO7SdN47WzOY2k8ut%2BepP87Xm49Rx%2BffxSoIlECUPEoM1NB6%2FGdPwBGTevf5pCEut84vBAxlQFW2H2hgd1n82aDY61PNAamXQmRF6dD47HN7%2B5OdZIpVSPXN%2BCFvkOkcqRWjg%2FNHmmW5tGyUCM%2FJ96i4Lgzb4I2FPuCuY41f%2BSx%2BlAfGzo3N03Lm9owHtMBgB4cIS4WtOhHCMsqPrTJFdr6UQNYfWSoIuVwNZKanenslQZLNmumvZd%2FPaAbL4dN0Taj9RTs9Atqp%2BYh6nKN5oZSweAYkqK5pdIMmHRZ5NmpArgFa%2BXT77tLLzuw476ZiiVSvvwHnJau67K7Wkuw6XTttUW9cGPmVrzU8sqCiq6XmLRtdV%2FX3xQtVX1GHdFJvI5vVWEWfXAepvJI77i0YFG93rv5mP4%2BBFPzaXobAWkUFH5iSR%2FhDbvj%2BKsE6C5K9SzOkgoeMI7DhMIGOqUBnakkVT7HTJ9Qj2oNC1GXxXdO%2FddUpv9RO5w8ULXj2QE01VEjVYfcQmGo0eCk%2BOPvOtfNWLcmgGFzuiEDG2fFc5lmuQcXLpwCC1vAB0PuQGeN1hPGH3d0AZdlPQuiXv4Tinq0yuthtcxEsxTt%2BWWYbPOfRHLF15nVIycuZ3NsNnFRqbhluJBGFvl8lPeRvxQXZpw0bIxLPEN7pebFgbH3gcppRblG&X-Amz-Signature=8028bcbad74a439a2ce3d01c18769714b123c44367adc26ca4655d9345d809d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
