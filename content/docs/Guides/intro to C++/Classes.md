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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YRFO34%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyCEIdW4A4Kmazg5PNjbFNBTX2PUytDyxSfnYQZKeZ0gIhAPR%2Fl%2Bzs1KVBZb%2BokXs7pY3gvIu4uF0gXW3AmguSnODIKv8DCGwQABoMNjM3NDIzMTgzODA1IgwFH3pJ%2BDgm7%2FEkgJgq3AOxyeVhRNyA7ygpiWAj1RK3X4lY7Pv33gOipE28MMmv1DBZbxy%2FDrFP71RYkVisqSP%2F%2Ft7rXYYWzIStyZEwi4kpniuPAIoxhX3gdUgFMbn3qZ%2BFFYT5O3qvBEGqB5yWsWYkt%2FRsIYxz%2BEmokjlV0QAOnbyfQGJx91yBgSp847K5b4kJCi2f42n%2BJNrQT21lwo6uUMIXDvNsZZS%2FuYQmCjQmMYmtZtO9A3tbOdnlBGUYonq609v1v9m2L5ttutqiURKy5vrbWhDrEms6jQ60ur0mvxD2sN3yUD9PBDH%2Fk36FLkW3Q1OIvnmnKunvYbVOEKxSr80RaTL3NzAGovVmV4M3JWBCmT2CUEbdeXB9wM7PRp0Yglg9UONhtTBMRzTiygNEJilz2m8K0ALfDrb83xIsOmhNsXajyrxUQdRnuR8RskeAs%2B%2BlLrV%2By2BVrF5GImmrVyPiSKNtkFlZbp50ohfuGBKjo2S1KPcGESmq5kmKWfr7V%2FPWcYAKKGDYooHfRcsGrP2Jdxg0pWroNHZfkoqlDWKnmcvpXrdu%2BBbotkHtRKmdZ%2BITkA0O89eURjjhRpfMQb84%2BPLiddvoCIWvv5tlrd1%2Bwr91InAz587T5e5QZPCF%2Ffsv2psdhW4Z9zCcwvDABjqkARS3BCvdnxSec4g4jZqjf77n2a7k9Fim5P9YHJBAGCvk2P3yuKFZBwkAeHIMTbw6iGdS9QunywreL6gMLVOYalyTYvrQnzHH3AC%2Bt9i5zxsj3TIaCfqmeos%2Fs8xQMLwRUvzqJmoGJLdjcQ1%2B0LJaKTRzKsUxOzK9q0KnbWss6iqKyUdQt8CjbzZdjpVZgo2%2FCbYwHKmnmGRhEAB5dRhICs11mO%2Br&X-Amz-Signature=a3ee7e0ed8b151c18c831f5b22641c1307a2f67b37ab015c1a78f53aebaff434&X-Amz-SignedHeaders=host&x-id=GetObject)

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
