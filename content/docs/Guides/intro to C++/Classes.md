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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NLTZEW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDk0WFEqwXE52ddQYbm3f4O4tZuJ19GAff6m%2BUBdiLPLAiBILTP7CWShF4%2BeS4RWJs8K%2FWnWr4%2FtBSeQsrdCBTw05Sr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMteZ%2F2yVKUJE1mi06KtwDDXggIZiHO3VrdJRpsDNDL6ur%2BQAelD1aECdAjweWDYa%2FCL2Diy5DQciUPHRhfYVbxGP9zcfafe9Kp9G1PC7oSRlrp%2F%2Ber5lfZ1AeAPSCwsCuAxlhXLkOWDCq0L0f81%2B0BHe7GGxwJ4S3bdPOCMoEta%2BJBP2272Buw4FS4zMaHQMT4rY3%2Fen7Owtp%2BKL1dSMf%2Bopb5o130gdcPOmU7p%2BLksQSKWPJyvH5d29YcBFNAkGEQlPvpuusruS1XJRZ1MyIp9QOfiLgYFnc8ZStTyG9UCvpgeRsNEf1WfOTIJB6B8aHVF4bPYJtPEM3Ux9ngbE9Nl31XTsk2FNrPYcSjKENMH4zbL5R13tQ5HPj6pM2aQRHYLDSoQsv0A9fidCmWSixII9o7MLKk%2Fu%2Bl5JlNI5R6ooH6ctmYJFjy2soxoswv9uAenshaTso4nsMBjnVzodrIthWQDI5GK%2B%2BLGDdnbRNL3P69MZ7PJusZCOgfZt%2Bt5cWWZIkvJF6QAPo%2FISGO%2BbauKSy%2FNQnklPruv8QeM4eQqQw3Ks%2BbuioeweCidncoJBE8k4EcTknEqZvXW7Iks0h5eWQ8H2iigWa4qLrYoCoy0PbAozZ0Mkp34vqhp8IbU977%2BF%2BegjAaeQhj%2BYwyu7vwgY6pgFUNyRS3HyARUh3BPsQ4S0iPjOtAkKlID1nF6WdZK9rszjnSNqq0GssV5NEv8beywJRge%2Bfj9mLLmpOeRD7gQWOs%2FJ0HbPHWjwVpQlBWs6KuJjB5RFVifAXqXuRICi3cwq2B0N9U1FOfvPqrrSHi251ieaGi8h6gNp9XBAvIsqC8ZgKQLIVsd3tpSrW55XPh4e%2FvP2M7njnAXDRNTv4FcnMYxl8Nqi3&X-Amz-Signature=e4038b14337c60dbf50054b2b8921fac72a55eaea31586f3c2eed561c43bf766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
