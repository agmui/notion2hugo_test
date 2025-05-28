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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2SZ7PDG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGWGYFM6%2B7411ugsjy%2B2ViW6hemGzWB3ybi9uKtRG15QIgNxXhridadPciQ%2BX6u6c2rsF68eTy3nPAMbylz2iKhGIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFWZ4rmKciGmINqlaCrcA61xSzxnvFIMDrBvNOtG1qh7dUr%2FJ%2FRqMmef4H7Awn57IRFRtu%2F5PavHG0HtDFRw0xm80A4uE37AVjnGbvIOYjrKWygdLCycyO1fP3Qe8J6j1KPRNOnykkuURWwtjHY%2BL35kKhA8l1uWW6GOkNyYTuVkl9W6hO%2FjRzH32hC%2FpNC0xTx0drOGoMwLNlrYh2mLfqjiZfnXXyPp4y9gTBninci5IvJwlg%2BIunEGU7rU%2BUOEMoMiYrTda5FNF2alyOoD2OosqCsKZEnF8XGjCiqKygkAjMlibh9d39PumBkz7eWs2O7pVN14CCKmuoDAhJBTOjA4lu45NolIjtXpoVwMGbk7kiGkFP%2FLR4QuFlSREjaBHSUtKEtzyhtS%2FjtI8JnJJrAhIwYtV84aEvNtjjLaLc52qc054%2FETa2VcljntFi4oGQBcIFVEJa5OHMlIMcJD%2BjDU9I7HxlkjolwGAq8RThWdMmVmyj6kIaZoOqCoo2XjmD8WAkfJVNjl361R4%2F2jKkIW0LxpEwhs%2FPZNB5dj%2Beu2XJZPqmSwfrvCCymOPC5wf4QdoldbkIihC9NqSbMFyvahcSZKBu9ksB2LtWKC3sFDlHi2s0sV3S8VMbTXRRqr0KAvXSY%2F8s90jXzMMIHC28EGOqUBxLTRu0GDrvEo0aeOnXovMGUleQ6SiXZdP5U3%2BkswlSTNWs2%2F9YGMUc9GfhRDOblirETwMCWblBgwTsQVXJFB%2B1kuTKaldyVZovG4AICu6mSqxzfrdu059pedlkPkcCBseoKmg4zcvtg41%2FNhC0i8kNgPZjWVHR8N5lMR0w4y3Ho4%2FvDhtHfEa6gwvqVqa5AUqZwIUqg4iqGNY%2B%2FZBW006I4Otfnf&X-Amz-Signature=762031001af41eb21649ca577c66364ad2efa5a8a529e2c8dd53e8a70fc73271&X-Amz-SignedHeaders=host&x-id=GetObject)

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
