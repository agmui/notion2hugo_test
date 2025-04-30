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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYX7XR6%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCHa5kR1FFxompE%2FehuWtt%2BkxjwX3HjP4Gw9M0Nv%2FU8QQIgQz4fnFygHodhQb4IVgCCiph6I11veqq6ALXRF6cy42QqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6IMJBA81L3alfmOSrcA6VrvK0VI2%2BWtEWRAfupuLc8SnhPa7rAXj8uX0P%2FBoo6iicXcIgZWThhggdEa5zAB2RDDQlCADiNTc7KCbehLe45WHiemJhX9LUbwkl5WA9YatQtKjRS15jYG8w0fS4PxoMx7HofuqTv7DAfGytLIyori4fF8GeFIr9GMHzGfh0tP3RJaMWL9mhH8iWls%2BmlxgMJU0eEH3JcDhFaAiUVp63QdtAOQv3eOntxCW8FM8KyLcm4icU%2BSzRqdQnXkAw0JxdvM5RnUthjV7vAl8NY8uGuMTvoNuKzXWXBpLdqH7%2FdM9XHO7BF%2B%2F23X5PWdLVcL8YwxAeUhPqxs9NEVDLiMmS9pptmgcBAWECLA5ldidxhKRVM%2F22DKXgya7VmH6mKjqFaHO41wUL4hXNxX%2FK6GTbC1XJ4znLqvGqzDDqo9fNOxKmXoSYca4Zxkk5Dj4CBI2uBy62qbxJ5F31Ni4JRRGr9bF0CG0HPUT4grPecXzSfT11CirNQ9%2FVC3uG59HSUMlrEnkWNrdUXR87WthlQ4moVoljaneRbT2iQNfBOK2YtYTXBa2x%2F%2B9ypQPa9TJCt%2F3glUQb6tloOYL3Zmw%2B5MSDYoST3xA06uV4jbMykHE%2F7XgTgCtBv8srBlEDGMM75xsAGOqUBMaatA9R4yJxT20Acea0wfeqCU2bnFi8kEOBVHYN1s%2F5NaQUOtnfYDsKX0sK%2Bdij4BAqvWKnJSLzqGWpJ5tTl7cdgOlZ5pMaD0JNCANUAd9eQxS1DKVCrYLY3JHPi3i5XZjYkzBOhiq4NaremPACKZhV82B4BpquAdO7%2FLHssFFsZPayRdrtQZAz04%2FRc1NnhEfu%2BnmFOI3pwHlEr0vv445EfIwsn&X-Amz-Signature=2037272f99db9387457d22beab54423b1c9d2fa86f5a119ecfc78e79590cf261&X-Amz-SignedHeaders=host&x-id=GetObject)

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
