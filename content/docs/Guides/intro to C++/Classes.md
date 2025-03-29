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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXT3AQO3%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIARkZ9SHhR7kdJe3ByjSyDSOLeAmo6nhHyH3L0PXsPITAiBZcphPCQfTssXRQrAfoedcXzEqf%2B1HT3EZhvMwutJ3iSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMtBhdlS4WWXY4YyK8KtwDuiRN0rdrfZcjpsIk467uBji5GmsMgD2Ev0RLBQ1BuwmehrNqQaFGRb7Zbl92SIAffEB1lX56VxP3Ssk7C7Hr%2B5PBt2yU8SK4Zcxi3DuLDpHbjrmf7cuy%2Ff%2B4d2KiwgtaVpPt3uBd6Ow%2Fv3eOaWdJrpXgzI0uCtLBq7BU0PZtBduvR5WcQXc72xDzQS3tDG67%2BeSmzXZ2SMeu2g7FdCRl2G1HGcbh5Yz0dy8%2BqX1rxh528gH01wbiAzuY6sOvSnuaZGYCLO%2BQuup6axv5baPsxTyEJzBXtCsXMUz%2FiLa%2BXfBOjvFWvRi4hClPahbzwQmccIVHna0ou%2FgKocxQ5Qep1S0sgpHJVTmATRPrtqOS4lE7r6MAtBFYdRE1NSZEHcUKL3Q8fVJRSdxN9OL%2Fzln8JvY3N%2Fh5Qc4yGmc2KOGwTR4GRxH%2Bl%2F6Yh929fX6%2BXKe7FjtxP2Ta5AUMUARYNvpQWpn5ktnRPz7Dbt2tpKSdm9cVqXafowlD4vT4xGbPc3H6OLwVMsEXEGqGuaYWTlZYTetMwYHwvRuhpza7dyGaC5U4zdasllHClwYSK12p8cxsUc2V%2BNcrp091G8xKjA%2B6t7Fgukz8fLqy9tU7tWe7XgZ1NoBzZqb2eBrAcQcwxNyhvwY6pgFbpXHGlKpJtGSv9TZA4I9JxBuON8kqE5lgZ4FkcH34g16aPuYYhxOAO%2BthQ5Hsi6Z1rw3D41vTAKw%2F%2FHS%2BxNUdkJd0W2UenMmQY6Uxiwwv%2F8v00ak8s%2BNm9OMEKkXC8EPyV%2Bc2O96oYteKs78%2BFKSSjjIATWhjx%2F5lbVDOtBp663UFSgn1v0CD7S%2FjuPjVv9QhuBxwSzgrTbF2xjhIPAInyDW2dFKL&X-Amz-Signature=d2898bb0b03cb74ac5bfd7918db11a7519f4af5b81c77044bc4e55efa2be4a58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
