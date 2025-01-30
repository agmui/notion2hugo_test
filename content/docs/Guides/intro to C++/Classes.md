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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZK4YL3D%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFui7%2FuQfqyebgIQQ%2BPGwj1FW%2BDah0GDVd2FVawS279tAiA1IVQH0xmUl01SOWzvX8oSeGFzwP3TGkAE56KBFSE5wiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI12v%2BqA9bEv0cDUSKtwD8eQVd30mwbbcES9VfWdts%2BJ4%2Fzga9R7PXft%2BdTVWhxaLtho0NJtJcW4QMX%2BWmg7hRBgbcqvRXj%2FE%2BbwIN46GUeQ3Wvb2p4RA6k%2Bux%2FxVndOpvzkOPy7OBINIrvBqAh0h962jdbQoQk4ZxQwP2exU6Pmc6FWUGOpstiO%2FLpQBHvloVS%2BZ3eWVqPelykbPK%2FmNQ%2BnWpU7Uznn0%2FXGXDCXZ4MJ5S8fJYYUn%2FmJje1oC2Ox9250zWd4jZPLB2GMTkHbvgSbB7vpowfIzdNXWgyDnqjdvczY8W6ViTRGiSoWFEk0olNtU7jCt4k1ke9hyXFg3yosLSCG2VMIS%2B3Pt2H3oN1Rm7R2GOlEehVVH5iWNoyamDAQ6bFkr5BF9a9QtDi5YMuPbm97icZB%2BXWJNVK0vXGFdPcNY4Vet%2BxedGlfySU1z%2Fv%2BlqehyucRUEA5tLibjRp2oe0EuvVwb4%2FwL0RBmp1XQVDI1P%2B7mLRA%2Bk2zV5EfUpRdX6jN7hEFfLV%2BAMtBXl%2Bvy0R7sDFsmy2BiWD2L81PwrGZL79cKFNajhpupjjj2Og%2BvzTdY%2Fto55JTV28RtBmKyA%2BdZEsydrBgaAC6c%2F9os262UA%2FxMpJsYqxm6AhOMgvWTnZ8l8lNPBy8w4f3vvAY6pgHYSLRcy0VVT6SCC8mMCERIhFKy8ecDsUJdN9mSqRsyBVtolL6sLlcRW%2BsudvrXakCsH5QIZeReRMrPgX6YWbp3i7mn9V8PNUCVlEXzazyYLQQVqjbrZgcdJHjRLkg1tc8Figjv8nUloOreddV1EneIwVULdkRswM7j9P19V3Dlp6TuIiM5aXgZynTI3%2Fuv197bWg2hPn0UWTxmNdkvYtV%2BUVDauZAZ&X-Amz-Signature=a3f238ce032c2f8d5bb462a66a07072bfd9e5754d61d1ede7f0afc48ddd1dc3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
