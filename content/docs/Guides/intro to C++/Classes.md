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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L5E66G4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcCEKqiONkvXSYG1UhiDU97SjYtyHqs3%2FmWAsUcHyTcAiEAyKneFqiMd9IJgWJn4mzphdVvo3PiLpNCn455v653nNsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtXRfwjmNNqNcV%2ByircAztQ2mRUqLDpriiKMDceeT4KwnN7QoJk3xamfjl89LZ4H0fDpEqMHRJKxC8g8SPPVTt3XMi6nTUUs7XAItnrlFNc1KrcqZkkn1ka0gZn0m6OYTGQrZGRsIt1C623QdsPpQ689qRBR9LgfMoMigUTiK0%2BXEI2NZhioY6kb4YhGLUs5TufkqfjSoem%2FoH74tyYTWdbABhJY3J5ePEp2MRtf72Ss5KrnOfV5c%2BGbXZ6AQQic2nIWndTT3IpiMAexDnjHUNEuavlpeZOAreLm%2FT12bq9pWqpP1Ym4yCEr1MaTbNhEDqchbrEcAL%2F%2BOdEqp3tvgV6jOBEVeR2BXkJNVVk4DaYRw3VNVLCr%2FH5hOXRH03cEMUiCbnsUXH01p4As7h7qzg4Qhufu73lp%2BKXBduN%2BEtSiTkrydCOx2UBrdPwrIkI9lv2Xal4AaCLP4Q7r5KMtt62cng0TWimKG65k7qFRV5IlssjtY%2FFwm16CsfoH%2Bu2U573ZkQggO7%2Bo0a7WBv%2B1Mn4Q%2BAk%2BM8mKd5UgcYFfq3xke28zQqfXvmVBWKS%2FIMKJnp%2F%2BBIes7B2TfBK0cI3WwZi84RZ1sQSMwXQrHj70piCf2pD2vhDjbaYnYqA68Cfkax6ogTQj%2BwCGY7ZMPn938EGOqUBs3WSpJLQgs6r82BOBVtTsk7DUKYrpjPDhHAg4tf1jbDMaDJM9GF8IVHYyIgh%2FAtkE6rZEdc7mB8IAdBiD1cU08uR2fbA7BZTtK2U2CU2dtZYEsV2amOIbH4cIjLFhw9YfRoR7pLKy1SGDwr9GLSMYuK9nzuR5Xhvq9QIo9TOiCYzrKZTO08CrFg8w6BbX6CLI0pGLOTyWOWFuiei65Os%2FHT184Yy&X-Amz-Signature=c8414c4623d2e64686040e88b3eadc45e3ff20d64f62b603760a1f48db496361&X-Amz-SignedHeaders=host&x-id=GetObject)

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
