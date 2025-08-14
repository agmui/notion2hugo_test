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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L5VGITF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl%2FTPf2O3MBqH6P8o0tcu9Wqwt%2Bwnbn8k9BnfLt3JgqAiEAqh62thVd9XLKIjcv7NtwWzhhyifyuZY5%2ByyDuR4%2FTQQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIT4T%2FBgECpruwRQryrcA8%2FRV%2FkAyiAYRhm%2BE3Zexb33Hzb%2FJrYMkWoOinzztLCQ%2BNTvDuwE47ohKXCwvzqyMh%2BErkkexMhvVd0oLseDvoW%2BoCUmlnDeiFhUGSyrAtsOv5GUj6BuPiDLR6wt%2FMlw3D7ftJOZjXq1%2FTmbqfUSWMKTpr33yyiBK1u9ycbkfzNOjs1Ax11TYBeWUeVp%2FlYTWp79YjP7xlCEOriqbK5FqXbsmVLRlzhWXMiu%2BpFm%2FoNtstx9X8WcKISFbOueKg6J12bgMMvmyuobuglbaCPgARh%2BEb8e79bulHRjx%2B%2F38thz2H6UhjzfSfDPS286J4bPeBCFnW9hxsNEeEc5t9ibZMVtP0us1lhYG%2F6isjXBc9ASkS%2BT7%2BiNhU3CtlToirMAU1BL0VvPOoDP%2BaU5O0Ajs2MsRkEY7r3bLU03epkMCkJ9ztRoJ1uB4WR1TT3YWC8q44gc%2FlvzpBCVQp9DBIvgpFlzOBQwr2tsYzlf34ByON3qvzzZVJdrEpv6ZCVbUkV3N6P%2Fedh%2FLnHMNMeMwkBxEofIEEgh45H7vDM3zc1K4k3T7PXni9YMpq2cC%2F9QcY8i8NP4C4Bbs40KBVFdO5D%2BpmN%2Bu8xzdXjZZkKrUEP1DdbQ5dc5q3N%2F%2B1PwSLoyMKWJ9sQGOqUBMzaVj5IZmnRBJWlc0vUNALRcJJ5FaZAMLUxD904f1sPjhPbI2mrag75KzI3%2Bpaeg8ol6mHw4YnnWgwe8D1%2BvaU0O6JVqBLR6yJG%2B8wiXRC56YddsOrc7JdY9TNglj31luGVn%2FWp06BURngldUriFy%2FhlpxnFNQchZzK7KEEWYr9i8vj4S8dqgCgMG3AoIC74DJWMlpFdEdY9sCkSUqC7EjqswKRN&X-Amz-Signature=8e702a232b20b233381f6805ece4521bd1b932444ff7beaf281402f692b3273d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
