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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7SGSG66%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDso3yGR0MBphaa%2Birh4U11GDierwIg4rAiNpBnb3aDxgIgcT7nyUoxzGKmm3VRNNtsQ6A9qAajNZ3coYWhXmIl5jIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlSMFwZ9vQo%2BGK8iyrcA54mOOk8y0yyQYvt3Sy3LrO8hqywnXwDR4McbSWDlsJQQDmr6dAnbJk5YGrOzcFEUt4OYXSpGR%2Fi6g%2BZqEv5zMH2zk3B25PiAo%2FK07ojafyJja3MMQBuetQS574e%2B2tqG5jQpcUDsbsU0tkNajU9wCKyF8cNkJuL%2FPLcz1MlvXrAe3K09kkAHpDvbSm7t5xvyXlN6%2BcXOrqfWXXitoJkgDL4HphGyPfzCwGS8ZXKJ5whUorpB4YroA3kkHhL3RaevwpC0nqfjbdgVS0dlixVS1dm%2FTsQrou3CeOSpLvznc0verdBh5S6fFHoq0i6W%2F95R2m2eCLk0mHMWYDJtm4WPjgXhmHqRTOCqu1MKK77r3hu2kRnFHsmCxhH7xerB%2FvWFkBKDP7raB1QlZo3Ol%2Fjl1ScbmxPciEPbaFjhKZXxkmdUN5V3PPudweZEFnw%2F5sYmnk0xn6xcL7Es1CLCPJY8FMGuyDR45wLu367yQgZeTfmxXWwdwBc5JkvDU9DVGClYSqgSV2cOxjVNKYHATRsm90wWcZE4rl02oG8krSvkk2WJN%2FJFWeqx8zCSYJz7SZ2nhENPm3vHGMBpsMuWfRkhMesBx%2BNRF6%2FN2WVFt2dFbg3OdwkxbnxfpmNXk9CMLGy0r4GOqUBst8HPmaiPOUujPbMV4WK6JGPoXLyYw1TnIxkXp4ckU4fMw6Sv%2BJLBgNEjjK4TVbqkIm%2BqonGiJ48eXJdZNLdg5Q09avYG5chLuTZorbwukbwyVFW3lLB1wUB3MBrSAnVIDSRMScQ7h6y%2BT4ebNZ7Sf0WyAyKd01xVDN8%2F2TyUs%2BppfDSlW2qTfgQo%2FFE4nuTxt6m4BCIMNFQ6zTTtm9%2Fd7Zosm%2B1&X-Amz-Signature=df7cdd108397a928b9e53780da97d872485aac44666296b23516c32d09fcf3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
