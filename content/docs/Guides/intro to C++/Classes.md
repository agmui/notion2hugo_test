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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ECYNVW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDOZxf7Z2S1LwEuwn4jDQZvOfc%2FidLaJFQrA9rB7R0EyAiEA3GSnz8UYz27oeazV%2FVAG2xXZzCUHOFy1%2FFcgM4Wiz2UqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmtPrQjrlvgbhAiSSrcAywc2fiXL%2BuT9VELh2VhghHfrucwfix9foBYLKU7k1RpvQyszwmP6avkgH8qPtPhfWEuxOIJ5E7qkV8P%2BffjCHbxgmxxf0Shtlnmx2rBHf8WI7qUDAlWYySX1vnfRKg2XlZF5hx2D1TSvc7gcVXrHzwMAOTDEFCbmNzXhquTbfWuUZFlVm7tjf5ZqKWm97eL0h9oYS4G0rxgvMKP1uDKoKfy9BYoghULM%2F1Op8JQlmc%2FIvSa4G2Ooi3PD9pQG4PSOHDkV7ldjJ2BLKAs6FThvysaqFa3dgdizbjaYsrVr0b2YCt7C1myYXqg6FkkUY%2F1Aq0z0Avt9thTYF1u1r8pct3hDRTcozSB3stdAe9ygEjxjIseR%2BtrVm9kRdeG9BzVgBeWob93RNd72MdUyhZ%2F9iGnAoeUlCI2N4echVtlPZ7UE62rgI8NrWX39alRH1ZtdDd08C%2BwfI5IEw1GAqCB54bszCmJ5fcsMcrjf%2Byj4Sv5QINRszE6%2F4yDJwg5O%2FwxvGt4%2BJkKKzTJTZJPzGXU4efB0Algyy%2F7aKEI4jv5mwgsTfcGRbccIBFW1OgdjRoid0TWRlRYI3z%2FdhpVwYwOqvOPs4ey%2BCNfatkkLztzITNHLOfh0%2BjLWfm1FuNoMPnE28QGOqUBvtIi6q9FWb57z%2BntIoU3%2FO8uS21PWO2eXXd3uhb3Fdx%2BqgVGdsJqK0VsbxPlQUFXYC3HMN39ggPeQH7NpKMxYKdTOCXlGqhdFHMJ8riDLU4UBdCwQBhLR206lhpuIgz%2B3XOX2u82FZjM7isJwbbgdyS5da2dIBN2c5ntsQa4viWRK4kEDz6uLuXqFTD56GJPgkcmoGUTSqmuUbMssywnNnnYncv9&X-Amz-Signature=32c4e33c7a6e2f089fb1d50bc3aa372bb54dd1e1af12f082ae6423c97b1db074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
