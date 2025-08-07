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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466634IJSLC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBarc8vEMP3Ac1JgbME%2F85i4QRnxYYpf%2BhiA5PALyiZTAiEAvnIj1BFY0TqsmHWtlQxJQHsTsDukeOdk5sUkOFQXfWYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpTScRiCrZDbauQQircA1QX5ZPcLwrVdK7s%2BJgV7d854LwpBes1dLjd0ugDEfNg2MXoAblyhOJGQ9Z4tejSwoddlUggbhHRJoG9GHJigW9ynYN11gIqiZRNeqmbXjUzm7lvxETAjbckCE93oXiLJKtK7Z0aHVzttDtB6R9aC2s1ZXb%2BmOkOtS%2B%2BbWOiAY9WJgePLaGDnJb8KmU1tiZaLUHaDcEcb%2BSjxkRRsecoObbteZm3ebF7aZkWWA%2BZzyJGLvUo%2FWWjFHtyPVmnrTcpbu6uu10dBrQytGrgQwvf%2BSmubtYAK1P5E8NmI63PAsNzHtXQZCrXcf1XNdpR4JBOPb01UV%2B0s3pmuL76NTB5WLjit7P%2F0lKYwBIPnEp3tkdayOXHDwNKvvPzTpj2YYYQ63Nq3ZSO2AIucNVkdWKuHly8uBnDial3vBZ3irAWVz8Xy8ESfWa2ogdfaN75Gm36QL%2BZPujEzSEDznkN9dYWmJSLiDp%2FIGdjRJcYUge%2BDu25WQcchBE4hOK%2B%2F0g02ikJS5BSEVzWliROWhqCg%2BsP58iWBpjl89lkiY%2FIL0ZQMX2iFzRB4h6p2scyXGJhYaKQCZeHmELrsjmg%2BIvISAjP3bWIOHwwIx4myG%2FDuJK6ZleUU3KYSfvUQ%2FpVgomxMMnJ08QGOqUBptOmZeV8oInKDHoj148yCMUk3YMXXf7k4aTfX7r2aB%2BQsfjxgb7wDvpLtmvdNhLIrqt7Dzds1afMFNnzSJO3t1Dn%2Be0QSX%2BLA05HUDe0gE0HKKR0heNvnA%2F4C9RcDJyvI2zPrnXbn9b%2F4xkAWn8pM6aHVjzfYuVE4J%2BFXx%2B4jHocTJNEX0NJ2MKQwXP2bCrAC4eclGm8SI89wt%2Fe3fg%2FIwBO064o&X-Amz-Signature=bfb67882cff1202bfd16733e220eee372f173d964adbd8ef28e431fbe6b342dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
