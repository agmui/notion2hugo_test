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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7UVQCIF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0%2F5RDN9ULHwEQ4jsIAvADb%2B6oR4J42JUVx5dlOKdpEAiEA6MVAh%2FIeybnBtGHTbFMsMKUf3nNEoXHMN3toShXQyooqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrP5Ci9upYMptuZWCrcA4PNXjwbFbMnaP4iG4trwUN8kZ%2Fw2G%2Bg8ExR%2FHO1AAa%2BDLU1fSaMv41rcpXbzay5ryKwBqzwpMs8ulgdg1Pm21zqpThjcRKAjXxAZcuAddleRiIDrBkZjraiyuA09j9V7gt5VqMu7dCUGyAKbLxf2O84VwjIBLJrZRfCph4lrnr%2FAyX9%2F%2BX%2BIzKRGY4Gg5GeSx%2FDsDHpOzblqAgN01cNP77uVh3C8Gajy4x%2Fp1FwRHLCn2dd6QsdlO1DcwhwT%2B4GD6HRCphDbK1AQYxUOmwGnbeTWKOhrXNx8CtrUGgSYr6Pz1sYntDw3sdbJznty7r5th25zpX6i%2FhEgJYgBawkIN0OH1DfVI4Mk7%2BYjS93GZXSEIDgl6KHWl8T1yTnTS5CfKdervPddqAW4ndB5yrBDQE9gFkpFSxiHjKk%2FznfTmdQAM4G2GCy4XlCpq%2FNaD%2FepKBcnQYCW6WQHKjt8LrleIJOOJmSPQE07KqClkHVqqIW%2B2ePIkg0YaOcsmpXBPss0e4KyjJzEEiebYlVZARjkXnXYMSD6j4j%2Fe96Hts4iIyZ%2BLvlGTYEAUh0cB2p2iClCkxVFgNS%2BJqU0%2BAisw2Gf6m9%2BN%2BZVgwHinFd3yvQn5IE4Mw1R%2B1erhLqEBzXMKze0MIGOqUBCZ%2BVDJ6dFrs2k5pE5u6XT1wGAgYhK2DGJN2z5Gj0lY1GpIfffdk66HVymIPVYLXh39Wn%2FoKeg27W6MpbqLDcpkrzs9%2Fg%2FjCVfpHlNC1apkexehfLG74YZoYL6qYscLgPTyKh2rPOr%2FHgBhGWyWtKebNt44gLvDle4XNAYk75jR4EIdDd%2Bz2J5NNiidCHZWpV6P97YF0E199jRfRZmHrqebVF6mac&X-Amz-Signature=ef37c73a7a72f40d5112eba8004b2e9a6554d17b230b21b516d15020a0632f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
