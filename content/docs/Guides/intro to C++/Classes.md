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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG3XM3BB%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBdXcUiMyIwHQGOmMe17iI7lp17yIPWzu%2Bi9QA%2B%2B%2FckPAiAnEimOHvIr6Ua36v2stlJgi00uW0XHtyFEQ8knWvl6Nyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMiiyCiyzguKuClb4ZKtwDY7AyKfIzoS4aWtdloK7%2F%2F4L7BUp0oajhaBXih1W8wi%2FO%2FZXX3qgAr21taxzoNUIv8gs5MUtca9x5555ZC%2BU5jEglhew1BYr9w37U3sEoHJeQqVb6u9iqXH909ZFA3Gi%2BtU4hNNtAGCqGnvm9oEyzGzpczd2WH1ihWiDy81fMpzB05VqXKjtD1uF03gTAI9j54ldZGc4GgRsJ3idv7wiisCEwerS6VYC%2FMNX9VmRM%2FRi8h6pdW4c5my2CePEUETMfmQ1h%2FhaOrk%2B4pU4q2dap8wOu%2BReXGVtStRCetjJqKnbO02UIqjHYtXgxIjlggLy4MJ8lp2Ao4t2ToZeWryBpZI8cyAayHhuUuWFEzk8gpywKyegIDBMWlM2S6ubQQdPQiv7N1TrxsOrMHdJ2xDzgsUn8ZnVr0SnuhfVMUXhYD0nqMd6NdU6SiJoMJJDK2ULRCvk2JvxToCdbWFyC4x4fkTxsd2jOD5YEIvVLetSL3XkWRiSpld3tBVKWBEAqS3Dtn8%2BGDR093MOfngkaf5sgPsAv6voxtH0gbbj806vNT9cQaItm6XqPPmOlNB%2BCpEzcyTLrrbkfrWxLQ%2Bs%2F7ERCgoLSrhnGVNxIPRgbilTRz22ww03mCpOg62fEj04wwq2BvgY6pgH6K2jCZ%2BEuojCVlPAHmG1kGHA7vGyO4Oetm6wH%2BOKX8z2JmWMb5JPftlZGlGftnxfoI2AFT4wwuPQcBsi31iU7dmd5MCc0N2PMJPKWov3Ru5QKvqksaF%2F9hBTSZK%2Fxw6G%2BHfp8ZTfu0XPRzWISGvAQJX0d4DxYVfTSrZUaa%2Bnm9EnLrAR62vm6wwT8vHazKvIInyYau3GvjDqizv%2BiiKFz%2BfRCt0n5&X-Amz-Signature=824d68a90086e68f011ce42a69c2ad12b33750bc7876f27b1ce617ee300cfc5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
