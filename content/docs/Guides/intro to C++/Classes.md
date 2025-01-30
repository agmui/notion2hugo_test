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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4KZ7XV7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTFdENy%2BENsXFIemH9sPeD9D%2BnlIO5BTOOWVCJ3l8z7wIgfOfvOWHzoqYt97bOdUDQHWXWRVIy6cChA%2Buv9eUubqgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt4hQ9sHoBEk0v0OCrcA9%2B0nKUXpf1jmxmEC%2BtjUkkK%2Fg0jvvD7K1eBAvJ5mUckAuRRiRVqYGwnmqtA9JptO%2FpyHwSWaDuAShK9cKv%2BDX7sXJmz30tNKequz7zeWQpiEMUAA14YUvy8as639AiknSSOgXU%2Fvcd%2B%2F9bCr7YsFdzjaIQY1Tu%2BLqAYVp6iHA39YcIXrCz8CPobOw5AxNKDgLBBx1BuEyRYgYIKKAGtnUvVwUApUCbDGYqBObnbstTRmLlpFqMO%2BGpvvJVUeQ2VJGKqyQ6HZ0Dnmepiwbop5VXAI%2Buja4xuWuWEPdu2yJoSMynapqYxg3%2BouBCLCvjoBXm1BdwGnNDmcA5fn255LcPLQ5r6qloVHd7of8nLU8JC%2B7ZTbLajmLE1T2oG%2F4x5YUHwuwg02PDQGwt6OhbbDfLLZOeDqEXLYDtlxJgoUcmjmh8UDudM9Y7iTuwONYAuqWZ1Kw6L09Sfay2PTSO7z%2BkAYIRYffqzR14QCtKb1v402%2BKLBuCpGrdUn7LIbt0ZqcP8Wf%2ByD0oK29gOAok7LDptNarXLWDTlV5W0DSZxg6ziGCFbvcAMMcZ1jt%2BVhGo%2FaaeAQmJvd8P8WyzOkj1AqhaDVtDa1jSsYnDt5QKPm8Hgvl3%2FygkGiauD9oTML3r67wGOqUB3PDJqJ1UlWe%2B84YVyoQKpVLWH%2BDrnc387JHlCKNhiJYtPfwcji%2BlO2lpEB77jJjyH%2BvWylQ%2FRlfkeWG7EZEP2qZVsP1pkb%2FpXGHG5o%2FHFqjqSGb7sT7aQcwrjBluS9vthT21uiL7NXRUi%2FK6hi0HUMUJauEItOZhhm2xop2k%2Fo6pF%2FNb3rDCCQmQRUPp0JjTDcAzdOP7d2Fdmyw0CkMNCpx293S2&X-Amz-Signature=2bc62673dc32adf592a4fc447ec83935384f14e7c8c77ab29cdcb7bf588443ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
