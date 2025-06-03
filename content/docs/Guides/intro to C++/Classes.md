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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHSAQMUZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGo72cX4mytC7ai4bFWL0jotbr2Xe5ewdazvbD31s1hgAiBVTn%2Fo8r78P63UMvQiVp6SNnuLOPhDKL9Q6XsSycMmnyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM9iQymfiDoRXq1PfIKtwDtBxwaH%2FLgEeraT3fCH8xJeB8ts1NFdACLlHLwS%2B7G6KgzglClBQI0pLK5gosvvXpOYa4P1PcgsKGCvizXIpevp7Mz%2BoGHv%2FhsJ5T3%2FDMaochRxLv6e%2Fb%2F9kVTcPWoGlHMnxh8PTjWG5UkCDa23I7quY%2FAbOyfCRyaLz9LXS4%2F3FQgyN09%2FN0nCYhsppKIpKACMxTASVIsXLNAbFq8t8GddRtAGz93MyK7yOEytfg4m%2B1Te83gadMGY5ELFrgn9W7gh8CY4BzyQoDkCNb9JTuWSKNNiymqGr2q4e0sr84RDaYrLU1I1fPNe250m9XFvs%2F%2FxD6wj8CmS%2BRldde5Hk0NEFfP8uVLnl2PfwCEc721ijhbb4GmpBP7qjM7HFr0wrSDcIwJgok4qhHk3ixUJvwhpV%2FuIvR%2BaBF88Y3BmDPHjAq%2BsI7mnBsbvEQoYcNj262wc7xUquyB3yecaV9AsgxT6t5Jz2B46U%2FDB0kFXdSupfGNJx9Cd654TKV%2FDll705kyFOU67a2sJwNPj4EOP6ZE5gFV%2Bu2ShCdpzesLccV9Pf%2FoRwiTH%2Fm%2Bs47J4B0Ro7WCfl%2FmK13WHAZdrQFDeEQ%2Fx6LzMKXw7ig4%2BUkgR9jiUGYhHcZYKjDU1GrzMgw%2F5%2F8wQY6pgHhgo4XEUmD5DnXC5pSDTV%2FNWio7ZPVj8fLCRJY%2BO%2B1ppnxXCCB%2BfQX04c7yUFgSf%2FH9FPDx1JCIpCg17yZSEZ%2F9BwXuTJa277RcZ%2B%2BLtJ8IU2eqv%2FUKsErerNH80U%2FB3FHwN9S9i8eW0lykuF0rD%2Bi6wYbY%2FKsDUi0Yo0Uh%2B7QOLPNZB7nl4Bs6YGYzOgtZk5sybln6CSIrbgs9zCWb5NXQV4Kj5vt&X-Amz-Signature=57fe1dca2767a087d3fd731fe2eda532ed611d4feeb0e3c285206385f23d0490&X-Amz-SignedHeaders=host&x-id=GetObject)

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
