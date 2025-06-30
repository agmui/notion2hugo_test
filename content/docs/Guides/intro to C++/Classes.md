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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHM26ZV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FECACXXQfhG9Re9SMPiXage%2Bs5SKymcLg1cwKnDOx5AiEA1L%2BIcq2E7MDJmwdIqDV9VTYkXQIxvi1tG87P1n61DAAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQP59l9rLA4LtYyeircA7GcBLAAt%2BPxhIb5ZF2zPk6aKCauIAibQfz4Tot6qFZN0X8QOXUgBq1NlwOD0PqfNHQ6diZpi9xGGIcfCg0Nlsiy4%2BDj%2BGkzi%2FFSEVFjlWQXi%2B3VDHF%2F9Vxg9nJcRmb7AbMkAyltIQWsG9DNDESMOYA4FV8wS0CryTYIiWhvm4Fp%2BFdx1G3NKFWgrUjRlMQp9Lpmz%2BazZmH%2FPZr6JBCekRmNZqY4pCz4gBMRuzsuo%2FefemGc9oS9pvn5i8Y7AApBrWkw9cl7A%2FivgHgnrVPzXzWQJB3kepBF%2FfRA7mQDF9JERgI%2BYNbpwYp3VGW28nSCt8%2BCvBePhnQ2n2pRpiZIrRQpzb%2BDGeWl4yF1VSbfABocyjTAY2eqLJ6Gv5Cihje9B5uDkPTCDL3HpS%2FqfIdD0K5i91ZjiXEPUgJR76ApVos2bu6KyuTmYQgvv3hXKXBl%2B5DncCOkdWZViKm4Tb%2F%2FqjH8yiU9ted5hxICtNbgYbudJ%2FQ%2FTSGbSwHCqB1I1aSHEhBcD9uhyWzvg2SNKeZlfgr9qTx4eKE3i3Lf1ljfC%2FG9bY%2B1LLDs%2BkqsKT9xO5ozoIA5i%2BjQUyWXsYMa7Nnh7Zpew7v0hoK4tZ07uWauIlkuOJcbLNoAqj5aOKOsMLHNicMGOqUBPp2lVN0aqeb1tZBUpSX5HkEavOjbOYvPCxwefdXg7Qt3JWoO2Sn4Ft%2FSouOGYMNVG7eMacFnNLW5nDwMDqqoIQRSp%2BPK3UiLb3gtsPzXY9ttC%2FTimRrGLS%2FdIU3MRzvz%2BCWrR9XBtgPLLa1vdsXdh02aHuPlMRD%2BhY%2BxIxjRztBmZd7Ip%2FE0BeS9M5WjhS6Jmf90jhTqD4yeU0l1vkv0i8NQZ2Np&X-Amz-Signature=c8c0ceb59e888a4187677d5e91babe03a023713fecb2263f3a2d9864c5f11e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
