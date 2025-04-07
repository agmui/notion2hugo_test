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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XEMRVFV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDBN2L5PfmznlTkWm%2F4lr2pYaYXc%2BHptr7V5UgcKX8DAiEA1YO1GgF5MFl4FMo5FqxwvI0450GwJceO2I9rvVx%2B4J0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDzytBrmL5kOXlDG6SrcA%2F1sAkf0m23ZwluQ4GK%2F%2BkEHF2cRsmggu39HHLvAQIQDsFnLJ9GRG4jrdJ1T0HNgTKb0jydv%2BtG4ByWJAvBjUCNLVwPViY2ht0BJUsEtOp86M7vV44mjkr17vC3xZetgKGQOFDnXMBPXyE6Z8aFP1LytMvyfOoU%2Fg5Z0%2Bw%2B6b4SLYU8sn7dZluxH%2B1iEjFGybvg5o7SdspG8dfRdvCdTUiVankMd5lHobUvouUdRiGAYuJT0QhFgc6ygUs9ytI51xfFktCXp98A3mH8mOTr3cEZdkTPEmFrOyo03vCAyyPzo6uIGzo9yQWUt9CsswE76bABB4MbVPOqLld4aHGRTNBMBxA2DYMqBFTYGwUKBetW8FOVjAMI43%2F%2B6A%2B2XRP6u1XzxSRxFCTHxYv%2BPXlP%2FVasU%2BWz6NgFEDaTuIRbN2pqdLFoMgdEY5yV8CP5X4MvyLaKgRvOaAx1YeEjDBWnmIcInlHKpaE29t1%2FunS3ubHa8lyQK4cUusHX6kcnlvu8YO8XAs6lsDdf%2FBDCtqrnppZ52DWiTPMmy2JOrU9wzo9vMB5q0Hk37ptfD7kq%2BUX0fy%2B9Jc4gXL7%2FdxwqP%2B3oXrwIf8NlC3FmFWxuw1J3U9ViLSJPT%2BtbLrO2xbdTUMODRz78GOqUBMxzBbkkmjozYkhHSzoTTue%2FrtzjkoWMKzDlpbSTSbGwllmcDneq%2FLgsPAiL157jH39O3JHTDxKLASl%2BAlJKe6R6Ybz8zATMIy8fmxlfM2hZw8roM7O8gBbPDmMixIedj3i983oJnuoTYfYI3qYDD7EA126npuXnhGbNOnm9luZBcgypxkXx0tQVmjuWJJ6Wnj5hjLxCNZUiQJS1IGUe6HrPEeYLf&X-Amz-Signature=78b60f5af5e72e9e0fb21e92803ee1e24676d5cc6f28d2b6e6b5932afceb305a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
