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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZVEMVU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDs4EvEi1Z6%2BiBIghIbQNaZIstWqrpEKSNI%2BAQKUf%2BImAIhAP%2FnsFF3ktwTZFY4Z2L29GDCvIQ3li%2BprAnWNnJl5TWyKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcQba%2FLFAkwr32kE8q3AMUh97cfnXgVgFhKPQodyULzV7884s5OySGguuzGtGuz%2B0OORRsJ8LSXmnlbVkLGIro%2FIpqnXc%2BCZhHeucKrgHzjA88iGs75XFtjkRCeeSDiHeIkemn2JLFuTh40snWHKO4i92B5rVa5MAeEkjqGQPwohBt%2F1dKcUuKbsHFRnR7JRH4FWAw9s%2FrtVXANoDNu%2Bdi9Xtq5tiC4TH2tr8dGn9JWQhJI6hPDna%2F9pilvbdGxDJ4ztVcFSDWN3XJLQPL23BQuHZL2TClAslUQE%2FEUM317hEB%2B3moGaSHN58uifHHO9JcVKCbESj1%2FmbD2oz9IG164OLKW2M4CK6oP4ihlp4rCmQ3W9pjOIu7Jo89oxgdJKM9DYGgD9tSN2eaYedrlXzk6LIUNuWKeiAFcPYkxMW0thwSXrc5lDBFyjxQwAZ8cTA03UAvPpaVi0y9nU1SRgvGoB4yid3tPUbQ29is%2FK6wUiFBAgpSeSZ%2BBJ%2F%2BWUdTojxQAM2wszfZgXWgGvMMnKG4EHwmDJA8OfJ7CHwn4W7e8iW76OGKftXe1%2BOfXGg0ghbrKZWKOOnfNjZaQ%2Bm7p5p8hd7NLpdBl2qW5fz6pBZ9nejA%2FP7rNMwR0ORO8f0rwrxGHmutnIxd2fGiiTD4zobBBjqkAWy1vzB9jMvabbJqF%2BHbQ68NYXA6D3RPPIyQd5tUAFl6prGkIHS0wze%2B3CVBe%2FmuC1rmmMyOcj4y7tA6zBFD4F7i%2F8pIF58zh0dNFUINTtjwZeb4cbqQ5yu8Wixk2PTLPwaKBO5pz%2F%2FJrRj4TDRfDvBSrU2OF5nrh8fh066dTP0WQKQHlpWThnoZJdJGz7Ct7AN1HMT%2BLYx6GwIcTtxF8ud1uwdy&X-Amz-Signature=0a2ba6045626109e1a6f31949286b513df8604b11c1cffabce62c7de68d71b54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
