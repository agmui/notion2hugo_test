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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RIMGQKF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDLpz%2FYHXdp2j1HBcBvNjhFDjf0igciLUnLymf2QoU8pQIhAIegN1Xb3i4Ujv6EAjcMhoiH6S2nl%2FNm2Y3pCeAQoZXBKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUGSE5OWqu59tIQvkq3AMx22mjbl%2F%2FHjWk537UY%2Bk3oj3dwmDLNPWg2RAUygRdR0gE3TyPAKBU%2F56CYvw2Sf66W82l0TQJPF2mwwt%2BoFfvGMcyD2MuwBZSdR%2F4yqFNNewG5x6pExI8C48GQHBicLhI9d1d7N5ChU%2FA%2BN7WJAzeuHNPn5THyUN1sVtkZhOCYZROA%2FrdXvLgMjegGucAYOCdvnsS5sRjpGAIzYLG4xyp5TqyyveUfcCr2YXVf07NEHu23U6NrumrXWVomZIVWqnXiYMISSBNf6uYLOzoDUyNuig9HIVIwy2gurM%2FP%2Bm9XT9TRX3X9t0N0FzsXnis%2F0LiWxEVJX3u%2BQrx6TYAx1JM51zqPKGDK3G0BOXecKhRH3rnqcWybsyFcID3VMMXzxufKcxW6f3Ojh%2BU1L6vfA6yONv%2BHeRQuZraxHwnHz%2BWoQ2dL3%2FITu2ZuGA7VcyWbMR%2Flb3oovfOsWAoKMN%2Bp1h2F4ap3TuLbOk0VUIZgq1W6%2BGpc9noWeCN1%2F7vmsKSECyz4MIACLP24G%2Fefq%2BVdjBfljUUWrwk0vTNoW4ek%2B83PWrozisxGPy99oreXeJ%2BpvVCIFl6q42lf0%2Bo5YgHszWOYgmnUOyfE7JPSQA9bEXdxy%2BYWnFkmY1tYltseTDDz%2BjDBjqkARo1oImcGZqayDGJ%2BpRktuLuZHhlUT6UI2hPDaYU9TwKTfST8gYPXiwSebSvqJhItW8IyoOzsaeh8EJt4FR34fpxqXC7nqR7aS4vAKjXFCYFnOr%2F9WZ33SW%2BnVfaKpK1cjiYaZ5z8vifpB409oQvpNBICyybhTfGlwYJ8Q1sk84oXS5RMNRgtrstn08x5tkYIEQyPlk1shE3Ga7oGofAikLZz5wU&X-Amz-Signature=6312130022495fafd014ffe9a94dde651e5f4f9e60be2218983a725d4ec60e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
