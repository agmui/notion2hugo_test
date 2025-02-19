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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4IXFLS%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgQQNPVc3xlLPYcjcZ32acMKcaG%2B4IAPuGcef5XMnfJAiBJYFJV8EO3FN%2FdlqjolXr5ra4SVl%2Behcn%2F1T5IHOkupCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqelr9GrDz91L3mjlKtwDPv2YaK0LUIXM%2Bo5U2Z0Z1bj%2BybG%2FGSWyDul4YdJlbUgPoJ8d8R29ICfSKmnLv7TEXTFWuYLzN6%2F124JMJpRV78gmMhqhbsauouzEnJPHqo95KYSBpF3c5sBhEHUEWUFTh5Aqd24ezDQBsJpc9ltCSHWHbOcM%2BspR7jaqihtoNbHWvKkniDhazjmPxX8u5rSQH36HG3juNU8QawSpXBC%2FU5Ecf4iCw9vCcdemnqsAh42KFTckodq7ZL7snkpXN6Pdiwk6OiD0bkILsWUsfiQvBvqjolyvQx0R11B72dFICVH%2F8RbGNBWGS08Ukb66GFcaX1W7OOWjNuRhNbLbyhhgwMlHB8tMlnqyKqo%2BFDXGPyH7SgijUgn7ytSKiuKeauG8Q38v0zA%2BOpc05bLpWgyALTksIex17hRQOufGiE4pPBzoy91kYcc3ic1Kj3aUwkPPBazjt9a61OSjE9eCzqwMSuGEcCTSYM%2FE1%2Byfpps%2Fww93t5rhTdCH1EonUDAaidAm%2Bys0%2BpxDU%2BefeDOAPcck6n5gpngohhoIyz%2FYJJRb6xGCDD1jlIBACLBkHwYnIrClO5U%2BdyxccTCcHFdS%2FLgWwRlt2WzY0bDxzxC8P5WIPfIoHgvNB70DPQLg14Qw0O7YvQY6pgHAlv6HJVYzNkHbimmrkbVfU0wHNt7AdXfv7eqL1MBg3Kd6KlZ2kxU5MLRlEfsIUVP7PMWO2Txag1dQZsqnaCiI7Vfp3m2MUXTDo%2BksDIWBCniQB29sFnuxUqHrBnHAw5GnHJqJEAUcMp8wtlC1daR5Qe51swwrkF52NUltPpuIB8xmNdR0g3lRzwugxNkOxLm5LoiQQKhO7Ud7PAbCLfayg%2BsEede4&X-Amz-Signature=3f5dd6d9ac281fc2e3e1c382a06f143244d3f9876a89f42165f6dbb9a197606c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
