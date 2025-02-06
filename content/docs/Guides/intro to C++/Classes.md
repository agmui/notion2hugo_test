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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FKS5NGC%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCBfHD3Q9mtkSDzs64L7vmvHSH17UiAImO8zoGjCPCspgIhALfwaYIqJsexbZFuRIv%2FY%2BeDPQY13SDfY%2BSUtpAdy6zEKv8DCFEQABoMNjM3NDIzMTgzODA1IgxtBJ3jswZOQZ3tdv8q3APVh0YLe%2FUDCR48cz%2Fq%2FDEQdlaxZOVGHStqrH2tiQUbsUOS8ffnWqLxkgFOT1rdw62%2BCziY3xyV5zZGHODfAyRfE3lQ%2BwzSuTrEez0060oA9y%2F5S7hs2lSQorMNKMWB%2F%2B%2BG4NROFGGmLoOZhO%2FCTuoo11Pgp5X4KCDyhYk4CMlkVdH7BPA1yeB2XwaPXoqJDGYAZJD73ah1OVaqnb%2Fz2wpDTicJJpwfrGYusemgyfL6eDTXYXcG58eizOTuS64x2rh5%2FLH7NaZ7ZVm05Nw8qqPB9KOz5gp7LL3xVnxL23VOYKr0JSfk6lj6%2FPKLst2%2BcEXCVjPG9mkTU5gnG7x8h5G7EkJrQf0Lf9vnd%2BTjuQNhP5oxlypjXNBJRdJnLjBMoLJMTiSczCz697A%2FXuzSPnXTTMF9UJQWtp4wuJxjeNKFutbKBfOBjXGXDWQSxUQtx%2Bxuec51xUpEReF1rHfl9fW%2F%2BIulpQ3%2BTLNv5RWp3VTWToFeE72BTIGLVO5wjBqQViAM3LRggR7n6Bc7qXJ4UdHTt3Y7KNIjNO8NPt5aSm8I0vGvg%2BM8ry2wNQTW8xXRgKcTFMp8lDw%2FrA8el7mUOfBvrXPmUNj%2Be1cVtU121tn7B%2FRw0r1ToCwCQG54MjCs%2B4%2B9BjqkAT6WQRR3qgKFpioRJDQyDkspIdb9IFYyTKJaY6wvcfKUS6aVx1uiwVlCVa7cClvijFz%2BmdAkhOkecOOP6GRE4alrzRjwyJ5llWTIGMDdvj0HDDr3lm4gTI6QoNfnWg6H2D%2Bs1UYSAsJy5JY2R6%2Bua%2FZ2cRKmRw5fBzOvpefzWmMAusR7qiEJxo9h6q8eU9wJ0gej%2Bxn7cApF%2F4OD8vdmFYdIkkP9&X-Amz-Signature=e6bf7e6e52241305859ce77813da783f9c4f98bc968c888d2aaacdb46107c269&X-Amz-SignedHeaders=host&x-id=GetObject)

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
