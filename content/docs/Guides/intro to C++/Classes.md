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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AWIPHDG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCcLD6M9G4nxGcMy0IsQ%2FnmAAKmDBW6vs7dVHfz0INHIgIgJAwZFVgvTG8kUr8Mz%2FgvdH3OWQzL%2FD1sm96qxN2rryAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCfaQMjLcCcGtHhuircA48vsCa9y%2FENIlVGLVS3sJF%2B1T2jP%2BAb9RI1KrXe5vFiMhMjYnKt8AWEaRbsA6m0GqTl%2Btu3c2QFcnYS%2FWZL4ytbujrA%2FBqUGAiZw%2FT17Fy%2FeLrY0NK%2BL%2BbXr1NsygCnErPZ9QN%2FxXN64jIHez8e1EqAP1C1%2FoqiUh1KoQ1rnGEoiBR%2FNxJcUFm9IJ6FBBPWxv%2FzhFu3HnzAeJbXKDQHh0LhtWFb6nkIuY0%2B8kEIEljMieq2QQz4KGT4HqK5BljMM7EKQOMW6xR6dm8ruGki8RSmAM23NStOZLreUQLSAnOK4m6AWPHVk0cvjahQAYkY0na%2FVxcVpHGLxgRWsrV4iuLMxP9fbWu2RUVUIlqpJtSihEViKi6sUveHtHx1ORPdmS8by24p15q1BIpZ8WJ6z%2Bj7dbuEICwMwiARhQngxp%2FKyhfYHbunmOR5bCCPHoobqzj%2BFQob2wX%2B%2FvdDZtR%2Bw8J%2FEGZlbwL%2B5EZnLP08baXOG3mbqOdJuk00w%2FvClFA3P%2BgT%2FRJ3LDAWR%2BXXbUMEl6t51HqslI%2B74zJSX5WxLnpZKgUdn890pU%2FumEcwdDDJiCVdtD2EAp2XIMkuzUYNa9mrOBtYgSfsSedHCb2uSexcovlXaXiR7XodJrCuMK7Ytr8GOqUB6iw6gUMu92zqkHxcvu6C12cTFTdV1hCkBbA2OpPFKyiK2Q2c9Jo1A5AIYCdGAYK2TTmzqX4K35C1UYC6bK9ZTnop3%2FrTQZ888xVmnhlTVXK52TzO3Coq720aUMy174xwh6RGh%2FV%2FGqC1vFqYB1b0hMfZRiLyTD6LJHF2ni1xu5ZBqz2s8WA8R5Z4YFfuiDfSg4JYEjCu63Ngabd0AebGtzeug9cV&X-Amz-Signature=8d354acc8ba82c05c70a6f22da0b9c62094d951c4c7a5fe000dabbc6ff721e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
