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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3VE5IQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7ivQ8DFt7CDja51%2FzSDcSgvxKdeM2vSVvEIdXm39jeAiBiyZMZ5B3F8OcDwkk9lmsp%2FgeJk2pbCeUQ8k33nPArTCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTiIjz2OdtBkVjtw8KtwDRF2hj%2FX7fpxFe69GaXGriI4ra6ckyZSqVX%2BAGESb5RuZoYC3tpGK4x0jelSdi7LN5cUDyVvlMyb6o020dY2aaOrpvg8ao4hozDYNu89voV3hd7bZPSPgQCRQOuS9KuMYbSI2rmc47ZyAKHVhQWmlI28ANUcXX7popKq8f6nEKWl3CVddRdfUAewJtObBmaAAbk8jBMoHJKCfFlb%2FCXahMZ9yxVHHdy%2BNdJoMqYnI1gFMWTmcaa9GLc16lhY7atnvtOhyeDLobbaAt3GEGRQ9aGcwaFab7KC88wO6GXNmNRoIWvj4dO%2FsKicCm63r1n0C9PMrj9WHggL9xvkKnRmW366wuuhptezBfy5ESzna58c6ppZ9AblJjwCsjvfmEcLxuyCOB8FoRe9gIfSF%2FIx6iTq124J0JVnsMRxAdLgu2%2BMH%2F7%2FE2X9Q579lOWG78tc2Wa8uAbzCHgSXf492f8HOJKxCCXd1RcXv5acPQYYb33lVLzFa49D2Kgf8XbmMr8H4fowMhmztoOIVWIH62tCU1baVGBYMuimjMpBBdm4ZhJ25Tbw7roRW6wTY4dEGHv%2FxyQniSpSVoRsS62KTQS6DK%2BFrZVcDm9XCKNS7WeWhm8s93SES7s6ESuk5CkwwmZqsxAY6pgF3bva1hmBtnsXJvJf3tH6ri55NnMK2cefkLaiUIDJ4CuJeUueweXaJskX8tAfSvXmA6hBip1ZzhlRoc5jrrMCy7ra00haLN5Bk9RSD3vsq5MsDzuHq6Ubl11t7ZVyp%2FjrZqRGdHDo6YZaB9pRu8s9XsWfPt5kL%2B1meGaoMZDRI81IOvBPNqNF0fc1MoYaIXQFMFQL8Sogw9b4cJm8IKxMG2nAr3hnO&X-Amz-Signature=6a2fc6f46593293582440d6252740541070e99ffd7bf0fa4ea2e6b8d94824eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
