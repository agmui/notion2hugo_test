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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQF7V6M5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbDpdPcQ%2BF5teo6%2BpIg6fPNEMV6XvPH83xTp74y42qNQIgcIqMbnZ5m1OBYkjoqR3%2BvMb1%2ByLIm8wL2FYznkdl5QEqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5pP6EoU9wl%2BWIO7yrcA6Ve798z60IbQQzj0y5devrp4pvhp2A0y4kCtcLVIZaWZ0RXvk1PjA9prPrga02BdLUEZMR%2BFs0h6P38HGKxxSPdeAWc2lfMt%2FdRgnC1mrYX5XIfiELyYALj4Q7ynliEvz3krfKE4b9CRhpazy6HmUkLKxS3hCrmhtEJDV4zGopqEAfCKstDPk%2F2wS8S8B3Jlu5FZ9BhyGY8fKZPskvxz7g6sPppatu%2F6PCM69%2FKDrRc5jBA0A%2BKv%2F6D8OZLE%2Ffs3xPUHUCvReK53Er08K3zl0D4lqCJ%2Fu%2BHLTJX9U6Ai%2BTKJoV2LzdGySg4ln5UP5GjMQ6m%2F5ao%2BCxHqIBIsXa34DcjxCClN8SbkfvBq3SR00B9JOU%2FSFaYn14XqvsWRRQoXOi0zhnOLTs6cHQK0Y4rXOhJfW9G5gSjnFQgqm1OtYJhLjf8T0iYDQdfwP1GPbXRyEsj7Y2iRlD2MQjGcpJoFgQCk1nomjP2qXeIrlwBnZEZm0Pht5DYtS9Lxg9lUz0FlejO7snv6P1wLqXewBkyc0j0CMTwqBE2h2GCuJTD2h0mV91cuZvPKBWS5oTrCL2Sa0LsxOk%2F2SkV2pCjg%2Bad1pCPAEcQKrgYN8mnWzw1n8G5J7S0fYnY1GnQk32OMOX1470GOqUBEWymlC%2Fe2pdR25BVoEE2agLAaccS4X5kisw8q66xWtZxMsOVUrGxx%2Fht8GjFPeeLK0VwkII7FNqr%2F2AcrTc4xb6UbrYNB5Q9O43s0Z0nV4tHK%2FVnBm4c1J8Rw%2BkfLjEIEvyjS5Larn6JkbQp0Pp9viILf51hQzmOr6VDw%2BJmz1Hxo8%2FkZvXz%2Bx5Y%2BnwS8vcrFSOEWvXo2pQZ%2BnwzAh11Z%2B9ErJ%2B2&X-Amz-Signature=502e3337819971c63a7ff10aa5aeb7c40acf9f2ef5f826a9ed84812b07a6f8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
