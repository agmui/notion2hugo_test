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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GEMYQPF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCw9o2Vt0H3ql%2Bct2k42lnQXlEdcrXFmc0J%2BC%2FM2ADwvgIhAJWw0VGtTGObw%2Fumf%2BxQ2NqrMc4qYozvOcJybrRex3YDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BVbU6xtSLQA7%2B6PUq3AO6g2rqkMOJX1UA%2FpJST9xFYeIF3aUSm24lAixTUs00PBw2RSPpXxKcpqVjk2vxO6flflArcOD4lRSqEFI0V7rwYYj88bEzJqtU5VYl2delWDagyLHq14UAkpyGiMWtE7PMh4Dkre5BSmiOMCVJ8jwiwuAR%2Fs3d5dS8aOZx6mxSH7iMM5KhibHHYjCtj89J2rOkE3PHadOaJ7KxtzNBWd3x0pECXKM0rQ1ovBVZ3D7Ah2oXWoOpTqxgcADn2O1TH%2FFqx%2FojcdaXaoXmAx%2B%2B0TLu8fTMqeIQmIBmhLJGVx19VaQz6CDX9WqQtIGF1mqxq6oItIO%2Fv3ogxbqkyRAYbCyQGd2J6Qlk6V4EIt%2BEjPd4aSUp2lbD59XUg9GusmPHidz8ZN4tFyA%2BVbvNdT0XgbOBsPcbywZGHXymtaYXO1rLdqOaJ9mJhcbaMTB4G4J7ayZ1H5gCQtrBuN%2B%2FWCJG5ot7B6FWTYwWsx8zOUuFO%2BlXZNozkV%2Bqv%2BU4L1RKC0ymeB63cCN%2B%2FpGu%2F6Y%2FThG8PvmTxGALgGOGUybuFYJ%2B61WApp%2BzM0fUnBmnID6L9syaagsfV%2Fx908O5eRpc0p9El%2Ba%2BwPqdYXyxZ3JQPSAVmCtaSyoTJkkgrYSHiB9ZGTDJ3eK%2FBjqkAdF8Kmxt68ixF3K70FA5Z8Ig8XbX2yzJVf7rmIgPP%2BYRa%2F33QzrAuxVWmxW05cr9IMJ%2Bqq%2FRGteVYd7iuv0K2WFQt6qD4mUCNWLJ6OEiUdo0yzabLADgw0WMHYW%2FlZ1gLANWK53TPLvvC88u51pKwfKYKjuOwLXja%2FaLru%2FTDY3nLrnk353JRLglxO%2BF6%2FcLEA6Nz2uXl5Rxzkn4X9wg4XeR6rJ1&X-Amz-Signature=37fc9f12d9cbab466baa18dfa48c32ef0033a0c01e73ff5d2c670e4383d6cc29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
