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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOA7YQUS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDOwErxiKuxJgLEAjmpUUO6JNikH5v6mmuTMiEEbyPTmAIhAM1w3Ej3oSryAshdWHmPj9mGi2gvAPY13fFHLDAeBqwZKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFClr4a6gfL0Ax0KUq3ANowZWqVaxZqrZq8qLVsOx1RKM%2BDiWtLMUeLNlrCkup1CiO7T03p%2BTyNtb65MS1xsm1muocxSazp5eGumpz4WiAwldMlh516F1wUjTC9aQi%2Bm%2Bk7zq5LyUSRbv8MQrO6Qse%2F94sSBt2xhZ9P5afS1mGBWkUv%2FfmR8Y8TFGc%2FsO42sUGi3OeSYGcXKNcNb9CKOeeOpZBfXjjz89DDKZhT%2BP4oTDWyR8k5oOCmPtWyKE2GRA20M06PWbZH%2BAl2AOlppnRnUdJ1QB%2BL0QWUGYajSUGtbfhheePdicqv%2BN%2F%2FPRaGrnw7UIcvZirfMd8YUjqAuU7%2BJtZqci9mLDHZIRlH4gIyS0JHS3RKL8%2BpyksAg%2BIS4%2BaOCRLdRCO4GuwaOhU3MVaTswAxo3cTqUY0Q%2FnEuckpoSVI9breZDXzNgJtm%2FpaL9qmqfQmzjkCjpIWyq7aepA9H%2FEkuUccHvmlfL%2BHcIdgI2hbmNT%2F6X45xg8Jj7hL7Qk5mPaiX2sVrglUWlBDtpNVgH5pCwq2EhuYbEHv%2FoOW7aonp%2BaqHY1GoVWDw58fk8Hs1qR8%2F0suUI6sp1wzedlessHFdq3CyL%2F5N1OnMoVk6hhiIrRm1epLSkKq3QZY3HB795EasqMYCjzNDCCm8S%2BBjqkAfgqXgZUBcGHYgW6mQBI8V8yEqRVY9b7PhXTC3GfQwCg7nqKky0mqtizW1AddDt4RXzO47k2jjX3K25zsJWkkVXBQWivwREBEKjBu0tDJsogZPgONVQcNDxhVyC9LmvWJBMV18hyK3UHMZBB%2BIBGznuMwlMGCjsonbg7IfbSziRIvEq9kiKoZdqi7bhvvCVrwINsyCo%2BrK5jkU9yh%2Bp6QrHriQSa&X-Amz-Signature=0e2bb8f52c3d1cd66eb3abee183a7ebe2d83e583901113cfebcb1257a318e55f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
