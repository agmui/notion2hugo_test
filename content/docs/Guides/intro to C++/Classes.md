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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWG2H2N%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD13CylItcabyC1aHuphRCSOpMXvF48q6KzAnlkm%2BZyEgIgdabPEdcP748RDxHoZfj5swMCyIZkQFMpDnitCwPX8WcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANO03vUke1IQwN6myrcA4lSGrSgMAfBJoxxMsw1MTAPcR8A3QoBL8z%2FdpmB7mgRAkGj2mG5%2FlIHs6dm7X7cBsGB4RtH9rswSB8s8fXpVwxuts9wOpDMpzvGB5J3cP3tn%2BG3HMIZPcDCT6PiN8XOE%2FKRHvQB6p0C9H2aXZTViKqZCHoByKgFJ%2BF0J%2BP2ADcf1B%2FVgGVl6%2BCppEOE%2Fhvc5lFiw9NKVEBFreE4STDHo%2BXcqsnAYHm7%2BxGnRdkeLoUSCRuIolu1baCSnJZY5TorD3BcfXx9SOo4GbB7fv97t9SFpIJ6i5DhmLsC0zU18izizma0jsB%2BH40zswM9ztDiTYQWzoQsA%2FOJtFD67PMHy0DnH61JXJZWJl5qLUL73a9D7WoSp7x00kb2%2Fg4b%2FboyZNilBiJlWpHlAhjyj3qDWyZdRp7Xu%2BClfgnUsrwiPGoYZQlb3s45LTPRMkrjGPJZT7DMyTHGamKmWE1s%2FVLOpq1AJXch%2BhwsddJlG3JJUFazCM93F1hJDlZu2SJa%2F4YpngqGW8E%2FrwcIV7%2FMbVx5PouXkMpP2vRGOEBYo6%2BJHxKsnyqCS%2BNdIqz0I9ljxnSUz2UEi7Db91y4u0kofr406IEdzI8s02I4C2cxwOzXhPoTF4Mx3d2OXgPzokPMMKrP67wGOqUBMMpDzfcDH%2Bg%2FeL3HvGzz66o02qrDmc%2By3%2FoDLy15UNS87zvO%2BsRurKFdJI09F6ZdzVbpGDVTrEUPvZM0HjxZSvt3Rl3KN4Vai36POtL7xJN7jBaWz25W%2Bpad%2FetuQC%2Fry0ZA06V7bhBwBjbFMpMDrVLzn1dIhP6w17vorLxr4%2Bv9BTfMs74bz21QQjbxMuDb%2BwpI4Jv%2BvKElb%2FVe7F2II5CY0IaI&X-Amz-Signature=dbadc51639397c87ecbe8bb39b4d5cc7709c0a6f05f077810bfe4c95ab06ebc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
