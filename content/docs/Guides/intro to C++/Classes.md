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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLOY3Q2%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmW6Bj%2F57ghhw4vCzwgLA3Jnkm%2Fn9uemrdtEnINlSo9AiEAuIQ9PUWj7b38lUNE8QJPiqyap%2FzY4QJjeSULTpsQZBsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKKd4qL966W%2BcGxZjyrcA11vBF5hOLJ2tL46MuLl3hE%2FdV9OqTL5TSk4zTZUWcI7YKeCaN4tDXhV0HHNkHpvVwEDIFU4XbPpcqeDc5GDUnsKZkdWT8LHf9d4WgfELl9BkqDlxML7%2FYHwxIZDIPQouXcD2NO0bgjzzY9YxMBKLwwPAur7afrChceYPWkBTGluQ5lL1kl55jRbNfMdJjplsUsFj8rKb5VdigTT7ZNcB4s7L76iURuSRL%2FFUmIsTdMB7R4YuFEp%2Bumovx4vQPdw82EeERn09gVYjYC9OlTc3Ow308qdNvIdwygujbuxmLt6Z2QGFXUIWqbbiUkZX9o3ezKz5nVYyscCs7i%2FeoBBlfgXUqv%2BVoh7zpJ%2FmgO65iT6X6VB5HFtJt%2BUdVk%2Bv5RH718scVZoneh2JWNa7txr%2BYBx6mTsUZyFtp%2F9xHUizNkDWEV2J%2FOba2koA1GCf5N3aYl695qbQlrGAL8lY3OSUjdH%2FFlUKXjQLeji3FUbofTKOYucKTX8D0mTddUcuJNF6k%2F67m4RJUXQemOPUp%2B%2F17cCm%2Bv0EJrBLbQMW23wN%2BM2a%2BaCQ9FOCN%2FJO08IgCyra50wyOaop1iDoGKCqUoy%2BWp%2Bs59GBtH3nJ7lhEylwD2tsL5J5%2Biz3ctweZSrMKOTvr8GOqUBOnXDDfvsajH8UTNMCvSni651vMbM%2FUF0JCF2OlfMAh8%2FOf1tqMvuvqd%2FvtL9qr9Ae%2FJuBc7OWaMupgwiQpmoJuXXS2wYCILcH8UQiejJflKtnoXBiRa%2BECavu80LuNlOVCSo74SbFf2MEkpIfRX1N7DbBlwtMHjuqY%2Bwm3v7SG0gq62jD2xWnqCoFYH60smAPRtrh%2B%2BB3N2oHPkD99APKP%2BlE6vA&X-Amz-Signature=01f14b4b5dee65bc4b92157b8e74408b896e0ec8dae1184a3a71921ca173d100&X-Amz-SignedHeaders=host&x-id=GetObject)

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
