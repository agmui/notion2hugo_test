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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDG5VC5L%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZV1KO0PRwkS8W7GQbPo8AAJam1J9zi0TOYCPB0ePEnAIgeuxl1tPIzQPi32FTU3e5udEm9aFHPK0RBnFuxClI2qYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLrIsc9WEPWs2rbQyrcAwBQOdBFHiHzBozPsQWg4o54cs11jTVV5w18eZX8HLUtDe9jwkwnLu%2FV3EQS3JSJ74xz3DWsXYH2zmaaGaRtSMvF%2By%2B%2Bl6V67GC1BkESIlLNNus0yhssqemdFl09SN2Vpo0MxJWdgeqYqC47AVrM0s6fn5em%2FNJfd7ILPIGfJ7I4BGs8zb%2FAg%2B6UsCLq%2F47HWxsXk2eJSmRHC9ownzMi94bdBPsx1AIzpXlYwaW0yGZiroC6pCaXmpjdwSPpd8ewmJowFPkh1UKK22krQKER2SNrFg%2BUadULytoVPrCr8rE00csbwkopJZQo3PhjWkNR5aE5BcoVcYCibZKpfLNJffK5LMY6%2FgkxaShmvJeSvRt8cgCXYPfwtQMEcAskbEVDPvSRGmLemgQNNdlv7lenSQDoE7yfHDSB7q%2BeTZ5dAADrmirRE1ieUvD0MBGFcxBkeiVsjP9GttSfQkrBotOmK96amMlwr%2Fn35Q2tJXznjGdbCeNB7DxcjOxawRwqf2RSnPEnmnoJ0Zqc0l33JRUu8VmUscCQSsqJQidA8kkNeDPpDDsYZiqhj1%2FWhUMCwnK9qOA1kePrNxM3ondyzzTOc%2F7aSJguKdxb%2Fvwa8%2BiLblERi607e%2Bnte%2Bu%2BbJmVMJjG6rwGOqUBLItQ6dZRwTS7ciateFxa1QTUTyc%2BEQavTrC6uvOM3Ul%2FBNIXReM5gYM555JiloQ7bzFct6r7qoJj6o1njVYotBvZjHfafBfzrne1gaOYGQZ0OTxzU%2Fybjc4pPLoRdlD%2BR%2FSwjuppa2Ea62frDcnkX7GoF84VBWXdedaBOkdFSjRV0z%2FC77116LSc6r%2BwNpSXBxK8s34gr5qP90GFF0gthuF%2FMUkW&X-Amz-Signature=23b833394df8c21030ad9fee3a6e9086c369c757b2c04cc07537cb2ea0e02670&X-Amz-SignedHeaders=host&x-id=GetObject)

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
