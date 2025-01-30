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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKVERMN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHq%2BgpiMWKkZiAwLjgNzrN5r5v%2ByxRVyFi4MU%2Fa3v6KAIgGJXdKAM8VyZ5Rz%2BIfYtVIcuZHEzdtH%2FiVy4W24G%2FW%2FoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrr94C6igsDF6gZAircAxLIrRLNK3RwtSN3QSBYKNP7ZNr%2FREYWkhxjbIRs2djxUl8NFu%2BkrTgh9XrWdEV4%2BSL8MzFwLE0i6VEXy4mvYUf7c4Bf3%2BWZJzY6OjY%2B92ng5iCmS9bl0Ksi6fSsP3ivOb1A2rawsvmVAh7YnaPeA3Fam3ybDNAYbxx%2Fd0hAPzfzZ%2Bg1q9XUtZhpVYZ5INy13Ow7Y50J%2FkbNWYsdKoDhP6NHwHZ2bcPqr2adsSBw%2FAsDFbIVwFDc%2BN4YZ5mk1FDLLEYxH13Cjqu0B7APJ6BGTbJUWSZ9f8YVN58WPHp2oQEBu3llR848o7Iciv7PAdP6Bz92HItJzbz6uQVCzj4Rv%2BDOaUUrn%2F1eDbqOFElhC0A5yQJ9nK16KTPkRMCx%2BlMVCIclmbJPxPZcGM4lhs3m2qSsNeg3Frkr6tWGXBVIAxARj6Pwlg4QocW8YYKiUgbsQi7J1On%2B8WbImUi9sS8C4jzmJD4xyRjEeMn28npx%2BfYfz9kAug%2ByxxbDjlQ3%2FXms4HsjBMoqvWc4R3f8vLnXqErgOX8qmm29NJuUpYSUi3cuLM96bJXOWaL4sJIVpicH6oy7yrpA2F2bDPecnr076oYrOdgqTlFB0XZ%2BpEftq3O1upkBBoj2CrDkskgLMOyj7LwGOqUB8ZD4zpyNMNZ0MLmHufdKTDw3DzzcVQfXSI5e60j%2B57kWyzX2lD6Q6oiZnMMfIlXmhC3Av9%2FIMSq4%2FoDM9qQjrPajCiLF21RCHafsj3va8LcZPSRYxF1LWLyZVkkelu7Hc4m3g97L7g%2FABFhPH71rva2nj9AjPP5k3kejqJpbTvBoqG0NEw2JBHT0gpFav3t5GC1Fv5dxWQWANIUdZMhcZVzcwxaW&X-Amz-Signature=0c3484ef00ae4bb273747cca032446b8568905eb295fe32574d265ffe255bd25&X-Amz-SignedHeaders=host&x-id=GetObject)

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
