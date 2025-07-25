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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN7HMEX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCEGXu5ed1Wi1bLG4EM2Nfen5mrlPb7S8mkeWJDw5rVVgIhAP6%2BS%2BFzOpyYhf4LeHzVriuAWqgoJaYeHm9yiFrsIQWCKv8DCEQQABoMNjM3NDIzMTgzODA1IgxnAMmfTum0neUdvFMq3AMhetXiCWwvQb%2Fn5%2FoXgCyx71mBtqRYKJnTtjEI4gAeFfuI2GpFlmpuyxOErTNrxeqLLvCD6da4XyKQFf2oFmlLBMR4CWKaq%2FUhNjMnczNfhFK9dajmpul9U%2F%2FxndUEJoLA%2FYASWFQzbfNiUAWnBiOceiSGhF9xWEuuveLoAUiV8%2F47hqugLd0ImEy3BzOAPKjlaY6%2FzI6oprIuUYV9o0QiUbcXtqrLKk4kn57uvgbCtHpUY%2Bac4WzIF5mt81l7xnUjUHURrieFjzjgiLm4Alhjt9%2FG60YcMRdCnS9Uix9xR4lqNc8uhYkqBGz%2FhqNmHCrO0SekvQjYFcsH1XgWhrzg8GiTwJREQ4pqy8WQNlQVwJqZQ0S6yaqpUJa3lNTxUj%2FAEIEMYkJJsj7rftL5WZWXWmmGw3WmNQbBs08qFD%2FN50puhhzLa%2BOqKw6y2tjEGrNEFg%2FXIgdQNkAeBbO%2FhC%2F35wJcl52Zn4vFYEA9w7aa0QMMJ2jU5f292KisJD942Mj29FesSM4EWJ2CXnWMhy5P6a79L3Dcv20ooja9eqOJcnnyQBOw0cyCahwH%2Bh407pBNzQX7EKwPkx4KOhDShRZ5mbNUKchc1%2B1rQZVyMVqbGXLv0WbioQIzt1ms6zDLvI3EBjqkAYvK4kkhZ2G1pO8DZOj6ZNOvJR9fyEigMHGDBBjBuvgGyowi88%2FdSZbdFQbVD6pq7Hfi%2FcdXdDM4frUdKIGcpLyBiixZw5KJ%2FFS3m%2FXLHnKLSuG72klG7GsppvO3Lx4oTlSncin9SfuVP70GEiDf78KQTZBGf5J2q3P1IesPtre4vKD65VW%2B7KJyC7MWsXYy4L647aPl1bf%2FHhtOM1CxuOKIRPSu&X-Amz-Signature=b21363e104eebc92239b01d02596d31d69f251b4f62d9e7652f6a265fe9c7dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
