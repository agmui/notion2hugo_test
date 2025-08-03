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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VADA352M%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnbiHsp9OC09OJ%2FjuIX4AcDfpBJA6dHhEPLEryK7ctugIhAPQmfTa0YXrOE23A%2BpYzZP%2BkPnuBJC2ZN%2Fa0%2BEu6X40HKv8DCDQQABoMNjM3NDIzMTgzODA1Igw7iAZaZyI622vniZkq3AO10Awvkq6Dnhv8u35KiHnA4Ryro035RXCI%2BIs8v4S%2BdCGP1p%2BZo1KyBsI4udAUss%2BtncZjwrtKYg6LSwa47dl8DeDyacuLZkiKmPstcWO7G8Y7enyg2CMJkBHCLjDD2kOG39x90bEk5aYaP2Y8tt%2FekXklMH0HJmI4ss1QF9BHSEFzhtT8Qviq2bVPxLYlGjfO26i%2F%2F7xPJklfvH44nUojBHWBI8Tue77jfcvlsa4afy0mWIib%2FXPf6Z0RO%2FlAOGzvII02cMs4pdYE6RS0XU8hHmoAHEdE%2FoA3kvmToAYdSHUVTgJt8U24SCJ31Skz06Cq%2BGnjSFP04zdLCkoDAOFt45I1uOI2CuKgHyV02UtPAfMZ1T%2BVZ5JkH%2FhmVatmw%2FSX3zHj6JSpj7MJZp%2BjkRSLGchEsVNQIOv48Iq2guIhbfNBlYGpLKHJ1%2BaoW9dDeArwHhf3apPef9Npx6SiMz8ghT2gTFDey%2FEyMKqBiztYkw%2FI%2FpUbBXiac3BgL2vi7jhhz5vaFtndGoQui71JcnZZ5PbHO64y%2F3EX1fLZhLdv%2FPO9p%2B%2FXBbXQV3%2FHdMBBfMqkJWMbdEv1qVdJjFXAG3P8sfnawbheUgZmtJZH5Pc4q5M%2FHnNm2xrgllCq7jCQ2b7EBjqkAW2ElrY18j%2FzK1Let4PptEpFOU%2Fqp9t5RBd1%2Ba9nEVAxYRqf8iNGkpdEW4tfA4tV3zbqALXANUu5n5bul0nlDZcRaS9%2BmDbaEOw1OH9ZzNLjuh7ChVlu7M9dcRF2Aiu%2FgMS2NaPMOM%2F%2BhA6Q8InRH8oBv1fLAXWSBSbML7Zu5E%2F%2FDgAPpzvkMLsmpNE%2BHmvaWVMHAgg8fOwC2j6Cc834%2B3DEY6q7&X-Amz-Signature=38b5fe08f3b9173f2c22be2e0f997ac4871665c3cd3a3fc2d1cf1c4249cfe7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
