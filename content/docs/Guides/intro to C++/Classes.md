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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q333ORZF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD0n1AGjR%2Feh%2FbqaOQ2c0FcAeuzq8Va7npam348ii1KMwIgZVAD%2FKd67SYfeEtKjtZORR43wZMW2s0zB3UhQ4yhQ0sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCyZ7UudKKyN1BtcsircA7BinTRthbwVvNbZ3doOGC0Y1%2B3KAvJAzqQ%2FgnI3ocM5ff9Sq0Irl6zHe4CE0zDeqzFRBAwrGb%2FE2e7moulwkf6KP5YKkgCZm%2BO%2FdUaIK3a%2BtFfUzx5wbv836SmT2RR%2B9YkktGG9lDpZ%2ByR3kcGTfmPZaS16f5xE3ebgHgTrlnMDvdjQoWVylzN47HL6mQyRFlYQEfgpCHWKqsCa0qAEx%2BOvuLFfMPbrcLanouOUcJpKANGP4cMKBZbCXVWX4B7M47hDk6dAIwYs8nh7XgcHIPUd7IFY36cNf7XvhAVdBMRBx2wzIybbXY7Lnih%2F0JlQCNoqNxwHJgSM5VQs1cdGS0SP8TXq2niDXAUPl2sjfyiPM4dNNTXz1n93nF76uOrekj1yGipCLU9ePIVjCJmamcScjX9ntwZQtpaV594w3vBplQhBWpenn1b0oOeoXYQ%2Ft7%2F8r03hWXett9oUQOMSQ3z8T18ihHOp94bcfodSFQZQZNg52TOwJGQ4m0%2FkwNZydeaUO1%2BZle%2BOwvfQqV1952lcbt0Pm%2B8shY7gGQIqnTYr6QVm5VsZfs1cn%2B9S9r3Sn2KF%2FJmpoQYhH%2BMUh4OizyVfZhrjg12DdsPKiVZF79gF7Zxkbd0608ocqdbWMKbdl8QGOqUBX1IkpP90%2BP1ytgDH9AWUihFdmbdLDGxx%2BUDYsavksNzO2R05KdjHqmD7zwyM3WLfitqLbu4%2B0iKBC1GSQT%2Fd3Tn3K1WuVGLrl3RoSUt%2BpAK3jQb1%2B3NGIpQlkXbYgl98OJMWXS0PHqw8QEfOK3hdvkSCN%2BjK8TsIKWB6tsIml7p4pZPgSIagYxVE%2BGzDlzPM7Jal%2FhrSO1O46efmW9Cn0ZmB1%2Fns&X-Amz-Signature=4050d322936f56b29981f08c475fc4349ae0f7bb3a687b24f40617c36382045d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
