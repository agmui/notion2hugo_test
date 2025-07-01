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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4KI5XXV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBonB%2BfSfvpPa2cFrUwEFIKr1xqXre3nwJfEE6Iheh4qAiAgX9mbtNNsBpffgrYV9v2mGvtUZAwbXqiZgIUIvA0VISqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJNX4fJaQKwetmF6lKtwDgP0Fmm4uVYiScz4HkYYVH80Y6N3bu9HYhkVTSPYLbb%2BDBQ4oebKNvs1q2PUezwt7scdbDj0JZWegVWKxKgcEOuzifHAvGnSa1F9XRm8Baeo1oK1Xoowz1Yy4RbCWOobnL%2F9eAdMfivk2nA44ZRrqv%2FOCYVyN1DOYtEOaUQ9%2BAZ4w8AnPBfG4vRFZg2Oqw%2F97Rh7%2FQrRzzfaDBMlVc9wmxyVwNc6cuxA73CntIeZVKd%2B4CgEfAH8Dcdk4hb6Gr4ZxhzPVsp5h0iisEarbcRPTMttYlfaLPY%2FV2O3EqaaPtc352%2B3HjEWcbzxC3ezbYTFhcn%2Ft0xvpzuzwMRZNykSzcbBapnKUZtG4hTPBg6FzoteBt19UrSP6BfwRrO7%2F%2FaaC3slZmODJSEAuiVXQotYRLVK1pOhJJcaRuSG89eChXOKq1YAwzgf%2BEsTqt56S3oTI7acR8PKVCdkmJ22SEkcH%2F2Vg4d0PQT93%2F8dzEcVbXkznh9QVZ0xH%2FywiMWwSKj2x0sejYJruGtI8WMZ%2FikylfLg4qDbhiNoUol8osk9wQw739q8Pbw%2FjYytpoSK5JgWXqL9iBWMHTKR6rK%2BHgmcErFsiJkK3vjI1EDnPqUyQfOznCgQ7917di%2Bq3pN8whsiRwwY6pgGoQo3sbkCVxqXIIR9B1oAjPc7VS4qQsquMwLpqifuIEpVgNnmKQcuLl8N03eWvZ7C5%2FjJOalnJY8vqk%2BH3Vt%2BfuXf4qv1cPzIWrR0x%2Fd8hD34VnJPvDOPwdeXCaD6KoXOJK90gLs1Btptg25UpSLoi8ja3iLo%2FQes%2FUs9XcpZSydzR%2BBXhQlG8a63%2BRrJb%2BTwv2JfOD720rGaHnzKJ8MHRE26sJOva&X-Amz-Signature=0e5bf995ddda1f38c0b914ee4b50a894cd09077f97d79db37e56f915391a2335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
