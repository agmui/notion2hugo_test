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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6N7QLL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDpZNJh7fKyQq6fbjwxRXIM%2BrED2S1a64%2FBDytB5wIQPgIgcVmBADVAILPFWYHJc4BElVNKnlR8JT5xehcIl3PFslwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHmFW6g%2BOX2SciiMLSrcAzBEQrsGanV%2BzMtXwi1qXKBdI3FEYnVg7zKDv5c%2FSxAp4hopyzOmJzEpVVwPMO02PpzpA59otCu1mno3oCDyNDp6R6hV6CHvYN9J9YgjiA2diV%2FheoHalZr4ijJ0dOBET6etCUa3l7As15S3Kus9s6GbAwuXEQT2bshEg78Q4yNpJkM6JlN%2BcahRl%2BiaOqWhf71aur9FLMeHmQq1Fu%2BAqUbxfFmA%2FnbxVlH9kGB2G6%2B10ZJ2szSziHP6dntxhxshxBCGv5KgTIC%2FhZMat7v5RalUCUu8saClIAblXPI9PsJMF2nXydRPsil%2Fi35OLgv%2B9lIgJJu4yDc2Og8uV81tA3ZBrqhfjg%2B2IzIYGzj4pqMbWkZurqsmXQ3fTCBmKlnxCV%2FV4U8FT9HMick3Jleqc1p8mk%2FgTdYMrMxkBzkumqi7dWp9%2B1MahpU6trgc53TOMfjNdeWCGl6lwuuZwx788R6clxMtBceo7ihTWS0%2BI8aC6N15hZStK%2FTzeKdvA6%2BlMZW8ZMczvtYu9gavCf0WhR5ZNraBy0UJ13MwBa3v4F1VD3%2FyBQgBmkNaE88SVhUqdg907zcw4hTyiBWHzaKL1KDGdVaZlPH4tKEsJN8YYi%2FH%2F5cu15YjmUQNYjrdMLT7rr4GOqUBVG%2FHiFuOgkgiRCS5%2Bu0P%2FrBeR0G7LL%2BM19vPXqtdtI7Si8Qkf5742pLe4%2BPC9ALzvLzdUnlsNEHfFEPHKktLxlGYtCa8IL%2BEUJ5ak%2FaiL%2FqlsgcuburgPiqy1jsF1W9fQnPkJbf7RkDARVRiXXJt%2FEE7fZw6d%2BoWCinnZklIFQUIzmHUztmj7gImAF2oD%2F%2BzFSSWfg4UorvpMWVCezmf4EE7rrKS&X-Amz-Signature=f44372bcc3343f8abeab7609a1c0ef894ae9a5791b34e7ac0055e5f2e261622b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
