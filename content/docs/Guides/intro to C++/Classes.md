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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM42KD2I%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBImttEKoqYNxjwc%2BdGnJr7vIRyuyXENm6o%2B3z%2FJRdU4AiBXGnbd9t1tWLB5%2Fiy17VRTrvpUfjYRxp1kAB%2Br%2BZTk5CqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuI0eL5h0cCqFOT4BKtwD0AdcOvn6meuo%2FqNRvAZjgQS41%2BAInyQIBnunlim4OjAbK2v4BXDXHZ9XdsNMEX12hJxXeT9ceh16wIgLmwDIwmNaE4ACS2KybSk2gOOVWwh12gUnfssD%2BJOJRMfhUxfk1vqzsNPexM3QTfvfckzP4oEy3vxHnoXFgjsmTVQGZbFoMZJRBfl5uBwB3wX5Qt%2Fg3Oiku7dtpNtiLUZly0vLTxYTg2q1Cd5m330691TXvbijUo8xNpOUZ2WU5zaLzbP9RWt5cbM3iFvYS1ZdqDpACFa%2BUtZTIMf5lsJhUST7CDLPU0rfpJxTtKpul8b2wlY8wAOqiQILMLY5bRY0Wc7x1VmQhU4cFElxBGGliIUZiQDcmJpJDLLhUPra3QUFnBrwusdKU%2FH3H%2B8paXnnuQbPfDfpAcEb9VuFFqdJsT3KyK8Lh6aP6Yup79qufYZ4HU5e3hEtNQsauHPlkafu%2FIKS858C1vVKrQm0uJi3L84AuSgpeCRyjY3mfNZrONgJXehxmb3yDWsqphbShS2hGAcD9GKjHUoGnC8NIrosztkA53yEgEzQlwP%2BC0nATxvBOPCceZKevQYLqzX797uzrH7bF%2FbCPMikIeW6SM1gwM646jnb01NUD0LkRdjPUgkwqKvpvQY6pgHyEsALNjFVS%2FC%2BEYcG3OMOdIYYwYJWm0pQGsdD4nWO9v0PvW7FYtjfNCpFX4WAkbiMREBPy20KTdDnKpg8Fbj5cAeUYe8Tr8iQkDcoYTYhvx57sn4bjtF55cN9raHARtOPVuYtPDpPgszF9C8TaXPF7Ok90K6noLya1dyjL2dPllfc4Xxuj6G28RtbQCj1mX05O%2BRCGlCqibRG%2B2daLswF2rCNOHuh&X-Amz-Signature=7c8c8df248c83cc3fb35107b9fbc9b3eb6f65a8b1955f033eac967f2f883b222&X-Amz-SignedHeaders=host&x-id=GetObject)

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
