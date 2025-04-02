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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4SMLVR%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICHIuCzpWaTNeLd4jnjrglsKmHBToQ0SMpsYTC8OhHC6AiB6IJkjc%2BbFvHiRhnjMYElQ2Pci46EM39eUWwzgbfsJ5SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaf%2F4asY0LhsOBJl3KtwD97iSRomc7KDGNAd%2FSxN6ZSzI4VGCQI3EP%2FbyTyFr%2F4cfUnBPFYw5%2BivslBqSkWaG0msSY8az8bSWDA9rUDp3MviJA6u1stku9Y1xsyGvxpqw4rqzrz5vNRo8whs3TcJpt6Qc164bsTiW4GGMrq4z%2FVrmmkok7Hdn%2FZAV9NjH9xsd%2FLCaaV80o1o0njidaLVyOOuY5y91V0yKPg32uZiiqpHEqyhr6jV6jLg4TLtCMVNNauv6P67Qi305Tp9vFhEoO%2BfivYQetxqumwkska54VmlWdMy4wfxR4mp%2FLFP8H7gslGPJa5ot807%2BQqBlrBhNFfeIDh8e4vvKZHT5XEtNy2DVsvOqvP3so4JJsqi9gSnjatX1LPtf58%2FDncyRFqNjrxaeWw3acvB0Y%2B9qJNLfxoVFJSdjUDDfvt3rKDDFP21jWkd2cQMnKM0RapeYIM2YoHUELmd4wgmThgaIAwhDkbn6xtIN7iFO90aUB169HXWjl3wRffBguvH4kvH1Qubph04gz9HqVTxbTDUopypj3aBqAH1tpyLi28bIiR9vX4VVYSR643l%2F25lGer13vG4hWo7arpd0u9fkeAR4X4Z4IHBTmooo9qaTry2YJVdVZCAK6Kly1A%2FqdERsEbow5KmxvwY6pgHBaq%2BI57VTCCjRw31TBp9uzgyP6qVEnIwHcsbI3pR6XJsIiIZQUvCPjDkVkgndpUxh886fJ0suKEKIjV51Gr%2FVA85A%2BTBQIAPXqptHbZfUx2zeMyNxo0L4fmjZhP%2B3tMWFAZUKKvBRXBTnIjpK3mGHqT4pG%2BBv9e5Znc261%2Brp8om4HWFXyuoYopcCecv8RKDbJBKVEIquO%2F45EcPYQ12xvIICFSQo&X-Amz-Signature=b2cbf0b766ec503b63afc330bc6930300ec8510209d80d96fb29a4b11f25e830&X-Amz-SignedHeaders=host&x-id=GetObject)

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
