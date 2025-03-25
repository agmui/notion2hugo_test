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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPRTQYB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZ%2Bm6ShbY97O03CWv6QYseQfFkfN9dDXebsPn76f29QIgF1wWoz%2Bkm4Gg1BjuNWwc3hh5Sqs%2FV8THInOf2CBbJOAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNpCCB1h4A0F0sP%2FlSrcA7mpUPguwS65kXPK3d2UXZjpxycfsTx6LIHAaAwdCE6%2BH9ZEtTzjdy%2BZpEgbnQJrsWc59ontEqFXKxO4Zdcnwd7ACUeHqC2sEg%2B8m6eFlP0EaCBKuZqlYOMZm1chNs%2BNnhgHT5XwPDMMKTUq%2BajHYasJR7mK0KgEWwNkw2NFmgz8mF9i8qYyP7SoIbZWcYVzOTa9xnGt0jEGufCKmSH5ghjoerL4WzqgKRH2ueh2xBBcl0nnU6LXYlnaqxmRTBL7KbS4g60DW1rLgc0n8hI9DSV1UZxHMQoPAK0LcYwvYVsF9No0BQlCzpnp%2FQS6rVNPUBG2e%2B%2BDfud4hB9wbU%2BSSB7uBto9x8H4TTGPoSaTxGg%2FAm0sFcHEDugHIQPE4lF7%2FH0KhwRhHqf8IJ7jbHTiA4odSkEcwyme609MYwoxfHMZtFrB%2FM%2FqOLmfr4UEknwU6IbL%2BkX2rdxQjpbzpJaDBiiuJ6QDt7FTGpwxNx6yPx%2B0nBeB5hov7XLYdwOMV1koZLH7M8kp2gU4TmlpGxn3KTGc%2FwMDnO53%2BeV2k9Blz0NQLL%2BpTUm48d%2FwIrya8GYjBP0fVv1wku2ufMMu8A3WxEZuYG6szayg%2FR9334ZPqxk0KJs%2BXXAmgQS0FbFPMKrEi78GOqUBsOqiBZXD9nGn9BkGomYJrJVl3bI686iz5Je55mxIO1ijIj8FA8aDcgswWCwSTHShm71pYb%2FoffnMEyubM1Or4mE%2B4hnlGuTkUVx5bt1Ne3xcH675SSRmfOFo%2FlEReapebIzM4zUD2yURYa4Pu%2FAiuMY2QPe%2BK9u%2FpDvef%2FxenLRRr02sugV3Paz%2FFlIA3YgiuwdYvCgsHGgubT%2BSHuCb6%2BaU2sEg&X-Amz-Signature=e681325b51e1d9b51161c1f049b00f856083685f3e77969c4be20b4cfe15fc9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
