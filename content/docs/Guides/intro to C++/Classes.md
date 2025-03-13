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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R7GJTHJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtrvsXDcPC1%2FYxxVGAKH29IfDqJYIDmxfgklrqR3q3igIgNq0SXE%2BZ0GJGqy3y7LDQBqynhFkqb6Mvs2v3W6ZWyUQqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwpJAutBuTveDLSACrcA7ZQm%2Fp08lON5gcfA%2Bjv7FWBtrxtYWIHqkOFTppZzdOga5f%2FnSbThFnbDceSvstHAEPAjYyRZxI3M8crSCJvAUoM9YyWZ7gcRFln3jSTZGmkJpR6HuXYBr5AqVFrvmpXE7PPnPlv9sMx%2FqHTDs%2B2e4%2F518DA20R1Ehh1mxzSpUlaCOpe2nz%2BiQQGaC2UXsQB014VzrJrv44r01EWn9SPsn8PD4SFkCTQ%2FN9FyVaiNZollNRyxYJx%2FpZgERx7Tda6vMiN6qxvEmuvBC3W9djR7braWskroB4VcnWvqQS21Up%2FSZEvbERRz5BjnQYsMoUEf8veB8AcACqDZuuMTkmqZkIRJ0mkOXVleODKf7anJThdWpFn%2FW78TUJ2GPCUAodl6leFXOlvKwHPB%2B%2F9r%2Bmb%2FlOs24QHFYYbkBP6g09TgRFX%2F%2F1vsRgoO9vEc98LHXKkiCkFxEZEcCV%2FS93yc6ZJXSs1cgdqEKfDswXNP%2BjcnvTSTWlEUlOjt2UQ9ghNDA8itI1gdGS3rmq9yDL8tZMN%2Bndx5imaB3wB6SSI0KSLcfcSUKgQh4evuB2d63e7UFfu6DOeBHasgvVuYQl8PbCfYwZZRwUSJeeAFhutY%2FBft3HDmKWaOGvGoUk%2FqaelMM6cy74GOqUBQsFTH1t6pIRoZ%2FlLEQARzkRkKefoc7tmxBsphmM75rAnUyKUthlQfp5hRCTBGJEj1tdc5EMmNtQuAwq8AwEYdd21O%2BG%2BXGo95xFFcbkOsFznrWbUkGIG%2F5Y2PMv%2FDXBFp8RNHEbkO6HE%2Bmb5c108GDGoQYbt71rC1ywHSZzdaoZbbC16v6nXv%2BnwBAUaneoCLF%2FaPhC47LU7IzVa6p%2F75xNKpZHz&X-Amz-Signature=0ab8d5da88299f0020c22dc6d00832832b7cbc20fdf2790489a26416b8474be6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
