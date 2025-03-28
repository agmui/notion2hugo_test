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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WOPPUA3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6MpbO2BWrrD0dWx%2BAj42E4aybBxfnBfyYY0xvdiuSyAiEAlIYlwpb3T1KeIV79YfxCZ5%2F4z2MZtENezrbChmMy8G8q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDKmDLyffzl%2FFGxZ%2BgircA165dhPJZ6NRZM0w1dJKLKU2zvjKUlmejgMImdEfjRY6P6hD9E8NexXxfvSxbPKOAVwqRJLCnz%2FU99%2FLml3Z9S7bLj5ljXo%2F5dSL3d%2Fu4b2n%2FsegCz0thmkiZ0rhU%2B3rqzLU2Wdvh5Dgdht3Sva50lNZgwUrRojzLTUbpa84tfallExsB0CGKE8XkrvKY0TQxraUGPbplyFyxrNur7jsbGMdLutlqfdbqYsZzdW6QEV5HSx4H0MrlVwy%2ByDBQ6P0KmWE%2BJN2EPDalqWgSIwFuGNL3dGWX0XG5slG8K8EiONssvf3cGjfuyS7%2F66Su0i8W9zVlrybN9RGDosk3ElRX6XdMdYhEgevjviIkRSg5GO6BXJZ2gpt%2FVzNZgmbMKFajZtz3WvLn4saEEMKKXI4zhPHWOxQuRs9YGWSU56CTeBw98ic1sXg5cvlyb9lhtO%2FnHw4VXlQSrHlHRhecWp3mUji6KhzLSfASsCskFjqFW3MBjyP%2FBUDaT6gxs%2BmnP9jGuI%2FQAguyMjxcQpBDK6GUOywIdIY9eqW8OZh%2FEgFI6bJdL0G0ZOlgvLO94RbDPmsjI9EXegUvLsCdwHwxLPr2bZmIUCufvX2i%2FoED6EA1zER0AV1s9p9zIhbVNkNMPv4mb8GOqUBwnBI74VBpI59Etcux9zcjRgh6DE0TAeFEZGuz7G8gBP2THid9yBDk4CBQKahfgP0pgM1VQprRiPB%2BgSFVY4MoyBKS%2BXXAQIMYBbDVWy8ucKv2IPBXVepTLiazl%2FWn%2BjMC%2FLuBx9ZMLFtfGcHyIbU4sG%2FRCBK1reAzR2LueRYWOR0Ur3pH5%2FPJI7L86G1KDDyZNFzw9D99e2iZHpEFGYsEDM5M54E&X-Amz-Signature=72d32f0b2fe689a3e592724b3315e8ca8691010de69848b8a5f5ae38b8f42d51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
