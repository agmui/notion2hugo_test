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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HLNVVJ4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCNN%2FuJCfTediULjhocrsQXVf5baYKwPTi%2F%2BUQ7e4IDIAIhAMy2oegiRfQgrkg5GWOrjDBatwZfqc3%2FEauEpmjEurjVKv8DCHYQABoMNjM3NDIzMTgzODA1IgxYglzjgBhPUz9m1EEq3AO6cV3lDhe1fI5BmpxN%2BjMc%2Bh7O2MeeXf3w0yigQlScgFE0L2n0BcSbYssbk1gkPchw%2FayvmSF8bCgXLADOJVi7g5hakpmba3Pj35xfhjRjMRFVH%2FRAlPkFQsTDWonaBig%2FlEdUmHCPj2eBZBqJbBFLnmdaHeIunqIInTfllZI2Oa3bDmfDfnc7HB2PsC%2Bc5J3JrJVSFHDLEH1mkKd7Yh6aPKJZPuhRVqmFDqsJYRRGH2VsPyc7pNLLfxTg0PcjAwm1JFIoXczyEl1CNJ%2FiIqmMdodItvxQY0Esx%2FfoRsUn%2B4NcQr2uk%2FPZopYDkOhq3rzCyZUxIe0cA6RSDMS1kn%2FrqmXme%2FOePPW2OGJHz6mmDVEP30WTCTXOLFeqCvF4gORTu5FkErtbitG7fFrcMdOxnHGFU826TsWUrIdo6cruuexvpuavlencdWK5bOTALm3ZH%2F4xZx5Gv6wGsSuqXwyYj88%2FdfhZP%2Bkqaa8MaGBsWj9XaKkQLdryVuwqKm5k%2F5sTTt4S1RkLhAJWHQNFFMsBzXsRe5xlHV5jh%2B8IavZ%2F8nIQ5SU5QcZ3diVyqTc4Bkp6v6sOIfQdAwZJXsh%2FVI1hvTVSM2dPCUzk6So8illW0tNgDnKzpwrP0xkTtjDPjJi9BjqkAQLXYPkkv4zdSTnwfz3%2Bakw0Af%2FpIPRel1pcUX8YS0oHqeS7arx7OrzAmtSO9O3XBeYYCJtq3kmZNuc35zDB6i5L6M5Fr0PQ0Aoo%2FJNONYeIqBsqTt5YAOwLMffSGC7nGdbPMa8YHDh48Zdf8cEfS%2BVSFu49XRnXOz1sbkCYi82%2Fqc9SugodwMSyKfg1KYwuoGAsU2dm%2ByExjRWQbImxK%2Bh1ijDX&X-Amz-Signature=b7282e14f21eaf27d6889799dff08a2ee5e0cac6d09b5c3e2e9006b305abb674&X-Amz-SignedHeaders=host&x-id=GetObject)

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
