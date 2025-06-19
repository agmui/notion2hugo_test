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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466754DSHAF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuq6sotzwb1ALpnooeHXTLl%2F4%2Fu%2Fxg%2BoN1xthwBmirEAiAeFdTgTGBNTe1E0vwTFpxnP8fQJjDmJ3BMPsT3OuxCGyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq1DJ%2FleL3nLnXoVeKtwDYN27nlSoOT9kBbcQUmfEl6mxaUnynXOid3LRwvWvtGRkioQiVfu941rJ8GWDAT7FBFUkLA8bp5qhZAiyAT6QfiFIYdjSY85Erd0nQ9orUk2C7vria4NSlTwId96rpw7R3rPe8mdJcvG78dvHn1BlVgR1gvTd8XV3d4GMJ4wTNOPTSHHPzNlLqUD4Gimp1ereURfPxapI108XGuPo1bEAybE6dMEWB5dXzofZSoD81xHJplp2m2rmALsGXP%2FaaXDpUN0zOnvJ26OS5jJvDI830qkEga%2FB14IDn7eSu3OXTqJADEyV9Kyd9pj3NRyLylHRQk9%2BUpmIi8gcjRVbD88H0xsjLucE%2B1y%2FsgDzRN6M31kbvuGglXtF%2B8r1gjsgjH7hHWX2SHUN59XDH3EGIFNgNC03ognXDH%2FSDg3UtFwXsJXH48W8MIPeNfacnKSneExjVLdSCu9dtVC16%2FUkaIsjASkmy%2FC94BLgEHydWPPIwgs03HZstt9%2F%2BWMcIXR9reCeplyLNq1mB9yNRdhjivTgtB9g7NjF1LW0l0gtk%2BswWFU4%2BDa%2FkBZvj8Zqv%2BWwry7HBSsAYjjp3Eacp36WU1AmUgw9FjbD94dQlUZtO%2FleECE%2BWfraXSiuI%2Fn6XQ8wutHPwgY6pgFHDv5WD8P2zYr%2BwpPkhw9iDt2bdQ7N0EYr3qZMqJcn2KtA43XFv4PJmTT0HDk5Lymr7PrMq4EAJ6Nbe8xvejSCTVEy84kyAWKUCowZir1iAnnDRJ7JbyLH%2BzYczyzPBNV1T3veGEmI%2FqYBjCRx6gGYre93a3XQunPLCNquLmWe3Fuhvi685q3as3voEBAn4q1PW5egNqgh1Vm2kXB0YhKC6l6lL5YA&X-Amz-Signature=079cd1b535e7d176c8e63ab918ba7b4672ce61769c2b87f33e23bd269352bc66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
