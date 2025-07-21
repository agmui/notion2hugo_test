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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRQGTC6H%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxr8pev%2BUHcC43qeLS7Jy4S91vMVv6xdu89v0ptaXCKAiB7LtJvHInGkl8P%2BSOZXQZromeJ2dmxBZUnswC%2FsIONcCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM11A0m7C827luonbtKtwDpaIzqAv%2Bl84qcGyHIQ0I%2FhYn03%2F1tz18fn%2B51bKkzE2mFqBbcsgLsNwnF8ADl8eeuPE8D6Od5HG7hg%2FSCApBktTyp4z19frI2NKY6TJ2pkf0rcYpn8YkcMeeAR26pNrvPVSU5u86oZdXKuaM%2F5UbTyaEH35eikjlBjCIbHsVhlxJkjOw%2FNkuOXamLlKIBU%2BVutmT97EKBHUQgQiQ%2FI7k4lg5wV3PrXG%2BfleNQMHJVV6kRh2jDh%2FkPdvuLXGFoxicGjX327l1ICv7DfLTy68ty4VL3DGYSOM6Q3PBThUFQgIglohrY8qpgDt6qutX1bV5Y%2BNpshfMLggbUeNd4mTATuejjlNcW%2Btw8hVFQKXhTaE6NmGEvPNnZI43bDhGHqaunwXf86%2FjtQaE51ET3bW9i45P%2FiLruFJoC5vw45CJkEGCbfTjemix1RlulrCtT1rIihkevldQLdNrPFWDmuTy8FnoxD9GW0irkhr4qWBId%2FRo0EEZG3Cz7XMzwX9AAJXRlbDF%2FMujyE7tVDWwGox0JkorIzWE5Yx52Gb3j710LrKbxIF2GWehvRJ8JmYRRkHKMm44YuN6yXrde5Tb7%2FVoIRyzgQHWYmme9t%2F4oNm%2F7i98PDdwfPn9LgHSA0IwrY74wwY6pgFWY7JLkeweABzRULMB%2FrXe65ghgTY6QjW2MNejPIplpt%2BWrDJHEJybiq3P6G3uhjevzIRtAgL9bIUTYT1gBXXDCLYk2dsrwPufBxpYCUA7mdi9R1lXrWwZfoDR8U3zy4uQwsczHo4E6kXBsbre5%2B8nG4g4TQjOSsgR%2FRdH4dupZ1t%2F0hiKYllmASA1K%2Fg78Ku8uVHzTfyQI1pDpg%2BzMr2XNqvdCZPb&X-Amz-Signature=a210aa7ed7eae5f4295ebf8545eb4624ccd20c99ccd34dba9055d5dff8c83a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
