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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A3MLLBU%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDD%2B2GfWc6o7IEeV0sOb4E4bYRJYU1Ncnj9GC%2BRbk9dyAIgb9CyGDDxjgtyge2j2cydW2dqpwwLkAsOU%2B84oGXRXbgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDO9BY%2FRXO3Ze6JtgDCrcA6omg5C8D%2FyMTo58dGur6WE4gFjsBAASTl9axCSTXJsjStQNCXWeTkFWJsAin9C76%2FgO6mOyqcDO7VX2J7qpLEjTocURhhe8IFkFwGf5VWC%2BFZE6as3j3TrJmlDNwH4IhEMbnWGiqXB4YrbnpfgFRitslYTLSxiJmU1xzOPTqp51AppN42TuJjaUvaFA7shxehMMZYD4qULPINmC7mSK9kqH1UhqvFmaHdikusqIF1HsFT%2BCFkJz2w4Vi4HfjE1mkS04UMiKoky47iYkIRGZoXIFBQroLAKcKPitBsVUWmp2TgvFinACtu7orHgXNu2r3O3bwy6gV2T64oWrYnjc1n2IWFQ3HoBJHQ4fcLuH%2BHU34nlup2W7y086Z3BTV%2FNflpha9I6HJ2Z%2BxS09w2Ood7UxyIFPQD3YSMttyLFV%2B0lFn4Fcpl9CyP1wufLzLG1Cpb2dUWuleFsRkr32BXm%2F7MDGWovmCxdmhd6C4B4rFyTFZX4pmYbUYkaG1Yvz96WAYihsaNdDcJbMUbNMMCNXJo4q0ts4DnjAddELtJZuT1EgduW%2BsydXV0Hbp1zrvm1hPPad8iV7pYBlIQzm5Aj6SEBo8o4ZyVqt2J47Tw3eZib2wUe1G%2BWv7qcCgisxMMa7g74GOqUBrs2fKgliDNpIbJ2xWV0cpUb4%2FljRNMNPofoLMbgQO%2FCYPDx4nKNNPNgJwZ3xjyaNo55Dq7Yb2kC93yzfYHipKZkeV%2BD1NZMRDW5w%2FS%2F0fJ%2BKVPGNedo9hAMWY1UwWqLeD5rsxMFxsyzu61rrkIYfOLv12j9FaGoRK6nDKrpTwVyplmynU%2BI2o%2FN6kHmcpzo6WWIc5I%2B5HObtLN34KOxE99JgwtDV&X-Amz-Signature=06493e35bc2d13c8cac6775955b7b381a75b9def13e65a11d928045e0b63d50b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
