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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZHPACAL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQSMCSqyh6xRkm9ZT%2F8n29BvPwqi4C8BgsqUDf6Gp0DAIgBrcMIXiXQh14OvWE%2Bf%2Fq8oN5ilIXHvQhuJv7x9dogJkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2bJQeDQH70cYpoaircA8hrkJ3z6ZgLA54Ea5HDBQ0OfJ%2BF579fcTP1q90GvY26ZXycd4gGWQqbhKQd2vmDTCZPTQoTLBOddaMZsgmSFmakTh68E3qDPz5OL6aE%2Bjqr8HD9qVNv6AOXbMUvI5M6HsfFYSAULb7oBr0qVpXZi%2FhYV0uE18%2BDiRU%2BaO%2FxxDLwO8dzR1d9ytpkgC0ZOPRARputwxRf3Y5n1KOwu5SweZ0Sc7t%2FnW%2FeqwrAoMnBknccl2%2BvAg09h%2FSUEXi6Ya9UVefz%2Bvyp4wbcoVi8r6ApDqGxY2r5z5Mc%2FxrpFX1GU4KhWYuvhNlK9jOmv87qyaGpUtbZJU9XK%2BjV9KlCE1mupqcuccCfx32%2B79ws6kVcahEQ98P59GxKg50HhXCv2zC7s5Y6DPn5TE90W%2F%2BFBjJUsogzh%2FFUBQg%2B1pvwfRs9rpYmQWSC2Z%2BCW%2Fq6GMNGVSo14EG04URGi5FtD5pWpjYAv7iCZvgRyr6ON20ghWrlNHAWo9mwl9s2P1JJ7tithVrLplqvLSfmp1RIAwLdUdJESAFgpx61Y%2FZJ110f6mLavzHR%2BuYgms7bikx9ris2zOaIrbVWzxj1f5nREPER1l9qGkMgWazdhKpk9RlmLDzwNsNGTB5fci6Qn3iopQT%2FMLnur70GOqUBo2QPEnB%2BlL%2BL03MZvWRsgt4RT9yohgaRVxNEnGr4o8beUdvkh7ontXLpRl5GXsl9b55VkixJqmmFm0yYRhs%2FRjpiA8yO8d4JmO5CARxRI2HOKhoVJZGhsyLxcHiLxTsRAZgP%2Fzi1rW0RFjhFQolrPVs5W3X%2BGxPSC%2Bs6o6xb1Vx34MKeveXYY5v4RCOr7gGt2PJ175Z%2B4voYmPLIICiy%2Fv%2BwWRit&X-Amz-Signature=9e610a76a6fcc9d07df1d503477a398160e62b649ff905b9e13007214ce4e7c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
