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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FJC22KC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhIgICRS8iWkmtL5oG4lYmJ1tMMi6fnik3C4rQKUVk4wIgQ7nTUIYQVgAoN21SLfc%2FwhCfSVUtpHOFOecvQRpJ6O4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPACmXiRsiVrqxEF9CrcA2GqsaQficeg7Jn7IXeBFr3HH6QbVnmYDBdfM8eXXh2hC%2FhYeOA4JjGvDZxhlbWNFvjgyU9Wiv%2FWhFWkFk7WuidfnvWuZU07%2FG2AUvDoYxWoPWXm%2BdMH1PXZKWgdPF2bhwKu0RXKAlQ1jbZckFfziyXlcjuXOzynM8N7zoArdJRwEVLtViV0bG9%2FlVQFNRAaFa%2FNcFALND6P8A9mrcdxi4zeat0PfIzfmdaK7dGm4K4743EEmHc6uikJLsJ3jEEaUvJVgfruLqXQ1NjhkbBV1JtdFiyxpjegveYOfpgcFcvMXLOmDXZHp9mZeklA3dVqK85fw3dk1%2FOUno5Lr3PnuLGYiCp7Aab%2FEaurFusnbKNIngmI5cD2kvPZWu9tmV12HrcdUX3lF1dj8ayu0Ea81vnDHSoaMWiI1wn2IvMZ6pVXMAno53NcbF05seq0u1Ov7uZ1f4B8JtVl9IMlMjys21B%2B6hKF7K%2F0yJIu8k3oFXqyoTpCnabraOXqErXbMDOFVZwbZQ8%2FCEk3zbgtCO3%2F%2Fsv9qie9yU1TGKjJ08vXu4bKK%2BDL1YV9DooCk1UfOiBTQ%2BvGvM5tiqdKDFn9d2PBGJj0Xlg%2FRI9L5ULIU3sWvwO3MpSQNdDSt9CCYUEZMJihzr8GOqUBAUxPEkm%2FWFC7Zxrdvz5RtiHwfguk8dLhuVZ8UasZvYyGPtAA%2BUdxunKyNW1trlNWmKc9DCB5aArbdZ%2BcEwsQgiZRyUoUSWQNT25c4UByC%2FeThSn6rJuDn30Eu%2By4sU%2BqIZk6tewVFihfIO3h7jn16lV2nRvUcjkQJehZWh3m5rFIpwCygLW30bX5Eejy2%2FrcfLWsn8tJ4Vglhr%2FTd8OYdp30PvPf&X-Amz-Signature=23a9b92674205dcdd8353fa5571c5ff472c3a85abfe67ea1181c76e73ddc23a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
