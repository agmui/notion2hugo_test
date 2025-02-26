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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSPKAKFI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIChWtN3v0a5Al1D0C4YxzICXZPMISYKCUT5PBwKP0voeAiABIvWsNafSzP97R5uAIt4KPwtQRiuMuoBa0HKZJ2h9%2FCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMcNSJSV53HyK3CX59KtwDuaCECOu4MciDsZwNbJB2hNnppue%2FrMKTXRdd8uRfrcbqHnugr%2BMuVNU93t0%2BNznNMwA7d7wbyqI1mzpFzMn20QcLmZMONrkFPujrc8zf%2BZ8QwsWZrKicgd1ACLdjktXpf2vqnvin60vZsABG8nFMUXDMDdUciQ4VGU5CknAViNMuNhkSz46RTV3YCUtk8AiKJuJlB7l6zndaS9Qbvbxj%2FLTzE3FCGv42QS3aIavmFzA2aZTP6Y78fTHQBC2XqvAxA%2B35BNEa%2BVDxRTJkY7zKIkTiGDTTXtHOmlqlhyO5O1Twu9laGmxGOhgiozw%2BFUP4DdUPXsAPTbgaG2aJj02iZ%2BM6WzmwMpeCuTlzOyUc10OtEYfIV3%2BIEx4i%2F2r5ovmiBoxv2%2BFHQK0SeqskeAQMmwKRjIyRiPEXNJc0CE5vicuke9M2jDcrwQaRqWZzyoXYNKw2jXsNNzXrXwEFFcBT%2FvG78Ry7vJB2rbLLoOzRaYnCrUL5GCizXZhP6wfon2%2FD%2FpPb%2FuXyc8PnwbJl0Wl1WtgcVzwmSjJADShKYWSNuMWr1elzU4AWXd0Vzl8huS4Vq40DBlUuzbb1gPVTJRHNaG4nzm0QrjcGlIdK41SRxwLEKfd1vgXuOztuu7kwk%2FH6vQY6pgFt9buga30TkS2O5t2UPRYHGBdaqRG7MTanIntQ%2BonKG6YCtRJUAhgSNS910XPjKyCFsqB1KaBixsT2sgNaPbr0jYaK95U%2By3T44m4bE4bcM8glb%2BPTyxz1ofFMarpqp%2FvbLYJ%2B8PNaoxzs%2FPsCMWQ04M5tAkoxnJLN6FMDkvk0RFA%2BK%2FhRzM6mu5JTwRbziTf0ZpuKZsaHxd6v4GwGOdWW9FWzdNeH&X-Amz-Signature=58641cd1056bb1ec1ab834bfe354120653e7507c015b33c000c5bdb37804a8a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
