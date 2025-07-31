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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HRWGWQC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbNSgSApIF1e%2FPjQAGqVQjlyR38prlML85PerI%2B1VmywIgaXarfNsP%2Fs4QylPPl5dRHu%2FxwpBa5SJvQLemzWxKqFIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCJVxIBqR3eeL%2BTnCrcA33lFujEkUr44vAmnLQ9BQfL9AxEjyL3u3WRo0D3Aj0fVmCTsbbJ01wBboFv4m9ixmSU0zhAI6QouVk0AArFuIKwaJnIuideAG3GzwdBnt1ISmAlLVx%2FkynpeBs3uAKHtqbMKQ0pGio9AorRdxDrxbLnhiKDXSgReIyGUAzPT%2BrmQsGUmhy%2BZrZM9c75rWvZ%2B8BH1EiMPEDHKynVmnWCWfEa%2FPC3WHz6eszfzNthWUckOFQ3K6hIkl%2FqmSPWEkg%2FzXC1SMO0epW7Sjks%2Bc5P%2BRsFW2EA9tPAxX1wBPSRjMpNYIqUMY%2F5gRODbI6FnD03inNk0ADxaTaMQv%2Fy%2FftLCituOOdPuP7iVLA1%2FrBE69VqEkqwPFoiSSOnaOhuh6n3aES%2FjdGL0%2F6XqtGbZkobQumq5B8VryJ8ATB%2F5IhMX1OCEWWKz4BW9z2ALsW7tEfoL4umBeU95zWGMey1TweyFzrQfgA17XwOAAloxy3dfATTQ6mPkJB775%2FXXFewZj3ajwsrihrkZHWrvVA2rpue6CcmHtmLXm4oVT%2F7K1puuhGF7WqALWQt8n6pSyC2qbxdFBCdndXGMsyUAGkRJGpACgTO8tz9vbSrnaI4kHjL7IQQd%2BtybMaSGFnT1e7KMPCdrcQGOqUBFx%2BXMF%2F9cHPPyAFM1ZVe2ugtyoSEsT0P6Jv2hayDMk34kon7ReaSzPVH%2BTWAWmUUkorHj9rmguL%2F63%2BpNMLjIlD32F7PVk6ER%2FDWcc7qubHKCgRuWHACxSj21PlvNRLxIaBjMFyjY%2Fb6hrhZoviRLbTqe1O2LXqOpda3h4QtfawlV2v%2BJ2%2B2AFORkqXBhSwOu%2Bt1nAbqFEQt9Pn737kLTLN45VjV&X-Amz-Signature=fc97ef2eb6e87ee45f5931dc70319bdd5fde5738b05b82154eb3480b1e7a6473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
