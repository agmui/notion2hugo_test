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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCDGHMXK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBng3Ulb5n53JIHIwToOVawdmNtxPXeRJJi1ITFppopTAiA5qbmPHQX%2F8YXCFQ3noeKUuDodPo8ZYQvVaSVw%2BzMo9CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7egG2r4UgCUvqhceKtwDPqA4LvIln1HLA3V1n3Jc4LXr9KpNac4HoqsWWUDbFXsOweGgGktSoR668g5GQzRBlyZuicnyvNvMjuQ8M0S2E6xSmQr4eKSIVwFRfmrNMaegGdnEZFUAgfHem%2BQTMzdqquLe1URma02%2F4Q9JLYf0cyN2fC7EfnmmsGMOylyNgMTwAcV5yfixPMmf2DANNL3u8Iwu2WKJT7YeidBqg5wlFqL4yjKa9qKhc1Xko2VEm0ckiYbbi8%2FF0BtVkGXSaJyIboNYYC3c7LIcatweWItpYG6WKoJgNb6JPVwl6FlL2s83cqO2Svvam395sNbQ3OGnGqbSnIj1nXyiyH0Xhtrhtfytsg51pW5SQOEPs8boRXrZAXxRAD20yhIA3GGL3SQdgVkVfs%2BOTJ%2B7v67RT%2B%2F6vLFaDmuEh582MM%2Fi1tldedlcDuHJOP3MXmnS%2F3D0neB57sku0mGTx0D9ZoYvGaOvipl0ZXyy%2BJgP2M7Z5IBoV8Tkwo4Fl%2BpIuPDlFd%2Fq8LM9icXfLyi58W6kbZp966y6FhqwSuzM7h2v3nEKY3H4UnotN0i9f2%2Fo%2B%2BvHeI2Yfl0hvDvmxrAnC8EMwUHWlNLQ%2FZEQmuJ2YtdFkUC8zlzNhL1aKwvm2Pmao74yPLswzr3TwgY6pgGQSLzMGFOaVWpxd8rQS8fwPLJqMDpuNFZDMx0CcszlcTUc7yYcLBRAAaIlsd0fcJCWMbRARMBeSF24jGphHD%2BCXyPsj22pQL8J1lEAB6KI6mxfV8IfoNhbU0B9gOnpurgt5N%2FLq%2BI2OvjfOyD1WvIouZYSDJRdAHTkNAJCsN84zrGDl5IYn4HKRFBRaIbIIHJ2zBPul%2BUBHRyxEZMwdte4AXAPz55r&X-Amz-Signature=e7240896fc30584fe254320b57b47cea4706afb3c19c5ee3c1761515ff6b2590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
