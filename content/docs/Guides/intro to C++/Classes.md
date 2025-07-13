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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U22MIFIE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1vw8bscOv9%2FIRY09w%2BPiUsQDah3D6iEev3f8gAAPl7AiEAph4VoC4de2oxJCDB8zK2xhvc40UwZnufcFIjn%2F9K%2FMAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNmEv4U72oxu8rMLDCrcAyqr3sxk9DUcs%2BK%2BJDO%2Fdu8DoVycLp9EUkF%2FQW7YORHT97MqyfT9OBdTNPaE5c8J96p28tEQ%2BotkkG7xBYHlSP2j2dSJMsj0TC9W2etXP8n%2BOwwI0mtPspepQCO671alqKlWCG5Ao4wEZwCvpy7l5c68x91DPzzrtYhXkSLn5Tv9LOhGe27CJ2RGDW84MhdX34Jq7OgXbDzyvPI6iRmN9MfbeiXnRgRyMVNyC6KiO9oFwkZ01lZqwteh6wtLY50zgpbRho6oW6OhfNCeannnpAfifHzDSfET7XdInyfZKrfbPTdVOg4SQR3K9q8FIFAsfRFJge7rGKWwARUJbCbVWhs6O09bp6zUSORG90fN44S3WoRXRvoPoIr%2BJ1CU6TsqSbTg60ZtgPxzmbSKIBV2YIAAEbP9ztkNAOc3FM2Rp4LqH3OfYDdQKgugOHtyyq4MwAk3N1zCfmQAYG7DA%2BZ2RHbM0cN3mY0svi7O65LUhnlxgU3P5ZVbkbYZUZhDQeJOU%2F6fO2O%2BxvFVIWtFHA8kEzkExNgsgALTCzLbi5D17QKWtKXZN135nOX8u8tamtRlCJ2%2Bt3y2UlxnkI9gAKNREgWHUafS4EyMKyn7DZ8A6ebVILlZYJVld%2BSUtz22MLWkzcMGOqUBPKN1k6PWoxqwEDY5CTM%2B6BYOnBVQ9ggSoq%2FhRBW6ksYS7m7gRPHULv6dslSG42pXrQ7V8P8mi97Fm7KIG1nKsO1pbd5NrZ2py6eOxJTYtC%2B9bii%2BJlMEvgJgS%2BjtfiSugSbi%2BEYY2aDPpcs1t0BvNscdGNQrVhYkdEepdYSHMT6R76TEs1YWfq9W1Kjh%2FsqTqneL93SU%2Byv5GLXc3xdCjkns7k4C&X-Amz-Signature=3423efea63e2f52d5dccac8e2992b2a919e66466ace73f7c0cc2e90da4c6968c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
