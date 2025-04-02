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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW5FKWJX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDd34NIeZ%2FlAGcFWYJ3ZH9SlZSitWgjWV4Y7N3Yt9rQegIgQQn7mHRIiwch0snBW3Vz5nJmAjlFzdfeHjVbVV%2F3mTEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxj7c7uvQ7jBehYhircA%2F2oBoOLi1IJCN%2Ftg8P0jUuT7IzcEUrThZGxvky1ZeLdb959KrKh448U7NeEuaDWKeWjEjhX7oo%2FsOmwFP10lnB4aztkCgUz4Y7q7WrGk7X2TnlnkWYncQ97o2eP4wQL3O5XGevGYeL1rEQg2GFJurzhxOkluMTphBhwa4jEbHYDETqFR9D6zfwP2qLRBEtMNBc5oDn4zXmxqrEs9pjx90RkqUISMpi2cPe9TWgWb5Mm2nYRQyafmcaiw8RamTH842JGwjKo3WgaQKTHcBGJH%2FAuFOvg0jaxb1A4fKd%2BzM6h3zdVpBDaCLv8muZL%2BXM8TA0mIoR%2Fp5%2FWgNZL31agqKuX%2BTtV8lwh5JArEYd4vtITYQ70mMkdswCAJUK6Xx3xhOHUXjaRxVbEUM4jCAyFD0UIk6CikGXIg2eeLAVga7Q16HoCmwKnNdDm9lyzz7UKeaNxc22RM1NkQOq7k2gTjqhLoh2e75HBIfcRJd4SuJ%2BWPOn3TsqDuDgV7zYqNKlEzUNuDCe9HF%2FcLya0Ve9Fsn9NfsyVywrL7EQY1PeCbBLXEVrnYZNwoAjUo0hLAnX0dsC%2BuOzvxTjOclVF9FsMzOIv9BvgV9e3xN8DsCpNZ3otwCKDk2kMR0NVMgnPMOnQs78GOqUBk5aR9y3P8WzfegvFcTyv%2Fbs%2FWV1n9eumJ%2FeRX%2BdvqkwLB6ZuGmmoNVJPZZw6DPsrksQ%2F1bn7CF4ZQoY9SVQqGId4h4hiDLdS6qq3GsT2CsYSrUBissHdKVkJLo5VuvC9ooadp9qwK7pytiGrY%2BiNRiowwvUS%2B911JKbeUyaaOb%2Fi5NFAr3yUsEEkakLzWopBN1NYZjhe8ubz4NReORmcznkn6jb9&X-Amz-Signature=353fa05dd6ff4e212643e0e88af3f897178e6359f6aeff8c7851aa947d1c51b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
