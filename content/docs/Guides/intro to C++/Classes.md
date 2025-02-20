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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RARLNCC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxvXMDDcWlRgMTvBSW4I3wdHB%2FAwA87j8VIAqEsw4Q1AiEAiC8RKE%2Bf8VJ8EoyJtoP08k0Wxbu%2Bg0cP6hujRaB52aMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Bj8EERTpEENUYzkSrcA2VsUcbSTrrCER6rS9wAd8K8oh%2FDAXv7Fy6yUhA0sI%2FutD%2Fxluw1HB4LqdmU8bZLQum52dK9FDMJzLO35CkKnBnpJyLnsdVFYh4ZLqUKcq1ivMu9LPVWoM9G3Cc6rewPOWpwQT2bmpKYQ3NfiaiMW3EyOMI%2BYM395NY3CvNpIsoJ9uwN4XGCgZ%2B7NotBJduBeQQiLWnvaBUudVd7LR2Xu1hVhggtzr8tPhi8kSEwBBkwMMc%2BW%2BTEUnXGZV3yD4fkTOY05cCrP35z5WWk2IGeklxqT19gDMh3qfUty%2BpdwbcyWNf2rMDTQmNLyTzu%2B%2FltrrKEnydeiAoQE8oPpHZ0KkNX%2FhK6wh4bRYSjM7U05Lf9xGAm%2FMqNfY2WTU2%2BhQNMRGfIoyOhNWGI8Wis5Zy46YfLvCr%2FXkaxb%2F721LBTvgaVt1DxNV5ygQryt8kAxq1B34crgIVpheboenLruulLBIq4Kg%2BrdR1mrmyNYv2yUpPQ45uEoz2UlLNt3zWxTyTL3F0idHbNCJG3R0yEIsIF9g4o5ITeIRR%2Bts5WoSZQG46AG3mmDpP2%2BrTMRjx4V4%2FjfjmOrmHgZNJo94qvaRF6PsFSrSM57v0z6UvCzSBTZ43dhJuxgETb8xKiqTGnMM3K3L0GOqUBtlHudQXAKaddLVsnQSrJTSE7O8IOvBVYwgd7%2B3QBmr37Mh0k%2BdN6UCAWDKcsfXtkCYhK%2Bs5AX7sWa9KJpuy5tSHtvGfQHhsnlfP%2BlYZeZ%2FUzAoSpRa575tRBsRvSMXiPO2qyiuP%2FsMemzUoyFi1E0GgZlK%2FmiUEG7N5FGdA5CQ1TPI0o0yB1PvlYiMYmHNMxgLXGm3FnQOW%2BsBp90hAQ47BtJx3Y&X-Amz-Signature=50b11c85a5ad52d2dd3a4793a6c810d1935cf2baec647805553d9d31a13fc938&X-Amz-SignedHeaders=host&x-id=GetObject)

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
