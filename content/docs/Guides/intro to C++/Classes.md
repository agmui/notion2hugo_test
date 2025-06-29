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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IKVWWX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOLkb%2B1syAdn1qfNRaxswPyAgHSVP0MSa5c2zoVFnivAiB%2BRms4wKZkGmU4GbB9SG8I1Du1T5gV%2F8g62%2BqGeJIjsyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOj3jJuY7OnMna9pGKtwDfeJarGCAPtYH19saorQb4rmMG%2FNUr96oXv%2FusWN%2BNxgoph9OKDTkPd3CWBA90xvFTwmxd%2FWlvU80qmZcBWQ4o9EkIbOVSKReylZxHYgiRPmw5INMpiEUYbojhIbPrmfCrRAgCPnMLaTMXE9bAoj8G2WNmSiy1yRtxKA6%2BH2h9mqjZOSTAFXHT9JMqqiwqeum%2FVCU05n6bkaPkbzv1TkZi5AIaMSb93HNyaQZunJt%2FQl%2BUzEl%2BHzpbSdADv8G2%2BYx1AwNn%2BTal5Yt6u1gvmJe475oTpUhNkzqaZAiIf%2FaWXXHvKYMN6a5%2BpYnmWKP9VMkrXAcSzwI%2FVPLvmmP0T%2BKVP1gh15qDsNQbObQqyvVrRMDY6hiipu0aE2BS1hxNibSoCgIzkl43PAGng3Ke5Jbt8m7zps9%2BPdhBh3DMHFisDizJ%2B6L2hzWiKE%2BYVU3bEFpy8GV3iPZqv7a3j1tHzr5ihE%2FZ5x2OLiLslAE%2F%2Fepp4I3gF9%2BetgCMB5GC0Cm9vfI14iWjzgNv8SQ0tu0ucpEKmYRAUoDbS4yF%2FD8BH8puhmKBxqvzEq4x5X6j7GRThCHQZmdgWK2kuFStIyFq1l9xeUiuHU3qIE9iENB9s910rI1ByZN3WI%2BcGv71N0wmuuBwwY6pgFXlKXpUQLqf3WuVy7Hjd%2FLGG0QTucF6HV%2BQdGc3Js5dZq0SXhD1Pl0rx19NimGTOwIukYJkfmpXEZajrCmEGIW4n2%2FJ275Ls16I19%2BnEnej38%2BN9ZVFZEtV9ydUHGfubaloy91G1m%2BZXbBQ2pLC5G5KXB2VhzAPaSYGpR2HA8cY9x9ACu7Xd4INT%2BgH5mi51f8bfuX5vB1fTTU3aOnewOifFPyN34H&X-Amz-Signature=af6db53db5ecba5f030ceb03250b4c5c793cb34e8d939b23e461e7efd509c2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
