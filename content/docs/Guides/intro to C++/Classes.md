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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWZ7B6O%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCUkMY8V2htp8WSI4TK%2B4XZlUCctrGpBiJQePZm3n4HgQIgRf10FbaBMs374V1arMDhYf2pnLOKtbSQ%2By4do8e1BK0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODx1a3ipxx1tNrfJSrcA6YR7Ol0h0mMqDZ%2FirEqTdh1bTkOCT13OpwI9ylHbg0gu2oxUZb76tHj6CnQUo936MtQD4ZGGMeVXxAAdlagQV9Xu98h8eCohO0tlMv144%2F3wnqXscwEW0dgvNghH4yLbu9lyPZjPxkGGWS4xesvGJ5dODFwTGADvMC9LpYM%2B7obc9FpMXrTv6DixlEpdaKiVxdgxOn%2FCCEg%2FbhCMm%2B2K0fhGVATPIFgEf4MmomOyeZFc8wyPG5So2EUQMhwMpna3tfHf3FlgYBM%2BPzD%2FggwxgDoYTCynfxNXtfjki4Mwee3A2PGSv0O5yB31Oz%2FX0DYhsCM%2Fbf%2BdFxMNUZYj9P4Kav2JSRIwPNzX%2Bj8BTFzf5lJ4Zqut9OhcGevAVESUcMEKPkmlY9L7GKQ7RW3VCLzAkV64XY34IthKXXEyk%2BXgm5nI3fE911RTzjr6bRNaDPU%2B11%2Bp7gj4cDAymUtKdfmOqnihYKGptRbsViNEARPxBB%2B9%2BcWm3uVEGIiLQb5y1yBx3qYjFZY07gUB%2FILDH9Fco1LM5z%2FCEf%2FJUt%2BsUEIhAwBeFEmfU1xDSVEp2eUASlG090ke4YufMwOre%2FDpyXN6S7HGOKB2M8jdqniIpDOhT1KYDlf637YS%2F4XqItCMJD%2F1b0GOqUBsfAPCRVASPWNws2YTyHKb68JZHYg1s3fEEURm7rswFtT0l4PoxfABhr0%2FkfMIqfAmscuZ7anyeGz5gL8M1q1V8k%2BlY6az509Ao0LRfs97VLellFiMrikggjsuVItoLkZnGDpEXFR5owbMLmjk0%2BDqZ3aEiOI7%2BwxTo1HL3Lhl4fJ6pSa%2Bj9F4vMtQ0HAENwUXAfM%2Fa5RoHylsaqEoNNUN0%2FDK%2FJE&X-Amz-Signature=52b5011d9fd05af3b10657e437e36a0ea9aa4c760323fa984a226728c938385c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
