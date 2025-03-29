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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X76YWFB6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIE%2B5MiNy8KBtGLyMVquimk2UrABZWoz%2FrJtLynNPHVIOAiEAkT1t%2FsSC8opEb4BBLIyfIYD1TEu4GYtb%2FdcAYcfIAmsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHVPRfoA04VKuymCHircA6b22D32LrA26QgkGG6lQetT9hZCvCZcrfwusWF6Sd4AqOGim7v6acmwalxyT2c0e6Kl%2BSBqwY%2F4Mhb8wBupCxoPoIFS2R3t0vQdRUCnIBGKyCuHcO1UtQgWNdRL1BQuig8RiyBhrAil9ufspig%2FpOtGYQBKRHyH8xnjaEtQLXoOKXoau0hi00G5G0Yd%2F%2FFUDA2JRVhTZ31yj7omJ3pb7rrW3edLAsfB5chOZuXoR5uZupq4%2BKIPXrztFD1uaWE5r6UsNbiX4YYwAD6IimyNmNcTiMKqMxhEXMJtNQvC%2B4I9jTdLDUuVRLAoBXHK1yJnjB37lWjVpfYNoN3rUhDJZRWwuNmKF5sA1wvWbHR%2F590PesjezvTzFXak31KSqTBR%2BwmJLeOOACaahJx8m%2FBYaFS2WPjQCIn72Fu8HSd6%2FAaZTGvxdDv24t9zEGv9A4tzLqLAawMB7zDMN89xW254Q2S%2FtZBGy1SAoGjHVY5ycWmn7SCIRlmjY3Z7OJAXmhhvrkdaeOXf7klqmP8povfAboAo7JO%2FL%2BBP6vD3bwdmyf3d4vUA726bb0ivatD6ddLvTaBrf5%2FR0VcgdXAW57h0vPGl8fMy0pYWVWLTJjzBl1Ch5%2BXID%2BwZ8IHW1meHMO6nob8GOqUBhYcTRSz6do5Stl4trL%2B3DFoe%2BbaFfyNHeOEBmgo8eT3GfY6EArSIwTZC9BbhWGIWw8%2FZVIy%2BjkfID%2Fz%2B8gUT%2BbKVzyIXhkVef7oXoj%2FEAWBH6WOLfzaJfeTLm0%2FtvvRUbz2BGV8xFSZFjHEENo%2BJ6ZxusSgMShgZsgmby70z16hL%2BZ1o8Au8gJhiflEzWTcx01lH7oPWqrfIsdn%2BM7WoSH5VpYCA&X-Amz-Signature=7657690e4ebaf33c9bd3c2eecfebda435912f52d686621175b0efb6b8bef7d56&X-Amz-SignedHeaders=host&x-id=GetObject)

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
