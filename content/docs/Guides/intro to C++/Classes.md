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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSAEDX5L%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeC70fSF%2F7x0WAaTEcyxNGFrroZ52eC8Yi6ykqqKrxtAiEAjHVh01RzFqM6I%2BxyHTD0rK5fGVDyn8hLVaPthX8UpE8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEap7efEM1t8dxQ0ACrcAz5ek2h1MaryCQM1o6EKaMkOPqmpgbqw6%2BxCjQP8P7Eb7vuNIdp7P5bg6dMZyjoBAxip0qJ60St4Tv%2Fbh9cE5ZyU23OwOLw5CECsxC6fI%2BQ9SoRYYt9LOwypDw55Ued8t%2FcVzwETh1xi2O%2BImh3uyXwrW1Pa5M2XbfSm6h%2FBXnfU4Lb8iCVrVNhoY8yDI1quKYZMqogcJWeGNjf%2BHMUt2R1MDAFTF6z%2BiyDfbxjK8EB6U%2Boyo2CbnN1HXTq6EWA1g73UOMrPy88RcXpVbC5Vt9r0zsbIHxP0vg5kpBzy%2FsYjPuwlQhrcx8eIVvSvPptr%2FpDMTQbeUoRBpginoiF%2FK%2BBzG0TObwyi1sQXPYZ8BKGkeZeOy1YjDhRuoOm0glWIwGwJ1qW7Wav2AAY1iU1I2AaTlQ%2FlqAJS4JyhR7zDyTBS0V91Q3oLYJK1t42sG%2Fn01O%2BMhMHV6AUScUwVO0uq1E1FD9y5qFA38zIADs1vWsH%2F35pZ7K9EChui7n3NvoKpD6jc4KpogR5lXa1SAacGzBGlH8VjZ0RZ%2FYHXs4QYxobApXjulgafOmeQkDSX%2FyF8xYzGeWw8hzca3AnQGMGHhPBHADtej3kGTGgxENPEMwdCD5IhZpZOd%2FtUazpjMOHQvMMGOqUBGV9AVqP69zm6XAcXzd%2F6rRW5D2s0wTmc%2BVxumWwMBh57rUIXDiDV3V83dJ73Eazmyw66yrRLpnWzXlq%2FyOABEE5dcCT5urlVFFqIPx5LOEJ08zAh6DukwblXYPkl2wtTnIYWfthltIucd97Km7B3UARQRXo5yWdDMOnvn60U0grEGaXyDbx7gKZBNZPrZ5jEoBJfL7T6bA4qdYQ6sjWfTg5ie0Y8&X-Amz-Signature=0e4e42f5836cbe3de086691396aa6a10abad9e038544f0cfc37bb06e1d33bd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
