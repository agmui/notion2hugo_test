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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSY5E73W%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9LPG6A%2FWBW1z8w4r14ur%2F5PZdU%2F2Z2P%2BPSnYpLcNnjAIhAIxPhLFJzpxnY4zx3jm5pcVUly%2F9qxtHTfJ3YS2fPoC5KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwomZsAEcMvtJVLA3kq3AODBcwBowwwnev5OtVQ8QwbA1Y6cjZl%2FsFdZRPIzxai%2FyOc86tD3S%2FVq5gN4yKmsrY9XVXQ29u2XACGOTFc%2FjoKcl2ySCoEnCHTLULOPjnHbnKrwrnv9BZ48UbEbRk7jE07M2INBW1TyeGdh0kZyzt3JoaQtj2vUFjUE1oNLXEl73GWXK40jkc%2BLoPfF1%2FMBK4ZBRz6hv3hb0RSHvBTSywFTqhDk0yEKZDVOrBLqHld74GAEy7oq4qmS4fHqds5z3JGOFVxBQSFEGd4QtMfs4BSbNbB%2BnYHOE2CgsXyoVOEMUAQgORAbRZf%2FLpM0rHdlc38AZsuGdCucDdr%2B3xe7YH5B0cWDAIk8BucBvyqvR0uJxrs5pslGBHKOnLAIf2tsRIFVOPcc0%2FKVHWxSEx6vQG6q2Enlgz3ZjKE4P4wNyeRJXuiueJ1w6nrjk8kPyNLrstgRQ3aaeGT9H20wrK2y0d9dYUdwXo3guHaSbmBJkHdL29PQRb7Kx1aMtae1%2Fei%2FXOoT0AbBF9aMh54w%2BrgDd5NfTy%2BnuGQyXWBMKoHIqFjltoQi%2BZGpWw1ltPoohbmY2hOBM5V9p5Bwz3XJtoBG3GjIoYiCQABzk66TyQglldxxK4gM7yR7lKLggJ6DzDdocXABjqkAVVjplhPU%2BuUBpjtin5A7jpVBS%2FcvEgffJty17ERRNTtZGPB4Y2MK1qL4eOfX5Gbz5iL0UoH6x0Q6eqhE4UKc8hHat3HU7GNljjO8bpq7152CQOAikpa3EzcR2K52KWMpM%2FSmiplrvy13WJqGBQo9fTM0TV5J1E0wAlqej1oxlhmfhisEqAlOr1CQGyONcfAS%2BpNJlLmo5QwBcpbqEpRYAlAZCCG&X-Amz-Signature=eb74a66fbd332c0bf1943c4320390af7cc24b09bd0546df7e6c134044ad683d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
