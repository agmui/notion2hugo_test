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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3PS6RSR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpex9ifBBHaS%2FomxoGezh2O8KF8f9Nnv5Jp0lpTimieQIgYEPomRnTrtGsvnIfLt7SHHpv4w2qMqrpsSNQyNMpxZwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN9fYqcOBDerc9pCSrcAzSmCfe%2BCIjvukB4XrKhoLca4Tx4pHcxDVm0tWbLPZvO9tXvvNqaEdq%2FvLtJ6FcH%2BcMuB4%2FkmqmL3%2BecbOaet1K94pEFh4hTpuq3XnGI0nI93%2FHaleMsYZic9MiNHg6yh0GqZl%2FtayRa1fyXoufPtXO13bgM98TA1luOaMFZeiMLmp04rp0EIBbQ37A%2FtMRIie53KWhM1E69qSu5VpCqslwSy0bi08hn7Pm4tBioEhZ3jwXnsmWdDdomGSFbLYWOrwvqUGmXbIY0WB5mH9udhaZlJsOmaI2VBNcZqI7nt%2FjhuetYfi7uoitmx4Vw7vgJEv6Df93Cfiw3AUFrEI%2FUglVrgxbhuvVWk%2BcoUq0MZxdgTwE0Dl9GTwhBauJX%2FV7LZffOYyghAdNPVPCXRvyR%2FWxyl7TObX6SrF2V%2FTYDugc2RDEIA3yWpmehgPgXuOoykywpU8yrBdl2j8i4pWyvgA1%2Fz7NBdsm5yX8UBRFv%2BRqazYj9CGxfgMuw31ah8NV%2BfiR8b4pCmhxOWp%2B%2FA88aynyNnfAiCvS766IlNDqlxglvT65O6hvIKVHbKLYz2ioQ21F5rlV4IHmV5WPKCHJTRR%2FYDih0T5x4rM9QEbJHiYBP4AQO35EbD77S2gBnMJCoqsQGOqUB7%2BMy4LeOcGl6hiDb502ZJ1aawj49miXHV%2FD1AbTWUBqOg6oSnj24mz2Jx1o%2BeqKFxF2nZag8iL9PwSCVx%2BxiaP4MZmuH73m788TVuN%2F2gCviaL0629sqwNjWNCBjTZ%2F7ecCE6ceKJDssKRxzgVrgvL9sQIYtSG%2FEn2d5dGnXkoFjXzRD9hsZp6CuDs7S9C8RYoWhMn1jf3Xs9CCyntRO8WBHLjWl&X-Amz-Signature=ac52843aef81ad5a0f927fe2adff75487d45906da66248b258ef8de8d4bdb9b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
