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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA36LAH4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBWSRgbH0iz1C9HWCqrLzAcxAjvXBZ%2FDUTf2T%2BF6rsvBAiEA4x9P5E%2FnjG8b1uMqfHxLktfV0FmXA4YX3yGvqIz5qrMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FcDo4WljXQZ4KEQCrcAxwVofOsNMwkeNXRyzV23X0qN3g2ZVshXj%2F%2FJu3MICHUuqmExJLa5qJ2TVxLzT9iBchmycfImIth%2FbIdqADKehmymgQtIZknHVSsw3SYzrcvCRG1bS%2F6gaNEhzIqvFLvi1sNIn0WAVpRxGu7gReIN1PsyZXStmlVfAFtT3G%2Fcd0NYH73pDEKr0Zr%2FR69c0DwcMiVX3oJqKjcXSOaKG1SDmUblqEpDgTWujy4jO2rA1F0AaF0iG8wNleqSoUPY1ENWOdRk773CfN6QVbtHM2oOyNrgawppOu%2FXGfJSnnG%2FN61YB1OQF10e8H0m4bBJZNLbjm9T18nUiLRKeFCMvjRHVvQ9J1zAKRCVba1sSmtA%2F8gP9BUTZnQUD5ID1%2FaSP1BcaL9uxiNXVJj%2BQNaoI71%2FjrVkqjqKNu49dfwXHN49NZkmwLX4uCEbQ%2FwkUmvDov7cNu%2BP8q7XaZpAYEn%2B71RD%2BxxxgNGcHceNMhOWkkYRZnUbfaLnPBQz49qIxweBS709Qba9BLC2peRRhr9wZF%2F7dVQT9D1Z3%2Bu55XwaiyUNbPkP6Ut6hg1GI%2BbMuQWqDBuBKFi4YwFP4bY132ha0yJac%2FUs6u6dRKmkPVWeUgUb8bPqhEhvyfY2VG8XsnlMMqm8L4GOqUBBRlX5zIhvbJfJNUqEDv%2BfvheBpPm%2FD4sxMJdGQSqtaSy5XPl3z%2FdmufwtiIM4ZPIewl1DeRAA3P2Ykv2Q%2FNhMGjqpRoxFHV%2BNDxihffq8bbmPmdnJ2k0WdaaHWvUuM3dfv3NyIpRtI6ucNZ0UOCX0I3L015Zgm9LWKKkx88xiyaOwVnM1ZeleAajvom%2FhQZLLA21PowvUbxdvWLJjrsqQUCQ8Wue&X-Amz-Signature=3883175cd3ea2b4070519612e7f341d80bd38398ff3ddf44ea9461f6146a7c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
