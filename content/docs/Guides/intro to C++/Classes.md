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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EYCZSJ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIEII%2BQ5GuNIfkWAHzO0Jy1dEIttH660chgTbX2FnwdhkAiEA%2FKMJY3gKFtANw%2FOD8QM7R%2FPw0VebBaQ5bqjmWrSV%2FP0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFEXgjKZCDxPy77ruyrcAzEyYu6S9DGFzyjk0I986xQzhs65G8eeBnLqt3EIW27EtjoitDOmP9A9EkaHHdojAZFk1NB9yxkm%2BDisLp43N7v4MqfBhEmsEYoQnJcR8yhN4HEnmltp56aFbPJC2udhOAPV8Ve4jHm8xB%2FLeP8IiazNNWansVpvW9Ku4fAP%2FIO7%2Bz3JAFslBZ%2F8r%2BO%2F4K9zAeMjulJMuRyow7lnO2IFoNi0QrNCfbBo2iWBZhd25VU8c%2FMoEAje5jmrq0ql0UFLESu1MaDVIBvQ2f4mSuEIVgjQI0qqvMq%2B8VrBpbLF0kQqAbBaSkktZkDTjKHUh7TGhE4BLItMRFMTOvnEEpBr6wQNTQ3PJ7TZZqpCXv18wrcLst2w9AdlHvEeVc5lr%2F4UuP%2F2KSwf3tFuKC%2FqPaffkqCEsXTX1742Dedl9Xb54UY0vALjCfuzHsWsCa4%2FSxYQ%2B8rNHQ7gF6L4IyhwPqgj98Yo%2Bk7r8fdAxy6HORlvTWQovUnpD3eg6oPg2rMLUQvQAcY%2FMcbcVQh4xI6cwceunUskPwSF9V9o%2F12qbWvnt0qycjkks3pUYTp%2Fce0mAU3fGp4vKbnjxDPRiX09ISeiiqHiAusuS7qVI93RGLmDfdOdQk37FXvUoyIyIru3MLH44MMGOqUB7PQcAdp%2FyEKyhXbw5EVcblGw7HVC%2Fl7vfxkpxRXO3rf%2BNI7mU%2FazDS%2BhHUX1LaKPmQ6EHAYx%2BEG2FFg%2FhFevNqQyXQgk6syJAe1dnJc9Nc9vjm9Y60kkIAWLN3OIk8i6RkYVBt%2BDyoOBjrN9fq5Sy4jU1afg%2FpwEBbvHYtPBOIY9rbUU6AaRMaxuGdvA0pzwKRZK2%2BmGuGKXjLbAWk%2B22lgx6LFE&X-Amz-Signature=cd5099831b4e4cafaa0a34c32192ca3f8a608587e0d097db2acf8d3a3c10cf6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
