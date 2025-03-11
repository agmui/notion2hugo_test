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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UZPSXP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCyr3FErMJlrZAbpCTfA6P9ctTPGT4rzYnoAMPJoI7l%2FQIgbuFIZOB0N78Md4Sj%2FXps6%2BtdaQ0aVzKdAoXeouUZJQEqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BbAwb6VGtFAa2qzCrcAxEkSAoyA9llw%2FlK77cW9hzaLZDeP6mewtmDSj0oWVHFS%2FFUwrjcjntZHhlw9RZSTxociu1FJhIO3aWSTS8iQpOSN06a5nzoPNLSIvpAOp6Iab5v2gnfG%2F156Bg5V0Gokn26tiKSp9Pt7RIY0V7%2BguDD13MSa0cqKhQea3VZP8ZjjEe%2BFZXFksElttAG5pzW43aUufeMeDmhKryljHb5JXBz3ySNy1nDcRPsry1sJN9fhdemNkpIe03u%2FpLvyZgsxutDLA%2B20Fq35nzPLh4a3Sf6pJYfWXOE4QE4jkUo%2BxET3pWPS1wHI%2BNDsPRdrnBsxhxwmqenTTn75Fan5eM5gwQyKSIfVUwja%2FNuI6fqoKBeoxz9cZ%2BigVOZlC2q5dYLG99V1ak%2B47xreBVoltgPserrVQh68K3wQXVq70A3OLzUbHIex6G0ZDVKnz1iHcBryRI9ZuB1gpsuOqrLEI9IySEMaALpZnAJf6X0ZMb41YWJmNlKEUoFhXRfOKkYdxGS13hqBah7LFS2fKt5pTFFDT6kdjPUqjJsTfHGD6h8rikMHMHjinRc%2F58IjCmW7FsiynVOfDm%2BaL1Zm71r7BgbyLRpI%2FbgAZOY3lMy8Vkv92zRFZFIGCCfDO4XZh4TMLXRv74GOqUBHLkMI%2BftnLHw6GTHqfjdG87iZeD3Yk1beKvtmDuBqx0lcuVa1YtuLAOaT1y1Suaa89lCUcd0ZYtxF%2BI726VnACm%2BJlyqb1Ir7LRPPtZanTnJMbJSSCGhenhabNqmZhep0727AuxhXO244l9fxy8JaH4ctyIYWCeEvJb7eQK9bAXWcDVgv6OeodomdGQVsDMV2v01vcRz%2FNqzX9R6fEncUeoQWDSR&X-Amz-Signature=d186469133432a304398398def9711035013c251ea57f2466c501ae55c8f20ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
