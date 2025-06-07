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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTINM2VS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdk8uekFPiik6exvTViBzY0ux27u4AxjYF%2BKdbt7eh8AIgHXzqTjqy22U2C3Qip2oPrDY6Mvqd%2FGWV%2BmzLRoyGsX4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDwsIPr4HUEwz1dMoCrcAwMUuTrxc0HDs4Rl%2BtTWV03nUq02tKXRzlSEGHYcfX2qMtz1NRoM%2BSWRjT5sJravoaxprg2FfRPHOCMjAQXB5alY2QLYpz1n1rgcs%2Ft%2FQyWkFiLPGyswqkH5rjhn4c7%2FcyLL3Q5nsrKMOl19OZr6Z7dVs5U0btaSFT%2FJ8Wr8wFkKepJ6LGrEdYzBZM%2FmEjGwW49rDTAU7nB3RKy6lRkFO%2BbL3vE2q7Cid8He89p8OyEwfi4wOeFdUkANI6uGEUMWUkBpNOB4w0dMQULZqb1dlrhc%2B362I6tLXIM%2FfDzdAOu7mFkbxZzEWMmXISqeOlN%2BKYwP04OcD660vjNIjiHobEx4KIwMaWgAb32WocSqzc2%2FV%2B%2FEVLRy6G0IDWLrhpPP5XDM04eoBXaBqoBiprMmxTVePrpKl4qklAfZff6gyL6Z2P2yoSshTc3wW2y3HU%2Bl6Fs0XUDJpN%2B3qSTs1Jtvsk1z2pQnc3EbqtzG34%2F0RTzjp6YR8EI1LLJEbJbAWOwXmEXBCKN%2BByRFQux%2Fh8U4dgzDIpI6QubaooN4Hri8ozMam84ILCelwYwlNafmQTfqfoEKLcjRcJu6PxkgH%2BL%2BLAJJNEyzHUMGUf16f%2Bz4WlQ8HhOVTbvCMoIHRuJ1MLjFjsIGOqUBYvBgjcYxlggpNNeL%2BA0uIElniKOSwK5lg4UCTgDb6g%2FbbneEE4b1iKFXP1A4WH8rc4Z7CXXfcXeM5%2FnyHLCVw07SyU10dmF1Op4Gfc2yrs8RNRRd%2F%2BSyM%2Fc6bDVjMhGL0TO2QEPbKcq%2FrAUtqO%2Fv2Q6tCWSosbCMr2Fj5ckr9MFWxonfdL8TKSews53KIOvC54jkR8uTlT%2BL%2FxybI%2BPwtI6zePQa&X-Amz-Signature=73cd4e5611bb3fd67588b48049a44a4eba3d74d6357f48d2037cabf315dff096&X-Amz-SignedHeaders=host&x-id=GetObject)

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
