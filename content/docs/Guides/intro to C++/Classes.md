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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YE4LIFT%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH8kcqfGhXasgxl9pZkOka%2BMCUCwIQZQCgPVIeH0Jc%2BQIhAPLWNi10CETZt6plu9%2B2qRPfZ0DzQgPNJMsJ%2Blk0jGExKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwONC4TJfU%2BugiV0Rwq3ANAT5cu540MXTKifLjtnmfovoC6W6WQMxvK7%2F2WPs5XPu92HzP1a5js%2Fnh8ZSG7kAU8Z%2FWaFdiRSzm4FQzYLELgoHiZjkqpDTKiMBkxgWjaCi3wB%2FoDWkuoB5AycVpBhzdwbb1mHOPJmxnuNPTU%2B2X8rcEgHODITn4ITBfbDGbAmR9RPGPDuJdn8okaQhvAKk85k3zY1R6CgBnNRpL0friQIKHuE3H2174foJJZonuZxa3tmciY0Gp5f0cAXteR4qT8LVGW9Ieylu%2FICSCRLoc32QNnISNAiNgzNDy5uGR3dLu0L%2B0PvyzODgeRXcwwTcP6mtDeWuDjFY3He%2B1RuaY6csB1GEtZ7JqsiCo8GjhUH2p9MatMQdlIkTNCwU5h3q2rN2KMmEfjUWp9PTXQAbv0hTbFee9GRoUQqKbcfzTo%2BS%2B8zGsYdwHn65rzTf6uL6lKfW%2B4Vp4LjD1y%2BXUCpNqhUeASa%2BO9zKpU7YBR0aQXIrWJ9zPJgnZUs3axUbLEs9O5ucGyDOdazCs9pFVMbnIuyp7uZ2hl25T%2B7VW10f0J52yBTvbE9W6BazoXGC4hOhHdctBNfP%2BF1LO3lrOedtgerVT70x3jjXJJWpvd9NZiDOVN%2BB2eqXXWC8mwczCr5v%2B8BjqkAdqiQpbVWn%2BYf6gl0bnQTlzXjlZ9Kph2gaEzrm%2Fv4C8NPtfkeREIlkzFyfMah71ls334IiaUu6D3GDZOwQrVqIKmHlpbXgZanNQUmOJ1RXymCZSeuPVIIkllA3WfAYPo6DpHqYPwFfKnFUs4DaL%2FHlxSD9IEVTXX7NV554qMKiEHZ1%2BFKQI9yNtJ6E9NGm1spRaJZgXzfuR1Bfs%2F3pVQFJpH57BG&X-Amz-Signature=d2b2987a1ee8c4aed6f5ad487349cc8dad7ee8a14755a404e70f850252213ac1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
