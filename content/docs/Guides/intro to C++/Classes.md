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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FJT6CZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCNUp4JB7mW%2BXVF5dU5%2FHQP%2FkWNbJnjCtNFlT2cKBc0wgIhAOjf8g4Fduzq%2FU7Q62XxpO4YTm%2FmCKuDBzRtQ3z0Mg0IKv8DCGsQABoMNjM3NDIzMTgzODA1IgwPC%2FucJnej9xEu7Z4q3APN%2BVrpHD7NpO1KCtSOqjAHifdsMSSGWs1b%2FTjwsNDkoEOvLbLo%2B0C2lQJ9%2BrnxTFg%2FXsbyOVbFvnlq6JIbEqO7FMkUmtpwiEXzO4DJPOiNkYNdm48RZysfxyrRsa2Pjd0V3exIqrgMzTDCiBmeYQBEAZOiwgXGufZRXh%2Fl72frCF6cXRiaiaUStDiETK9nt7T78XSLl9bzUoS9Q2Ulk8AQVgfLkuaFLK8eyl7HnfEwVsFySj%2FqhRUAm0o2gz54E2DCpc1U3Ms5ujczmoysn3OPdWEfUBAR9V3X1mFWw%2F0oZkMcwCMFupjHih2SkmZuBHtT9UCpIc2GarEJL%2F7V1caU4PXJ3TLPhIRFKOXj5gf968k%2FUnw4olhix36RACMsts%2BpRJO8oA9DWAbW4EhidCzNAYWSDtgv4YoHBZPmAdkZs5Bw%2BCsujFGSPEXou0Lfw6Wp6UKveePcwep1sfY4Fz7VEXbpEwSZAuTIWuqlz9BusiIaZWHD8YTa5u7O9Ift4asjWdbKRXUxWANplPir6AD5OcTnK%2BU11kfuYGEds0NQB9dduu4xMiwuiFOwN6BNpZA6B10T8aFkSrJSdv%2FYuJ6qfApKgTnkW4spjRK9vu94NOc7Z3U0NDu3wFWp0DCplP%2B9BjqkASv5OIi1QrrFLDFmOINH1WMu389gcml%2FqfTsqbvOnYQggABiTZ2arnz0ysfI0ioa1TBSDa4mVGFy7x5ezlREJDBTMbfwY0fuPziz1cCwdJICnMzcoiK3GChW%2BYMWpLcu2bg7OcbpFUKIV22Ncr4qGL376eAW66BhiH2yVD3aaGmWg%2Fv8khWkEWHyvcZ9kp7G2hCvqh1UkBarcek0qVQKB2Dezvln&X-Amz-Signature=d9ad1908e27a5b86609b7bf3431be8d31b2be51461500df4b066a8b59e6fb3c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
