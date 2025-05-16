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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4OJN6O%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiZtyZr6f9OPmo9CNxqnYQnlkFA%2Ff567Uz3tIuItq%2FxAiAQCcrwBRnmnUjcwuGaWSs0KnuotyBM0nSiXMi1EAMlXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMlrnTtn55x5ezfXYqKtwDEid8ZhLdoKnQOrkty%2F5WVqYBxWHqoey8sBpo2w8gK7z2%2BVj%2BzmfLDpxjxpzZwX%2Bji94CFBS%2Ft8q426T3gcgRNrFzwMnO3OGL2XL8rdfFHD6e5j%2Byz2N44GmxFF5HN02mRfDjea3UUKIhPlHjXt9eWVM6B1wytohWz1RnGW95CTH%2B6zl1uXJx%2Bt%2Fv3F58WF6BYaQeGX6FkPNmsAgKRbMTnvbom4eg7CD2iMsKBcGkCuHyc3ZNuyKmPacwvCPkUFXhvZAc2CCnp6CeJW7zRh5IAb39TlNrFwpdy%2F0LeUsMu7ZOPvBmE9xsprg%2FzGIKjyyHpNtMTJW17fncS4V0ExGNpaSi3JfqAl%2BzcWgjBP1R7Yc3LQrCRJlv7WkWpQs542HoIhZ6vvGkD8qGBmXDP%2BAi3KyB06qSzdIGtt0ST4m8iQDEjtszPlMWG2HGL78iD8ZwKQLR7ncqdU1y8JPBb%2FvYVQ82XIR104Db1XG8DAjgg0I2dviNCiHyg%2BiD5EH8wBSbqommA0O0OTI2EWyNbUmw77G%2BQRMI2cldhThkBtz%2FFk08tTdJVBJP1FAQA7uUoibv5FUlQ9Ej2R%2BP64mygRzLyAh5YnLHD4euY4SZ1E55rl0ARD3fUJrxw3wEQJIws5CewQY6pgFpwEp1gxDVCS6cmxXzpzqi%2FUSjEFwROgDFAyXK19Ce0JC4Mcf22%2FqDZMCl2kgRO6Y%2FWOq%2FFITEHs1GwdxrMhtLIvHw8aXJpimhnK%2F5K%2BuDbotdV0vZnKU3o6wJwQhdFuRAaV0ykifdEPCyPHMqBDLLEK%2FEpxT4%2BI2PoKOCxju7rFYaOSNU%2FYrLxPPp7eYtQhpTRKlU6XiVGEvcgv2w085RdJCfWgCI&X-Amz-Signature=16b8001a87e43c9ef29dbd937023a6b396f981e013252cf4586c5586f0e3dedb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
