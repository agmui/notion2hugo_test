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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLHMQC3C%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD%2BdXoptGCuxE6Ojpy7E5noHoYmg5J0AWJYHC7x1IpUzwIhAMO4BzaVOhOs0RCDYi4U%2FgWlWRTBRX0iDIORVH1pLFm%2FKv8DCFwQABoMNjM3NDIzMTgzODA1IgxLeigWC1n%2FkC5MkEcq3APbJe6YFMusI83GXG2%2BWfw0bTDveKSwCsurzJUNxazFBg8Af6nUFMtGn7VZk%2BUfzp3u2M2NVEUhpkGzqHoc1IaDnO%2F5x8n3rbH6Iyp2JAWH9phkwRilZsnYSkr4GaM1Zg0ttXlLLmHbtXpaXnf7R1oh6qK1kmOjCZ9fCIrxNZcLtro3LEnIK%2FZIqWR1doRDBmpd5jBaGVsv9J4lgqOmffASoHPSKUJopmhVNR0bEY2bQh0cPExyw3OKook9clLW7WyuJd6q34ntOST6a1NkTTP2VVcksgUAJR5WSF7V0tBhBK%2Bv%2FyHSSyUU31nfcJbmUyBacEQW%2FP%2F7AO3yZWXr6STqQKGsxT6MkfMQBa7N30DrlwkfRn2LO5ljeI4ICCLGWQsY4Wa7gJFb7en4vK%2F32VoqkT74D2VPU1kzYqlcnwLM519B5P3H2DdJBM0s7FMespRyQH4tzFd3e5KeFLk4%2FdurZ%2Bhk5BRVcvTyuVGlh1XFr9QnfoNw18MrrYqswPHwIo8mj5QrX1VuLoX1sHG0zr9Okb1Z9yPTTAtsssGy61reN%2BrqmVrUy%2BE54sbe7%2FcAY4oeDtW%2BayTDGz0xsxuRmrpBzd1b%2BmhHBJ93xep%2B6GlEX6Q2FA4AzEJhC1YunTD5leW%2BBjqkAfPW25JKturNxIH3dsjrkXlqr%2BB84POt7Iz2VKStKVsrP1hghUZiaNlIemEufRO8bd%2B6liWqV8cFcpdx%2B96D98IEtoxqKtGX5JAx1njcKhDAgPLAp2mvCgVMiRxXa0pQjA2Pbtcc4lZjkgMIXGNhirRr0vLx0VEzd4UJ6AJk12e2t2M5iEjaM8yNQzYPXenrf%2BNy%2FrHF%2F6d8MnHeAqukFbCxV9X2&X-Amz-Signature=e395467cb869ad63231da9f9572a6f4ed0badfbc36b7ca12f8d7fda572435b60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
