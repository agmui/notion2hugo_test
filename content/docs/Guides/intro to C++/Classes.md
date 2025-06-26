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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJV7QKO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCokoagLzoh2WENHMih2T1xForB18zug76jaAliTnR6zAIgJ8VahO1Iq1qfEAEpWOGkYaLRtYvUvVXJNRc5PZf7uukq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJrxAm%2BRaOCnYIg2pSrcA9OFa1fvE121Xsv%2FTeJAnYgJ%2Bezx%2B8UjtjnLSa30OzKMgWFyPL6Meo3huSW5jXf4E5kpVfPYhCSPa9ihaWe4zm0uSnPVM7fD3vg4jerxRxtNGcC1zP5yg9XuuWWpAFxFYY82p1wglIWRZsb0Pbw1DxrlrFhzKUsYzX9lg0tuwixj5%2FDuJoi4e6kLIyK%2ByeduJbZC5s1ekTHgNDs0CNImoV%2B78uLLHkKGC8mwNC%2BQE9a6XDfYYH58Knvptd3IWsOQfoPL628UwS4Fp%2Fu0MUYqUvfLaCwlyUriuhfHHQ9EK4%2FGC3zS1GxXQr1qWvja2PKKE7cjoHGJqVRGQ12893wd2pVXVe2SelD1H89IBLkn1U%2FxjsEvPadLhzNdS62c%2B7Uy%2Fmv4LJ7YVtmoR1YYtNdqD1O7%2F1ES65qKgycGRRnxeVVFhOt%2FsjPUKCOF6o%2Fa%2Bzo%2F5dieiNmKc1jAcnL7CBV%2BorQ3a18R0W4Yxl%2BH%2Fweyu6%2BCCN3aCqq3pi3xgVMCtK3mHXvvxEyVtA9Z55mQcXas%2F9ONmOFHOrII1Ui96F5tNTAZumyYIX1cq2Y48UddqwGhhtL3HbVLWIxPj%2ByafUmoZxeAARQJvz7T5uv%2FS0dHLv4lidaNkI0NKS%2FVvLqqMP2D9sIGOqUBqavB4B%2Bo0HgLH7px7SfQJz9fAbAxuOzSutcyYXuGsEu7QfMrUb1eiBnG17U1p%2FjeCDHEz%2BmvrvEayQGXq1UL8QGmhgulcCb6xT0UahfglDC3663ySM5OUulPi2t9R0Bda1QDgh%2BPqat1z1uRI6HTzcP9502U3MdRSIm8wfcjGL8aOh00QdD8SWEF%2BM6FHgCnbhzUUoTBRqS2eU9uZV7qMJz0D%2Byt&X-Amz-Signature=0bda7ad02cb2e798103c80a27764d34a64ea0fe5cfea6fbe655a9cb84ef7b2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
