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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHX6Z3B%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOjRt7tU3fumCwnOf2weHyjYcsBpVi5UVV8RlOD2QJyQIhAPlubnaw9AYau%2B82yN54m2VHfOCPFxB2jtg9P7UUdblJKv8DCGQQABoMNjM3NDIzMTgzODA1IgwrRXHtepkzZtW5c0Uq3ANeU29XVh9bnvZXLY%2FUMil%2B51kH%2FUKeJymKE4jpUmGWKo5wqzVlfKFhp8EjawxtPpO3lzi8w%2Bjq3ShB66TrgFR5NgfV2L%2BZbpHZpxj7rvxwL%2B2KaqYQJmiBpZoRX7lHT0dVA%2BQtfOAr2Kvw2SbabV3xjiTAVwDa4aEdd5JtSd%2Fr9QdSDxrL6JQagHIHCZdTzUzhMD9cBGkdS8tHkDtKQWH2XwSCA8%2BgEma9PQL0ISrnXhaz9irMBGtga8Vr2MPmUR91Gyawj%2BEwtvn3suY8DDlQAn7KHN1DzZxXaYy4UdZJlIBqPjNFfvgUO9Gmlc5b01p%2BQnb3OHKf%2B%2Bi8tyuqJOCBYjNMWDCZ3%2BJqOxntXTIkpCD2b9T1slbWdMT%2F2RZHlHKUHBgfebdOjNxmtSR%2FCVVMLIBbmbNsboVbyBLUcfjAGyMciChboz6Pr%2BEWf%2FvucHnK05KH3MM84H2I0RD4Owa3ChJSF%2BkNha5TflG7zLqOzNonIAVFXIWPPyGEoSa5B5D6gsihuNBeVTfo%2BXqiISU%2Bw2A8vx%2BZP0PGU2LJJTURWkaB5F0jUB%2BuXuBtX%2FP%2B4Qe4kSon20qSdqA6Tp8LuoR0uZrrmkdiiRRLv3ylox5Pnla3QJdGcQnPqCDhoTDUltjBBjqkAW%2BIyg%2Fox3FTr7v2wOGyn02MmZiePshvF6Fg7saiyg8g7BYhefJfGZsGT8IJwrNwZTSDEzlkRufpYupuDwpgZ4o3p7VPM4f1MOr7dSJ2zSqLKoODArFZwGpbI297tSy93RDmZ7PJjBIHEHm410fMo4zdAkeVg6ydpgXv8Ga1PIwuS%2FBvD2CCz2K0xpHA3iTwNL7pKcXB6VxFTbAbAX%2B99QBfBo8l&X-Amz-Signature=0da8492cf3a5a4b017aae3654a9afd5d4e86fea8736e2a09980d8ef7292583ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
