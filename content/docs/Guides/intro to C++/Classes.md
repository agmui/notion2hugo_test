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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZF7W3F%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5w%2FIUib5zFn66C0sOhtyi9l8mhLkp8SI3pUx69p7InAiEApq9%2BoDur2IvEi%2Bx9a3CaLVzKxbdzgsU7Fbp7qsXOQgUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAT2ifIfqo7B%2FScSuCrcAy%2BuXrQ%2FSTjcy7akNZAz65P%2FsD6cRti6iw3O%2BBLm2ajACPmqlaCJSdFet2JKhITzqT5gFaqss5gYNDapGfwH0CKT9ZYSmjSFfSAy67%2BrqrHeHZyJm%2FtHapONDkA0d7SmwGscjdm9cEQ5IQ2W%2FzMRSRHcKFCP8ksDKVSfo85rsVXqMR9WaZXxhyMOqewAsA1wB7TeD7aoB4sJLpM5R1DfQIdIB%2BEqEUni%2FV2%2BNLTxJd9aebS6hmVjteu4cQQd0vR%2Be4uM5tUuxPYuVNFW%2FCfm1vVcLfaNKbPYM9q7PRLma3h0pHRHNr5BidtzxSwUXy6S8HEQ8T%2BKcsgjTGRREz8PZ966RyY6Phf0HNtbfHgGagd7U9C9yMOfuotGf03sYXheAVL%2FRd41KSokGwg3blNKcR%2FkJf37WQBeFOpcm4s%2F38PZF00ipLIVv8rqlvcxaqkmWSFe2CeKyPpEkJc%2BgSItUwovUlNRmPKxB76kJczsV67RGn29gsr34OURSa7UjOV%2Frsd2hAj7ZjzyYjqZnYv5hrGmcLPhyZElNqSjLphwEKPTPXuG00Nf9Ujsyf%2Bbfo9estL5wCXucXyJdl0gaCAYeaJT0vR4I12lHMctPubAf0pRLR%2Bhg2k%2F1vV61IP4MP64vL8GOqUBALMMaefyEv1ITU2MGEoGNuiRUmWgIR4G0iSvJcmEOM5ODxn%2FV1w7k8WcknV5biCBQpo0JOldxEEz9IIAioWV5oGT1C%2FpZ%2Bem22hF112DRzSp3Ck%2BDnK0bRjohGA4JFWK%2Fvwe%2BS32oSZw%2BVDj38Snr2u9mgRP93xYogmspceK%2BbEnladGpDf7CaMGiO1FJpriEpK1FEpgsgZMlejQ6AlliHx3tqxs&X-Amz-Signature=8bca746b5d2dab9ae97ff42f99b789e814577bda9af1a863664dd2abab05715a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
