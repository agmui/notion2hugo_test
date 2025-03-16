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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWDDK57%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj6t2k0dQDjHUzwukQZ4mXA8axv%2FrX7fHnJlkmYUomZAiAzHelCN9Zhe0XnyLcSLJb2EjSylDx%2ByDjF8iDIIIlKVir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM2dEg8d11wrqph1ikKtwDv08FSl8qmfYjUT7BVdvB4ihHRQBY0FgWiuvvmfBdOwrP7USv4w3E0LGjjltJIJgKgkAx0pz386o%2BCHOAFNXppM9rafIQnQ6BPKI6xVmkEoE4khgNM6UYeLIm8Cs16Gb4U834hRTYJofdCJ2SezosEF0tcdgk%2B0SISepjIfP9FOrj4%2BucMB40lh%2BcvVDhtA77kQ%2F1oaD0nBQhbsqIHUT51QOOOSotfSUHPV52iNx7jazth3IhItZVcj9i8ZLcRa8shv24Uf83bUrcoiV82%2BwPsw0bdPLFbh%2BpGhHkGZrqqtIPYBKNVQrpCzvc9aSPrhr8HdpnlNISprh381QZeJnOf2bJ0lkyufKx5dgvx9YcilW7PrQ1tmzrR4mrhe%2BFixZ1ePcQz%2FINhXQ48viEAgXCq9DONENO4fYak%2FLHJuKA94fjqWtfkKO5gb%2Fxgn2WdTGGkhxl6FuHCNVU4Sng1CuJEc6vwmYLs%2FZz7%2FQJjCFwdvLNf%2F63SEzd4Hs2ugSzh9hwoTFxcuImwSSCiAiNZUcxQWwoPFLHjSPNu1In5NkmnYMwJiCiEx%2FM%2FQy1N69FkvFRcn1yJw3%2FzbclBUwp5Y7OX%2BUZg5FT7JThhY1WBXuHe5lFI86Zv1o%2B8FODuH0wo53dvgY6pgE7xD9QByXAczId1eJT9TvFrqlpyRyDZub1%2BMSJ4VXlGFFhF1bB55WWffKc%2BFeEoRhVghWppbG0UOYLmaCOunxiRj1rhyiy2AuLYK5RbPYlLc%2BKEOdwLVCIYrL%2FD%2FuKNVNbiE0r9kYuQeynm5b4eqXdOJJ2UxD7YCSd3UJpO7vOnfv5PA9m1E6%2B9S3RyBb9NJjLgJt6dprTLoA6KRcDc9woKHM6roli&X-Amz-Signature=48801f56140a03a903745be2c3e20bde14912c0c7c676b91348a12d56015c251&X-Amz-SignedHeaders=host&x-id=GetObject)

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
