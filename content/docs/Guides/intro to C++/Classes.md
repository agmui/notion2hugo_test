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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB5IORP6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDT6XVJTnoBVPAuTfK1diXGVjVw7hAogcEKS7TP85kV%2FgIhAO8Eghn%2FyswhIoHb7EEDQWFpIg03owszTXuhcBXCuMwbKv8DCHQQABoMNjM3NDIzMTgzODA1IgyAfW6i8B%2BTXqCV0Z0q3APTWAR85yqi%2BZuAADw0%2FYygk1Vn5dsLE766HlNlRpRys2rZlz%2BFQNj%2BBkrVrQoErtT3NwZcmyv3EtKwFjHAsyHXcCb4fs5xXLnfG2FrggwBGwocLN7OOX3YfkV0PfVcVdingYVsuJH3w6KXVRFyzVvjn%2BtFo2n8di%2B91kmYvZ10lnJNUjgyd1EhtTq7BrALQ%2FGO0soHpyIluzlmeEGC5u2GWXrA2DJrkGSc4yCS8jmQPAUAFwct30CYSEd6nbC0CzeR%2FMq56XyjFvV2%2B%2B7awcnDD%2FLaUoy8oEA7eL9cQXt2NamFer%2BYd61%2B%2FO2CA%2FGna8V3DUtIVQEOPEpf%2BZma1y4mlQnEn50ZKXdjZgMypDGMhjY9Hvsst3j0zunuMuHr6AgucQ8mYFPKFf9Yr2kVAWu1XIP0LJMIT1SF34RgaysKskwoFKxgMTItj%2FgcZMPawq1bVGWafEG%2FdG5RfNz1rLWmn4w2cvv%2Fv0XqQoci5nGWGIh2rUjoRGfUZPQpULbni2B5Jl%2BXA6ww0sQ53%2F63a%2FHjenM91lUHes5MyraIf74esWsPg1VbIVIT6cTw8df9SI%2FhKEEvyA2it7xrBNAmXIfKn2E%2BRrpA430BX5abyNce29k8KxOKmCSi0PZFZjCBkYG%2BBjqkAc0%2Bv%2Bxxm0dZn%2BhNhyzSNl8YynFR9oz796U6fCaEw44lYrlLKnk27HJcUd3DZYl3EK87d%2BdgidysV7k4f%2B4pFD5UwQLzHkeFpfFYv7KrAypaP%2F3UIcGcK6XO%2BTU3xZIaO%2FjXwkoz8jQIo44OxY31x58qWDMreI9fIji0anMQSnkw%2BnORRlGw32dtjFrBwpCVwWNz5VhkZzwCeVvdMMhxXsAy6gkG&X-Amz-Signature=bc55e79b77998e74759076a54fb4c6aff2f15a0eef083784010ac2d3628caf04&X-Amz-SignedHeaders=host&x-id=GetObject)

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
