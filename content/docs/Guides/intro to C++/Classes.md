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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPHNYTB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3rdb82EcwdJhqsQWGh%2F1cSEG9yQaysuq1mxfzW44wGQIgU5VDBPT%2FMCiPCuw0cUs3MaD%2FdNJVyWyuj0XM3bCnhogqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA93uLkxvVvVGCrz9yrcA71itEcuzCQxO2w0Tw4%2F7XjrLjiXiYvPbfsIP2gl3%2BH6Byq5U0%2FReGZhPZr44JmrXODm%2BYZCQlAGMIUjRttABGekcIgkyjuyEVEdHwmdv%2FCV9%2FXLDfYYE1qC4%2BvXxGlR2ohA1WUi6MCfotQ99dOfacFW4dVPjAqum13v1P30y%2BnPbqCJYdevC5uuIzM7TjNBPJe88KpPS%2FzF3YeHLilMUdc984PvzKKo%2FL3F%2Bq%2BKwSMtCsDPe%2B8%2BGHGjHvBQFrVgY4j5gHshdWwyFdhM8z1%2B778kiGvAUdwC370A2LkOxXoouYDf2LTW34dFCZyaAZvGuv4do5%2BjF9IokFr5JZ%2FTN%2BrmZpVuosnc5ySkzIl0R75xKHyzdhya7Ml9fAiKphcG1snPr4ffs%2FnT8Z1YA1D6n0oHoNPZZMvR%2FTu%2FkdViP0DG3EdXErDAMFYYlt%2BZIGY9Zxa9OexC7nhM5KwC9FaVpV7wVYqaYN7ZgurTaGRcR295cw2%2BMVTkiDSaTOhbgriaLL1wocvhWxaKa1B%2BJZH0t%2BobJ9FZb2ThkOPJ47Mfl8lt8JZE4XpoAOybSKBoKBaZv%2Fe2pNXR8WYyDZ168P2157Fcn5PwHBT%2F%2FsIAz8D9fUky9ddP4EzV5kEqfKAzML3Kyr4GOqUBSuMS56kSTXqWQSC2s0Dy6Sh5y62JgCoI211bMLt2AAWBU%2Fw65hGUSsSQLCVARzl7%2Fu%2BrPhtygOmwF5v%2BLfThhN5Ee9fZLECZyuKSq1Y0CMKGoGJQAgPEbnVC311JctNU612zfs8o9jWnK5dGlA6nRVj7TE853H8rcfgQ5skW%2FZ6vh1F5TPMcLMaKA5Ly1TvkoC4%2BtJdPzXM2t%2BW4muXTEGAFs53W&X-Amz-Signature=6208f1e4749580135b81960e06a7e4dfa1ee8646e31d6fa466d08de721866c43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
