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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCTNMRHW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDtsipyj0ZUlnAbar4i7MICx3ue8OsvLqo2w8IoZPcBtAiBVgpyEzoNLCHC2ksqvbKEsUqk93Db2fo5UoOJq1JzdCyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMaNVF15nLWIpe%2BrouKtwDVvtrhGEm5mzoGhTsTyfv%2BZSTX3XtZPiTxxFLLf6WJyvaZmRpkjzDGyi3HqBg7%2FSI7OnNro04RrvAILp9%2BpJMqTyMLu1gaF61oD8I0iWpSUgZa0J68M3W4RB%2Bv2cTUq%2Fk1DUaFdtgQtjA3r333aA%2F8VFkJBhwRz62RlIbr4PBDdHAV150Y3Qq6lkVCwPJL81Cb4e72TO8fhq5f3rePCFwZvEVCFYReYgcGLdcI6H8RjCcXQqrotrPHyEMQRWQsVQoS2Xe1DND5TZEoaZQJRXtKcWpsgswBWvOCrcgLXalGqxdMPeuwKjZjYd5ywJqLkXL0B9j%2Bo5tKea8YM6Z8hJTQlRl0I6sxjLV1AwX6UaBcCdtoozQGvZ%2FWKHb4l7b1k2Si375U0287Y2K1E5RGJH3OqCTUkJaLAJsjQXESO92uHY1a%2F%2B6ZxmQqjeLVlPt68w7sFGoKfBYeSCSiWx1cHzOT3Ksukw2spsmHLUINniLUWzsayEJUKpvthNbw9GYoX1zuTTOJYhMgjMO6sMy%2B4Q4vuUIiVOAVasbp3uT2%2Fh5H1lhMT3wbxDM1FBkfTcx7KL6yZ5lciBkOFWrgtYdRVW86tdh1dvYoMwCAge%2BjNNqHbpncWUG36G%2F8XdkNokw8aCowAY6pgHRKSCGz98EWA7veei7Qoi4c67X%2FNQDxSkrUarrJXdLnLGPGAMHXjkWCpPxqSHiCWDLyckUanzfl%2FaWX5s2x2zYSeb8yvkmJSBpP12XveN3FFXEhQPA2HSwruQh%2Bvc7YY5agGYdejiLlNHQcJILrgKHuVnz6e82cdPjamMUtWoMleUtJyLgsm4qRTulTvmlV5PwVoq0m4vrQ05%2FVifzrjiE8%2BueMsHN&X-Amz-Signature=644ab219da775b50a9dd1478ce17d82abc4242b652432a95e1004f4802adecdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
