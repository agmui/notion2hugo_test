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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTBJJLRS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCID8CTILFBTrRw27rVmrfvrqDUlqPbmQZ57QRz7bJT6XvAiEA1iPX8oyOPfnPCRh0GLql4EDI7TkWHUUnLPPDCP%2Fw12UqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPM%2BsggeDowFyXJO4SrcAwPIwEuPPAbKBNf73dLHW%2FNmQgnBGn30pWyGfIwIeFwzy1xxshv32jv%2FyydFxdWT6Rc6cjnyU27qqVUrblDRvWpNhw1YebNXQMo2TNfZw8JkhDV3Rhb%2FOc3NEMbORIp3pNBX0R%2BHhu2d8LVjoi63wrS4Z6gm4ldMnu3mF%2Fnc3l4ND9ruRpBuxSrhkwvKL1578jDrk35kaQOMXMmnqHP7yOQvMeQ2ruys3Sq1womxZCwxx2hewXNAll2glmSIUy4JRQib1748mZxL2LnZOOecpcBdWYCyUyrou%2BTO6B0Qq4DFNQXvfta5Vu7ojJIjk1t%2B19gMS9LKvKGeoPyKNnep7IJdfc1PaKm0KdNdMQ1vnfQI0oZa2sbL%2FD7%2FiUcNFfWZ3a2hfGvqv7hcxSmpT48n1GLPw0X9cgJSsa7QDBs%2B5O821vPdCk4VEje0wSCJB%2BppTg5EVW5LnMUyDp24%2Fg7Sv6acms%2B9iLZZMbhRpr8lM87l6s2FQj3Tm8mareQEGB7mh8oW4YVQ9kok3QUm15QRLcy%2BgqFICpk7x%2FZuY35RSRlpcwhOoAAOpCb0n9sInmOZs8W5AlMecVeBXA4kEFUbcx01xCt7CdOc%2BU0NHguinWq2CuFeYPNZNwPffba8MIq%2BiMEGOqUB3q1VYCeSirTwQdNbcv%2BDaXT1Tjy%2Fxb78F%2Fzvm%2BBppyZQ3VhnhQr6MsZhlOe2NCJR%2BQHz0bxU3%2BB7uY0kh1HQMbMxnHK%2FKatc9u52v9UIxCtg5KTgHhV%2Bpivc5fE14v3DRU8WUtvfRaav%2FZrURczAp2i3mGnP2VsGfrM7hlNu%2BKfKGSwRXIOUE0%2BQVoCwNZsTuctjjTvRIA7n7BFFWTAg%2Bcg0r20l&X-Amz-Signature=d735afa2c32e4233f3ac9555f57476cb64c3b033aea969c99c21285ad71c5dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
