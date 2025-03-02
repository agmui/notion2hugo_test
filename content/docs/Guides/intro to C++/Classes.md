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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FC2N5YH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZmbNOfH7uvioOnQQrbu2ATtmH%2FabCPrX8DhSdNEBGFAiEA1YFVq5DdZC6owwA2vZUBoXWCmM2aG3pw9tbDzdfwYooqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHykYd9s53ay1i55ESrcAxyvMAfHI5nJCmM4qlUAgPaim8QkYxsorYx%2BTYkWuhYarNX4R961zkWtFydkoJ9mWsNgkyWeoLKWRsYTpq0QmuGa68n54IFEFCIAiHqGz9msfFhHmOtHW7qmks3w1gIQPvVbVXage11gp9ewHguFzbOEtE36hOWc0qQwA8E8h1OQSdg5Bc%2B4kR7ERNYhCLPo%2FEXsrdGR%2Fv0CSF9AUzFg1ONPdoE4fJ8juZRCvEgknpKTh9NgC8HDrovG2W6mkbLRC16L2sVTfsFhfrO3O8zPx1YjKIBbUG1JL%2FWfYTaVnMmFwBy1XyKnlsAAwwALwQutCuRzGJUB2VNkenlCPKcYApkT0bM30AhK%2BeJCpOW13S0qmyopRifFbacmgxu0TnwBNv5t6BjJbCqYmSf%2BpeiDUn%2B8WjYEVpZMMcqsrLtST2pQ3qSSDSVroWv4XF9X8f4L78PrF50vXIQlimjdi63XnDzB5qhoU3pqXvYTjb59PVgEqL%2FzkDKrNcbrorsdxM4vVLIP8cQRuKDn45Gz%2FWOa67XgZXpH%2FkI1Pn8MvONdNA%2Fuj46r5xIvLgwH73SaAKxmhaY8sN7gWhiVz%2Fny6iXHEii5v1O%2BbOs9s9HcTGCS5lj8At23D7gaU%2BeyTx6PMNPXj74GOqUBgopOtgOcSw5008qtJUwG%2Fw5eoQeaTnygTDMs1G05DURzhu90wMI9X1ilQNcqBklSjeZvdomjgN9KBNvyfR%2Bk9t%2FaBGbILd8zphLM9hc0KTXAo0sx6f0RB%2FY4ha7Y3S8%2BmmEcnn1isqICKzlGYckNxMBz9y3He2AO8Nh%2B9RhmsLhj12fT1h0zdawMbDc5MEaeDphmQy3FarGKxKv5PY5KZUz2PlEn&X-Amz-Signature=44d8277e1c803b472a85f33806c9380ce680e6d4560c4276eacc591d99676a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
