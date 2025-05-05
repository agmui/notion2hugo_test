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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P75A6CM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjVwJ9Q%2BA33YR8rycpPv7k57fOE%2F0%2Fsgdkm6bOYQwTkAiAPYjFMibNOE5f%2BDXalUEVHCtsONG6e%2F9jrsOyVAb53jyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM%2BjwZ7gaAZlijgAm4KtwDxswh%2FE6YRE4R1YXJ3X5vKVZDw5C8qvcYB3Kpnx%2Bs%2BqkIp4CFyt5QAktTGjvH5pd6n75hY6erzyKCgA3aj5FG8bgVUrvXtiZaj2xSDMfWRDMtFurnPrwQyCYfUiKzxeQxN%2FYjhGNQAkZxNWDLt2fMizqLOU9%2FNnPg5F7o2M0nNSaBA%2FHpBc9B0okdqoaAol7X18ACPMx6fFlZoKDDVISPS%2B%2Fhc3BqbJ5nBZl89sFxzT7Nm%2B1IBXJv1YGbXP%2FwuV5a2kqwMlDNoWUouYz%2FBRvG4dcrMfQT%2F0g7Dat5JZ3q1KvdWPuIg8PRUWDn8LaV13n52uw0VRFW3sqqh1T2%2BM6S0NmVsndb7DsfhcpD5TefQUjalCd2b0DgGgsMRHsEHRql9Nykr5s1Zl8x5a57arLVxliqgr%2F%2BbPjB87HLPaQUgBYw5HZ8h1T%2BanbcOwvClROO1oOIdZjllglNhyF573A4P53g6GzuKuG%2B%2B3S8qipkZ9lY9%2FphCIHdrXLjQl%2FcAHae3PwWD970l4WguMPfQAJOWK8PmMC82lH9bqruCJv6uUt7t2uwUTZfj%2BwFXQHVq%2FaKSYvXyNI%2BS2tjsfEWxyt1Ift2zkt12RvMtvJguPWuhU8ztb7S3KcD54yKmWkwzP%2FiwAY6pgFAnPQPEGKpNxYDSsDMmeuIAUbjOrn6kx2TEIevlCqKpwasc8ugGg4KmSUtCo5OxQ%2B7lGAdClWDSsRX2X6SOZMB%2FyRsR88EO6DuWsoZkpabbaCDuAq2Rykblr9ZSyHU7BwhiSUgyOYlidaQwPDr7fd77hC2NBv3z24fyeowfkLwThVgjbUNhaBPVTuM1b26Duj6LJ5DKCsnjnV77HsAaasg17%2FSHCeD&X-Amz-Signature=7775cc92e3877c4d2c4142389b5c84f56117230ca23a1a99bc123f9858064669&X-Amz-SignedHeaders=host&x-id=GetObject)

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
