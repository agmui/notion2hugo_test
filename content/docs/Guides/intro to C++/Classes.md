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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DXEIMWQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE%2BFLvIWYUnzBMCPJvW8KqZIChdhLlC10bGVi%2BT2iWeOAiEAspXVpqFBwexvsqSIaRa3LX41ZkslSK5knlesZAz3Uccq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNj0QMmgACpInDnXoircA24lKXjXnbcXBkFrqY%2Fo%2Bg5igpjlp0qC7TAZmQ3eqTntSDnXAyxkQfzNJ3B5GfMypQMd0HCgYle3LWcJ4WY3nLeripO07S5StFy1wt4LY6Psq9ufPjosck8FXHqTJYn%2BHfgplDorO7Kl3WBDl2SJeuBfw0e1wc0O5xlRoyWboKYWBNY3LgLAhyRq3nbI%2Fr6P9h4uk7d3uVKvX0eoBNHVM3apiy7O1PwI25igKnkSNoxJz%2BruMOcAfGnVCj7kSsPlUVrJADoAQATpd1ZnU1FW8UBxoXa9VxDkPFCRtnLF%2BUoK0bDflaFjdASPU1LpaA9x1uzTxtHgiEO%2FDogWandxv3K00zD05RIBVuuCedCrRbdcmOPPGOwkJdhPEK9RI2uh3Qhx%2B8e%2FsEPk10NIneJ35eE9x9JsGjiEe%2BWovKDjeQtBspAx05rChMWv3hWTPLNhqyPA7Lvm%2Bj0qZ19P4ZMtd5sFriu3Fs9YFs%2FsBVgd0cvK8DoZhn%2F4XUPkLpaoHhbCad%2F1O%2BbP6JGZ71%2BQ4eUW0f3Ypgh682sulYKfxjweZ5okS9eCqP9MjJVuHdYJJToWoBIgpY9NRdMk9ReGSiMzFGfDc7IMs4yWcv4kRiaTYv2YLAV9Ka5%2B744gzWuJMP%2BF1MMGOqUB3rAsUgFIfXwui8CHqPSpjRbGePoP0VpiLC4ZXP6ZK%2F2FohSwkbBOg8aRf3%2BwU1n2mlvgG7gXcfyoeWh4%2FCIn%2BSUT74UnW3rbGDM5CnOc%2Fhhhi2q93Be%2FTBW2LKY2TJeZx4VLJIpvz71zZcYnxl6X6ww1nnswA6obxi%2B%2BqvdV0yoq8hd7KPDocINXKHMfSYkPkwSErstjyvdDILI9s%2FweIWNR62oZ&X-Amz-Signature=beb462431c9054be79d90fd238ee283c79d8f88295f2eedc7765866ecc9bfe4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
