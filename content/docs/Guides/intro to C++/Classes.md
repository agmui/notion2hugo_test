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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662Z2L3MS%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc78xKc56v7uCG7VItJuKV9VxeuNCAfXTxloDv701%2BSAiEAv2WDrUD%2BDQJf4NW%2BUc%2Bf8K9lnuu9XXZQU0lrOwRWbL8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FG9ThoMjGVRFPulircA3Q%2BD%2FkZ9mgmSUD%2FK5cnQMsijPbsY0RDNZvRc1NmntZKOlSWClwAeWS15MQEXu1Dt%2FgwmCteNrK1qOSX4Mk0U1UtQXlmHpQRsjol4iAu9Feg0uOW7ENx1KX7iRfMsq2kKy5p%2BwRvj%2B3CN7WQrFu%2FkF%2FrbeSgafNih06Gsjiv6QrKue551WLNmCGbnCF8GSYP0Ik5J8OmgGLT%2F32wNIo4oCyiG%2BJeVnTBbEN16dhJzaGj%2FTQBG623XaQTMCOjJYmGhYGwZDVCEzW07GM5aEPjT6eziRx8iWtAzF1UmRRl9MzleGuODrd31hGbDbyPvs0zdbsYCyWFEvty4C67GNS0RSQ4PxoQFfGacACuD0e14fv6qXe%2BpnGnt5l%2FRmykRY2u8fgUqtNGMDKq7ZOo9n9BhJ0DkOnnphN8ZRWrbv7fA0e2wXaPcsGeqqKNGGERZf68198Fu%2BzG4LXCXoq6qY7jfgX98KsEwySH64RonXMdixMqqdX3gap1pKYIRJeavDo4s%2BsaKWvb96TT6ULk47BP8cv5rVIgbvEFSxU2Q587bhmxJ5J0JoCcPTLg77WHoKU8seqgKJ%2FwG3fisbK5D0gCsFlanogekhdgfCLI3UetvQ64KcyNE%2FBvUj1cIYzAMKS8qL0GOqUB2yYMQUApeAUfak13edRv8vg32zo6%2FckvgNyLh7f0tbpFpp4yjNQZnS0eA6tnKN8LfBWs9vp%2B7q5b%2Ftv7tz3QqlO1i0TMCJRVTxfdA%2FxY46zTv283VeInDugf0kOZwkcTeBSglrGprv1x6YfjcCCASaIFIwicg%2Bz7hQ3E0MSFqwK4Fhm%2Fg6XmzxDjFf%2Bb7BRGnsAcTPrPlzQK85cUS2BBIVTcc%2B2V&X-Amz-Signature=4f332d2ae5cb801aba1e54e3991d283eab225e5af71bbaa43ca447e08471bc64&X-Amz-SignedHeaders=host&x-id=GetObject)

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
