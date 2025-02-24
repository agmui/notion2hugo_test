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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTQKUEW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJyXJD0gU0uZ6Qgl8hdkLZXRq%2FJDj%2FrGbcqM0clvH6uQIgB9ahlw4B%2BrbY7phIwbat2Dm9%2BJMohwJ3z6%2F6T9fNYBcq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDL2lO93pUgTIYg1OyircAyQr3qubNqiniADvZY7mz3BDkjwCIjDaoJvzsJGCWRuMlK7QMKPXiTyAjaGwxXI9hpAnCEPYZDcPKUSGMmiKqKUgPvFp%2BjiLlVRxKab2e7mOBUflfacDSMgKaxcjd9fo0ofEfX6UZaTesq08zysALfxc%2BfGXhEXd%2FajkVnGcetChk7gPAMD%2F0A%2Fot5RyoWKUVVJ8vF%2BDaOtRQCX7DYQGHNjbcft8N0o%2Bit9w%2FrXHAJ8PFnR60L2NZ32a%2BZGzczV6e%2BRzYNpZlCGa2pkMJlCzkA2BO1xWbQuYifx72a%2Bx8crc8L%2FpNahKuUcZrji56JtziS4%2BREKQMHfKb3iWngngLJeavMdBbp9098NlZUCAze87tQMPgRG6zaTPzQS%2F9lzTtNqJxg0Zy39krho4kWaDMMzscFDFW6MCs6zJnLaU9DzraDeCeY%2B3EKAY8H209MCJ3PjzL%2BPCymOz2ESYhc50v0d2As8%2FR%2FwNBucXffSAw3tIh1zHjXuJkIqgNAwsQEo1KM8Yd0AO%2B7iVRdi0CEw6KW8mB9L0%2BF6lkthshGf7Ux1siRDZ1%2B7xMl%2FPM3%2BFDPo8ED96hAr6DkiDy3SjbYT%2Fz7Xe6Bhx3xgYGFY9Vcc2rigkoMTERZAhBP3xNiyqMN%2Fd8r0GOqUBY6x3z3hAvsqCf%2F09lxGlxnB9t7MGI5tyXX0YaiFlRpj7JugpIzjrt%2B0OL1zDgDlKq%2BnnWKs8szH7K0HTamxEwJX35M35EqjzrqdGqtReoLcPbpNGIf71zNwTvzcV5uHntNdtBGi7H2PvgbvMw6SA%2BU%2BV8SkxJqnj%2F%2FzvELBB3Poq3KjO3unixlfP0XUM6ELkY46ic0msuHgONVCviT7%2BsVXZQalD&X-Amz-Signature=8dbe04073e31e2f6cdccb6a373670f51d2ab3ba09096dcdada0a02eb9f8a9048&X-Amz-SignedHeaders=host&x-id=GetObject)

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
