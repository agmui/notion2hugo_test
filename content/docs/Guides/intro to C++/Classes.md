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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JA6N36J%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGcFnX8mcDizjpOdPieaUMcY1ytdR%2BcHqLGDBomZueBJAiAYZWBJ7ksxv5sCoPG4g%2BtxAVUZmuhotShIOdFRsGtZKSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMlw4%2BeyI7vLnAyVnKKtwDHZ0zVKBYUHwZCO3Epl3vzBqmBNWX3SY5Pa8TMOusBRMyJORMAAeJDQiaj6so7%2FRX8T5hvc7woTYOVrTSxtWGjTyByAKuR9qhTJ9F5BF7K2V6gpWHYj%2F6634s4On3PDarZBb%2FEHmP86lmFaYZLsj63WU4d%2BaszyDMRAkrHOOZEyB7R298XQB0PnfLvHedskX5%2FGISByjjHWkIo%2BGYB913aGTdghAGCyV9D2jZdiqdd%2FAWXgyWPVA18OHOieS77ZWQrByPEskZqFGKXOhb5O57zKTrZY5xcULXr95okQGiWcru149%2BdtK3JtL8baWrfIBHxDERsLd6c66s2zmq8R3E28OCNQ1qBzOzy7qME9NSm2zzsUJLrXSiCdflSpquwI6rDmfOFvLZV3YKbirW8Hf%2FnWy6J9yOHAnpUJJxhDvow3oSwpebRCUiPLGqLUC%2FCWch9Ez4r2ejyP0yQCQfFPsntQGDEleqOpmRsEkQw6Mpqo52bNdOKC%2FReOG7eFA%2BG1AxUKR12UytYLXSPptbCICkPJTHKU9O6qLiyc6mBNNeSDrDmTv7%2F1WuZS1fmjiZjEvdyu0XNubsYqk0Aa7WunQbUhcrCRaeg71f3MhqzCq%2BJvvRYEcG69J8Mzdy2YcwlLnswgY6pgGlZviT%2BrfM82x3eSYyWrHdxkan5fxE6nvtxB%2FK6W9sdRkYZiloYQwWIsOt38NZ0rmpeXH19SiPPmD0sWel21vmN9slZB1DJFvObCCdgBJWsnQYLu2lQxB8ue%2Bs5o1gXrnqqUyOQddXGrhUvgXkK2PkGMPk5%2B%2FbsD7lr2Yd2TaKbCLcuLUkdS4VbqFBDHOsadCP2rJfsUgyKfoJ8kgYOqnENhYSVDYD&X-Amz-Signature=230e726974d00f90b1daa3eb73299a076e4ee9b6fa37566e93e839a952c6e87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
