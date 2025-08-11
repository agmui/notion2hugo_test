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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGSB3GG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Z9QSUsWfJhDzqfPwh2OPYoHIhrrM%2FYX769LSqAW6cwIhALLV8sGOlTYeM1r2BpmIuBwhDYgryaiYAhmyvL%2B6D%2B%2FNKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGz3BO0DOPYA5scnkq3AN7IV0NUrvw%2BZhxMn3TwocAZwrrQrQySZx7OOo2gwXAl62gYlrFAtgyQytKbU683BUvdP%2F3F1%2BTnHX%2FOX%2B5W6YksEehcsiUeMBAK%2Bv4CZLIj%2FeEfq8%2FdNbR8xftRrx9pJWMqc1PzR16XsiQ0%2FQO6Pe%2FAB9Btv1NOZCnYDo56SKySVTzQU9nH5FEd8CJtbgIHmKlHukGr3%2FPTwApvRXHpM2dBv2ZpHuvkiamCsksMhcTWl1UlM%2Fg6wsSDRpDMSUYYVc5VBUy7Z0OZvMs%2FhjlCCeAlUB5IE%2FW3q%2FSbLxITXrhIOfvAM2v1AzFugS5SVzZuvm%2BCGl%2Buw5MOeywGO0xV%2FXZQ9xTyPPOYT7z654AyhS%2FVnzNwz0n50NqUssya1IW22szJ2WS2gBHMqcL7Rej0GFq6JsgOvMVGMjQx%2F4IX2bgSm42v3UCr93phIZbWlglS7z0Ux7UHxNiiwt8KEuejjUgsTp8TzWwulr2IL1seGsklFbIe08S2Dp4YrBcFqa3TpMLdnMCijw1tl2HHBy6OMZJ1EkuEUN3am1XkRm8CstsSVTMQP3AKk99MjrEHRtSFu4fwP9MkcXRNM%2FzpbkFpztZzxugwk6zixHVMTXs61JIX9bbLYtVCCEl4sxSXDCS%2BOXEBjqkAVm%2FWM3D6hqaZFqDh%2BFKW%2FyvfWCunMzQovpvIxckN0mB5dK1TlESMuZJDYNaf6rAsy3zWoDPOAvsLAEzdcNnu4xupw4Scv5MIDvAkHhlWkA9HKjE%2Bq44tYKEO1XH%2FZBqgdE0xZLk8FUryJUtKDZEMGpCEpeuB%2BornoGhiomClV6aEyvvQh1HtcBClQaQYorIIIWh8AKcJrhDzALqR%2F7wSmfovlYs&X-Amz-Signature=af55a11586bac14289126c6bfc2533d26c1bb626bbcd23cf9c434dd2c563f1b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
