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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH255SRL%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIDwHb1TPiNEn3iQV3MBZ2JKitxGkl%2BCLYJtGlJE%2F5ETvAiBMZkxpSh9qd5YaTxvFA%2FtQFXtF%2FtIZefUWGgY7rj8hNCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9yRTOdhoVIaywWH8KtwDJkNsrModh7x9P5Sq8kFzQQMDgFOCUd4iVXjaL4SAutEftf2%2FN1PKP8%2BNu6uuX7KpRxR%2BkTJiahQuRiMzHC7VdDAavNw%2FIISVRWE3i5jrQxScuMZX2RRHV%2FQYP8OOaqhNm1AfwACUe7FwPDKcyeHdt8thqW5VZUhnJf80w9A7MkARlfhfexLiXD9hlDh6H%2BFl7Of18YpTsfSjhg6to02p4A1o2AmElGf8ONEVGoV%2B6vurVismFNrSaAhIh0dRvvkjzN156BJWL7Ti9YKu0jI%2Fm0eVz3vMsD2ytML5AZffSbfscYwdFnWIkGZy26%2FRuXNZx73ca8lrihcPJSVwaPJUso%2Bk5LZKmuwme30ijTebBylpenlu6%2BQc%2FoXot74c2Kxe32XLctYPvY7MbskK3olepElIl8HOpl1BW7p%2B8eswCyBMn5DYOFsH5nVf3N15jK7OqBkZElmOc8QmOEj%2Fxm%2Bxlyz9yrwSv1aGmnjuL94mtwxeI2rpWNKgRAlPdY67UJ%2Bu32EBAf9RWX%2FmDXvA29Tf601zKxIKs1E45By9JsdgYa5mjDgYhNIDR7QI0C0AQMUQkVrX59u4HzNDCcxD4duqGiFJ8VrgZRh3Y0dBHqiyr%2BAI1d31%2BBDNn5JXmZIwuOnMwAY6pgHmMw6VDliri2kJUWD0%2FIV9MdDALadM0neqTioDjcmIeSzH2%2BaLJNv1dxgEPbG4oFAU99KbhciZi33yyQ37BJuewIZur0gJiStoKFzkQosdfPNjtCYz4s2Vl95IJiEpw4gVaHCWhSiGCFY5Fo9wZ1l8eU4KXQc0K7n%2Fd4lJ8car%2BOtHQ4JLOfbI1lntIHxNMSSNdbiyK4L5awai2YRThqOu4FVUkWLi&X-Amz-Signature=9ca18ffa61d2e2fe757cf17dd195cbf4c71220b788713434dae8a150bd112771&X-Amz-SignedHeaders=host&x-id=GetObject)

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
