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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPAGTZ3Q%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCiUnfvDUJKWHrE0LaJl29yD%2FMFebUKwsANbbxh8lOyjgIhAIdSh53usSp1M2mHCkhlfPRAnvU%2FkcfyZkupeuSQcmohKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BeERGbtUDf%2BXEyPAq3AM1YwzgGrIH6RdD1ns0IBdFThw8VTxjA50%2FjLt6ndZKLJekk0LIAinWaOLI5wmWIWWjwM3ElQurcsNuroGOR0ki%2Bppg73fcxf5BtBwUbywoqNrlNF6J7bN%2FMzot0I53hbjGEXaKJiebByLW1G6POnc9jASYg9euiXgtX7z7lLSlenoUUZgtRSZWp2jUFGgDxqQIvXFBfuFQafAucFfmV%2B6kI%2FFwm9WhcdoZq8ebu1dxf7LwRXp5O4rKrHNv7qAcPQVe266lE2itzRzpV3TYS6cQnCGmAa1sDXSdXD6T3gPPMS%2BOx0TyJ9dm%2F2Q%2B0Eo8Xj9D4SfTFHu9GNw7z14y17Lxcn19xr%2Bpupu8ylW%2FUvJBl4slEOD8HwjlNQBgQq1YUp4SnbrS3lc38sw%2Bln8Yg%2B3stXFo5p0ytDwTMo%2Bj7BI30XJMSF5JYCn32iemZE7a4Qi4lzlWYn0XcIxIijZ0ainYrSN0AsR9NC44fWbURBgB%2Fl29WKNRMKn9YF7FSHaRflA14qrhmP0cRUZi95bhjg%2BZr%2FQu%2BvBUALHPIBdH3W%2Fg7A31yrMWfncKN5XuVTxGlrIVhehPyNDTQgUIhY5yc2P6RSnPTbCU8T55HOea2VhDK4xIKzhWeJL6GHDnkzDH%2FfbBBjqkAVefuiZQt9HnnB9gr3l1pFJhBIjnPbP7SHZd%2BCmTD%2BNgJ44ay93pkafzM1afb4EJwNAoCeFhhHb30PajJL2Ae%2FjeF51U%2BHr3oSNSqeWFBLiHTqTNeglgozRqvVnjm8l1bDCDrFNr11yx59RUsgDE9UmspuCRqq%2BAVJ6y7Z9PFnVZW4D2HVTU746Yi%2F5yanasD8oJE2H3HExKhTJ3CSu0k60ZvKXE&X-Amz-Signature=31a274bffc49ad02f508ef11fbbcfafa07246fb705b9edf51c0aad5bb916ee05&X-Amz-SignedHeaders=host&x-id=GetObject)

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
