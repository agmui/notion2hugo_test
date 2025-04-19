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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGODF6ZF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDiS9spaS5nvNm%2FgdSxFqgRFZjwgfNeMdNEVEhJs4khBwIhAJ0%2BbabZApj1XN1bTYzMil6o0OX4SXvI9ogBCwXiLT0OKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYpHnxYzZLKeBnPOsq3AMC64HIrYYuQZorq5lOWHkWWm2asCaRvsgdrmqE64sHW%2BVeSHAWtt6MTk68GjJcd62R0TePmiO6%2BN8AZq2qAmynJGe9tEbsEWHxd%2Bm4owSi3T93cXm62eD3kKfW0AOrtmAlEyYXZt8qq3%2BNPRYJZRCpXOsQomQo20Mdaara43xF7bMF1Cm5qZyncZV6vGhR3usav5gifuW4kwMnC%2FDv%2FujiJ%2FiEXymGxc8UVYlRcOzFs%2F55fi9TPGW9Ws8FI1OufLG6PgGuxyW%2FzxYV8x5H46Mvv1QOGCg74ydn%2FLkaA4E13dzw7fBGayeG518OfkrZV6e7%2FnSGsGiYDW7GSVwgguUUjm%2Bs%2Fs34t4P3VlGee9VitsW285aaAr6baxTwOt%2Bd5Klc%2BQ74DtyvWptkHniOcShiul4PZ4ePDKOwDwUWSEmYpMsoCkeomeMyfiXTQXgDL%2FPyrIV4lTxirYdGxQlCbCXFn%2Bmuosa6sjpOnr1YnU%2FRPvArWEVlp4tO4IfekQfvzngPrgqm8MhxzOXa4r9KpFO%2Fn5yv7Sm7TytrSWzCQSwA3rxJCOxtnKf29vP2dheOUu%2Fwnp2ADpfa8OOKjWlUovnIvNP1aTpy2V4Kouc%2FX2Xh9Oa%2BZwlSUQ5P%2BF8%2B1TChpI7ABjqkAdcW8OesXdfgwTAvBwOvOFmvcN9l8mGlJPIoCIstFJiqTXFIM7l3qIjSFr%2FH%2BarzGeD%2F%2B5Y8jPJ6Hbt4tdGVP7V49NM7Fn7ffQ%2FXp4cnYI0g8cfL4VupAeQ5K4%2BS7S8GGZceaWt1IBMiEGs2uZqVJNxh%2FQDgxLEBjCqnjbI3VG%2B7DFMKDBf3kxfnWsAp4vWCNym%2FeuzL4TBymHgzNfHhVc3Ijc2X&X-Amz-Signature=419159943750e9a6f8f75173428ffdf19b812e11679647ee7c81518efa072c43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
