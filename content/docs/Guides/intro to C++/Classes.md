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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZ7SO3S%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpp1h7gOdhf0Ks5X6ZdgbXkXUM1fHRr5bYLPMqoF8saAiBmjejCXi%2F%2Fmot9ml9Aqy3Nhyqr%2BBZNYC5LlWvBnxzl1yr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMzR8skzRXG5nMzyNKKtwDDBoXNYuagREOZOwvbUedBUk%2Bf%2BYR9eQR8KhlasEmXQbW90Cpv8KZSvbu9972sasD0keKpPGTfB7DlJQQBKXbIt72tpnkrfWi5GhinaNdJyBW%2FRtrMzLyzZ%2BuRV3UEwzHP03fgCLENR%2FfzAoZqwhr8pbGvHDe8sYpApdP7TMBBCvofQJtzXDeI%2FXy4PrqPTHq%2FgduaDxlfWy%2BT6IYGhALk8muBibRgGI98a3Ejb9%2FpJ47W223B0%2F7OhMBGccDg6f8prPO3KaKgwBbdNSWu3iSvmpLZ842kvx6f9ran7SVZGF7euHERZ4O7A55ZjTcC%2FrYmM6GAZm1R5gg3ayK7XeTRD1O27WJe6b9nOBi6LCiK1b4TBJcfHuzmrF3zAjicSiQ4T5IMsCr6fper%2Bp63h9LkmnCI6N%2FZMEI7lGob%2BrjJ51A%2FUZ154En1y7W3LJv0iEJVr3bRqlqWUs5t8zCzPXw%2BejA5tmGHStaS0EKHW5SaCgenYE4bd43Tt3bSn%2FhgAz6I7rEZ1k2mOPUHZ5yBtO17cC3tlLq0Jlq1gtHHA91hrkcFTRyk5luoRfQYYmoo4pMsuWT%2BnAtfARrwvFyP4hV60i394AIuBKixiUnAPHgtVHxBXdmo26NeJzNU5Ewu6P9vwY6pgEf31XR6iFf5p9ra67N7avfT5C1ztS3KILkk8DNWojtszp5r2YUJffBsWf9gbyC%2BkQqY4%2BkSKVCFqEyAVQuKdqTyE0GhCtcet2jyoNObhfGUxClK2UzTO6ytqofKiOUz4acWPvWILFRX5n%2FXcoQauR%2FTrt4ea7T2rEu0zl6BOY%2BkcfoKsm2GE7CCXD%2FlJ3Zq0hyORt8iHhQlk3O3dfyWOuHvagEx6ZP&X-Amz-Signature=cbacdae3ee857ae5ca3b1c439cb2d4d559cd8c266aa52f652e8529767182e38a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
