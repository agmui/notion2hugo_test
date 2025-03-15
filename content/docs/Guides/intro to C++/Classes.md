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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STUKAEGW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5Itql0T4lL3JAR4ohIAj8tBOich0qkO%2BxjfAQV3C%2BDwIgMN%2B2AnUgYxP3VPMfshTbrDuSQrft4C3Vqhl2JPx%2F6uAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAO57HUOxR8u%2F6e%2BmircA3tf3xuxkl0QEtpMDDI0byNRkRkTMYVR1IHUCKVo2NvZBm%2FdrAemc8aXrvNhSNm1FeIUeW7a%2BWkmRDNnZmwcgNw3gdzhHZe1gTG2TgJNQeiqdmcf9v8ApAoqMUQphLS8VqsZ8oWX%2FldtzizDp%2BtITFPR01W5iyxFxnz7oy0Bg%2F13z%2Bcu4hbYmLGNf0KlXgKvoB6Js5KCrnOMLLgU3jRPYU3Njxeg8qFJoWBQPgYRiEWZu7XDXPrahQbh46ABLTsbeOyXPmyScvdixNUPIvJ041BSHXf%2Bbj6SyE394GBf6Av7jNl1rzJIb3lkqP2YuP7lVMBdpqP8pm5DTQp%2BJJoX0js62OnaUu2qmz4rx%2FDM0HrV2FU%2F1sjFVUtVj7GQdapdmSXHbMxvQjzAGxtSXN0RvE2xUlK4T8Z8ZUIkqrK56tmLjG%2BPXKtf6%2BvthPY%2BC49QSZRmxHP6FrQp9B6NApULolcBAgzGe24v%2F9rR40xCoWXsLjzxQBHzv93OwVsN0Aiw5EZ0NeYnOv2z0YwfdI6rgAs%2FJ3pp%2BLL%2FOq3OLS5GFXCsleteoknxRDw7B51U36yrggko%2B03chRHN4971FzPoP21IiDmlL5s3JBVMW94h1UTbBnugDBOdm2y%2Fu7tuMOXu1b4GOqUBqJQb%2FRUrF5OdT2TLbpcDKbYVymHjT6oS5jn0k2vyojEA0axOT%2FVbis8cg2lmIBq7iz3zxcrTXznijYYA7pP5TfBgDgifKiizre55lFHcCx%2Bjd8WpoME9CsVxbiI3KxEG0eDyY%2BwL0inu0CQvi0AZ%2BRN8gvt391JKIIc1xB6Arrun59SMNrroKpBT7Zk3%2F0f%2FMuDihh%2F31JOrdRX14sCxkt%2FP7mCq&X-Amz-Signature=23273060ee339c64f6bb2275ff4606dc5b1c4e44c6756a984f670216f60868f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
