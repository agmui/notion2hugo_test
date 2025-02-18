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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW4OUYSY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD87jvwrTsVc572Lk0NcCQYBByM3TFjih1W55lTudkuLgIgZQ56YNwFJEHyCrAaIbWHxmmhRaS4yl68WlBFhJoSouoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1a4Fr1KEa7%2FSLg4SrcA5IHyaTQ8tRoa%2BUqmBJpWZr02c%2BSr6CDGk7WTFcPPPjsyEcZ5rYxrAOxIAThHm%2FqAb8NQ%2BbR4xEt78McI22trMcm3iSMxrrSMt8Z2L91yZaQ5%2B%2Fp73i1hhnKSZgsZNPk9hPlFOn7ZbClCfVqUSVoGlhw0dp291WFmSCD1Q4lDKVy1ukyvwibF%2BF06FkiskkDQrhBWUUmFitUqvRDSYnfAK%2FG5Bz4yTQ%2BckkMlFouilqiwHyUdNW%2BTx2IsOZ9sYOi%2Fc1elQ4u%2FnnbJVAHDnjKuoXvTa6aMeMYKB1RblDPUB7TMPlNwr4TT0f8nNxEUYus3J%2FEWKGl10n0eo3ssUEvJ5ZsAaSZDUFJ2yl2Qs5NrRau8qwSJhWKyqN4hXpP4CW5%2F6ZyV4fd03rg1IykQOwEvfKPMV2mjT4z%2F1uRgWbbHUlB8mwjU149zUwl%2B0IfN%2FSW20bEDsfCZxmpIdtv0U9vwGXem%2FMNVzLzWgrA7ysdPW%2FS62lPcUxQErRmqadtVI6XG0xOJElDZPPQA3IrfoPq4p7146aedJKo1TZMp6QrE5qjMkDfoEr3%2FNZfRaiI4HWp39pWO209K8qJK5ww%2F0x0ny234XthP2Y%2FgFpHJ90d5jukxRA2y4OVK2AfRsKfMPX2070GOqUBUeeFWdHlBzM8k7UymoibGBn3tzWf8Q%2FKsbhxkmbGwJYEW%2F%2FJ9Qywyr3qx3xdO0h3QuQoKPkaTGyQJrrWgqaVAJvX9h0orsYelMjofZzHmOudS2G4oMM8BV4Ein9qgkU8XCUoMUbSdcAcEMdiM%2FPeKJY79tLUeGiCqAzmlL6dlZdCRqA7a1L0zuDjuV5yzRxxaZCfIrVbuqUhnxBuKLlXrzsTJlBS&X-Amz-Signature=29bfeb60e54c0ec62281f89ae250c8d81e0cbe82bacf9fd03f09d54ff25bda60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
