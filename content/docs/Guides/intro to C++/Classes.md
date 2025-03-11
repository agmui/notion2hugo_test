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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSDQZMO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDFYUwvUCFG%2B7Gs1gOM3evrRN2lbYnqL%2F52Lrk3rCWG7QIgTfTG5XlTtcNhODKL0rQ6Mf1DvcRBybCMQpfpn4GtdgEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUKATQlihIMMMqGbSrcAxlwYjg%2F9BEcXJEztjmptZVWH8M7U8XIhnnM7ZYdRFNhjfDQmRY5f5wE%2BIWJ%2BEs7d1RRUSONWpeYvctCLLFn2ZAHAUkCnr3gR92p149aD8LGrPA1ukDSYsirCalA9FXYlbKxO1js%2FhHqsrc5P9gGHfEv%2B4p2g%2F58hg4mQZPgeG7r%2Bo74%2FQoAKhaGtYCcGaPgFoEKmrG4ITIbrn0sCRZH6JSWTWyTx553rue5CiFxqsvSq7fgUX8zb3QP5V8LPJIsgSF73eWjGpgMHBMaSRRrb6GtA1tbYMaU9Mv7bcHB6wDIIjj3UyUnBPemmnrRRq2Ufz%2FF6J3lmQBdzL1Y20%2BySfwFYNFNXlg4JEKhKNiFPz%2Fp%2Fy8ZU%2FdWa%2Fw8Y86aZioMlxhKZOy92nogfjYiP9VQ79LVTR6rbHChu4di9Z9hce42f3NZagPNfQjXwyBGVaBQ7UWPnrsqBX%2FRs461S%2BCmdPRAzCPJPmEk%2FlyQVK3SzrJebvsIB5hWbQcVeH1rJ1jx4Bc%2BL%2FVy%2BMdpNsXJ1ViiGw33dxZobNa9D670Euh%2FffESL9ecr0SFaMLXjXVDidvlzl7z7Nam4WG%2Fd4JyLjVHQl%2BYK3SCR%2F3qneAvP%2FXOX9N6eUxS5safjx2rbP3UMK3ywr4GOqUBjyLyUjF%2FqyxN38BSFr0En6BmzjpktSGFtGfBEsuW2cUUmGqlQaVhA%2Bc2%2BCmrQZPwBAgNguBDmDBsNDkCgPDZ7PGtmrNb1i2Lx7OvUo1KJVABHLEL2Mu6lqxhFURdDarGtlmBJ7S4QiRyKQbzIStzQjebnSW55c2rEXxYBCK%2FVrnyao%2FdVOE1GVnJSxoaQilhJ0XXdydHjYf81rdpNCWSIkeIlpgj&X-Amz-Signature=268db1324e0c49cca64b3dc012744e971869c1759e3de1425984c68076a31a72&X-Amz-SignedHeaders=host&x-id=GetObject)

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
