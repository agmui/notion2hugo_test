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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YLMERM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDqp9mIVzbZIJysCWSa0oq7%2BicvylDTf3Jxq0NBuUO7mwIhAOqFyBWrDtw%2B1SPEilMQwQxh47zqTxszT7h2zhHF%2B3U5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsmfEqUDlqTM6b9Nkq3APSVD5DOQLbFnqZdOjUjU69sylGQAO2MUWEDDASN9w1Q1x6De6GL5rH3xcByZ0e1Sn3Di2N9xKIF793yOhX3eJrvQ4q6v1d91moY02HajQGxPnoNtHjIGedm5Gm8GTfZEoYmNuBMdtlTV66M6zKBt%2FyD8DW%2BsFUEtABW0BQWhfvc%2Bdivz5%2BhJjlTA0yfjyQ3nndnquKVPCPVMP2g3CiiY5ccYeJiA7uT0TVurWsEquw5AMJEmEjD%2BiDh%2F95p53FzQGfZjYU%2FkgK0eWRMIJbTUUkP9kLRAaGQRsLBR7%2BtxI0AqsCLDUnkuftFKlNLRr6H4Xn04FS3%2FPcl1GfgCvwc2qbbH%2F%2FpKMwj6wzhBvaNDFreS4Jb%2BxbI0Ixs8fMeXIrSZb9XZ6NoRVvG37by5e4Ixpg1TIrO7yGidSiHmEaN5pCwRxjSVhvzHaj12jJxOcmoECko2%2FSwOYAIbDIBcp1zjYpWxYxxVNgqDq33wrErP1DoRms3YlGkgnsjZCfyTJ6R6PCd1z0KfHMgA8t%2Ba3vPF1NNAqqdlWst%2B4sDgfe8ljyh752LLzPsPfW2ix7v%2F1GwjYKGPyEKAn7pN4dmmdYTyhBz4sZ7BIS2Yx8211GnOC2xBayA9ID9XySE46o1zCmypPABjqkAX3AqLPhNvmy1Yym8iaOrtGqDNft2wGG4Q2OJKPr5nVgpPD9xtHXMdpkVWlNkT47gwPlwQnLGmEe%2Bkb0%2BjBHUrL0DvPoWkKCKAEc6DVpmaHOvTSt6AuOrNPA%2BoifyOFyHJ92lF%2B%2FTXY0uma1M7KgQd%2FE%2BGYdb2bHhOR%2FoTJvwJlxp%2FjP4uGvoUH%2F%2Bw5lopXc1TRf00z%2FWRpv0J5hxsGvfOMxuVAI&X-Amz-Signature=ac09d70520d048fc77512e8dd90b5c90c759262629cdd9b269f0fc6580478f88&X-Amz-SignedHeaders=host&x-id=GetObject)

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
