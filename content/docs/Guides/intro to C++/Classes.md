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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBBEQLBW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDu9BE0pwiVqN1kEuvJXB8kiA8nnLrdl%2FjY2DkNEbXyCgIhALiZI2Bq8u2ZxWU0dXwrTZ8OuBKdKWHX9cEV7WSb2bC3Kv8DCHIQABoMNjM3NDIzMTgzODA1Igy%2BfVMO103rEXf84JYq3APIRqbsm9zbMW7cmZSsia0Mkw1m8bP6KvtaQlsP0h%2FL4ZzL0nkcXSOV7LcZcmNNe73BMCWFBx3GSi0ITCJP3u9vNgmmObckG6SdvZ9UItsNjt%2FTRpJPdUbRckhRW5vPPqHkkq1u%2BNWLszEOSu0BKSltdHdrui1AaNPDTBJcjknzmoWtgQk5F63qPJCajcJ0yfoC7Zm6Yyk3qXynQfyEYnnmmos%2F8NNHtWjzYGOlc5zb4%2FUjkj%2FbzxnC4Nzg3bpV0KBbtgEY%2BRvkrh8sa1rbqNECgRkAbeveo0krv%2BA3L00u7pywuQGJAmyrbqj%2BLD8PHKfwN50cOOWyx6CXXdz0gpxhcyvnTYZWpycHA%2FnaTpDKEOEZ0qArzlP5Kl5SGE1XEKt0bAQ6D50Qk0KlA%2BGJwFwBigXxv3pJ5wrGGjIwmwihfVkOqHVjHjiIac7g7%2BfHPKVcH3BZS%2BO3Q%2B7kOOsN6rNUYCgsfA2YlC%2FD%2BcT3jthVTDmSpFEoOjEiKSF%2BxYdupCB4M2d1nWgFw7cDnQV68VchWl3UEzs3amhsBUKseTTtgIPmw%2FCEHrgtGc7yu2bHZA%2B7T96BSQIXCPD4CILUjIv6eAHI8o%2BCsyNrjoT7%2FcTZo8mSaNDa3KVajpqzFDDl25fEBjqkAVhIG1pXSW6Sj3Q5h93nEly2K0W13Pc5npxIJsMlgdCqyig85EPZD2i6Kfux05cyTCxviXXFVefPZJGNbjsv2U%2FzAAN50q%2FwbCN8b%2B%2Bp9eQzjKaoNJYcYlPWrUdXdXmnUBAX5R5WD26BNQ2xLfevqpfWhW1imbjOYKUUZD5sgh3H2ELgdC8iFWpacfn9blncJdllL2gkblDBWqqMpQUCxaGXY5uF&X-Amz-Signature=13817e5f5d549784f1087e4d9bd46667f4be65ec6b73599c6788e6586bd3af81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
