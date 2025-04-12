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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI74CQJW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIE4i7f1OTib0TDmwW%2BeXO1RIoSdKQ1kzNyQpkhQRsBI5AiAuZjjrKG8Jl%2FxV2QLwyJkxU1YL6uZIYZ10DPgSlwtwByqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrPdEfmqNxY7A3jSEKtwDf4zyjttb2wPa5K42jNT%2FC8Uedd6zWvszrvyTTa7xxz1iMRAXMot4PPFnh7ccYGzhz%2BqEP6QOz%2BCss0K5wY3UBSLTuEunrjaFjZtqnSYyC5HYbW73DeuYMzpTl76oQ4hEIItq83j%2F4bKtlzWfOOOSF8KFRCJwFdzGf89V5rQcoDw0Xdi30CywwipGRvbCDMLizbs%2FGNMcHsyTIc2vkKLvdXlFccHW46RTbPZ1ljcAPeHUUzzaJSJ6hloDzLp%2BTXF64jPfbc9NgkeLksrJc4NKPL5qs4OOlpHgzABckjTBAhhw68yFDU47C5fG9XnKYiDiVIsR0KkA%2FNkq9kPfEQlwNM3MMJ643LE8TPpkNcb6Zvq%2FgwTxCDG3xeaEmIeZgDV6LJo3KwMcfZSi5%2BvOSCJSY5bCyj2zIRuOWIvvUeAUrGAD6zu14IlxqIlTKwXffwAUaRftwSUM0Kf7ZEBLv31wUNUI3Dg%2Fl8bBL7pI48EFU1eAB5kA2ksIB0bBOufGJGYiePtlgxcgp48YcGOZID6JNxFNEmp%2FwDxeIx%2FaNG1hvVZJ78aHtFMtMPBc3fuB6M874rb3%2BXset%2FRAvcnf%2B7%2FAoFs6p6wFceERAe0gNth0CYKH2F9%2B%2B7XjApp8EoIwuqfovwY6pgEF9cgNjDKWCRsyAGDKEpNEnDn%2BdG69RVMQFK0FOa%2FAzQ%2Fze1VO0YPDrI3YZ1pDyp1GsW1S%2FCExmVMaAp5bVht%2F1Jpnl6W7D9Az0hCr2OmK1tjsjaCVwn2b8qUlfCVWu7zdwJrrE%2BoJGXZCHL4gfXzVHDhCWBCa8%2BIz6PY%2FE9GvXwM4pPfPy2sqrjxx7fcYIXCT7jUebJCdXXmk1yctWgpxzHJkGx6s&X-Amz-Signature=cd379098a25dd1451115094bb8e36cb249c3bd680cbeb5d11588e7784f52dfad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
