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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624UNEAYL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZV%2Fxpfac8M9uE6Uu9rFOSS0S%2FbpJgFiyFc7i3hM6z0QIgeoxgdiTfsfdukgCdt5OUJ34097fjr3Cdzw%2BDsEA%2FPZYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIi7mJoyt4L74%2FwtCrcA%2FMtlNLnGd8t5uzSGggvELz40mbtah0bSBU6y4KKR5JnIeOlJ%2BXTgYlYZlOILpBrmDal7RvzV8bCxRyfU4ExA9a61FT0ShT2QGPLyNLlYtyQmUU%2FwPjLWGxvl1ZWRr%2FLCwKPx9u0qwoe%2Ft%2FaOkKgOD1VV7KJJfYj9UA7eOXu3dozEWaor3Mwn%2BSJhPMM7mbRao765K7VaYtoeDqSDfZ7jetR92U7i4RbqwneQAKPv%2BZCD5vUoPQe8pqFuRdqUcXO2YTC62sDJ4p1UxH0aqZB2FymECIRZBH9uC%2Fb8tpFUwAItQ9aYq6wju8dPOVvr2mzz3W4pW%2BWwWOXBUpC0m4oxOUaqS3p7cLEzHSELzaqSKaqKLSanOhgfq5MtMtcFYfzd5FtmwGRodNG3xxsgsFY76u4T1bYf1L6ToLZNhyhOsi0WOJcvcnptqdfet6axtLcPcSytcdpESm%2FHy1y0NTDRxMSKPyUsJaeHmIUO7d4PMwiz551DsQXJo%2BmDkzoHyi0iAQSjz1eivWwDW7ZKs25dMxMmnk1motCFf67uo93I2gxafEXCwlSK1lvgGUAhndmNrKoQ3c%2FH3zR%2BxHOd643hc0wwlW8w5SdE1x%2FFCv7QV%2F2%2BWKV4n77JCKebbPbML7Jn74GOqUB3QMKVJSFvoOAySBUbjKHkZ1oVScFiT4jqfQSIC7qsw03PGCg%2B88BDCyfY2Hd0nVyQiOERaso3my%2FJKhp3%2BXyzqLnEMz4%2BXGkEgqSfe%2FW8zTjcoEuc%2B5L61oRtH6wYFuu0UyLCWGkT6nvk0DGj%2BfvbIaJ31ZAubMv28g0Mp2MW8ip%2BRlFASXLtYDn5%2FqAqffE95DIyAueqztO2JIyHn7CeBTXtU1m&X-Amz-Signature=f364ac4496e3864e07e4a661f82d261bce7ab116b1a01d861f0df3b8855cd07c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
