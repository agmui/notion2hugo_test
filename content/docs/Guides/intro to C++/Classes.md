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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT5CX77K%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC7lmr5AkgMVbRbG9Azwowp7KKoq%2BaEPZMNbnvY2ca6gAIgT8RrhIjm0Y2sTjKRH4r5RC8Go7dTCh%2F6R2VKYl1jHqcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDo3puo%2FiFnGtarBkSrcA86cu%2BMhGSvlY4cm6ODcjLvBQrB3U5zxyT%2FHnG9FwirAd0entiFKQAa6eOM8fv3Pcu%2FFlJm0CIvu1tUglH8G6JoqRVJD952S%2FB4OxiA0n1c%2FpXk5a9IElDBuxGYB%2FPvDb7djah7ruOQr%2BGOWpix2FXOCXZC4K%2BVFWNrwZi5skTtgdtlm7OJCYi2WGbcLMLmztCbNN2HXdHdwaowILtGNPwk0MAuXd%2BkYNjJ%2Bf347Wi0zDrv3b6FsSKyaO6%2FZLK9M2pe2jEcTkyzDt1SByhTxsrW7iuZxmj3YKkE4%2BfcU5r8cgoH67gDIJ9nQNKKHrEvYbCDcZ17WKE4gZ8rPqWSvoOXzPl4zvPRXmfW0gwecx8EAMe8YtoxgLBRdInVCVbVp5uYvqC0NWTNx3QG7ISA4zC7eHsTHcwtszOPdxc8ynx2HE5FDMJiPASBJ5vTPjyAA1nl%2B1l6av448gdjTT5HXfuKjLG%2Bu%2BnkUMKsvgsmUBfK1V%2FhLzsxwGSVLHvBrQUYMhP%2BZicLF7oj0GywXGccqmPod%2FYIe6PJtbGjYI0pKEP6EXxT1JyTRXE%2Fk8bZAVfL6U%2B4o97Dh33TNa9Z4lFH82svvKZAiAVcIpzPibLMX50lzIbUuyBxNq4dy0LR3MKvM3cAGOqUB6tKc3Jf1drtR7dfkZzDdK3DPf6LkJKrqdwCNAIu8L7iHPZAyFB4XGkmzw1olbdSa6EKfxxUKa1NqS%2Fu9JLBaq35l98z%2B%2B%2BsttOEM28Nvk5Yipk919hsTsPIOxI2VRCw7fKDLEs9RM5HT3xqX9w%2BIfPLAGUNLT9f5gTTL6iW2ho05ox8bksftV8IhNMQ9Le38V3kBnxaD6CI2zHWnxwsh%2BNXIWi9t&X-Amz-Signature=7d14764217aaf3ed1ad7fcb369504e7ff6cb1a2ce1e683a7e18a8a77e7d02e38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
