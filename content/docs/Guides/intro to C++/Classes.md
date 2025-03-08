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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXRLJCME%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDv7NPnGc5j3Y5o4zC%2BAFTeZITofdpZsf%2By%2F7jOEMc3pQIgA1CByFTWTax9rl38VpZmHSBnZfgdw3Y6DZJjHmBTA5cq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMUXWGpnyb4AMy4D6SrcA%2BeQV8Ly7iDVBfjJtvbjmHUTUrH%2Fhv421ErZxJ%2B%2BoGaGFgCK2B0%2B%2BozxxXmJBzLvicYXZbWEfBLP2cmjNFKJNSvANJ4Qv7pwDO%2FagiF6%2BvgFgjpvllt%2FoWtH9zdtXdEt2rd3qmyz0ARkvP%2FKApmpcjKk%2BqaSZgL4Dgz%2FeCzELMZNam7kH0zx7nQU8IVf8dFO02PUZRMSuNIcx2aasQ47rb79ERkMXdj1vMGjxfg13R6%2BItMtXMnKyj7K3wQFFL3oVnooLRU8Es%2BMNDZNCFWRrJSMPsRrhL76pHcbBz%2FhpyO48MlrGMvqLgiLVJWfJkeFpTbB65F4%2FIrM96uW97NHiq96e51EKIcNfvd%2FmYtmL6%2BtOxQWqtOULorju7zVT%2BdVf%2B8yJguHrJRlbYJqM3VWJzGpcJg966U4am7WjcDbejrWFbC90LmNQ50GcBEwPXLeNcurgzp%2BkR4Qgb3OQb3fgQpW156BHj6VRiem4iLJxVVyc1ZQ6i2vG3WCpN4z1C6xs6SqXcbwrA60jwnVFetmc7P%2FrWsSOZ2CVj7GgkXXXFvIRh5uB44PzYejw9IIBwBDyDQrvgHmLeVU%2BjAysupekAGgp6sbLddYKmko8Ej%2FMndhoSEGsRhHHkpKoc0RMJnUsb4GOqUBaBYR%2BFsldAV3Hs3jMuOKtV75DzoLSaB50bJcTvVuOuyw9K7rE3AE1u%2B7h0xWsRxIHSURoaBCKJcpL%2BSNC%2B0B7jD3K2GE58uSGQPYc0M6IzX%2B%2BCSQ5bg3hB%2Fv2ihAM0YCtS6xXzAO4j0apGy9a9swaKF9lJUkvCtGtzp8L0oVAUgCKWW%2B7sP8ZP3dT4TJdhpOxow4y1VFEXa1RvKMM9Dxj2Hr0Qda&X-Amz-Signature=7593851bb233494a17b2bc647794096acf4398716adf382bc0f96b044e0d0a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
