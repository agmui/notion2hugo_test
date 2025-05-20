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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O2CIWCQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPgG6L2mwTEhA%2FCUydsF49jr8Bok%2F4Sgif%2BGVge0y5AAiEAjpsHSMFiMsVSbbnV8V%2B9offpdTNOVvACVc0WtSxZ%2FowqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyc%2Bo8wPcntTBnkOCrcA02rEsZ31vMCFY2A7FvhCxzlNGXTQEoJ4SOfGVI1MwDnL5Q7bDtRdFO9lr9Mj1bDFysYsOf5bLqaJMeF9vFh0yYAvIu%2FUoDm61z%2BjlHbf00Zy6hEppeAYXop6qNgmm%2BGBO5lLj%2BwtB0ywmv2St77wcj0p3iZ0eQCY0IfnggPa9lWVgLLEWVFH6vZQR7cRscm8CrHwTl2rn0ImabkGjlVGD%2BN%2BCYNg31t841ouwgpNDoQ9gHDV99UAwo3aH5bSaS25iSrGE463kQelvF%2BZIQsOo%2F6cMApe%2Bkq%2Ffl%2Bmh6V4b28o2NkrMJSP51Cp6%2F2c5XONeH0vWCia%2Fg%2FIGyOdM4F7%2Bce5QQa1TSQ7JRF5KOYR7L52j%2Fub2PruV52CNtIjLUh24lLYKSd75SNNAprOATjrGRR%2F6wInOZZ9SirdzGnS8PnQO1P10gLc1pJ3exM5eeXlGDcMSYj9LJdifFp4tyRr%2BPhRQXBWA55KZrAgDuAGjCqzXy89i2pCj7uqCkRB09%2FoAJiiTFL4i8inDY1lviCVZViz%2FNOJXd7M0Ot2LM1hyZi7xgqq7VMDiziaB1ll53o%2FXyGVg93e4INR%2FDBpP1Pw0%2FYxoG3JoW1vHL7So63fPq6q8dH57LIzmVqDKaJMOutscEGOqUBXsjCzunwmBCiVQAQFHlmnRX3f00rFAImJmPTuqTrDzIaiDFEm7rKwPbx063NLQgHmPYKRVMLZWb8WbPQ59DTV3l7D%2BAIDjU4J8fzPOWzHVGSIQtc3Gs7AteMUGMIKNb3jE8onGXwsN1NVMInlDrSf6Jppk068K6NIA5ceq99HlkocP5RNz9XrGbnVT2K976bH7K%2BhsxvooVnQlzDA8K00ilV0Di8&X-Amz-Signature=974fa0a3c6e500548ea54eccba0105353466f54b57e3bcfaa8e381e699b5267e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
