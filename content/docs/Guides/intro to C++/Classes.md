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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JM6CBGS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDNhis4ygKRKzqe0YPRs8iJT%2B3WT4RKskOu4Jj6K2UEAgIgSvogoqYsVbDifWR2zYINIENLEo187%2BQmlt7%2FWgy0J1Yq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKaIidtag7ud7NYBaSrcA%2F3eCA%2FV5I1%2BUbO5YV2xhEhv2qMs0xYQc%2FYHRi%2B%2F9onyTLLxuINVwbhn7Aj%2BgkxrOF8w1xeiE22iCKGMw6VaVkKnc7aBR0%2BmK1goTcAWxcefIUHTRm4n2as4%2BVL4Xd2PfnkVtDVJS8c6lo9mchK6r%2Fir%2FoHBIK7LaRauRwrc%2Fm9F7%2F83rsDWmLY0KRZ9N5zK1Aq8jc%2B%2FtSnU32Xc3USLrVQ9wSNhV5V4%2F%2B03Z%2FqM3JbTtzGhU%2FIURymvcGVmE0shiKq7tYTkNO9Z7cjtL%2FITADWS0aKOvSnU7S0yMQOE4YX%2B0Qnf97kDMhaVETzO0PLnu%2FDFgOJ%2FWb94SQ0EBOzd2VvAqe79YRruArihIJXm0aHpq33UlhCMPZ0jgb06CHhhY%2BwN6LvOayNvwAuTtKaCcaPVv4KecIpUy0aUa3BgBTtLnPRuzj7HM3JoEpqtzjkz%2Blzg6j%2FIbW7LoEFh6bb%2FpxXKtekATSDxbQwNSdF95gfiPPZb4jiD7Gbyz5Ui6vOm6qaZUCiCbiMCmEhbssWDuLtbGmf2D1PbaV2OcqXvNgyWmPTfFJ0HCYrUstZR5M3xUWabmNkMajiZ6PFINwjhdK0q2P7f3t%2B6BNJbhf0oM30MtetdB53yeBYHLrkQMIb9iMIGOqUBeBtxUO7zjGYKGil8TuZQuxnCu3TwGh4Co%2F%2FS4f4iftJ4zizTbDQd9A%2B2EvagwFu%2Fe9Vdj7VKEb8RlQFxASGIWiljf7DFgl6OGmn7kUssKam0zKF%2FFzZB%2BejaQOhj883HOlYJeBMbnLq6PKsJIPePOW4DXA9yPmCSheqkYmfF%2BsEqx0GX422xqsYoRwbuvuR%2BygioVkZXJo8BvXQL7Vuwu1eQ9g4y&X-Amz-Signature=51172984861eff12e926a6756c18d12647ed6caa2014f23f9a902adf5c9337ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
