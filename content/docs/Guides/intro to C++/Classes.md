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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMVD3HPE%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTYwWa6IQcUaElh6%2FTua91T7kzB8IZ2HWyO0vHl37LtAiEAoGYViaGJgBv14bLMV3fl%2FrBfNk%2F3D7uVi%2B%2FdUK4nZk4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2sohgHIZ9D2m3jbSrcA%2BrOEkZsYQoI6O7s91P4t5WLkUd08TCphZq16DtO7k7sZ%2Bdyp5A4HdNbLzdimV2hfe%2Fq8suXFPx3oBGMjQsZcyire84ZLsVGDp5PkxZUXrJjNDE0tRPVb6Doc9NJT1N%2FrO9LQRLDkT8fBDXMF%2B%2F%2FkP7ZztoroEqzNUlbZR2KJEQWy%2BrPObMm6KyVneZt3yME3tENhposZMx3mkUbh0LMX5FLVNHKM1j56TADUszpWShFEGvsqWgILXghQgxrV9vd62DcLSi4%2BLB7D%2FK3xp5LNJtpRrm9fNDvzixzfjDpuxSD4hRQc3OnzcfaM0s9KjTyDeeAEUc1EL1jeWsrgVGPYMjbKr%2BiagCFW5J397wrvUVKmOAi5E8uWc01xQeC8mSxysxgf7Bn1JMflIYkxlxL%2FXUiLPWl5Isi%2BQYNQBm9XsD3338lTCFuzePHsB2MtQ%2B90N54ch0NWiR3LC3Bb%2FhZmGKVSH3rLh0s41BytarP6nA4BQEOBfsm6N9%2B5kPIx0JPg%2FN5Wqq%2Bpqwgvl4ITz%2FbqkjH9HiSR%2F%2BUyT1ZOupvBb8gFCUQwr1W7oD67tIK8alTQEbBJ0JT2greCOuu1QS2F2o5xZG6U7GmyupUjgPcXXd%2B8XyJWbwvYOwL2WqoMPqA470GOqUB37n1%2BMAim63bLk5pPCSPysxdmPyNoFTQoR4a5fmhrb4BvY4cuRe98NXzAJlsgYUoQe7cUk6Yy1EKHd84yZzpglCCQ0HtMhu8JhB50Un3gwysVTOsHSTQcEI0jx%2Be2OCs3pFK7Flzrtt7Pc63XMvIQs4LULDI2JFxPVWkMIp03ITFPk9iXgFi0427hfk0S%2BQdA7vB%2BLnWGAukwRJ2lIAAyDMoFgBN&X-Amz-Signature=6d57fbbd4540c32127ac900dd65ab80e41a015f234d617be5e355d0221923b33&X-Amz-SignedHeaders=host&x-id=GetObject)

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
