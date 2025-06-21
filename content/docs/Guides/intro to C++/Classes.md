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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGRL3FYD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcMmbyXRCncliePWdfkHbjIVVawhebmVQmHLEPA3YCeQIhAOv%2F8hIPJp2VNbkPDNS0%2FbDUYvPmm2amaQyEjki5RJ7FKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMO2L%2B%2BhBN8QrOhqQq3AMg7UxFkt1Fggw0Nn9vmARg%2FeIhHc5vkkfb4uZiuZk671tmjb73G9PeyoYqDZSn1%2BqZTsCSxkbieR3K6PZChV2i8tCHBZBvfAqRs%2FY5uSE%2Bk5Zh2TpK85snhJZxnmT5%2FQu%2FB6Ro06Fp4iHJTYZWoGNpArvX3un%2FTCJPyQzHerbUfWda5%2F%2FqRnuB6%2Fu3GQibUIr2%2Fe8yPvPNZdenOVBHuUPnd%2By6Qv2mbg1RyjO2d8eMLa7DgkMKkZYYDqUQkwJn8aP5HF%2FoVqZtTaSOYj6MXBz4pn2T6OegPtWuo8DK2T1RyEzf55vNz9HiIqKq%2Bea%2B2O96%2FqmwaMjvoX6St8pB3FPwGvUp4%2FbvM3U5q%2F2UUhJqrquYmD72ca8lMov6MwnUrpwUYhw3j5HKSU7VNl1T%2FMZMffB%2Fcs9gvylm1Nh03YTKNF33PRt8ufWT1oojpnaO4G6HKR6Bpva8%2BCHg66%2FMy2AivmwPWwIJsx1lPTEJTuTPq6fE6ZRMcMLcGyA2tt7ND8swOYaXxrZFsV0JhekDLvPurZYKt4vD%2BwQO3ywMGZbr0bEqDwtmjw0SxWzUhXH5pQdxfgIzNtd2Tmt%2B3A97Ow1zgH3A0KfYiyD3IY%2Bmho%2F5%2FvQ1rf0iZNYhI0UVHDDvr9jCBjqkAdExEwxiu0r1U77rwXsc%2FRJ4hdiFMoyOY1eCmOG8OygDVaIxGwrpkeEvrzPLq4kNU%2F5ktJ09Oxjvsgo4Kycq8bdWyhAZqqknq0MUtLOnjp467mDx9AJjuh1b0qao5CQsjvWd8C%2BqjLHVzhZalJAn%2FQVEqWfxm2Cn%2Fg6o3VBe56x1OfjBKwvSHjOSrx7zK4JYTee%2BEowgezywOIQTbrEJ51nSfd%2F%2F&X-Amz-Signature=6888766320b701681ddcec2cab514bb08cd991315f86e0bd4878977cd05a2d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
