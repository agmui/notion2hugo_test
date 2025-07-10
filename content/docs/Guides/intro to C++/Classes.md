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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWVBSIA6%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbuqQKProsoUhsseqSQNyIq%2F6tOWdPIYLx0Cff1q7EnAiBjG3scGu0NEGsb7ztOlcmG2j9%2Fuh1aJAFHX5xydTULySqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCicv63%2Bwum0RwhNwKtwDhuRLSwFcbZ5iN%2Bcu0KrjlZMwZBFZWXtxtP6ojPuZA4Bjk97iwu%2FOFRRCMbZE8zx0SfcNYOXTJdvXg8X4wpoYAQF6nq9gXu9FINf4sXPlUYqkE20y%2BbEd2rQ%2BwKtqhc%2FJkLKqpHfqfELBf3PiwbFTmxUSzflC8Ii3iV361sFfEc78Rpb%2F08bdfqIthHd8juEn8LsG%2BssvDpG2NT6IB4dlxAVl3S%2F%2Bj%2BgRTJN2YXjBHv7etcXkbg4Wl1eBrSdNSvWcbAuQuIU1WSt4Zg5Yr1se0wz8gOn2%2F5RuihSMnIo9Qhe75%2B3hs%2BGOU%2BFkoHOJdxn1kGP57wK3bpz2TieKB97HuIgmmVzoaFLz2z4%2BPVm8VsrCB9ulbX%2F%2Bxek8y%2F4KQPZkv3TrxDCcBpfim0wAYoofYMakmCXMKyDIuOp16Tf0IuCfr4zL7dbLx6cxE%2FnuQd2IXwBnwTIx2I7bpvas0WPf3%2FuYYT44j0gGIThrldIwDalPc4%2Bdzpb2QMr0JOkGEPmwAdkuoqCHmJr2AXEAZDAqUn8KCc73M5xrfkPsg1okPAkIP9dMWeg%2BBb6eZlM1pYX8eh7TCzH5GClUsMQGhzoix2KAo1SJmrknFzHxevwAnHuVg8EtG%2FqBChAYrOYwttS%2BwwY6pgENOszMPsEUmUyMXj5UCAG40J6ZlrFlO0IW06feiLqh6qAGc7ROEg4M8GoSwW2eZwWmEcGkZz7jXIYt5iHHYSi9LmEW9kerIUYYl1LLi4oT7hoUpmPB6irggxccGNaqDX6rl9K9yUBXAfPSTlPmHOkk61u46zfOey67HecRJjNfronlavC9PW0%2F%2B16hrgKSTbNcHBdad69Bc0LzJlIPzVP8aPX095cb&X-Amz-Signature=e88c8cd656d90f6f4cb80f9a6a0da115ee5bcc58d3b76743618e1e2b8b5e131c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
