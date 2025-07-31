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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZBWUQIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVnMzTk5hU6o1U7nPWN1HvbKlopf2IHE%2BK0drBfJ4WdgIhAO%2BzSW47M8F%2FnePC8L7ZRkttfp%2Fda8sVdZ0zoFDZXX6wKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFYqg%2FyPP9M%2Fl%2FSGkq3AMEOHdIqXOpZFN4MKox%2BoFjOd9GdYQGIRTvdI7SENYcpHjSN6f6mzT63L6XlvyxlKszfYrMpUCZTyP2b%2F7REcs8RC2vvmm4MiH6D5bEi2%2B1TAW2JQH%2FTGg1xEX9XV81G5TdT0GEDkS%2FW7QRMY3ZJ9eZNpW8r6vCbfzQLjhyOjhtC6Eg6FvL3kzsGJLHQKEIhkF1oIMpHTBfWNNtGnvDoX7usTkooRP4O%2BJSM40sL%2B%2FmSDSGC%2FvJtibFwZma%2Blb97RRtEkFcd01pF78%2B22%2F8fLSTFfR5TwiLNiqWeRJwlZXPm7T%2FRek9%2B3aPGmXCq9m%2BbUIAjddBO06%2FgorAC843mErJB1gA6xLL3dT5Fe86o3sIKRP%2BMpmDXXt%2FX73WB5h3P2E3TPEhBdNEvkrtmvWRnW4ogH8wpkO3Cy3i1UxyUaFPpdH0NIOJxAX8hP%2BYi9I7O6OPdzWx1VKPHaN2Uo8r3y599rzJTYvTESvmAMD0FRGIJcK9Emni%2BlK5qhDczsSs458meNzgme28aP5s7jjWeHm0y5fJOKsf0NHrfC%2F7F%2BvKtRUGyHuChEg0q%2BMYnYTqoIfbii%2BEGxxxl6MWKWD6wLHo8yR9gkyFvui51s1XwrPkDgts63fRBGtolHlI%2BDDlxa3EBjqkAfb8hk2oZX5wWLOY2dXniiKSL3OSNZyTVf4Qr7G9tSADTMMkRV0AQTJKRPk6JcG17%2Fo7WG5vPWySA8TB614fBPyPkP4VfbV8qewZlhDN5%2FXLT1Ol8BQQi86y4IB5IrVDccDkZfZdhJA%2FkMxLY2qgnU21h%2BdciBkq8pyFUd0JTPdF7aKgkcje0jJvU1ysh0JfQ0v9kDgD%2FAbU0W1aKw1L0jKFdUYF&X-Amz-Signature=83901a504f52eb4d27056e75960a698b42657a08cd7f6b5b7802f4c10d4c366a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
