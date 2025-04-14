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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SOPTXTJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0hKJsqC4hW%2F7ZUv5vpcgQFah9aRK4vCzfjx5%2B2co6xAiBsMk%2FxR7tWlW8LLSIeTg2RE9bzoxQMoOE%2FwuD23njd9Sr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIM3l0sLEz00A9gzxfvKtwDA1kVZ5FPiZz7D6wHc5swE2Tl1pIpAgEjdcCH0So%2BKCTKxbaVM%2BaeByio5y88UjYlMQ615Svft5ieho4N9KTmvcCDA3tH99d6%2Fcb0NE1DcAV9cL%2BbAKXxOJNKTdwWDkIKegNVN1krq2SYUUxKgTlraps5UwkfkV2dr1sATWu4kMBUmhZ2uWFZStcMMlXwda5PzkVQcoz7ld7RaT0BVRmx37NNQESWiA%2B1H70WAWpW2LYE2M1OIcIgrDGBfnSL0HOb3hloC28Y7pmGmaOOIxB7fpt053KgZBOiBw7el0VCyc%2BgV9Zoe0lyryk7g1WJmiXjMzcal0tsCMGYVsgmJ0n0c38Pk2922xsiuYvFjtVrZ7OmKKRoc3gqVlDboAZhw6IT0%2BhaV3xrWIBEDzCSsfzCYnpxjR7EIUd1vkBA1bPTGVEPNJqZ5DEgiEPbbJLry3D1rNGclL2tgB9UrHoJohO63Bm67qq6ooptFUkwU9zTzXqQ6c8LVcO29V3DcqDHreAJ3CMXwMwsLann%2BnKIHHrKkBBYnoYQODWW5tmWzlInbSQg83SvW8gVdNz%2FfGdwwOZp%2BpnslRpjQaaArK5ytnDEkC1c0h6Ok6WoL%2B2P9fleV5LwP7NIw%2BJuMpC%2BfN0wkoP2vwY6pgG%2BBvV15ULu%2BZt9mabTzZB71oVGd19zh2Nmo6OjUJheuV0ScNaBN8W0RSI7KOiXRx%2BFo%2F58P2uJbVxBtpcNCqWHy5938nc1TanArHe0UnkgiWkL2ug13J%2FxBA%2FNBNnIwOvXNk7h%2FEiEiv%2Bg7kAfbyl8Xacm0HjGC0MeGQMdqcj2wzH6lA6sh%2Bd79a%2BctqNGx8pvntSFK9HPNGfTgIe4Fu7CHWn1Y54y&X-Amz-Signature=13a1e7a4794ba2972605349ca49ddb11a79dd0ffef55765038c0cf5dca10ed68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
