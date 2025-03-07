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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWHDAZU6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRkmdEz%2F5nCJMj%2BCwTvzsZaiUUOrl7CC1hCr0%2B7IV51gIhANjRpg3GUzSGM5x90Ql7Z5dTxjVXPb%2Bf40cBCVj8%2BS6vKv8DCDgQABoMNjM3NDIzMTgzODA1Igze6qwHcP3GP5FLOxYq3ANmAHhvkIc21ftE7sh%2BjJAJMDHOoDSdGr5GfBe0PaiVZDt6kRsx4P97JM87eYV4Vkhj7A2jd78l6ncYHJO%2F%2FufZd2JhU1yWmiiEcjeWToASs5OcNntiZ%2FOp2EHOf%2BX%2F%2FvPqLfO6kiLzfQMvkm8UnmtmvdG1ZyRcJ3YRbqVgrdFuDnPf9NBbObcWSdIRTLxRBUb%2FXidcFXe3dXCxGGuUtcvIrU%2B%2Bv21mdLfsdTrQbwspRSMk0lWyX1daAKGZoJm1RDTW65xa54Q4n6j2jfD%2FOAc18sqf7%2Fk4wfy4m%2FPwDtU%2FdkRkiE7dvl%2F4V01ih7MYrBskNOPPuVV2QJ7nxt0JsEPUYa%2BQA1yljyn469ulz6pIQXv8kL5ZICzLBY8hWBq9ma3XO4AtE7AyuIL7IHAf9GJ6G35CoDZBhfAyG5d8w0AulGXUsuO63tjxOKNJz5E4u0RMbQqil6K0SU81YgzZeJidHLZ8b1fKbmNOkhd5JUNXDteSMueE0q6XGiKWzkRXAR5vYn5jvXnByeA3Tr4VGi2k5UduqFJ7naNBRBJIJfTmAitB1v5R6NYWjpTeTFPAlb9z4Qo5%2B6WfTxGwOIJQj%2BExPKJplqgG6fMqBwzhJ07%2FT4y3Cl2t7tUNkkzHQzCVyai%2BBjqkAU40l6YnKcPNOiRq5lvLpsBYCs%2BW3iEFwuuocfgYsHozyDgiKY4B6jObZsyqXt0%2BUAni%2BPSPpBO%2F1AG%2BQA%2BvK9rOd7vbuGFCEPD9Tza06kHo0rBrJqPoaN9Odxo7meDeSieDXAJm%2BqL1EU59Cj1852h%2B9nlgB%2BvUtvPxCBkYXetbR0byi4MDBI79XRQuqK7d%2BwyMzr3XUuJ9vCrKUL2kqn%2B%2FGlbz&X-Amz-Signature=6a6d668c99f1d1eb8014d328cdcc80d2ff6ef6ff340a9d46345f1b3e0308f0cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
