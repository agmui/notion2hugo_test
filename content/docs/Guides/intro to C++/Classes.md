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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IUSI4WL%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR9HNOgcKdzUelxAKlyG2a%2BpQoaTC6TvGtZ6Yr5wViCAiACSpp75En%2BvILkEqraU1d2K3s9HMs8WqE4wquSs3NTvir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM%2BWVhme%2F8Mknaz13cKtwDQXIfNISEQw6%2BXjMHq2V1DDB09EzCPxjII5b9ZQNFQu2eXXEkvN9HRFg17H7iRS%2By9isMZSeHBTXFcARNpDyfrqvvwyLKXDbKMbB4xGBS5TrMG2vyxzvAYoPwYRGbHxmnD1lsDZ5SrtrmK%2FsCmSvS6qs1kcTxoivALfuSgn1r2IXGkW9IB3hWTBUz%2F9ayYPcXUAc%2B4xl1D%2FWKf%2BqAYwiZUolv%2BDJimulGD%2BG87EdmHYn9dMnNSEC5TuzSG80DHnWkngP2DgCKaAn9ZSu8YLvHzxwAX98i1dcFIuzDsjEf77sv7LzWgrJxpSklxW1WYHm8jjecOKvbmm7UvoDcjbiW8WZYBezVRSWR7dk%2BySMCAAg94yr7WmdTRO68fr%2FnaX9GBG7mRTllRDxFNyViMwnZmmu7ZaDwKNe0a1qpgEOwXS7fDjz1PPIjy54WNnmTCA1n4SWmylKem1Y9xVfTmYFUHGQN7xieomidg%2FQH9ezyC11vcMEz2h7rn3yRlfCoFkk63eP4ZDhN%2Bqudtlo11RZJJtAmfgOLAz33STWveK8KRx0yK8dZhVaO4s1X2t3BSjz7ZEOIM0rtg6zjCukkI80bkdQcF%2FYVyfpdU9aME7PxhnTDmsr7vMmIt2Bd6VMw767qwAY6pgHCWDF0abRXJgPUDbvoZ6L5HBLsrmRhMP7G%2BRNtFQ41wWwrJRiNdaEiwY12cJ8A2OLQOTvTwmCIQZu7M%2Btig4WGmK0uWmqmfcPPnydZAK4GQfMgvxc1yigOsm5H1akE9ZLGq7EQ8fDPKi9uFAdQqj5FdYyDTdfuqG4uWarSpavatgtgOC6Fl8w0JpQ55y449m04xwiZjJqmb8GH1pNWjteTUOJ9t0qQ&X-Amz-Signature=c0d62c1f4796f16023616447f72a9fb96e250ac806f5a527effed33aa599da86&X-Amz-SignedHeaders=host&x-id=GetObject)

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
