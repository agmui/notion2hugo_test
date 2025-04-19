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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKW2HG2J%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDWwPpmqfwJHCTW2VyXucxnL4onodq7EXRpml0Rjxnu%2BgIgT%2BcO%2F1vOk08jyFX%2BKOCcT2b2v%2BH43xXRCO%2FCQ3V7LPwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRfFPIiVAociA1tkSrcAweG7MMm86o7D0AbSX3ifvwlbpT%2F8Rx3L2PBgj7PZ6AgoRp9jkVbbxMysJ1dUIfl%2FgFTY3rneuj4DoHt0Cdt1qODSROrQMa6KVPI5MULQ2dikGVce8GYiME6LXcvgPTWacQX0eAbOtXvHzqPFvViW9pDn3EZsHj16z7KiI5DV2zcL9zb2ZL1utltnRdJRFCCx0dFam730zmZe0APLS%2B%2BZeLeiHwQek5Wgss7%2B9hX6ZURVF2KnVKDbYl8vH24sYhK0My4Sw7cAlC0dA5JqcnFuma3KwYelnZJyb8pEqMbZoG4OHQuriYhNpH1GhOmSIEORXkSBdaThMn3fq7gmUmMtAob1z%2Fkt%2F2feb%2FrmVXbkT2Xa1qWE0XkFQSC%2BdRZ3ANizBfQhM5uE7z0U5JluY5RafVn41hivjnnyTp%2FmJxq5DlHs%2Bk37gIzT0tPd3FZlnpg8PbTthbr8DH3rRe6tS5gG00v4gPRz6Dwig7oLzxsF5LynmX8xaa7P%2Fj9oQF2wkIcuADc%2FxKY2mjVhm%2FaXz%2B0rU%2FPp%2Bn8SbNUBSZemGjRRwwEgBQlFMwE4HvKC2LWF4aaQBTjJyBrn8xzQD3%2FGin%2F4Y7EDGVhPkWkDWdbm%2Be7zjJ10NxIEfQjz0jUVlc8MKOgj8AGOqUB3YinWGr8KSSbq7hUH9xsJW6FeN3uTVrVFIIexCdfM%2B51MrMvlSI%2BhAA%2FrqtJ34wn%2BKuFqFoSNLPekGreJolEaxDGz0TdTqa8g1b%2BK5s8tm7jENWJ4a1B68LQHk27dYM%2BJ3W5dca0lrEDxJnoLpnZsjfSp2HDK4H0ouKyTrJwpwJxTtpfaml%2BrTW9Q2v4ki5JnFl3C55EwHo4H9wfypMPpcoW5hvU&X-Amz-Signature=5e268286989544d759fa516685922e1cf66d9dffe0f0b978dba26c39eb0a3211&X-Amz-SignedHeaders=host&x-id=GetObject)

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
