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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDYWMJB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdtRH66JdawoMGG0HCPBsbUnfcB8PqH2dCK1Yk0cDaSAiBO1s7gTszrAgZGWUNgU%2F2kfomVSOM0jPDmIYKn9eczrSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1yf3GOsc0WXPfLJRKtwD40cXe%2BKPAZBCkNxz7utMc4eD3W2EzaJVgj%2B4e%2FoPGX2CoMATzMSmoygy5V5nKzdKrpLt82i2szwCfqEtAsRoD5XnTox0NQVN%2BQMSbF2efNyWs1EmqgvwHcYsqPe3wV%2F5Qnrc6orxQihljX1z25Rr3G0WCsTov9GV3R8WRqubcbigfDBb35UXeLSLg4iXYyf2aK6nRQ%2FRsaKFl0Y1BYU4iXTMUR%2FQ7CmYDlbrlPvqLdEvQWAJ58ZTJmYYw7lhM0fbxjZXu8abbj88FAp2BVx4eOOC2%2FwG5PiOE0v4kZOJUNTarDyF8tW3tKAyuZTFIqsGUp7Fu7evfjCHpbcoFd%2BiROUyAtlCVpGh01Gu%2BLyxWn5MWz%2F7JZaD7Ak3JPj2FMC%2B5NX%2FRHmDO79eSzH3ix2Up1kgmp57%2BEvK40nVdAtuWqBCn%2FFJz3Gcb1b0oTzbYAdtBQRKA6612CqTdGSmra%2BpDnt6la%2FHN2%2FaJoiIuUZhn3B6SGK7Ait6nAXEyR1HRIjp4tISWV5SdVUQ529vlYm3NLogf4BZ609V9LOmQc3o80EKoKo5nEKplyy8BisDnGYdg30CGY2cE%2FWnTqgQy99A3EJUUrnZ79sPEwhXAkMTS4RS0LtuVPgsXCVX0IgwzsuwxAY6pgGcz2N3p2TB7paYUOfKdo2mZ5oqLboga3yr7IqL14YLiL3mx9Q33d9srrAiQZ0e1kUdmaA3piZM1ojhDicMT990n06wgOCRV7v45mtjtZBOplPjSPqKlebT6U2EygCF2GvdmRyegM%2FjJIV1elUmkrP6JkXMGFDjAZ294Z0TznQOUqlg2lOH4ks6XxfP9H2zBd2SUCDxYz1KTnbajTbxnAkjWzAf4T0K&X-Amz-Signature=198fe89a17d1249efa28cba48b55039f346c288c92d2620c9fe80248fb85d2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
