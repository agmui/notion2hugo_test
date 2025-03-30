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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APBOLW5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFqZe3wtjB8IDlHW34UcPT6UZEk7HYejzGWS%2F%2Fw8BRQ3AiARgtQ0BPuvPv%2BYEL0T%2BTFz2QDe%2B50u4YfEMsekbTF53CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2mbIJKvtCIXJCyHIKtwDqWdW9YYDqb1n5139Y99QDfX5l8yDqOiDQEHxX361DCCnZsgLcCBffIxWsyPBHuYLceAQqpSE1NvkQ%2BIy45EjFdTMighEbm4mjMYelrCpX0lJyEkByBzJw5JNlFgFd%2FDXZfhXtRXZTmbHBew3atXRgENLFx6Ywt9VW%2Fof7TwlArKSxGX5qMh6hKSeT%2FV9ZUyb9L3kAzBE0B39LVeNV32dhB1fCGD7BJ56C1DDl%2BibilY8R99KERo66797ojZC9MV4XnIxtfZV8bSgUB15IaM3BvGc1HgwVTSOU5xHn%2Bdfk1%2Fp7wbhIpvt9ISS6DwEUeBMZjCV4%2FaogGBaJyMybyJfmvoxHQVaDwHfwanQNUEvhslg%2FL0fPS2y4sdKxT3d%2FQpzp7jfEJcjNMJQHVxyMsboA9GB7qCLoqNzi2swJyLfGQhm3q1xEDh6GSavIMUW6h4nBtBoQ4Jl7ynbzF2tOyycpL4sJHxA1g2g%2FvSZqDMTeFrYzgN1ZSQ%2BW3QOyZwCTo31xn5jrP%2BgQUi%2BEwBUq82bnIQ%2F%2B33K1ejz2Gq0JBZNbqdJs%2BwIa6gQ2D8HGirIgcdqIy2gHiBhsuaYtVkeoF%2FiPx0eB50pMcLpN8hHDS23B8Jovk8zHTOQ9gi67YwwmeqivwY6pgGsQEGaOiCj%2B7EEXW3f9Qj0RXzL26rrjtrVxScYfXuNtMSO2hRzg8bK0ctg581N0LLDVYf9xEqGEOjA8sgKQcJ0R7fSRkQpSMJ23oLWQ5mtiF1iPd%2FyrCW0sEelEoqrFCqMywe3wPhPlQThw9%2Bb4i9GT4PDaB2Y5P%2FsEnoR1BL8PJsav6KUsMejrmFM2ykbqtCEK7yTiw2st5T97wBWSR%2BcNUDqvYCW&X-Amz-Signature=f4acb8246f2bc8e82cceec937db67f381a709e6dbdd7a0b2af0ddac025bd4e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
