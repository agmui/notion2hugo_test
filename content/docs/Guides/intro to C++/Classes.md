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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466733HZ6PC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE3fUgTR54icldFn9lnSGXFiUtjRFlHuKRkaQdEW3ZSwIgLJkXMsdQPkiZNH%2F3NDi3VWCvDjVyYTnOgSPHnrWZqdMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBu4l7rMTDu9f6rWIircA72%2Fekiggw0f%2FXBtIIwSaa1uN58oLW59l6KI%2FLtJoP%2Fmrp035wsUvKAFU%2FyTrEk84GfpE%2B49Ip8kgMstX6o7Xf%2BM9vz69%2BtfoLTOCV6rgnxSU4aGOuwqN6n%2F%2FB4duLLIFMiAjXncCtDFQpoZOzRDPedMNnn06kOps5eTYjFPA2JTnNRofPzuJ313KFlqhULfU%2FXCYGn4pljGWrpQCaOwOWWCWMRtvXMJugFlo9fGcFVU%2BHT3GhdeiOAzQU5FnOA2tcgVFn847H9%2FqKm%2BbODhGgY1zvy01NXK2zcCE2cxmUfJQiM7dUBlYi3BQ78VrM5AUi%2FXYGxv6El968dzTVlOpNMA7wOvSoMTeTLwio0jXU1j2MxUrQdefKVK8aCChpq4XXvqWyESv0ppkOe9naWcsp9u0en1ai1g1494cEjW%2FyV2hIfgjPlGGW1I8UHFr22ed69qIxxVUBYGwrnUFSTanibUpkCobBsvoRJk30taWeTHfSRH%2B%2B9pL%2FDUG6%2F2UExGvR666CVWgtiGGv4dzzYmXRxNFiBXtk9%2F7tuceRChDjbN0jy6zPGv%2FUHSnGIv2U%2FLksy0zyjwgF2XQnkH9FefRLIwmkgsjoLfJdKC3Zqti%2B5G9D1ThVk7v57KUEF9MPqiycIGOqUBwj2Z5i1G1V9hSTpZI6PjR%2F%2FUQ0BRmOp3DYklimzzrwOJ6wbmy2AuQAY5LCqz5CqxwWESMIp2pmmd7hT9%2F6wrDurdDy08nN49KrkgDPLmRDix5xMDwGF8l1mQ0w01G5z8a5jkrj1fpdWO2D9eOQUVicWWBYr7YZCiM7%2B%2FHmKXkgaIB%2BQQeH4v8mt7c%2F29%2BJftjfqOmBRsYi48pUsZUVlQ%2F1e7DfeG&X-Amz-Signature=f64331f9770895803b53311db1b0ef8b0bb13ee423742a8a3748a05d21f7a339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
