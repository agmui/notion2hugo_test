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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662526UQXT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9QwP%2FjSJBewd9xGBE0Wtm3GZpg2tqeYEQ%2FNqDn1paAAiAlfIMU8VqIcGYnf%2FkXfMzp4Gi7qIszZWTkeW05eNRrZyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMuUM3%2Fypna6N2edFiKtwD0WmwfdeOKS18kgiHBZGjAaUzQo2m0xbBPUwo9ZbyMMQwkT2QKAh1syQOgvjcQhzTZqnLdKj4%2BbUpHbFiHvL4ATznaGaZDWh41dHcV%2FbG%2BENvt0PDfdQjkL7XAjPOeqJ31aUOJYuYKfwerByh1vrs%2BhaGLoCPmSEvq8hKcEEn5Qcshr1GkpipKWY86cbqe3yfooOCTrgTkFjbp5%2FQtAbVI5zry%2FWcUMsi9O2JRYgQk0dZPmLB3JJzIibiitwj0%2FUXFTGeadkWy%2B8MK5JlHNTJ6WpXZ88V2bJ5L3jvtXCFB8lqzFL%2BZMVqIVir4dQnPXbsxPVEwCPiUFJAR2S1WlpNoX4xG62zNX8jdwbFzBsjCM7s5SIhpPBpqkxWDzdtvRAlj8dSH%2FhjM6gFsRyCrcIp3%2FEgEzEHRzzc3B4eCrk0%2FdFdaDgrGdmC5JINZNIJRQyzC2x%2BMG6aT55Zssd3OQnNCP6yMvBPE%2Feu9S%2BfM8J4FOU69xLVb5dsq7VOltNg%2F3d1sx7knHsodqWNqpCQatZFJxrUhWbwhQPg6JivEGSPPTywdT3Zp7xl88btCp36MVG0pHEYhG26%2Fxe%2FA4VM8k4zlQTbYix5EEOpjQy32kYRKM6VVZVVMDm3%2BGAZw7Iwqu7EwgY6pgFhF9cnAY24dFKHbGRWSgUQFlRmdaQ%2FZjYD9e9SQcZtZ4npP8VGqqtQnHBytOBs%2BrmYEl%2F2zACE3MS1FIUQ%2BeCHsRFXaYOlItqv2egtMvliDIlfpOVw3PEVFowjrmDj9Bzy1o6PwKqY8zXr5JhGj%2F98wWhXzBOkz8ON7CFihL7mS4p3hIfbGD2Z%2BOL%2BjxFdPj7%2Bco6brQxLzh9m5Ldm7JZUnAjBNpnj&X-Amz-Signature=c63c3b618320fd255f2abf794c0cd7fccc719bc0365e61596e0dfc3c0b71f3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
