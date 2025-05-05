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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSAOJZKP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpYjY2sH4NrKdbEdjEd8piNpzDzapOcd2H5qBC89jLEAiEAt0S6lWEHaw3mSRdvT4QFIoApwFNvwL0bgr7xfiLTBp0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDHE08aCK4%2FEC7htFYSrcA2rTdkjSTJk7s2aV0UeOrvITSBiGeN%2BKQspfdIf4jQbcXcJhymqfZ2BShlDRyyPDiJDiYpX0hUDa9pgrm4X0FxZOtT9qd%2FlVH%2FURGBdDqoAksj1nlBkqk1FIcwhZzTMX%2BOWDxp3LRG3uCVFqOgld49fQrp2IUJNTr%2BxV7ZDx%2BAd9U0yskfQpZGQ2iwGkHM1UfaeaYWMGEy4Bv4TVlOwgfY6STwz%2Bo1s0WEfCKmhp32ytqokLavlufYjpDEwd215W2GJMLu8%2Bxc17%2FVvvxQmalW90sTI2BwnNt6Up8Rso6Mkf54dblsHsN%2Bx1D5sOVLa2B7m87Onj%2FY5SqrujaF6wcc8enGlFwypsL87bbfWx2hbLhIe%2BiRbAcrhY%2BQrFImnr0FhLGbGNDKLOEPtTYrWm8JksPkelKHiuLHgGXe7Y5fojGv%2B%2Bl9QOV40LymKv56xW%2B77XVnLawY7oI7A4mHtZeDcUeQk%2BrSeMZSOgmSV0e94q%2Fu4EaeZbFJkusbsM4u42jV5O7JnZgzc4KeMYLErDAWJoMhHHNQJJz4pYBFHIgcF60%2B39NCZNC3ZUbzt7AdTFfGYrLX%2F%2BBKw1j8dY3ivQHkimnN5FRrTuS9mN1DB07LzXzFcJwKfgHvRuYrSJMI%2BX48AGOqUBPMt2NoIV%2Fj5qGle%2BkOzXzm6NYDqH1kdrsA%2Bo83iyuNiiQIf%2BOa9GSAMDtbXjbyUATtODoQmqs8j0LbpHmQDu3LoItu8%2FGdHWurFVGDTz%2B7JBQNpnq5sa6%2Bt1cpsLUH2JQCiAQm3j9TzsqMQk0EbLPJ6YfZrvijmAa5HoR2HhmzPDYIFDee05U4kWNyVDUKgr%2Fp3E56U05btz2n90DHH1CdFAHB2u&X-Amz-Signature=574c13cd706b909e0506809306207b4f14984602a3e856b23a2d39daf279c737&X-Amz-SignedHeaders=host&x-id=GetObject)

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
