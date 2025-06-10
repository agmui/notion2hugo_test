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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE5C5XIL%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2F0bLsa1S7LpAu8Jqn%2BxbqQb%2F2xPYQT5WIgDMZaqCNQIhAPyk3NuyvNzW7IYuclzyLW1PKcYH%2FO4d9l0ELnPiPaGKKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU7SUw%2B%2B8i0pNsLf8q3APqackextNVU3gMVwUf1hb0ORVCs82RWMYS1d4CkEHCvi5Qx5woYol8hSFNR7Tn5I2R87ZqmayTQrh4%2BFbziXPjVlbVYvFJFMCo9M3gTZVueQtFwT3TPVYN1oOXS3d82xfjDgCfrogGgYLMANKQobKRy46rIXRsCKHjKBH3%2BpE1E3W3UN3xk8iaA7BE32c9RhK2UtBCWQCsxw7cE5IaTxQgtd6r3lmRaTlSqN%2B65yr%2FnvRnswMhd5Upvf%2BXdpyMUE0JUKfk%2B5JV5HgOH8VaO6EfuPGLi%2FuFFO%2BcCP%2FRN9abbiQgfcbwyDy%2FM8jOzoJSNdJ5rN4sMPGeyF9Z1T%2FAlQO%2B3yrr66dCACIwi%2Bqm7%2B0Cx5Ih4v3Y1Ah2naxdTcxYR3rzyxdWAW5Ld%2BliQPlb48fdjglM3MxQooq%2BDZomuKjnSVl7M6qv99wWXmOc9Fr0TFuZXJlP1OJ6ATBk0C15Z1IkpUodxkC4rR5MEYQZvYdHEpHVBpRdEoHJQrz67lQZoAxNA4ldBZdJI2FCUsIh7uL5a5bZIVw75RzqeR1GYS9Cq%2B3gEruRWS%2FlSC%2FB3fsDShkwHnUL8AYLMyU6Q2GzWQG%2FrkSt%2FJvxcD8Zu1a0gu%2BDSU6Q2%2Fwaoo2DgQP%2BmjDjv6DCBjqkAc4OtJBQaVZYeawSOiMz98ngQZGGHRkZ7Y1VK%2BvvpKwnKrStKH2u82rzR7rmpGIJdFLT%2FElFmqLzMxe3%2FsmBsjMcSenpbS5cHTkayhDMWXLbVarPazJdhVKlj12hS5a4npv%2BH0OjHS9DeLzKdsp02QANBFHxM3%2FA64iFTKCG1k8du0h94FSqr%2Bk8tuo4TY3WziaooSBcW1k04THLsDK5fOmFYMbu&X-Amz-Signature=4921e3014185ab62920143594650ee069fb66456d2fff9ed677227c4cabff602&X-Amz-SignedHeaders=host&x-id=GetObject)

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
