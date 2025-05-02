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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGCMMHE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDLFrd85KOp4Qz9Tw5YqzKUNT1rhPQBf5aVoGCA%2BRCfNgIhAPq68vEGzQjQue16Gleha2c1qkuv9W6GWJHySFFGsZOBKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZaxBc08vRf8plYa0q3ANWIcjr73eN2o3WT43OFJy%2F9AvUpYlof4wTHDHahA5jzO4UWoKf%2BEvi724ZHDQOoYkdawqAP5%2FhDDqIaWl70ZJp0hFOCfr%2B3OF9QwolE8kUO7bRZ%2Bh4ofg%2FWjFK%2FmFBn%2BXQHQVcTLwn5G2rVxr6%2Bt9PJWAjaGAm7C0YwyUoT183I4zpT2Vhedr%2FBXgPIUSeu1Jh4oEidNgQ%2F0MwzVk31LD1GnDEDvbsSV%2Fp%2F7clUaYGpLq8vvsWAcu1%2B0NvfQJPxrq1cqP5%2Fr7JDpIeK6eHWoCLJvCmVjRgMWazNv7jfh0JRaJFkAIPSm5JDvdxbzNnnV5PLp5xe3Qm4zHyX5ZVHcb08RjDBUiWf%2Br5xOeE68UMcANqEeBzXHSF4O29yXFhi9yyMhkKkeeflJVGvHHoJvcSaRnRrBREWO7nC795CK7scyXMvIwGhL0IKN0%2FPenOJZqIznFO09AhdNrp2hfMc%2FGvmdAAtJjHmOjgbC1XApltud%2BWxky4dcFw6rdjroZ939F5XawGI6bR5I6x6P4zVMNsblAtfFYuoV2fm26TucowRSFsHKLEkWAi53dc8ZZD6%2BLFd2YWEW1HVgcGAX3IFIaccGfbC14ADYfrn4dzlcBbdqxWJ3p4XVL0%2F%2FqOCTCVotHABjqkAadKQ2h%2F%2BV9sN%2Fuk2UPMdnnX0h9ERb4rIJ3T%2FQEW3aH0CdAfBV4W0ChHDJKwUgN%2BEraLbhc6gSep2hU4Ub9zs2V9%2F5yMowVAOchregAmhM25psbhf8%2BSvlFaCJFnrTZY3C%2BpT0wrWyvHyYVJZm7xr65cytoEgTA2Y9%2BvNw8ozM9Hb%2F8gvihDRCNdPTmI5GbojBBN37O1oKsw4ULj%2F1vxNSm8tziL&X-Amz-Signature=aa27cb6cae7b0355cd1908e705f3f01882f6d57d6b2184ac3cbbe1d2056d2cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
