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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUWZOZDH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYxn5jeVU%2By1abkniwXPaYg53VfNATPhMogaCjR%2FobfQIgfFZBize7B2Y932DbgHFCZovy9GNI94FJCMQrVjUHoY0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB65beO5LRaoem67EircA6jiNlXiwbTUUGpoL4fp6IbhgGXpogzzHMXgIP5elOd2RZsh8BjF5pZGanselAUv83xyZtR9AIsVgzLnCfygjElEfmGVY%2F0sdaWkkj72eBMSvCeITNVJezr8c0PanOKaAUUehKR75Z4UsjpGMz5bWC0oE2URjLzwotpJgXLKLQz9fqQKKhc0kjmEb6kNJpPnLyeUoHRs2kSmcD7NR93%2BENvy%2BX4Pc3QMILKxSxWD7Eb7V4ArMrm1VDEWUiqzul6fWeKnL2Go43NEU95D9SG%2Br%2BpAB%2Fp%2FywiYWrBb4toOm4mwn6DUlaHmO5jaTPQ5a9AjvMSdWGp1eetVmnAtqFHvAw9s5bZcKagmFXT%2BJcgQg%2FJCWTXo42TxSHPWbjOOEFn5uPro%2FZfoBjRAhuCb2TeRx7duAY62zN6s6ip1H4PaiQZklMB5zWgNv%2FswE6%2BFKZQ2dApUR192AYRNRYMg6uYM1qY6Qgr0yzVUuvVeWS0mdByU2kBDIA9hXOTzbwO12HMqbxus%2FcBWY%2FQc8jhWl03y%2FitQbLg7BtWGPrjraJzFw5H86v66NdPgieFQnBWkYQ%2FbXz%2BcMGTDesWbSFkA7NoKpX5bXNzu938vT%2FIWfmEdermfJC%2FOSJmDyZ2Lz8gPMLrMjMMGOqUB7AaKpPl4QETKdo1zI3s08MESWxtbWUfiiucqiodRFgobqczIVySHgK674yoHUUZcHVJVp%2Bp1Za95wBpS%2BwyZEmYN1fXDvRts8jp2XTBcByuKRSawH7MK9xbvdTRMQtVnFscYH%2BUh%2B6ZJt2RdH%2FIsw2rmbu9NuSvWO2RVu%2BYitFELlsDI1oHdBajtfPKHVxbOCUAjnKclXUfDeB7rjPjhjhkInN7T&X-Amz-Signature=ff3fdf635d501821e3b8c6e2dda3dca987c24ccfb5a17c90185c977b9ee43158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
