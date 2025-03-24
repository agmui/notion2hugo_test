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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3BMOARD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5SEshKKQA9JMEirNj8cZxgwc0tD4cQeb%2FYij7oFSC%2BAiEAyTkyZyjRQMO00eABFIxcRpmTLHFVoCszCX1cdqqjYvwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj8cryZ8DBRHvRErircA24eVEMcmSYHheQNeKmhW0KoQreeV2OTIbAsIXxHLgPRpRBIH1kStSOBbfox4dABiyWzFpY4WqygBCT%2BXkTLM72hF4BhJNyZVOpwIp6EVt7JSRvBcf%2BrLUTdPLoQ7aLrd6LU8KCecJ1b27PejavOQhllDo0XJcdF%2F3c5G%2BiIohOcXHCQlu5h8DYrXAE88Lgxj7nyfQjJXRQL7u5POPDdEAbY3RL1R9qCZAGCRBqq2qEIND19ncXN%2F1fpqHNxrl70Gz1uQ4ymm7U%2FAtZs06lsVThaMC35Wi%2BqvB3tdNb2KuG1ngSLRL4WyevYW3MyzzgFwD3K18ofEHiJUWTvuV8mrp5Fsr7IT8zupEJ3RAJPMWhGSMgBM3nXvOAcyGM6%2F7X8qI7mYaOq%2B14j5pKsSKvvdZIrlIDqLR2%2BbBoeo4bBkh7axdXV%2BzKaFrPHFBDDR6fftrPi8%2FuZ%2Fe7vOmdPLX7L9zslH9CiQAexEkplWrP8S8ZS2lUr2eZ4Q4oELozdPbHEjyXmQQi70Z6oEs4QbpqrZXTxsTOvgSXBURXK8fjFjciqr0AaFXQUD7iNpErOW%2BD%2BfJoQxTkHxwh9yRyt7Kr%2BIWzG9MEeaoQqYsr4YOAuqSuGHVrr4PU0SxBLMS4YMK6Qhb8GOqUBwjI69KPqvmwwg6fnyoHly5G2QQiVpGsEhDS4DZEfZzTFiiUAnvsUpsps7UjWeK18W08jZ8qioLlCmvFwrd%2BPdYrAKR2aCgSQmdKw7aCzrMPOJ53mtdHK1%2BBbfWqkRlJOvW8Pu4ebeCpcJLZi6i%2BvvIMOJX7MEbwfz%2BvaEmt3ZLV6LMH5%2FUixBYgeoifzPxqUn4yXUPNFkA25fQRW38ApdwLpxpgd&X-Amz-Signature=83926619d9ed758c8ed56e69d521e209f5e0b07290784aa7817bfbdfc68903bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
