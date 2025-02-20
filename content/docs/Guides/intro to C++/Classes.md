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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKP57VQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGulJTd05NTGLVuWDRyAZxivXDI1MQC6lC2ymum3DeCqAiAaHGnm09TLUe9Ucwb47WMl4RlUSrJzzdsvjqy4GEoNkCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmZWTsyo07wvVZ6UnKtwDBUMOV2eFgLkpqnoxgYXEV9%2FTlhz0aQUFh%2F%2F3Z5euMwkL5CxxWe8HWMX0StbF00BfA7D7z%2BZpbYxGp%2BvP9GPFikYiBuWRgsR0zbBqAJ7wlCGYldUqKYHBSj4ziJk3HxyblL5pJqz28ncQxNNJhrYmRZ3%2BVWEIqbHskCePDo4CGg2kpG2fUqE8O6U3nbmSXAttRfFqNPz7KEm57znttIQdEPn3wMPMszDcXF086dOP4LLj45SO0OkCaBykmhC81FrYG9IaLTBNao%2FeIayUto%2FOdkZjE%2FIjLn%2FoGmlBMlS3Ms78K4oEvD27k5TxjF6widVNv4t%2BZvcLWU0HK7OXnA0AlS9P9ocq%2BkVdiLynInfdsOyo2N5v4qebT6WnQPlWYZj4rNnWbYNBWXxAkKnx4zq53CAuPiqrTHndVst%2BOEnzVs5VxZpftZ5senaRBQSin%2Bmwdukh9qY4yLZo80I65uNKytDqUOc08L3I8cdGyjE1I%2FEUdnUDb9xyUDchidFJDsH5k4bQbe8%2Bwqa0IETknvcExNKMQU8JmERzduhbeJMWv04u7NeAWtTgWGdZpzY%2Fgbg6OUzB%2BpAvZ1QRB3Mq4%2Ft21WGhbRi1GzB5Kj2kaSgWDdQiYh%2B%2Fo%2Fl89ISzmAEwvMrcvQY6pgEM8jQeNauvDTLdtQyIRBb2us%2Fdm5e1fZKpaEK%2F1e7MUqhND9Z7GFVAaJKwO%2FgkV6esIwZ0GC058D1oVp1%2FszalFznd3%2FvNxGgKMTkk1SAY1%2F4W1qEPRKx9M1KHvk7mG9hX7gmZ0HvJcD8b%2BTN53b47P%2B6DllYeN3lSOUJFgyPhlt93E3cj%2FoJmX%2FdQqVqz7YZQiT06TYIVo0eg%2FmgK7pnlE56WjsLU&X-Amz-Signature=ce9e7dd54eeaaa90af681454825d103db3654277e89e22ecae7883781ce924b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
