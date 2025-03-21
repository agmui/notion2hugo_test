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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INXPREC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDmGcQxrb1NbAvWr05LpcAfDIa7sv8d9EKns87jVWiM3AIhAIlgWMI4vO6LSDcN3w6D4%2FkB8QdKYjYDkYxjMzI%2B41jaKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F7j7K8Z%2F2HdJ7nQgq3ANNRRMT%2FZrKNqo8EuO5Wy08BRc868ZdQwg366UwhkmzfaW8FkehfL7JD7egXmhtBHAUxs1ElqfeHzPpAW27vLtHZiEAAcRrgvInueuoIr2ApW%2Bo91aH93u6B87btlAsBOAFhqQDnLJ5z0JDN90ZeS3%2FqCRNlGeWgnJgiggHiw2Czs4R0as3IJfd93Q%2BGJefClkeeIizR2EjzQx1TTOLbOzDnMlbMpJ0Q1CP9miuyzR7n%2BHC0uCJ2NJt5fvvyf5I%2BRGr6eWzqhRwGqF0zTSwrgGBc8MxTrfAgO98l91gO23IkgVVHSmSeaZEWrvzsgf%2FcXkzuqMXJ2vMDFQpXRCa0OjaVcBMe8gAZS4qRmYYzydl1JsgtG90%2F0RnxGRa1z0wcfnV2prszMsb5F%2BoNM5R0d1GDi00NM1pnEtcYefy0jcvqbVJqJEiud1h7F4E4AAFfW9hrxRySHYGUlkJBERaO9IXpBIlb2%2F2XhNjcsYqJfxhOd9fkjfe7GqfS0jF3PkK8pG%2FTwoDR%2BGXPk%2FS9yhC6481qUMvYVrDfUhyRjhIFYdhgMwiHEleQ%2Flkjn16%2BVOcYd5l33qBsgRiE%2BblXScfMCUEF3FoxXwThfMvJwnJ%2FEiixFLOvx8l9smW3W%2BZAzD31%2FS%2BBjqkAdSBkunbi5en4x03ZLkP%2FOh%2BCo3dSvEZ67%2FCQCwc2cexSJXabEXMKwItoCk66%2B5AjM4UBboEMIVlJQAjmLTml8Jvhwa8PdPX%2FKcYjN8476PcAUe0mYbe4OmysIU5jv7GsGQd%2F%2B9FLC8SX9sw4jwnkgfMDQo11w1gSB0%2Fl8QDe%2FYZVV6yLNuefqav%2Bbe1SBkEU2BSe9r9si52tWsvj3cXcEvWaHwY&X-Amz-Signature=5d079bc358695f3ca483011ec0276f665e37ebf16c735aa2230b4c57e352cd21&X-Amz-SignedHeaders=host&x-id=GetObject)

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
