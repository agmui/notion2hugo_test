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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677ZBUT5Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPNPtvvWeb%2FzhrOCS0HXk34XP2mgcv9S0wMFaNVtIe1QIhAOtmak1qRxBGee%2FjhDZY3DSls3qh%2Fg6wDUrUkNrG4a8TKv8DCEQQABoMNjM3NDIzMTgzODA1IgwRJQcyn9CnmE%2BjBcgq3ANPEhpijfT8CV1Hb1jZw0vNC%2B1UmARloescDs0hVwnfEajFJTP41a15zL0sHosM6MsgUUpVtSRrLLkRdcgm9RtdOqk4qMnTnw5G3oOwbxsFgPo9ey7HiuRdvKqNy0JRo5cgByWz0WcJeHkLwHJlXG4CXMXTq8bTSdU9ekSI1Opc%2FI4SusCe5uP16UvmL9290U5f9eeiDQvlo9CWvBfOtBraxm8RNZU21XFTXdUEBwO2rHtuZM9Re0BhFYDZF172q2po7UVXiZHThnzc4%2FF0ZmVdQYIKuUx0kdELToD4HR%2Fqr4swvT%2FRvam95mwmk5gxghXjwZvIe8x4%2BuYV2%2FlahK0l7RTm15GbFPK8WwrKZFGVFEqsBYQd7AzJxiGrTD6qVTIdvDPB1S4QxJq7Vkw%2F%2B2nbdD%2BsdQQsOtgFWAy%2FUMsq5ddY%2BfNr3a6teBk9ctKGMygdQhYNKGnoEBOjahNkn4vG3NMAEYJ7sNpD9yNMab5jlb2licxEMA7%2FNDwyuSD4bVMqWY2AZi%2Fp418ejtsap4mhltcgYeai3VYLdxWWmnSQx1LtSSW%2F4PVKtEf6EOl%2BSIHzJQyy3yQQGWrc8A3fC2KJj3c5SIBG0RISTHXMgMl423H2l4nwgAhQKTcQhzDghPfEBjqkAWDf0N%2BvXRCOwSkSfH8QI8l%2FqAcw9fWkHZWa13KuLAXz90UGtuamZec6nCd8IFEOIAjZ1xOVx1FBzW%2BbXjdLzimuCJSBFkibXpTIby75glSLrPzT8F8c3Rw%2FJJ1EKmONfQfzIu0WgcBxfpY7hi43j5jJ1dT7bymhICUNbAm3m69%2FFTwCGePsKSMOBPGchbkkUTv9fvbAvh4slgKf8wXOUPr5wRHf&X-Amz-Signature=163749dc05d630e07f2d5e14f51df88b592b66126b0550350453ba9b006da605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
