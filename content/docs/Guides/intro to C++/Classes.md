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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657RMOG2U%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBX8GcqPpNQnhLFCSTjqeETEe24ZgRuV%2FHNHLg0rdQiPAiATsAcFXCxKccUoo3vp1Hi9KuhlfgYEhwk%2FMMsl23H4biqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7wtCAByZIK7bsMD%2BKtwD3Ql1uyvRdVKdHzXtoCR0Tu8X4BErsQ2N369yOfP8MWM1Yp5i%2BXQtHYCGlnKPZ8Gk7liL%2FTErzuI93Aq1Xs1LTCvZKAXFJMu8OuKfhswZZn4pmDLNn%2FMDOGu9EflGhlVp19dgNK%2BrhlfHJwZsb1FD0A2e1qoI49fI%2Bv7NuXtSsrkLqF17RlhXSJG2mYrqP5Hur3nvNESpT1ziSNr9bgynEAY3Y7AqH%2B8Mca3EWTFRKwR1IoesF6Qet9qJ3b91NtaJ8iOpNI0PbUmBQjybhuYF63xmPFXuz0JMls75wIEGL8u7mpRoQopb3swAAZHHWs3TwDdDRQ4cXOur738a6js7b5UnCQULJ6Ne2FP37W0dpKSOC8iONrR9P7CsLnBxQZFkDbRSQqG69MV6HB%2FpyxFMwcNkJ4MT5nkflxBIgxDb5tFEHU5ZVFGsYxEHz4a9EtuQzJGkBrXRJYSgYAvYTv6x5DR0rJQtlvapwFGmABOA8dlEoMv1%2FnmuJrrDaZtgubAh2kGwu9naRzwVG%2Bota1eE4geJkOR2LY%2B3m01c2c38LLbx55v0uPV3aXq4aOGbTnvzVH7aenijhzFLqeYNHkkdpTNaHyqbJux67ZYwtrXA6ukgpA49G0rt1aX3l8Ywiq7LwwY6pgFJ%2B9afEj%2FudELKS1PkyYz%2BUzkTEQpf9BmMR5wAEKYsNsZhnNZh%2BIR95cmGgZXqzuOwsWpUsnAbDMg2iR0Hz5ZOkRy%2BWorMV6qy87D1g862vdcOw4FCnzUKPQTXouMQKyQjhSUnqcfpOW2Egua3esHSYGvKcxGydfamjw5IDhRh%2B0krPxoMcVi2UwHwLRRKXaAV1sbNYosNdyJg2MMa2mr4tJFlePh%2F&X-Amz-Signature=77affcef0fc282b78a03c52ac8c2e82b34464afac7f849c47762282b6ce541c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
