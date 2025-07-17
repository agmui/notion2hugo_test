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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWU7F2KV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCb1Uo6ChZljfe79nTzaKos%2FLaGFh%2BUZQb4nMgP9u%2Bu6QIgXjqp%2BkmqJvU4Y%2BlS%2By9Oux%2FXQydea%2FmN8zVqpggMXBsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDO%2FHu%2Bi0JP2Vb6MWEyrcA4cAYQQb6QlDGPwXbCjAUekh7KS%2Fwfx1Oyif%2BZvKEHWuk5VL5jYYgUCILlpqdm0sZCrOybk72kHodTr2ZpSjO4Ok7%2BcexUwrkwLwuMeHv9bmRaRjeyAOfgH7BsmWhJ9TyYbyqvx9t8yQD8BbGYb2RfV03EgmBZkWntXoQZBho1%2Flv4nW%2FOWhI4zF%2BOeMvf%2BWLT%2BaDk%2FhHRNCEPCFG16qjqnmjoQCUmoyzGyO6S23EogQ8yK6bgU2MO8TIC7%2BvbNZDGAmledFS74oL4bw3MiayUmydx33ofg0knCfkJPXoRzMykcNj%2FDRFq%2Fqp0MictpeQPpuHrWytbRruDZH6mKpTZskrKUylcw82AerczsS1irec6m9KZhRdXZ9EprTM27krDM5jUBsth2n853tRcJDsX%2Bwd%2FvcxqWYwky%2F6xp3dWIbe8Y6IlgktxAO1SIct234%2FswxdBwrT%2FrXIxSG%2BxmJimvcVukJ6dRZG29XNBTzd6k5Jq7sFFcVD6MTQ4TuzqVQV4GqzJDM%2F%2B9afzuUze7bhgVxvCpFC4302%2FT3zGjWC%2Bxm4WR8zZtdFm8C6mHDsm8LWiCSkJrI6XeJqtSSQaYr0%2Fq%2FVYmttEf%2BDh%2FkMZGfQOkTlImV2ujU8Euc0pujMLPi48MGOqUB%2FVRzIXF5Vb%2BuoNIgJwe%2ByZaDa2DT1N6fmqEpH%2FtpTWMgSS%2BoMVk6o4KEs3BqdrmDecMNXRQhpKPJ8Tr3RkkK7EEBGWMHC9rj8BdacU4qdQDkGdM%2BPbLd0%2FXMlWNVK%2BNgK1IemTm9XimG8MZmKJ88SZ%2BacxSMxDVY3rZqhJFqTC8uPKWknlPHf3EuRDN7c1zuWkP1HvyYQS8U0mAPB8Rhx19N%2FMvo&X-Amz-Signature=c18e2c4d86fe30adf1c56630f203bd501acc9cf5aa5c805d87ddca3de293c702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
