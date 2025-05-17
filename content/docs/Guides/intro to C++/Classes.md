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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJVAZPW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3PYnxcd5g0qsGkIZHtcalu%2Br6ExdKESP7Fatuw%2FLC4wIhANrslkU1qbZVMtDJRfxoJkzTIrrG9%2B8BewGRgJPv79GXKv8DCFcQABoMNjM3NDIzMTgzODA1Igy9nJpAqT3KAJODI9Uq3AMD0z9P8mrNi1%2FkFEcsTD3FJS7qQGZMfowCWG6QYRpxBIO%2FyP4FirIOsEaoeC%2FE3qZq0ukajC1KXFphyJMYwcPru8fBIZaAeegA3fLcaif2AdZnMPs491R5TCt7S1fs3eyfcVmfwA8pcxdZqYDCzxlIv09dCY6cCwxqpDg23RcmyEXjAZcG44gvq6O5ni7WcIJ8jjNNNcsChOBjuoX35DtFyh9zBpzGmcXc%2Fk3GtqKMN38%2F223iWJzpTV8YKeOiS6nsGKXYCA2GiD9vV%2BzYZ5cPsbcAevpCa6PANDq0jd1CZ2ur6OKT5KbHBV%2BRPRkfs7BnhM21gnx0SfDoyte6hDuPqg89Lm0AkGhvhCngH%2BAVh%2FtxKgUZpvO73S0LOJOCBV3tdTna92Wm5GREgnUcbkPf7AMdFBGO0xdb4z7yLPudWClGaJ5jLhOQ8z%2BZTm3T%2B7wTLj0v1mHUdHtgQW0pAP%2BwNE6U57WG0OTRUjkqP6ugWpWPm0kQ3nL3kD7DsBphLiIXXHjhr3i4fAwyARqswnHK%2BX1Hw8WjrEu63%2FMhTANhKekowu8dtHZ7iwC8sexEthGebq89Zd%2F51sMa4g7mdnM6PPAHww0U4GipglXcwRQGH6xffQVHt1jYqveaRjDbw6DBBjqkATPAQWIomhJ26EHrGu2MUn%2B3d1TdQ8WP8ei6wL53EZ4kAnHWT7409TangWD1lNdmTjyL6BsuLFLoMQ715hTDLU1Ji39A71kbgX9WJFaRVI3hKbJ06%2B5%2BC2FPJxrCmyQun%2FIcxbDKc9TGkVCYE2NtmwU%2ByrqU%2B4pnilvIbGYRwU9ENY9MPH0tGCliMvSbQK42cSE3%2Fw%2FXASeC5IQAeptxpPU66EJo&X-Amz-Signature=6058067ae80f56b9cdb7196b480f16597fec2d01d7ae31a2df115932d96331f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
