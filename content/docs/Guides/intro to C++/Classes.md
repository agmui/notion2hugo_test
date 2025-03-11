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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIBBDOQA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHfksAvxEbFFVoDCE%2FeUCZuFCnunTSRMaE0u1OSF94edAiAYECdWNbmz%2FYrDsrlqrz12DKE9ptismwF3uWVhzO8ktCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvuWrx3jSlHOKaTd4KtwDEQzZ%2B74Tj%2Bdc31pMLaz1g%2BkFWp605I261QoO%2BKFfc%2B0hKAwmKKQzUTc%2FaJdvh%2Bapjk7P%2B%2F%2F%2Br1VcH%2F2z13rlJUGVlk4Od7KpUTLb1yVL0JLZpxdKGJRH79LIcULuqTryn33E9re3jesoBgV0sbg3yQMRoh1PLJU8QjQtwFyBP03Sofgg4dU%2B96Bmg3LBcH6If4t3Dq1F2byZi7Qm7DC%2Bd5ZCs%2FZTlaQGSORTJzCAmTLwfPV6x9BD8aJPgHevI3Q8S9Fd%2BV5k%2FebxFGVwoL%2BXdKSNE8rHdA4Y3nAcwkCcAE8fPgxDZtPx2OR4kDDtrlCkTsycOxmhFB3mma4VspHLABXEgcTllgTmBrUw949QD1%2FMOj4gHNpjTO%2BQmxVjJMp9wBy4Wf%2Fq4Pq2bweQ%2BN2wpGxSoa30JpVGSsLpI%2F%2Bm9oeJoSWCkqPxuXZ40uLVIjlJrOHKfJvnkWw5oikmDwoqnSe5AlMmMDJbtm%2FfJPJZAspOxD6P9ui1FOpDd6KAM%2FRQuhIzAsOkjmBZWGLC%2BPp%2FX2JWSIRp7NMruLJEqMijh1Uy%2FrC1%2Fr831TnmQo4z4NAaK3vgWdf4bOYU6r8zli5ovt99mWFcH7AGt8EPsfbYnCU%2F0IrLN3snR%2BNoBjIw3NLCvgY6pgFo5MPGAxdllQmci%2B1oOIe%2FHQTM0X0yam1zlcD1BsZWfCbX0UzPcafQ%2BHvw1Esj0DTngRtmc8SLIEU0QaX8FZ5IPp3mFHIcWotTUysxECm%2FQA2pOOthPJ5fuuAT7ErRbotVb0WwICT0rxdvw1O7Mi8xERS2gFpIK%2BeYhjFTCkp2IPnzMzKNt4lVYjYR1QoqzvixX%2BhCwEw%2FCMoEnAxwPcqrN6HznP%2Be&X-Amz-Signature=8aeabdbc677850faae7cca36b87a0f5cb6040c65e7e0aeea211b5ad6c445f4b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
