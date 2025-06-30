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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5S2ZBCD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXleNSArbkFVNNkIFv9sYjizFg0LKREfrJc6vsFCs89AiBkcyEGHGJNJ8UtweXOC7%2FuZz2EI5AoYGlcMT2yTLNkqiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFjp7Y%2Fs0e2tEDczcKtwDEMlfV8CDLTD6lM%2By7h4NFkQzA1%2FLdGrrXRche17%2BxW%2FbMjCmD0evuN7OS6NHdWSczvhZ6Q0rislfaVUELENqeFVvokt1ucc%2FJQzKvCf0RCkg2dj6AVzBFrxLwFKjRul9tszlVGVUeiYPzFgm3DpGAVwjmZgUL4SUUISWJMny9MUW92zAVUY%2BtL21srz88mmn5gh4U9AN9gmhfDG4L2DgZycvTc%2FJ14h68K4Q9Su3mA67g5X7TSNDvsm55CAMJ%2FnW2Qf2whCB8rQjKfrgUYmFiAxn%2FxVQNJVSNZOWu3KTt%2FmRVZ0scVDB46%2BAwLlJyfivVKI14qKKIaru9mj7M7sd0lxwx8qY93LtfRyenI%2Bm6berD%2B8YpP6NaJkUyLa6OkuBW3MR1R8Kl%2FL4utoktVgLVeiDKHjsKOqvcz8fMUAElzN6lQXIH9eya02I8rX3btREXOqafB7PertZ%2BtscdB3C5N8Zg7djGxNG0u7bVH9FFAuWUq1g5RcRu74SN3ggb%2BGYhUlq7OFmyDqTQlvVS7nTJX6hwh0D5WZ557DTOru0Q4Wsz6FkpYlT6nkcLROkY1kM3a7i6yEvn0Lg8dWueKulub8O7Kixt8pjhpzaoVOUvAFtaVnEaj7VOcu8g7Awm6KJwwY6pgHBSwLlyrbz3VbhXluRjii5TbwVOlZMoVg9gCuNibLbC8pnP9unCpr1NTSUSD2sc4P%2BV%2FP%2FYplyyjQt4KZevBOG2b48e6WEeAsyC4xBIxmVJvq5YShAkScclK1Mov2S7vWWHdFK94S6YySE3R7nmqp217S9Qx3K85AxUURYltGmzHbpxF9uv10gHvyzdxPuDjmffhaHwJ%2BT7ZUv3EuKqSguMIRkkbZN&X-Amz-Signature=b483d41c28e184e7bfe1d5e1cef83a581ba987f0b03a99494e538155287ed229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
