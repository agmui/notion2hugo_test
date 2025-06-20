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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4T4FTOT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2uawrWvZf4sB6qXx0jnNhiEqlJn4RTkfpqiUhFgCcZAiEA436IbzylypTPG%2FcQK0E8S6D5FbziCoGzFpAoLlINaWkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0mX4LmUoj8MIJTqSrcA7L09QN0uQUOJ%2BFtTo7KZ29qacSTO9lr38CXy973L0N%2FIJmyD7FVvsZNILrGW61iRGtyZbdAd9mP1LQ4LpmCjPGwz2N9uhtZSvtB9gJoTYJcEjyPKRo70mRe8EFVppn2b483y6sj6km4Jw4%2F7bLStOk%2FRWd0djx%2FyCumQD7pfSoVNwDWbWMg3ALp2g6%2FqxZk3n%2BKhnluZ34pMJI9K6Lrqny3%2FVQg2%2BNiCTHndu7Jn%2Bso%2BMIXiUVQylA4UeYjMNVcY8y2q9R8TGTMT5FUP38WD%2BsbwXlYjpAlBeCL2%2BMvQI3EUlorC5ql%2Bkzx06iFjJ86j64ydodYwDdYOIfxg72u%2FPZPOUbjxAhsysDq1MUL4tOvD5QMub2VPpXuJin0XQpFlhL8SVWT7qqh7Bczs4y%2BKSfwVprThB8gUrmWgOAzXxu14KgQh0EKQMZZlEGIOe6u5nE1PXXrTo%2FEcAP9Wg87ha%2Bk3llOu%2BHEiFcq3VDG%2BeRnlKzAwqAJ9bSBBiA%2BVMkIOgWhzsa7PM6FZhuEZDG9XRc1XqyMGOG7Z79utMT4WGrLQPwyVd5qxRbXkIdzhjqL3y47RAwzYHcJTYc53adQ%2BpblJqrI%2Bzq6%2BxuEzFDUBidJw98168%2BRU5mfAkrqMNCy1sIGOqUBR%2FAxIwEQaeQHvXQWJxLruvNAv6aTupZOp7ZpI9yjKJGwTgKhnQkeBcSyb1k1K8XfZorX7y3IkdKO9Rt3w6maNAmpEB1h8fqIRsILEv6RTOMrWDKDoqUKA%2FrEUSKfIMdgGyKfyB8Z4ie0GLVNhZTXUt7P%2Bgke13wdaDbSeZvClLKHrUvxpdKsJCo%2FV3%2B%2BmsEoTUnOL%2F%2BDMxjGHusjVtcEk1TDWI4%2B&X-Amz-Signature=e85cac2d2c82aed69d0c2c9a607a60a74620bd38c4c43afe34de070ea043edad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
