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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLISEJX3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy%2BK0uYGjbRIj9gWwD%2FCoYGFyLU25FvE%2FIyxkptSlDVAIhAKjL4AcamJFFGwntTNiRCFjR3%2FoGaHLX9%2FhkOOHwegkrKv8DCD4QABoMNjM3NDIzMTgzODA1IgxQYeC2lMMdBgbOmwIq3AM0XEqrYsp0ddnXjpMWLS3%2FwWLVAvCMNezYg4bKCjhrQY%2BBdy1WEEOxwyG%2FpYjDXeA2jJ7LiMxx8Z6QBe7Zb0mXzCQjZd0lSBSlb9SfTBGWct7uLHhdCxWXeFkZBSrZ4cA54338Bkh30ZJDeFg5yFu%2BmmgSSApKQ460IFmCJ%2BtZqkq2ANpRaQK5xnBZRIAnXxCVa4GHiff1kf4uDgw7XFDarCfC00fDRkD6L1i1znfxq94vtWgWvYhwFiufSMNcBeDKMj2y3YFUCfiiXIdwK9vmLxZQU6tFkqc408lO5Dvt%2BMubSsIaF0kPE3sU3ELcgMsxdaPspvPi5q7unDQmGHoqdiqpq3ldcNKLhBfRXHEi4LTdAsTFG%2Bh4Wd8z5iIfZLxrNpTPVaLt0C9vKwWcdmNYwU7zR930GBuk2rf69UUb2UWXroOVavvRLF73fdSD8lic1bjSr%2B2K15KpQU891mwp%2FeTwgwEg2gJ9syPloGFYyOpLW2xrq6EwK%2FLplS33sSOb45kEz1MQ8de%2B4zDQGXq6j5iuAWZtZjssMPUPAlBT9nJk5Doz%2FiJ2%2FoYsMp07wovDAPr5ECPI3qqduaUrf19iRpfkCBbCYfwwoT0h4RqxAQTh%2BEx9VMqz9cW1jTDzhpvBBjqkAfJZQH57R4R0NNHv4z8d639xJLyIhdDl4NTXYUM%2Bt83AJbXmxJyG7Fu2yUeVN97ynoh3j8c7t4d%2BzhIuvtlmsWuGgZpXmVTpTHsaUwy5yj7a1kNCypaoamdOuX9o7f%2FKYiqt3S2lgSumruPU6OqAR44yA8qCqTE2FjsS6jf3J94U0h3qlK5ABTXc%2B66Ii5mSZRF8vlv2EJaWYX4BU0y%2F9UDYL%2FDE&X-Amz-Signature=c62045748895f19dc5ede006f5f0b2fbc4c28f13bfa1d8bfd9b0692450f32f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
