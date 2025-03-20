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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTCRFPC6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBDeqivgr2INUBO99lMQmLqyDmbCLp3GjrgZFENdsJkSAiEA4qvd9%2Bzi4HcoL325MhYwv3Ef5pyOFODLhd2zMN4lFbgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6LRhzfEIEDbrzY8CrcA9xzNsyoZR6Ae65CIpzQBRQ%2B7z471uZF5cW%2FS3IOTlGDfvBfWpgVjIV8yBBZLkhlo8mYItqXD1%2Fy%2Fa5Uv2TVO8maoNpn4pKwlMzHKL7Quxi0%2FL8etyp%2BNKeCuCUpESbp7d0esBAuRir%2FOrrEYatXrjeMLcbziffnqL0h39CQe3hfiiXmc%2FAbanzzc9W1g%2FcbAKERXHYzZlxNTLACEHjcQRJPlfuhTHZLPby%2Fbby1trorURoctwPNN4WY6PE3crt3X4vvCRJIEDdKis321AqCM1KgBSy6yFqSz%2B8b2%2B9E2GZms0g8PN5VhdF51rlZFof5%2B%2FHdREbmCvP%2F2J51%2FZda7lXF3lQNNNlMg86X1A1uxd5ly7KFmqqvNs4AmkWU5Mha%2Biy9fWBlID4M5f6LZu%2F4k3cDrRcQdxsrnjZ3RkUZCMODSR4z1vUJBOnV6ueJQnGMdl96yir5%2BzborHQKyrgxWZbjoTpTjGeze9WBDj3249p74xDtRjQGbc7X6LcSlw6bISshH%2FVSidt1hsdc3aOxQrS3iL9lcX6Tb75fzV80h1084xuN8lrErXa7xerY8K%2F2CgAvSQ6%2BPqY1c9n0dcHL6Q6GD0N7li0tvVzAtti3wXjjSbvYEoFzEDsR%2B4puML3p7b4GOqUBrUDKbRKnoPFiHycPHiKPei3YBOWWtY0U0yJGlRhwXn7M40XLfL16Cx3k8T6do5dsoJCSu%2FjnDcUo1%2BadRzUtaGrKLsanK%2BuYdW8eM%2B%2F0SXmYDQY3puUGz2oWsY6i%2FguhJ3sYKIaV9Mi%2B%2BOO9teD1B5cuhgAEb3yOuDwT98NWRATB8UCQxnFQIqr4t02iNqa1eF4DDUeSzrMNT6zcRODTT9pXes82&X-Amz-Signature=3c50e8ac3370ad5364c6621bfdb08ec40872b2aba64c6b113db9255029ce94fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
