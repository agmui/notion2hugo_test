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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQAEJ4IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIHKgZg2SoPbFTv8C4vvC5GybQJDjTRXKWszv5gC%2Bca8ZAiBixV4livys%2FUdm5ntj7bOWAVAc%2FKH03s%2BhO63dvhqNHyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrz%2FR69kCVnOIS8XMKtwD4NVvmskY9QmuHMDjjv7p5a2oPV4aFbjKVB5e2%2BNSgjfhCAc2pcZguMpuEIvtFHaezWUn7M3uZ0qHReYC50OjNkpp18gVJzNRoA%2B9%2FbrCRaJGZtDhb4nD798b8DPo4uHHT6lZSSDesIeKnf3bJ8Y1zMIa4iSeMl0Tev%2FJyAoYHKEhpg%2F%2BjaWC%2BqAP83uDSjjrgTIRMLjFJkO1Rp3AF0WbZ4uPBPdY3AxV%2B8xeepyodkUqiNTOV1PZhWAx4Z7DbGycDAQbdrWHti%2B%2FPQcUvojIB0Y%2FryKRuguiOwrQlrj4u6qDztQXXDMSeoktdq7jzPvHWcWUbPMgNwytk%2FMA2Wv7yRkXFoFZZNfaE7POmNmEHns0AlXeWwSNAvRyKlDKiakRxtVtIM4figeqkBalWoeywU3ct3JkhWMcviFpvfw4UXxcTC2zKK9HoSE1CHRsdNs52EAML906Ve8EZzJ0zw1Sj7pLnm%2BoyhjKSwEjdgEuRiR1nv0bBKoe4I%2Fo4ASGqQKiKixoCKNN30vMxNZxo83nQEmpeK2AyiePojlIy%2BqMVUktzWpypgIOT3c1bpxgWWLUv9oLukduCHZPh02Y6oA0vozottILzYoAp45Pv%2Fh7CUaQ%2BcZKVxth9w4HQtEw7qLQxAY6pgGzzedohOEpLebUef6E%2BMHayiVSRpKXQfSWe7h8kS3vnud3v9%2BOsilGthF7k84soQfy5%2Fm6tLbk%2BHNiIjQxIUuCkEmhk%2BFfrO0KYzJ%2B9DC1PyNwgkX5QgrhwNcpC3gOxCqW%2FSpU3pyFiggCCMT19EQwEQNjm5STRayRtb%2FxUm5kDxeqHETiE8Hxhih5h4miBO954UdOjcSFMsQX1fdmVAKNWnrOwGV%2F&X-Amz-Signature=2c5b5ac4f7ac9008bcbcfddc405db40532b9ac7ef5d32a2710835e1de79b4d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
