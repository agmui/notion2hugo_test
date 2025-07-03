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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQWSCVP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID%2BwgNCBlbtlUmgMGTUkCcA1yo2IiOBJ2TBL1ktBoCmKAiBtMURIVqsRtJ7U0OooJ5fd4oXLxEBVXp9zqZc%2BVS2BGir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMB0o0khyPFbNakZZ9KtwDvcGuX9KDBI8qy7m0VyQCJPbVGCn%2BkfPkWYfYEQHTwT%2F0qM43mNa7udBqxXV1fuxZGE0x8yIm%2FC5ugsP%2Be%2BKTsE12XtDatqn1fM3g8OxDeRMadbA6HsVtft3QXvv4FQQu7TTHFMUz2NAxeZBu5xf158Bw4%2B4f%2Fr2owtyiWHnBsr7WsIxxytoan4Fad9EgEzoIDPlrZy00%2FmNHzJvq9Hj4dfJEmzTOy6Qni5WBcdAONPOWV7gn2XXz7UX2005nIg7sQKRDBQ%2BBJTOg3YbZ%2FkMEL7psYIFyL88N%2BnZcsxyeDRV5FZEuwqr%2FdbDDX4%2Bq%2FoEi8eqyUd70ncxDjR3mV%2B3YeAzYG4nKB9DbUMBfbOVVcQWEfoqF%2BidtXRulWB6339rhzhQpegPVfypakyNlNQgPEr9mCJ8x2%2BFMJhpo63T9npFLrfu6gXLm8uoJXKgtIScpR0tZD9DS3e90lQ7ouDf2t6%2FF7n4gsI704M7Lp3qRKLOaYqiNw42NF89fATLo54CACplJanaFtaPFR4LetmU6mP2cJmtQTpFrRToVLhEHUhX8jXu6As65EcJdM9RBwKdLbipWGVeq2HgFM7%2B7QGRo93Xb6EDpW%2FPnM4mGcisltidD1mXtXpIMemEItI0wx%2BWawwY6pgE2Cq1Ybz4LkAFK7uANb9h3xT6A%2Fr4aAYHb%2BbEEv1dxCHI2Is1RNJGWEF61UQLPDXaD4FwjoEh95ZSxKTAIdl2MfDf74Mz5050Z9c3XIRQ5WjDoIa7hboIvHQjpTo85xxKwnjCzy9D3NJ0cYrPZ0bJy7FJ0RJQhLIFDf%2BajZls119pgdtd6%2FjwgT29tC3y0MOppYL7v86HH%2BEsohDghv1hsDMUYIn5A&X-Amz-Signature=7a2a6fb3d68d8c983b9e8e5dcc40631a3797dac111838f43b712d55e59350ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
