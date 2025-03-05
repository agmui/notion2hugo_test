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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCKSXHR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjLGsq3WHMS8OZCzC3Ted2ymdeGN%2BQxZxfBkUMmowBAIhALD1rgHDr8mVMPg6TfUZ0m50rfBJtjFbA4PftDVr22OhKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F%2Fpc6YQYPLx2yRdgq3AOhS%2BZmF5zRzYZyo3MiMgzXweciH96o37zpqLhHyQjzP7R8fO2cMfa8MloUmgkAnYxH9P8QLtJ9SSel759ezd6K4%2BMXPsmEy6rbKndCXdt5%2BSV5yyBEu1ND%2BG5rc0sDjKruVBE3xw9SqSiTkJe1wDIrQWnca99f975G2H%2BofZnVTaMDxqVqOslsvbqHFWU2cqaM5yEFV9oLsECyyypRf4bFHkSxkE07HJxnPvnxHkUMRfTn4bJ%2B88v0e9ye3G4IcmGpqs%2FWc2plQTiFYWVC4yYGpQm3GC65vQpsH87Uubr69yJCfqU9B2IcJohhRw96BZKKTLU6pR7lMJY8Z6b3IAjmOf0jvzdC81HQfiwVxd2Hcw7ITSIRqhnQfoZaVJbIn4H6SvlpMZbividRqKL7eqxyNTZ2VP%2FUlmsu71CbLm%2BIuqCffxknIa7JfytGcoABEQVzywpPWKoU7JPRuDmBnASZ9g02Ho3WDGM4ol8JYP4mRCPBxdlmO2BWL4ymicYPeTlle3grJOme%2FAayDKagEBlTYbl3KCFUZEDuw3%2FS1Wy0ubr9iXubd07Ru%2BuPtH2ox64O0ivQRcANqQA4Dy%2B2AG73Jy2OElXJbPpY38DG7QRpsTBN9cgdiJlLADmaVTDJqJ%2B%2BBjqkAWSfYasOf4Y5E0SfCPiYrFdXvCIRgWQf3roLZSnsiTeBjNl0Biq0MxDdUAJCZWh0UDvyCcPNf1%2FfONfScZQ%2FpoRTK8cXRedHP1CP%2FSLtmrk0naRzkrNtSu%2BbaWRelaJ9pDMtIaNHHLkDUJNBrzLg9IRSE5cJPofkbJt57pG%2BVVCUUrVv%2BPxiKXQKMa5b%2BVY%2Bzc3Tz3MpczCQsB5AGk%2FSngwvipuX&X-Amz-Signature=7ea123c81af6521bf7929f2824fc219e4f0819baa3fd67ff1ca4c2ef1b9a92ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
