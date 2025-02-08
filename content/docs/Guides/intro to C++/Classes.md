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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O52DXGN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBoHhjsjIox3oGeaORHCvADBEEu0oQZo4RHDcXnS1PssAiB81r%2B5gDy%2Fv59o9RGZiWKB9JXV9%2F7zPHn4nu6cnVzkdSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVR3RGrNdZ5VlbpcjKtwDjZK15ofFbJf022DYm1bRWeb2St13SN7j99J6DfLFPjkSbWEzS9YVGHKAxTb0qWfgh62lB4Zr8vqLvOBVmXR7jaNCnDNmi7e%2F5OBs78YCbf7GAxPPKCx0%2BKjqix9edRlFfn4FEOQcqr44RNp8VZU8Qf%2BdOqUitXirHF%2FsBkQyttNXXT4%2FWpTpEZNyKV3EllG0EnLDZyB6tqU09h0RoggWhrmP8GW25V59DuP%2BRwYAWDHqdFUGeNyIk9h%2FOjnhacB%2BSKK8M%2BLykzuHKIWnPXtjbJs0iEWYOQT%2Fyf54XqKWB%2BA7dJpKQTdG7LrvdA8%2FjHDtcnAmKHK9TXDCQGVVccpaSiAXRX03iMTwrtPVeCcnkH2GnjttcbXk8waASUjAKy8%2FSqSc5eKEi0YGpQKQyeT7qX3tfde59V8zbvdxrIXrK%2BUWDGKLlqBYZke15ICBtlezMwQ%2BRkcQSTadm%2Bb16RLOY6sZapNqe25T3dnABS4Ok%2Fjw9Ry7PKEBv%2FoljalbMwlhoZ%2BajwvoJ5PxsZ%2BQrFNzwB5ES%2F4o3Cg0Dd9Mvhj7R%2BEHodDJP8guZ6qz%2BDpx3JY2yWgkPgfmx1T7DhH7vFl%2Fj%2FaORabjIv797kxCNqj%2F6Z02xYQPRPUONG1fPkgw6vmavQY6pgF%2BYFumnwUqPjm3kXBnthFBdjdgEIR3JepCSNlDRgDxcY%2B5lvYptR0hLS5Gnh%2FnFFMlizrt0Ce%2FJdAonClnquVh7gkzEUoofFNUxNOiSlh95%2B5hu5wnF5q07O5WRj0lkmoNDJk3oE3heFKN%2B2%2FdKfAm5JW8Gxdczn7MKgcOtuHGOT7X0xB6T0GnXFXJ9tWwELxamO%2BGS3omk6dl%2BW%2FcQfp%2F8VjFZ7Hg&X-Amz-Signature=bfea8822935ac7a54a95ed33612594467ec8e812a7907d0d858255e87a525ade&X-Amz-SignedHeaders=host&x-id=GetObject)

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
