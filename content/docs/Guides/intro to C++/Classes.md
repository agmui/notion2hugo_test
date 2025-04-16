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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVCFGK7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFnwj1Cfcc70u2hUSG%2FbWQ1fRguLK%2BN6NSOmaom4n4rAiAG14ehCocrDDCx4%2F4M%2FrsCVSL40ugt0Fg8ys2raLqJWSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMXKNvVdXshW%2B8dH5kKtwDx9vC0HURALa3TJYskjsLGcm6Ei%2Bj%2Fs7FwL97ItuB6xMHvoCPClfYwq9s1xxggeDTrWIgdmnQEcGbBo2fXijVcytIor7ay88SqFm8JIvrD0TeKYq6GnVCvcX0%2FDVhaZIYonJcelI9jQamems6fQliFNRuCUHyZJDPWBd%2F4DruGAQzYpm6VR%2FmUafWmwFFCbIFpu8ekMypjaLAQ0HI4kPYj0YlOvyrQF7PlYmlDWeel4Ge%2FN2dPb6z73Gpo4d4NN1hdsJ0kfVepuuoxFCm2BIhmA7KhXWl%2FLm78zYnqIBHxn9Bf9IS50z%2B1v7OewePbXA3lHKi7OX41fBrZ2QvKdFIsEm0AMPMmNnX9nqPtDo1s3emcWyZM%2BVRZ21bMq8GCKpu%2B9oTt50fUQN%2FeFsO6uMJshXHY3acmrgC8qCsOFf6f%2BSCAFYcsI6KveXrs2m0eEW4yRsG5eX2zhd6eHSO3HjNJAzQurMWoAPnx42d2fJWC33Ku1ok6jtt8oaWDStRnRdGwINVCIqX4Clc5bGmSXHFnV9p%2FdFfo8IX2h65TNdl0hkCvBNqGM5jmDwCDRZ1U6f1LJb1hIpsSm1tBSpfInDsUjfEShxsU%2BJ50C6ph13mrjlgl1RIO%2FN7JbkvFNkwwIv9vwY6pgH%2BDXy45yZnq9t5HzQtauCTWYz9Nv620Tf56XHJlshycHvf3V%2Fg210CztDMeScol%2BpLBZBS9PLVvtaBas7%2FOSWsN9QF6stIuHV0y1K%2B%2FX%2Bn5t%2BeGKirt4gZekNwL2hOMysQDz5i2sjRItie9Im7c3PJ%2BtEcDqM9oDnq2omlUzsVyJGQe%2BLhXIwBC0h9t0I4UfP2ere2j%2B3FyrrcH7zQNtgPZVTTzYw2&X-Amz-Signature=9cf7399cd9213a0fd9fa16c29e6cc81bde0a4095e5b0668de3a6f5fd00f25dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
