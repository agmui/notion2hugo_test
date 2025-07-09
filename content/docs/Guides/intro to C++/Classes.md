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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5CCBPV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAegU3KgMF%2BSUCkBvf7cRJC4fB6VCSNZjqB4OojtRtUZAiBOUhxpwQ8bKyWCR99PlLK5ufe43GYrGE0nUW1ggOwFkSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXLqzhfI6mttU7maaKtwDy2be%2FTtM9OZy%2BzLiwQZ3YcTOk7BBiM4L0vZATbFdfgGdkaTwOh6twwB2n5yN%2FbeYi7O6UaA126eHPbdlgXnOuDHG%2Bvr1abl6QOW6JCWSvcvWDWPmNKb6X%2BFNyADokB0d4HUus9WfXV54tK5IB3RG%2FklC46bj1B%2BfhDJEjgOT1%2FeKOLuwFzeshUHqxxZA5bNSgouMDJbgTGE%2BL81wzSaAcVI9ZRPA09DR4RKynZRNkqTsfIRiKUrSGoo93b2axkADpor904AxHj8kEL%2FxJRruu2kzAxcY%2F4M5tCYU%2FDPp4hfu2enhr8EpSYpj5IBeC3bsqAoQrv50ZgxoGUn%2FN953XWvlrY67Tqe88je4uoDKfUn8VoDgSRRI9VwHJZvcan2ddm5dbtc0oBQCoo3GSPt19fWnBQArVZNEhV9VEYVGheOdQZp1Vz1qsVx6Hro1mohRS19Vq61GO1Sy8ecbj6P%2BTYmc4BQpomFKnDjPu6VON5aBmAu4IYBxXS%2BBU7A95u3f2aPwNruCa8GXxVkZsnvqQLTVVpqmibGu7Vv94vfa1ZRlZJR2VnaXdqqd2yyIDaSkgcQTvgN6uQTTMyvlKpug%2F3EjWI8%2F07wEktf2A0nercjJ5FCmQ%2BRa8LDXw1IwpMW7wwY6pgFhjcdXmfsFfP0V8onJIzWhuT5MBQGvdSAd0O33W6ALPvnWfTPSd8ef6P%2FUhGMDo4PZk%2FpqxNC4Dl3OQdaraHBrmtXLCVLklfXgoHlxiT21SRuIZy4TQPx%2B%2F%2F490YhQurdImoKiuWqnh23Ji8Wdq1TxBvBCdyMPpkLN3Lg%2BYWDkmfWh%2FaIo2hEDXHpDMkgLZkwClsQ4CQ4NWBuqBRZBsiIlq8z8FmMe&X-Amz-Signature=35457833954d2229c3d39abb7e2304c732889dc3471666dbec49c1b98e00694d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
