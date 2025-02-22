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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JU465QO%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE1js3Bzo%2FeLqGd07D%2FxGnyLT4G6scM%2Blx7x3F8T%2BGOAiEA3ehEFjMTNwf4b1MVzhYeg1JF%2BMsDv72vQ5Voxwc%2BwNgqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHrpV9q9kCGixEJtircA76w%2FjxmVsiI7IG%2ByYsAqvZ7eqIJuEMY%2B0HWBgRedBRQSYe2LcS166OMlQHwywRhbolJLwP1ho0XIXmRirAdg%2B4grnclz5HNnLJjAqotBEVbyGjwkHryPYR%2FiujKtEyjk89w%2FYgkaEReSml%2FuxaV00Tsb9uBB2IPSzf50hOJK%2FQHXq0mOlC1Mo0NPkBgC73oGMLC9Hjpn9YiauZ0E48sSmkIzYHf4upyjwGXdG%2F%2BGU8FuaPhAN38PdRw39k0qhnsjjNTSwc%2BbS4j4eOVe5%2BzkxErwPKltxOqqOAadl78kEqfnA3bKmqRIQFZ32O%2BZcRg2fdO7rWhMlOsRmq8WYFErxYmV0LNMDl5Bwp4OSBAN67qJ4fsbeGIDDpvvgPvV8ctB56YnPMZ8dibDCNJcMv6vlA9LLVxO6aXz9iwowMBrXbDgjsPjzLPocTFuokwmpfcR%2BeVnRhFZlJ%2FmC%2BqIhckcyTTkSIXn2tXsBzLTeyLp9dcYmpb6zEQn4jsFc0p%2BDGr6qZ2cJrVdAZyQvTccM3AbpLxRpLOl%2Bzmn6ga5MKw1KoIilLW0twjBIPVnqLSiCYScHdOeZM4BjQkmDuTNNnaBF6ohEzoFtfctlDTDdiDsM%2FBDPavQ8exgzcKVVa9MKOC6L0GOqUBmkFi7mMn9Z1MibaFwGFWrP172DoBZqBPylIGAv135MGlkxuV6QNeN8WQpNIc7LmXm5TibXovka6%2B897BjExSvX7QC5kKIABZRkMshgZyzC1dLp9eijlkex7vGZu9VexgMLNaVyAEhNAshcS1xk88ImRmEv9aTBCggQ48KozUze%2FTcJiMaP1uAYJjHi%2FInLLpNs%2FJVqpdKguD6pP%2F0AC%2BMrWcJYHz&X-Amz-Signature=c82e46669e12a8ef3b6e4764c97d4410add06c828867f8ae2407fe81bb1ec553&X-Amz-SignedHeaders=host&x-id=GetObject)

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
