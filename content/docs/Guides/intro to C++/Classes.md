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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SF5U4CE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCbKh55jCw6vJMr8eoslHLRlBIap2z9AKzNmpfLKhwDAiAuqmEzrIoy%2BrWjQpzbvNC%2FJBWOd6%2FAEN1PgLeSEvuGRSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTU7uf8KEzxmUWHfhKtwDUaeuWOLoN1Ved95%2BG4D9RAd3IPgIBdtkUwCMb6PM5LP%2BiT5fgM1H1ZyudGx3ergxam6HiXM03Y3s8TWzUMRdpyD157cSLKQgNE42xgJQp8hYb86eWBkhqySRvHmHe9Oo%2BjYya7EcGnXmWtmw9gDKM3grDOnN45WBxIeXzi8NQ1ivZtcKwnejOf6gejf3auRH%2B%2Fv%2F9Oq4WXFUlPxXUcGsCi8RPmu%2F0jZLxR7FE2x%2BNwi%2BzotYP%2F4svsSYRqmaLpLH34CMQImVskBD7FQqnU9BkI%2FBqcpNilsH784uurgUlDyYFxP23l%2FBtXlDqhS%2BOZptLBJ03FO7%2FS%2FCgS84%2BaUQsYj9%2FpNMVbSx8CQ1YZNnUMcfJiuOYdOJtoIW2fp8f%2FnSPJgvzdiUc55ole7nyDk74gkG4WRGaw5Vyf3sjbqtl2pGdX2J7GqNrwctrFzDS3GsFeuyyoV0%2B9joAzKUCThDAJHtnS5TmrxRjw%2B%2FLd43cDnjGlDVIlze%2F7PFkCHkBIjefnQvQjHre0TSt1c3URA%2F3u3npf9aQKthZKN29Blj2DLRBaVhTrQsZIr9cjVAFVfwQbTeEcga7Qp5%2FISymNLYeocwcChKVJiHPc8w6l%2F2gtlo5I9F32HxD27%2Bomswya61wQY6pgFQCBtYwS7D3iYACzylQWTWosV%2FROscgpjescmSAtTn5GqCQ%2BAvVNxSrowcMz7bynKcEGDsiYULlzegmfi0au9LS%2B0WPXidhJWMS9knJHRFqU%2B6x0hR3qbf0CcY7Fa3qbPf9szQtO7zRlS%2FbvOTGGDbToBojvj%2B7E1xgeZ0nnrJEifmBB3e2tVZSImwj%2Fy0m2K3H4J5sq8qZm2TIQ2PbP5mMum6eOae&X-Amz-Signature=3a2def66f8f1d78378c91569c4d04450cd32e0dd8195a72be1818a69b2fe715e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
