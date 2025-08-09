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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZIF2Y5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICyQh8i1Dfn26fpVLtvTUku6AZzb9uJa9D38Kpzc3UmoAiBEtbsChLFB5UFlP9hSNfPliKwF3rcpxXSSnPsfeVAFdSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX78wyCXlC3rFuYAzKtwDBVcNi%2FLS4UkAr6LxNrKOCaMUWxmxaAKZcvZYBtlF59mlxQh2%2F%2BsPQ1yZ%2Fap3wg1BqzIurWfl2HbguRMzbQUyI4UcGWCjDxXjn0QQizoxslKbHzLf8Ah2gDVInEd3GTZoHkwdbrspSHTRN4D64%2F1sQ%2BrhB0f%2Bl7EGpm7%2BsvfChG76bhRNxbiEtRDIhK4%2FmiRia4JAttzCCiYeiFp3t0dptj%2F0wWygsSn1%2B4JeA%2BObOijv0hho0NYDGVnI1l1Wm7%2BoL54vEXSTeeJruCsVuoYnBtoWn1qGNzAOs4JKJhRBUil6bNP2sjxDoLg9y2PO5DCR%2BMzmaeporn%2Be5mQbziF71dDXG84IIQoA9ZjC7jbrEf9Bkx%2B7FtJr1gNxBEW1Is9tLSL2KIGnX1g5s2cTbLvJW4%2F7e4mfch%2BTa9KGPI6Pz0X%2FwmzsYHNScZgHoXjuGyqbcjlPl%2BsJcm08BsImZpHQwayx99HzQ8r0Nwawao535Z1nI1%2FDpSpZJarmBLNJY%2FAhYMnJWJIm1rQ0tNEZRh8C45YA3Lrk9928s5xN%2B%2FV2O2UGHDX7apCJvfQYCZ0ngPYiF84yzxjoHmVQY41nHnyQewkOe7YlSg77g8E3VsYn145TdNjyDWT0i7vdB4wwnsTbxAY6pgEvz3pQUrqKSgiLQ3ytATooVzrUHMA0F1DDpAQTEgcYInpxMoXXg3bkDLFehFhNcwoO1H13AupdLBuatNb0eFF2c9AWdW1LilSv5iPzg5aolFZu%2BHgWOHDnMWe%2FGASqDo%2Fj2s5LpKTwYvOht3gSQ0kchFD%2Fv8UVKaFPXc%2FbYzS8%2BGooZwsR0SeHsaJQIN%2FD%2FWclVaz4hPGBm8Zy8GwLYWFYnM8wO8wg&X-Amz-Signature=177c6744b9e678749d4e97ba781a3dd94cd4c6e0feff08892e213ec523438751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
