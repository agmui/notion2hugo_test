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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIARMPHG%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCozAiQVeS0Q5620bw8DyeldtI7lGfQvG6KvS%2FVpQKw0QIhAPT86YKSdIZDQa8g9dIdMEJK6mXLc0HjnMX0WZ3dxtvLKv8DCEgQABoMNjM3NDIzMTgzODA1IgygbJxrP5OPBX1ZL6gq3AO4bo63vrAE0RIw6wLB6HyhCE06cl1VVXzn6p0yp5qPEfnhhihNaEEUXF%2FiEi5sur4VlW9k7eRF%2BZmI6xTBLARdD4BCXjPP0GCvR2nE6HUhttENWETg53Bi7b%2B9oVwC2kt4Z5Jtj4tR38M5YiIMLtMCJXgnyS%2B1FhzlKJwZPcypenTJ5u9kveiFKwfkJZZuGP4N6cvfcJZFw%2Bx4x1QkRi7uqfjDh8Ww9leNEiLML8C2nsSJjsB32%2FfT3tlKqIvL%2FJ%2BRIaJ%2Bp8%2Bnucm6sSrVU7SNGHYFvZr%2BZyWZGCahD9RO8Z49l1vYeU9IgHIS7Aa%2FNLV%2BlMvcJcKOI5aYgs98kFZUxf3ynb3%2FWJuNK1FrQYoJwNwJaveDOSACfeja%2BIGBFwEC9eJPqGfo7b4I1xxhxDCSYp0iycfLI2GHwNkUxW%2Fxhpziw%2BoKvaliZnqn08ml37miWDXYPo5WKYc1s3xnbZESVcnDPWOoyEGUBYPM3xx6Fduol6hnvil6U0TsrO82JZqTph91hhaCZumrWDWS3wQgKxcMC8jVnCBM0v%2FR0%2FLZ%2Fv8vwC0qyFNPNaE0lrDxmFq8mOjLJ%2BvsOBi0hW2w0w%2BWSbwP4Y6YyvJz6QYUN1sbl3mfV2z0slTItNoENjCOocq%2FBjqkAXQ%2BPNepsIeu6lcEyD%2BFzu835HUDb%2BFEF2CMcBjzgjxbeLmTI3hURtZHS2gbuxsKaqI5RO4EsoIQXSdCLAujxJbU%2FO12Ytasu3IbWc1JmQNYOuz88T%2FSLD7CbE9EY1LOmds4YKBnLVr%2FAbPwVY5vmPFpM%2FiWYQW4XpKqfOwpj8ukg%2BBoEs3geBbq4Xlc0fvfShHnR6x1qiOWXGh9jjCNxMMGQ6j7&X-Amz-Signature=b6217651680c7666debcbcfa88de93f2e4f0b35e14fc7ddaa1774da6a83c53fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
