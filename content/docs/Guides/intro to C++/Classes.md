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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G5LJ4V%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDmHd%2Bm3zXaB9cRmvp9jKUhO9%2BuAdeZRT9%2FblNZ8PjqjwIgHXzP0Fqg2eJWk%2FqQQo8XKIcHTtj2NE27wDKYdSGc6xcqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNsSoPIRSmIXBGU5yrcA3N%2FJIzMuyAlOTSq7KbsVrfLblsR1JwA6IF8YGnliFPUgJ9QvBmr%2FhvtuyWn4jOsepwGc%2BUbv4%2Fc6DEw6%2FrybxBuMI0Uv5oKHIVix70Dnli7ze0XVzRFqUm4Q3lk4AKNpsI4jt2TvVWM5wBMdkUlahWEh4C8GChGaGDaqL7EzKO4YHgwTriWmaDsUHfa2zyCgU%2B%2BQXTP3dE2ijIySaVLcAtE9sFEWQP5t8UuLma69%2FbcVvGEO6wGLqfyebdtg6yDhhX6GkUdVkyXBpsDtxMhnHklu83fX9d4sYWrN1vrAlv0Z7dhtheTtr2iTyoWSIbCXgIvBYn%2Fp696LzCbd2XFqmR6FyEpB5JAc3UVNRlsDK5F%2BOChgPZSvcX5lwWgZmkY0SxdfgvWS9bk50VG9c9JL0G3Qu2cLY48kr8KK%2FNGg8tTRRhQRCfABZzdycu7GJwDenMIydVHDSzHw9bowHBzX%2FVqKIc5WpF25i0k7KlBislAyt%2FCKanzjo2TtMmZ7colqsKPugx%2BYthk%2BJuQs3jO%2FUtIPgsOyTsdsA7smGI7EXftf%2BoIN8ylY8ub%2BFSLdwMKwDX1KaMwiEJXnUAHDI%2BmVxhr5jl4c6lELQPkHWkBWnUNCnGzhaHG%2Bp9AkaAjMKqhmMAGOqUBIIGwOQs0UfH2D1mEakT96Gtzom6u0F2XXl2T46lqoOlF63%2BAMthOyWkhTI8RzV92C8CkmrZgawkK8NMpMLgZKoBw%2BdlJWqdZs7D8DFUYeN6v%2Bs4xrltlKFcpdyMPZQGqcrWP2DwonUi%2B71G4SYqezKt%2Bkkxl9YwzvckosFBrSzRujSG1XEd6ZJWxHfyClv1TeDpzfqle7zydR2dUjgA9g2imfXSw&X-Amz-Signature=ce27edb2d69c556bb6b7a54c79b9131f83e2bb48a0cc2e2abf258009cea1dfc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
