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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZ6YS3O%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDOrRt%2FkjPlLzCsBrn6U11Kxr%2BQbGL9WpRfBqG0BeQTwIhAIzlHOYGkiZ%2BbkFhgfxX70154ilNTBB9lvJgGJxxHw%2BtKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsRs60NZCMHbrsoZMq3AOn%2FLvNApA1n4SXTFRFFvjxWFXTpoVXLr8tk2Ru0ZRaY9hKvl%2B7yMWmXN8qc9VvFg6nmRGqQMJ%2FKkqJoaJkAlWZjmuYO7ljN7lWVKAe71dGVvP%2BDk5taX8uQ2c955kNJOkFk2b9eMCuR1laLsR46VxG80ZIam4w%2Bk6J8AYTREpPEQE0Zi8MnNiqcFH9vG3o5%2FfuqXbPC%2FcIjl5IGXWkDL%2BbP7%2BPosa8u9E8NIfhEne6B%2Bnw%2F5%2B7MM%2F%2FVBNvCxOXUjLYW5m1mh%2FdVYtCjMzKCE5ENu9Ny8ojincqWULvPdVQoPTGYudrNkcjYiDueqshjTvjtLIx4DMYv%2BaGFdVQOCTCzsqLVWCsb0hR2WPl1HajramjgMtGRoaKQLDriPfPICCRsAKMNo19XFBr42cKIerQMT6lg%2BGibdLrL0ua7Ri1WHNdZRx9qCHt2fXZsAXcLEk5yDq6iPjgxWqTkkDJ7rk5q9QFi2tgbuPSXLh6DhnT070tdfi3%2BjRxa4dBlqPO1zSiIb4Jp3c%2FoA7WC7YjidywhnmNwY%2B06khDgXsapRBsd8DnoM7mNYTH8osGzOr%2B%2BOJ0Mi55p7av3J7gHZTpJVWTFm4oTfpB%2F8VGVU62%2FGlDCo22hVulUX9X3mYYfTDIwOC9BjqkAaubPxy1nhx%2Bv0DrbJg68k8KYmCPmyECOkb3ONgqmynt1mbrCwdLeg%2Ftl5DXaAw0Waqa5iRO%2BGRvPiQiDjnroBFAz1uqsZoq59oq25eiyNIQjWkclQxOXGvE117%2Fw3NgaZGz0Y8aOYTKL35BtTaPu%2B06pT6DLqjZzlMHjIlyhYrBNv7pdrNiGZ57fx%2FDVQnRz3ACcmcjeGfw%2B3cjcmeMvaUFKdeu&X-Amz-Signature=4b1f52a27c997aaaa5d211a57bcfb32b919f5c12e35073bb68b306ef1811069e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
