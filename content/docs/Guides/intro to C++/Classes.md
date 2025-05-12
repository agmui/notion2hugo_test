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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCNAMOCO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC2NnsGsESJB2UBrNP6W6kk364PDhvZZ5QvPpSnsoQ5HgIhAPeQJ5i%2F4BjFGD0noRFmYDxaRnCAJgaLWonNRhAq89CtKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgYVV9bjryoG3bFioq3AP1xbpzg%2BVeCSrZhgvT679%2F8qcPILP6I%2Fa8pdQyRxzi%2FJTB4YD0BNwdHLYH6yZsbN8LTdesXRUSqM%2FOydePvdJQYZmP%2F%2B1jtZDl1ZHivkFu8Uick1OkN2vi0NyClo1LYktMX%2BsZBUZWgsWOntlqnnjYS%2F3SPPNE%2BCfO6ArWLiknzuebs%2Bcfux%2FRxSc5ApLHbtHMHdp38uhhifSQUKMewaW9rUtNUQ%2BfnpuQ0YOvLOZOjLsvVERpHKulvPEDwd9TrxByifBgYIU1ml3adGQKVbiJwh%2BY0LKrdJ09uEwRHI8C66zVVUu1Qp4k2bw2dq1TQv8lz2cx3ht42XhGLxSeBSsanoQMX3o4bjUgILrXz8eCW4tbS8ery5OnPEOSZ%2BHfonBHPRj3X11f2ZuFtaPEQ0khJiMwBcUi5bHIOtdrPF0WkpDeZ%2BsJP1lZ%2FWNbNL5J2CgcMSojlQQISjCi8G39iJWmBylO5208nPtFVo%2Bbji0BAIijLDZhkogeCDjJKIs1y5eB7FIIIHPnKnyuQeuIsJw1yekycAvNGdrTuQNgroshb2KYmCmrwH23sp%2BUEmkW%2BIC3moKRmRRhBIiocnCN2pABhEFsjm%2Fug6VaojMYpKmIrlqMGk%2F3YW6IzUi1VzCanYjBBjqkAcVTYse36qfhTCCE7DbnymY6kSJ4nFruOaFXP0d8nPDSVc1fPeOVhx5DMxkYiB1VXxJKRlS5GFem%2B1uC94g6bqDoWHw0RyyO4Ba%2Fi8kRZPIP2rmGTlyLXm51hD8GejxNVdxWnSdEs68ehPpr0QfxLDNByxFfe9LBFpe%2F9U4woEkDV06Z8yg3xSsrdkHbkWLglUoKlWFg9JXRpAlEWXrV2LvePXQH&X-Amz-Signature=8b3bb4d971547bd0b57e5fcbed95d18a319a481cfcd9f6742cfd1a9b1fd5e4ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
