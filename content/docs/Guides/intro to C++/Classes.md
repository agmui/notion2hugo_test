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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGS2YQQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJna8U8AY2Fcp5cGAm3dyNP7C4r59%2B6z685cSnaISAVQIgOtf%2FTVicUF4IDAadseGFTLlSagrsz1q74rkzWXFyN%2FMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMZNM4SuHpQqfINXxyrcA3uDtRHpeOA8r2%2BUNRanX7f0eT7h9rK4gRg9rHl69lZuh8y6IPV6ZqbPq9ElPanot%2FML1Fvyrx9M8LOVF7oaz5UQHHBI0iWYRgYeQ3tO9sn3IUVb442O7ogtkc3m7KTkp9WxeU%2F%2B7bX4tSyJ%2FnuNwgEicNPgEsAcbXRexFWWzsPN8BJGJfB2hXpv1aMAOzsBJTRPtZjPaN69t%2FxLX9ny%2B%2FPk%2B0vI8sSaify1E18ZNDswSwWLCrxCIzM8d0CyqbT2vC4PFL4BqAu4%2FO2fRMUqZfkDn1NsF3yo2pNlPv7ou3z4o6pu3pJIBdsvpM0axL4uicXiWdvldujMBJprp7%2FT15u2InJ0PqvB6qOTWhMbTdOLP7yxe%2FD5EzDI%2FS%2FeMQV2c95eCfijUcafp8IJ5NMS0znT85%2BXwsILixU0qqH%2FXDI00mZ53%2Fdur%2FxMS9zq%2BuHCovaKxL%2FCLgRf%2FxAw8eoBEzaLYXHjWqZKOFrUygQGj9pQmhoOMchB3HIvAcOorc1tc%2FYDKDiydEBzmQgrWguQjnIMN3xqQS72OpGjwcbkXby59BQCDwuS1tXz9Cj%2BeZ1oPKzoqMMtqTBhH6KSGYspGty8amxitnK3Ei23Y7n2KR%2FApRZ7Tn5EXlMayyNNMKXrjr8GOqUBzKc2ocTQL49uAUq5iWifqksSuPrw6tjUkapCxCYB8BRY2me6CmDTd8VMDJRKKTDcR4vJrOHlmZbEnZguobVyzm1MGlrsc8n%2Bq9YAbSHkNHWCMHJ5QWcULs6i2TCaKqFUXqSJbL6WkBBl%2FSKbw2fMH4%2FQqUNpRdtUt%2FIdXIvgRTEPJBHGG1Vic4r9PUxSWP9yfXKuZtRzY9%2Fs4jh7QP2CIOl6%2FeRE&X-Amz-Signature=4d80bddf9faea0e4a6c133ca6c3fa2c943c9ce2a8c79ce04dc9d7c8b00449e25&X-Amz-SignedHeaders=host&x-id=GetObject)

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
