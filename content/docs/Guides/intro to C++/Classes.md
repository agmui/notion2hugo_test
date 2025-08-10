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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCN4BZJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaB1V2IhA7at4VEaWU4yn0eDWb%2BV8RtiIXvUlGQP5PJAiBfs5pbC3v2gEYdjbHrDt4U9%2FLTqvk89MMQJQJ%2F8B7QaSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQEDPvlLBU3oTHatKtwD8dWA%2FuMK23%2F9UTRSjiRrU9BKuC%2F2MuoA7IDxFuChDQDqr3gLKD%2F9XapvEEAnMqajPFcGATnmt87MBzlMEK2P2%2BPkHTb4P2VKgMSbY8tfRnnzppj%2BqtY5DMk%2Bfcmmzsak0Jj1tSHESjX5coxoSL%2FLMdxEfrHxRjm7RsGIfTMc3cDqW7ydNqJx%2B8xl3OW0%2FPevr3WEOauGsiBTcVVykEeCFaWLsmF8Xu5DhkUSAHGKg4LEiKVQYYnd5GVNJCP5daA%2FRPs1tbQSGPosULsXdmHa8gmKdZTKsm3Cgd11sSzVGWHkRQpy7S%2BQPdxvrTngAgK9U5pmYx%2FK5iiW6sHUjzcw%2BuAsriKeVVY1oSbPnqJ3bK5S0ZUNw%2Fz9svt3l0GmyDdlBIxzUA4mTEhwfIsStVkVJKkzqe1PfVrQaF1mlgDK0f2Nwxurib5hULERBdL5ejCtPmUoFcHHpiG0mIoHHSQ%2BCgRtOqej1knL4ODVRIL8jezvwoH%2F%2FUUMRIcZ4lmRNs9pmpISbYL6DkczfXDxRxhnVTTYKXFkJ00GMGSYuR1AL40WNvY8otGOlnIfIczLQoUdk70JZuEa6AqtaiyvvWtFdDdSNru2ulbB1cde0w0s8PJIOXKgWTcZ3UWA7HEwsZjixAY6pgHk4nAcMEUEYNnYKUKVUB3wXouaVfa9BL0HMPBk4A5pEiiiTngfpqfFiHf1BxOYOOa6La6cX08HuKJ4Q1tgDek8Wo05YZnkE%2FwsHC33iAE3COMbAbFSp8gV5zlKcRAk1egs9xBX5UrKkmp14ubMqHF8FbkmgGFcMUJpuzO7lPyZYSSsAehUs0Yfuhf749VYqeadeQCHb9xn6carNbH0SmvQsMEMFjQh&X-Amz-Signature=39508caaa36a3ec963907b2eaebeb8bd0d49f1b8d797501466507acb53ae13b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
