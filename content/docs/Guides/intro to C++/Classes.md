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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFJ2K66%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDyDQCLJ49XFTsm88mjzS0C5V70e7Cfr1K%2BLDiSkuMJswIhAKznlvBUwYY7%2BYyor0DrABfxu2Ymx7W4pvZcO6855XhtKv8DCDYQABoMNjM3NDIzMTgzODA1IgxOqpJjkUiMXvXQkPQq3AP%2F%2BAzfEqm5vyaBzkJjuw4%2Fv2Jw%2F5rusjv5S5C6iNXsX%2BYDInhZznu%2Ff%2BPwl%2BcjpEgLX7Rig0ZFf5284EL5XWh1OizsFcZBFwyYrRVqinacRQmGmvJuw6uwy68QBnm%2BhaeJzlXUlf0uEvioWcETx4Y0KogEui1Ot28x53%2F4rG6wonjWyLK63pjWjed1yhViHCsWD1EE6f0BIEK2IF5dikNw0okE3zq%2FvMPifpNy%2FUCsEe6TbL7gqnmwLLQ8%2Fz%2FSdfED%2BJ3dhUu9QDk47VS1%2BhGaJ6iUwY1ferEifYd0m%2FDH5M1MRrfjvFvb%2FAXpG1b8MQqTkMYPkU7oENKzYeLFS2dV93Bb5riPmIKD%2BN09BZncVcWGKGHb8N28naAxqLvjcycegMM%2BcrgIwSgOTpLR2ouFMdD1wRN03gkAg92MPkCeC29HMBsnuzrvB47qgu7vcii2vLS0%2Fcf2kMPa2H2dN82dbCHxkP%2BaQfc3YOVhgrmWnRtLWrOi0Vg9zgO2rU%2BOYbZ%2BA7OlDpV6EUXRCp%2FkEakmygdH1o6A%2FfVjVPkyVBiE4%2BF68fe2d16np%2BO%2Fh3gf7%2BVOP4Dmdzqo5pTCzipzPoooKVoj5YwWlOE%2Bl9FxnRistG9BOWBVWC5BSQ0%2FRjDv0b69BjqkAWqMFDCFrxRRNtUtaiKA6q%2B8RzmIPMUICynFpThTaXLZllq9Fy%2FJae%2FR78sP0oPI4jHkUNqEUbjkGP32FNRzjT0j%2BrVxA83BLjPDfKHTTDGE8CDyN9SYUJF%2BtYXky5Lq8lQjDmM7Mwymm2KauPuTD3x2NjtK%2BWuK10x7BsHiJCD%2Fa4RQIyd7b8%2BDrWPVjdupmQQReWt8X902fY%2BRYKvMTdxTyIai&X-Amz-Signature=d92d5291c127f3e263e36aeb1b3eec63dfeda200646a8d20de6cb6e3271c09ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
