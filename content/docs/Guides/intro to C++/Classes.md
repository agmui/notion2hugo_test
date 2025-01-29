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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XROQGLK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6ZgO4I4I25pWWsA2bFTycXiaHJNtWFSuflgTVW8tFPAiAm8K6esT%2FJ4fzRnk%2FV3eELoqdsDeBz2xt%2BvkrOEHe9VCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmdPOMzi2ZE%2FeixbqKtwDEju5Zwn%2BdrDMihb42D8%2FPXc1pne6%2BwBjAvAsjIA8i91lI5OeoBSZYdwtawPJJoG9%2FcpwqKZ2y6fAl2xy5UulYp2UNo%2FXvyaAaeWtvezjmZC%2FnGUjXL8PHseFNTLmjA4XSpK5NXJx7w70SM1x0MHPJs63bxal%2FWJyUoVdrLGc4iPwCw4kYZNyFIXzJQSQs0DPrl7vpTcAAxxsHY2a0ldDPWsjlUDz1lG6TE%2FWih0JsDWTMqKiil6t46z332%2F8SGEHkgkA4hGK%2BhbVmJF5XoHyJA1ZOBt9v12Vdnt8O7UH%2BJbtcQ0P8FcxFQa79RHAh4vlFeSIrNzZpfVq7b3B2dYEHFQBet7HVIre6t%2FrOaXo5T0vRhnmFxVd241ypAa1iV%2FjVLK2THJzmhMw9vJ6PUrF3v5%2Fc%2Fy7UExGVf05Buma8eeU%2BgBuA7%2BVx74MP6WvL96o%2FnJ9QCQAicFD8hcu541%2Fm%2F3JQUBwwnobRp4awF1RAjsu8QN%2B3aEBRsZzsGyybuPXk4omb8MDI9yLTX%2BuxjMswApLDJQLdEoaZyTCpxs5npNSUJJq5RJg0lmHHlQdeU5lRXYd8OJwFazIHzSxBnU73lXl3aiJl2GxEhK%2B%2Bntw3tAoHBHd%2FIRt1tzeX8Uwvf%2FnvAY6pgH%2FQEMMP1mOIk85zaOUzrNyvGhsJWIk0DvDDH2axSoFF2K5RMLAaCtcGatDnWIkPSaNvC%2Fmmw%2BPTFcf4bUctAVvaO5mG6dIiW%2FScgD0y6WmeILwh4Tx69J%2B73rHXbHDad%2FqgnbqyIkKexTQq240uZVMaS8%2FzMppgvLogvdADbTYTnMWUbwLz%2BoWX9VjiOtV%2FwnX%2BTpndR1xq%2FuyHrQZHQryWwTPitfS&X-Amz-Signature=e0338ee4d86326adf7f571cf7bee9686a6def0a91296a80eb35bd36b3befeacf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
