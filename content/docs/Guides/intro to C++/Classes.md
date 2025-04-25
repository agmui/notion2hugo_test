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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474GNT3D%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUsfYWgdIuXtmzDycx2XWg6vSQ7JgIDwtDkEMajytrYgIgX1qnphZJ5tGLtavt%2FrWoxHYyqaWRxMKFaAlrIhgqqjkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBdV6MZI3I8jfQDNVyrcAwP9FQZ4yCQAEPEqnj92qfpo7DbvOV3KoOWnvldZwtZeLNIjJrRXCLk8ATPMTwLkW%2BKrqNf2iEDug2vO%2Bt3%2Bw2oe8eu%2FKRtLCl3Ux4SHnG4IO90BzMvIexqKXe85AaYnFXbRg5EUbJ0rd2cFSJdQz4mNF%2BdP37hfVRJYTTodjReqmcjrLOpe%2FGp%2BIwzFhg7GTyN6uy%2B5mEHDB%2BMECHTUaE2kCDHYn2tnhW01cn7kJt8SYgs0Xybal4luIuuhyQdliEhw2FGFmGEiZCslEuut8WN11bhZRlrijSoz3lPnOuGPM0cQi1fU5gNfsWIwPtF5TScP8NtY7A3FdmCXX%2FWN7ZtNKmjlv2AJzkMTZqjgm5L28XZ6Z4fRN3MUhxgEbFby5Qbqb5YUodfgcZ%2BnuWt0yiF2SBT9ldFBOKTtxnQMBWJaHLAWBxK9oOOVpZhNrUtXKvznXuXlLfHPGRBauEjstkiwJ1AGU4YnJzuCslTa3IwFItp%2F9lJ5SGM4chVKt1NiR9oRC5FhAKNmZzmoJxh6W%2FDel0hqOuGz6DbJNrdONaia8cOQzWzuUTsC8YVCOiotsQtGy85T5Ddmh2kytoZaKkMUOQ6Y70XTkRq%2BDuccyz1alBdC9caFCB17lt1FMM2vrMAGOqUBLayiSRF1O5NyZEtnQPxz1lX%2FXyBzg%2FXkR9m6J9ktHpT7eWFkS53VxkCz9wa3C0SocTsrhUJC%2BuOUSPDVLO7Zpfw1fGv6ppwnUXGgT%2Fk2bs6bCg2HTugQG6Ztk4%2BDn2ytxycgngfhupmH8ebsrOBwTP3IvCzpIpdER1zXgdu8L1Gj5vvP2zsVqeCRsgGuOIMOJg6A24%2FJj6hK5MsdkdrefveRZg7P&X-Amz-Signature=d2dd2ac39a3cecfbfa2da0fbebd715585f0fdf387adbad9b754d2af5659ff29a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
