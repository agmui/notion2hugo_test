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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ZS2QH4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDMB39%2BQewjgKFXblCddrafxAOYzuzoCIKz4QXSZIvDEAIgGRp5MQ2RdJSAOPz26UebSd%2FfAP1B2XXrOG9UvGtysBcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOu3ayZJsYEQ4MMHDCrcA7pjeST%2FK%2BHaErchZ%2BGcm79o1VCQYQJBIrP%2B4FRfeXmR50OB0uEY8%2BFnUGW3ri0NW%2BYNn4GAHZ19IuTxwysNMiF94T7xM51swlBcLFwicU%2FzL0ODD1lSY3J7f56q2rbP7AzMP19ALqskhE%2BfVv4px6U%2Fs1Dn1S2bu5H05M00YMm4AB8qVM2%2BROqy1DwL93vGtaHR742tQzZqPOYWw3aNaSx0Z1vdZCUZhqL0basD43cs1ZC1M%2BDcPgvg6870Ad1fEwMSRLoCfvLaXmntu8dOuqo%2F00PVZ2RKRUODIYcW7JkponkTaxcEF0hf6He1%2FMvVFEOHGlvCzkEZAh3QydQSbb5rWPDQokjfnPe%2F3xadpSfcuRWGYPbqW4CgPI5yQiox4hfvXJrbpl6F%2BPXC8z5xLCvg%2BUwzUxO62nLBGZTZy0wNLNNpNCtGKq0z7lKxCnODKyZb9%2F4dwy7DFzuygFBP%2FxqdQ2aVk40a5wgDEbnD6LkSj8RCjb3khnUocUNphC5sF6RwSqraDkJSi6AC%2FuDueKc1LVxohXHv5JhLCrNkuV4g4ihcUxjMnb7CuYchvinqFMmybJKSpncjUsWXMBorK1eA1fpDNykMx%2BTThWCLYO3uek1fz5E6rbfkYkNMML7K%2BMIGOqUBBRP0%2BZgL3WsV88gW1WQNDkzsrCwH%2B%2Fti2XqhH5LmKsZktduFXj4u56HHAUopuh%2B6Tpr0sg4ArRDOepCy095GIkPBHR3ycR%2FbwN1wZMf59qpkDw8mdbLmUOz4OJtWMeIOWLitA11Lv6vNIjXQcJOAcqlbM5rtXT1DWjbpdXhrOyCO8h8mslcrUzCGTjaWnsfmGUHy78YmgFg%2BHWSx15LjveJMZLD2&X-Amz-Signature=15c4da817a7cbc4aa29318a8c4026b6e3aebd8fff01b6aee9551f68a768f0e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
