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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S24LIJX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5gHQ5hcsDMIWgVLKjxh2usdA4qqCSlBF1FDLLD7FrXAiB%2F%2FDrLNnnHE2%2BwXTzolvu1DQCzaA%2BgLobLA9QfRlYRDSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMnkWShSO8vg8XjMmjKtwDLgsxE1nVbHgWNFcmrJczpkk%2FC5Q8E%2FvjcNKTkulV2hX3KPtUPFm6lBrbu9ti%2FYCZ3kxLTN1FKGmIGfROVNSqqcAnKhBUMG%2Bp8%2FiDBkFzXSKgd5iBWO8%2FupgJdl%2F%2FdlQITSNg2TqiBEH%2FRlynqyjBiBcppoE%2FveDnemRvLOKEMLYCbwszsZUHNWIOjWaNSzrEPfNyPDWC1SCMRkgO7L1%2BR8U8RZy7NujeciKTgrTLNPEqU5ElsVWzK50NdsOQHA3kFslVv%2F3TgauXlPpm1i3L1BsQSD2Dr4WY7EI%2Fz4vToC3Z2JR18aogHfCPkqURI9n%2FS0F0YVeuwMm3Pp6Z6GNRTcvuQx9YAR3wBkGBkm3LpxYYJPXuCmpBPjv8MCzKntbl%2BjmB6x1z%2BnWVz%2FWT2rUfWyett6HlBImKKYpzK5DVqszfsrRHByfsvo5IQOnyPDBWQFjE9V%2FQgE%2FBz0%2FK39NkEBDxotXd7FkyeiWHLcVnysAKF1TLNhA0PphfHkzyW5Le5rGIgAQV3bZtA7Dcm6tvodBrfcr0UyMfV09Z0ZzZhud9SMs6f4XgXd72Li4Eh1fX60SdywGp5Hd6UvVAIhAKWpl1%2BmOIg8T76E6PbcwPG%2BbkAYMPOEzC6NQFEEownezDwgY6pgH44JdrDEMErnrGQ00NLsmiDs0c851PEs%2FzmN6I1RlsKVk8eHdTvmVviDP%2F%2BqXqUAoCqSMD8ssiC%2FZ8IG4w1SwwuVs1DB%2F14jeMXPcYyAHbiSlhSD69jx%2BtULdZD989vUW8bXQYY%2FSd8HBlxGZxhv75zDU%2Bs1vrSKty2EhjtZixIEvRV%2BYMbHmXx7wHM7z6OrdvTWZRD33L4OxUINxjeWPLMNyfM%2BxV&X-Amz-Signature=4b53706391890c26fee7a8cacf4077e48737c4a311e29c062058aca453536aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
