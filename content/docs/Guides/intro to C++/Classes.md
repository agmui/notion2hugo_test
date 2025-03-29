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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLIE4NYC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCzDKhBsSRg4m1766gwJ8RM4pmXsykF7ThHnHC8MdrdfQIgZpsrLmyKGMDxKboZFz9rSOro48mOcRcvXOajHi%2BDtY4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKBPsXY%2BREtZQDCgTSrcA1hFGSiZFmXd1jOYvTzzyt4NLJZ7ve1P98iSEA5W8EkUfgqkUhv5dpUb8%2BSC%2B9rDhsURvxw9QyW4Rxxz7w6NIDIInbH%2B2VhrYgvtPj0uHRT7jaTvRl686F6my34v632%2F7TFMS0JbYDwdkeSOmhqLfhGDJw%2F%2FVBAjeTbKU2ohwaKl15kkX5LMr%2FazRk6FDo7dVRlWSdd7xhAnKpOanwGBwe3CL5Uy%2FSAQ1g4pM4o2V9OTczyw7FuEjNOwdcZYS1RH8z7J2QeJo86SEcG2kc0nLRKoncfOlTP6dJfyR8a3w7GQUqewvV3Qw0TI0cbV0huI3xUN00LxBuEN%2BGJPV8elFFfuocGVKHzAWgMrN%2BuXzmaqZEXdVZ%2FOvD37wS5WNH1iH5DfNADzoVFZzVFitI0RXkLhxMXdjwFdpPJfzSx%2FsryeoRldXNl9LVEuX1j86Sx1zy8RQ3rDRe0RVCZaCrO5Xc5P3j4W8ieFdw%2FLzVqyzUJbaCFS1ch1KCzfT9OizrrnHMzjjKTET1omH0hzkDf8ACyWYY20Lvx7y7HHKwZ4nJYkmemp8NFkVkpl3vz%2BGp670PIkLLg%2F54d2PUJucrz2j1hjfwXNsIkkuwYvGclyoLyKEp8Odw4mgiIKUx8SMMCfoL8GOqUBfQYiXpbYPl%2FE8kpcLosCzYzXEcTRvV4FCc8p9MEH8ong4gZ27RjQLFTuD7rUpUI568UHyFEV0YaOfP%2Fqy0fAxwVHkW0vcaLNedVI0FSZByOLWEON3Pag%2BV3lyuOjT4ZvNgss%2BBx2w3IRzkjYQcDdHgizwSWO6FYGXFSjNIkLaJLxgOJ%2FIpAlb6chPd0CdBd9S9RHENEcSVTAaA7tLiJNgUNPqImk&X-Amz-Signature=e9852b17de7d13a6405985bd56fd32b9a07632a13fa4d3a7172484a0dac6aaad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
