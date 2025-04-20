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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPQXLF5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD4yA4j6a%2Fj8tlXGr9ngDgdChyW%2FNV7koTRRCvakL2rNQIhAJVo944hMXp3FoRKYYarOTBrU%2FCiOd%2FEh%2FUQNzGy28bgKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3lQoRoMRrRZ6n93Aq3AOoMA%2BCcvm3fkuHInTu34P%2BhzZQGVHF7AUgMxCliIhV3sv9YuQRkLD6yt9iArB8XgSA1UXU7D81LHNeRmoas339Rcv%2BP9H8X8LurQswUBuAgdmzjR0rrEiFl86V2QkkxeGS5%2F%2BAEKxAkfGNczr08ckG66DNFeely1xw2YKmuQE%2FLUGI9mFOf1HJ63QwsTYkT1RfasU8TZ9%2F2uCTbN3kB1nxWHLFD2dUPmNBuddKynPuKXyjQUXoNHw9obmBF9eLyvQmGRX6T2PpA5AV4X0ccvgloaIa5LGHv5DWdpHVZBIB2g%2BrVVM4JS42rdvnSd7VGpNSR16PpTw8eu6WJHS2VM6LHjF3EcN%2B6YgOHT%2Fvp7Z5b%2FdoTwDJ0JpekxfHq0pgDZdcMTMdk3XLp1NCpeCTFcjJThQ%2B1G328W52pImV2CEcD0pbQmxZa%2F2%2BKxBXEYfFTm1U4Op8Ha8iQFPI1I2%2Buw76ro%2BceGDY3cSOB17Wsm2rpCdCw3YW1hEMWBMjjU4KvIqGB3fJhiUJ%2Fszgub865SnEpdMfkRQlkAKMrtLsMoUXnjgm5OYFhgRnFynIW5nJSweE%2FUSMpj2h6AFU%2FYWIFDlNA994eYH2pk7NkkAVZszu6kaOwlbH1VXZ%2B7uJ8zDSo5LABjqkAVixaIX2MONdeJABqEOlLCAdla1xiElHFtyfmvElqlsRREKTaRY2IWx%2Fg9JO9WOBSaMaBXNPm6K%2Fo6RG9LVrejdvXzaKCrCnamsSIzK3mHQXREu4ok1igJsvzMTZcyCMrF85rldbpLGV7TA5XDrcsfKWc9qEBuX%2BghWuSiPYqovUqPcXBEaLNmiHmFjPgnX2uvwW%2B%2Fov9DlSTV3hCa%2Bn%2F4yUTX4X&X-Amz-Signature=18de2681ebee48d78cf6e289ea15cde695d699c351491831fe3afcb370ef7d25&X-Amz-SignedHeaders=host&x-id=GetObject)

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
