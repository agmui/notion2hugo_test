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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I7PEC2Q%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHAT7L4sy1EF%2Ftc0nnoVH6tsXFW%2Bh1bVm41xrmBpBCyfAiAkDqhkZ172qyq7SrQrx7PgOQO8Hs6hUeC%2Bwe8n4%2FtbYyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM4ohWd97cyTCJc8%2F5KtwD%2BDAPuq4Zn5noPCW6jQcphEhQ40ptxoJZfTobqIQkwnguuX%2B%2F5mYNx5JLKv5V5JQobUw6Hk2wUgFMqc2R78ZS2%2Bw4UTas5eMLF0iPW4cgz6J2w5sRrAMKDZe37%2FgaP88ifFJ%2FujbJgPeS2cVP6rewwQE1Vsa8NNmqEseAPwkIv7dwMXqKYWq%2BRkw%2FvqjkMKVFJLIdnORoz2LIdqP%2BOv7cHJE2hN6%2FsOuoTYHR5JeGBd8jxde5te2meAn6KHIDemr5cQ9MfRGjyRwUSd8ADUYyjpA0iCsWu%2F7HqT23KMhAv3BlmxaTe%2ByuNChx%2B2hyN7PigEmD891eX4rs8zy5EmDa5kNsUS7l%2FXQlzyEXO7THEdXp8DxXyF4%2BOQyFPJ4FE%2BrE5nJkAOZ%2FLDDq9Kxh7K5Z9xw%2B8SEsVshacoYRpoUpZcNjanMcVMy70nqLx%2B0vSvmSJ9zhj9w5TkcMNS8Lxtm5IRo63e65CZLfsgoWRsrazvB2GEFm5ji6i%2FhabAkHOQb6P%2F8b9%2FhzztNcqG20eQe5JRpxbaZ4GBlvQ%2FqTf5h61zfbOgn3nHOE8LG3s1a3hsgZL6bt%2FAM0%2FrTWFEZeuGJAnNL%2FzQODEo8Q9vJKzmSOvR0uFtXyifmZgNLsGzEwqbyOvQY6pgFe0V2ytPXMudiCFaoclEBV%2Ff%2FT1YC4ho42aGw6MDSCB2b3L4DZeRrget3kNCqjbU2lkIUWX0slviMCYzTq1n7%2FStcVRJwntp6g44%2FR7leGUiy7pmLgS%2BnO337nCOyaSadHWmiKLYcBAxb3YFyalfl7yf%2Fx7RFhIegDF4d8kkX0J5Vr1FLcnhGHIQPAYoGPApHWNisVLnSP5CcVrLwUzt6MJFOu4OMx&X-Amz-Signature=c95faf2a7496c6146187ae6f77ca20be8c4891d385a70a2a1849329e35823457&X-Amz-SignedHeaders=host&x-id=GetObject)

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
