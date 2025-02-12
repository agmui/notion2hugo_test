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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64UARMY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3oMN08LCcciREw6jUjVCi2Rg2T8fLCdK05eA4rkwfgAiAoystqGvwAuZuNTcKaTsUYRH9VDEHIXLFgBTx5sI0sECqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbr6Zx9TP0oW%2B0FhKtwDTcZaQYHfnmb0yu25s7TEeyEpkWGIvprEXhulkMYZWdRUcQlRNkBPtvKSAnOc7tSK3axIxr933avrptD6nqDI8jN4k1M%2FkuOPz4jxoawQ68IdlncdJ17vUA1x0F95yBLhRLbtyE2Li0tk3DSN1sanzzEfUgiQ%2BjKvYoPs%2FBKSa%2FDSX%2Bul880KN1XJReAzIw9b20Fvqos%2Bkv9Z36j0%2FPQPqDphh1gtoIxWNc3tml54mwLnve1Svt89y5w%2FOSsSKkGyf1oSskv9%2BuLbhQEaYVKiygpqVIbXQAnoAjqPXbH9AzKtXxZgAa%2B7HJz5%2FFbyd%2Fcu4sQFRxtnJowfPejd71Qs1I8GvTnctcmVRbCw5wyxamWNdIEWVqMEppwmthlhv1%2FbENN9psyAngsVlHuHsff8Ri%2FLZvKzNlJRNKSoUiZoEcUdp1Lms%2Be%2BOm%2BTpk3FOEWwlKhTfyPaPeWd47JeyP7W%2BXDc1tOkU76uk%2F5ROwv1SMs5kIpmiTvv%2Fbcf3RuYs0WmaZwHuxPlPcWV2lhBCz8YGm4YEvZ1ck5%2F33m%2Bu9HTGgXedcfyLj7t5442RA8YT936tfYlRJKaltB%2BDpAqftm9NU96lk5d2tBRIYKpYmO5E%2FyZ%2FIbCUXlbqfmVhZUwiKiyvQY6pgERkjj%2F9ycXaDYU5bRcCoJdK11nYePimHej92aHRWzrOuGE4%2F0ncD582MvA2DSkF6o31yzTGgrUh9hTSD5U1CqpdzG29GHtiIW%2BNWBFo4Ht%2FVoTLIr8rmQWqcpKDuzR4xgB7iDOoNIKGjQiBpbizYQFdjwszWc0ypwFqpjT%2FAiwrvsweVZHF1VeCzSj3uqhp5S5sEDVa%2FsDnhqnOwmUASwKGckcdova&X-Amz-Signature=281f9c0cfb0c71b594fb930d77cf127bfb44b3b094be1af382ca481949787b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
