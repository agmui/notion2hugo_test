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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDPSWXZF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCvDdW9r0bxku26UWKfmzH05Vzp3gdk6Q0ABy1i5MYq4AIgJevW6PyvlKRXH5%2F6G4c83lMcDBw9mJ6286RXpIyelxEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUiGMtg%2Bowv9V%2F4GSrcA1btK6FwvSafv%2BTtuE2Fo%2BTZ5fFB5enUkEyTCREtceCCumPDh7CF9P6J0zBblzuAL0U4j1qjcY099k3TQj9C3f8TiXSkK3h17lkDnjEXVVVkYktg5pOnynfDQ5Nf3VslpKSycvabr9DeWCbV6LG2%2Bl%2BsDdCvunMMzlW6%2BcH9vi5lAxg1YqO8hTiQAR4QyWRANl9Ltm%2B0aYdRuHwOeIUO5VrnNKMGwDvVVPxtIUAqmiy6FG0Qbl59tQw8Ur8pfycqaq6edD1y%2BnWSRv7suww6WUOYLhjEC%2FSH%2F2n0cwqiBXQOQT%2BUGETovVBGYFsOYKZDOWaWoRTY89z%2BG23YWTdl1SEJcPB32GmgQluZkF42%2BgAhXoFDoqOC5LH8ynu546nfukfrMJYbiYKY9Uq%2BKDiBjQ%2B%2FXhSgHIWPQkajjr3T8QMTgPcPWOUfB0nUV%2B4IyHkVHSswlr7G%2BzSobvhIQtFidnWmcgUBHoNeoiPfNLAETyWar73JkJva08B606mOaC3BG%2FNU%2FIDYEx5MXtNm%2BTCAAM4ox5GigHx8Lg6bdaMC9qn%2FIrV%2FnDiQzJqMhhysQj8lyVUwTiG6gl3%2BUqfEqLYHppTFnftHuzTI1pNXTynuyHtGQzyK%2BdtbcwAZ9IMQMP6S2cQGOqUB%2BH2bfXP1btNQX8LI34LhHQe%2FsghCYvyknWM%2F6UARU4zGujriP8peetIftx%2BgRHgiTtTfbJWvwUTIbAoyTEV2aUb2HalOeJWwrgAf05Q12KVLUGEjJz8bqFin9z1IkKp4YQKhE%2B7MDw%2BZaMSpbJ0vmBj86J340ooMPoYBUDEbsYax9DadrbVtU6RF4xyf0Uzc5dIbDfylGicASANMOEnUVI%2BVcWhC&X-Amz-Signature=226eecac8bff7d17b5616f544ade1c16301a8646b6237bac8b4aa9cf06f6c956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
