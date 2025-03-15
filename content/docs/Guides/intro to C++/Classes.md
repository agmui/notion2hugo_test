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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GCQACTT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2lZVGCXxc5deuylY566dCtFLiqIoSM8I9M1GU4oeFjAiEAqayXnF%2BeF5dKijrD%2BuxVc8VJuljGXr6kb6iqcH9a%2FVMq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBBqhDZrQsugTSwpayrcAy3eua2j%2BEl%2BBymz1RxYSMxE9em0CdIqH4UfV261qav%2FsSgpkwyYgwnLAhgkR87iArtwA8LwkWKFvxsRG7o3VZfkdQHxDGX4ssQ%2FZnoLulOmSS85wKKVghWPte7NvQgzJpJiUPFfEK5GdCqiNiFSPiz0BspAgb%2FNJG%2FVHKh%2FHf%2Bj7YOCHisCzuINSRfxU55l6PCkXpR68o9I9e4Ho1drkMlrW81A2IJrTKGHHn3zYYxKEu80U6p%2B2vXXjFYSEQPOS35EjK%2Fx72tlrzZV7Q1TquJHQ%2BW76QGOsp%2FG2GFBMPRUVax8Uy1swbwamKDO6gdSBklvjcpf3AYuiAsbz1zY8HA13Cl6oC4o7CIUX4D551v6aCFrrvx%2FYy0LIyRQxmtCoOJqwHwQbSnn3L0G2LgaOZPbvqg6Fp7m5K62BO58r45XArt1xFYzfvOO1gNc4hZ6yJ%2BSDnS1PQPfa%2F3U8kaowDKmDnb9Z9G3a%2FFlIM%2FoNDEeOpi5plsDXei65KpVUH8fVU8Mw4x5wUyFOlxWdqH5QUeCWjwHn6SYY0L8qzZ9v6JApYaz359phJvlOxq7yTil42Ht3UD2yzIwE2aFKbH8UtQnx8v1p08HRsqZ%2BrS1cscV4LQdCtoPpROja%2FVyMPvh1L4GOqUBMA6woGaILUqHav86%2BTmS9ghkBs9RTVjMlPPP3omjh9B8jpTSl2ZYIukiqX3pW%2FGYqYyqHrNFVuZxhu6P6W1n%2FxDJDNi4qKlWRaef1IQ3nDXOKNiKNCTLoxfKJvcVz5gdqs6Zih44PD1orCooMvUXtP5PPrNgtN2GlN7qZ6NEtFhT%2BTnpyEZl6u9OwULVjj7%2BzoXCkB6aCMfAXre%2FY8uc3GRPns92&X-Amz-Signature=d4b57ce6dc11f5923fba582ef53c3d751e718d33a7fab6f17a2a2312dda99d29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
