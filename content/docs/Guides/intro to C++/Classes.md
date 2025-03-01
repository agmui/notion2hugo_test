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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYNPZLA4%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC428PeOmH1WUzj%2FuiOd12Ead%2BT1l29jhpGctfILW5YXwIhAP6LQJ6w5AHIpPJWqfU2SK6Js%2F%2B78cYtsqPswMtKL3mUKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJcR8m5T8THBSU6Isq3APLSRy3ejble0r%2Fkaz2LCHDLqgvPep94YhKN18VkhAbe260n3ThzCNEMJIhoqDeG1AboSdZinEIeRUsstTpKPmFpGX62EC%2FwLV2NfA%2FucoMnhk%2BK3tpXeDKyeEAEkeNwaZPWwaC%2F%2B5UrKZc5s0WAhis2dphbapJcmJZKV1a%2FqrPRtL3WAe%2BA65F1zWHbQV4b9M53zYEAPjNKVh%2Fn1AgCR%2FQcKk87%2F6jhZzFsas2TSsio20kkJWbip1qPkCYi68fGVm3l7ZSohVj5yoX%2FkZArzMIy86ORf6vrxnmidg8Rtm9DfF9E8V4spKwmFcZxIebaZttcn8ZPfZ6%2Bi2LUpxPKmUpvHzCECjMCNDVU2ziKSO82GyBFlecGEBxtKmicWfJ89uo%2Fj67uxwiAHaTUCPw2JUCTfMfFoQp4RuJFJj6WSaZJxpOmV3%2BXP5arDIdixOja1vWxRxtZZ4ns0JhoTgcjeXidS%2BCy8ZO2d%2Frb6kFi%2BhoYL85Q8WX3XfZWNFNC1%2FwmRPSSbN6TVMsnzpC%2FDnO5MR4s3%2FyxKYRyZq0mwik1pMOH5k5JYnU1k6p8qmqL2jVfr6f3Whwz0hcvIAJn2pm1eiCeBun%2FVF1sEqVutK2GZFp%2FSKGkiHcrQh9CNdfaDCluou%2BBjqkAUar9%2BIVJIJ89LuWcKQ6q0X9htpYWkRUGZK5z9%2BXAEZmGXfVXHJo%2F74nhuGRg5gJ%2FuJcVfaqwRBMGTSYz5Z7y5BIsYVc8ft21G%2FdaIL6xnUC39FH6NFKq%2Fu2VZeOxpRm3IHu2Ey95Ck63VnuBTdp27I865GPfZTQgECNrSh4WP0jNtIMCwPkrscrWOyrztNUgxtlJgSHvt0RfwBLriKAcfe84jkd&X-Amz-Signature=6cb2b6cfcc2e991e05b084c4d288e47e92b2e5f9e5577ab836b43d4ff71e84f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
