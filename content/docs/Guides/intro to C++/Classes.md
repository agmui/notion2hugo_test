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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMOCDOT%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCEK0%2FGc56%2BHetjHSsOeH3uD01JleilQ9MabqwS78xHmQIgRXYGQFF%2BFpu7H6msidkxm%2FMf4FKdVaoprrmFo%2BC3NEYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBh4hGS%2FU1r53Yl0DyrcA51uAzKD%2FtW%2B%2B4C10ukKnWnBA0P89BBK4gTdArxoScIaFPMGCU3JlyRJ3WHZsU3oyxKiDpZj%2B8edhLa4%2BW3B7OJ9OriKY6DWcaMzKUmBFGUjAuKKUJRTvlTLN%2FmCJFZJcHsY%2FcEN69Xm32cV4wh2OaNBAi%2BBB4LNmNvxXXiEplFgw46cjK8zVakaORhQ%2FxfV38WaHOvPhqBEkuteK7a3tURfbEH%2FOqJeCYaLeFfhQ70WKH9xspNnr2k2gxua0tY%2Fzh8yaWrcoTTWB6A0ExwOLPALzuyrMpoS2%2BxKpMANfn1VAFbS8LKlxZVojdqOe0K8ydGXev2BaWMbAylxJOyzcAhnYxu8o%2FwZ%2B%2BF%2FE0ah7ktBEvEi%2F%2FIZciOGMdZ4v7rPa0a25ySkhWtw4zlHOT%2B6xgifDxmev0iUc%2BZjEiGB%2FCr5y1n%2FUMd1DQ6KkpOCvDmD5RhdP%2FkkRb6v3mG4POX7hMW07SGJkp0eHcmeu5b6GLm%2FNpc3OjjhigtOU%2Bp8uGyDEooDrppn7VmdfaMe0tvvbuXf%2BqMthsd6eue7Iqw%2Fe%2BpIG9uC6VXgrB3yZnJD4AWdy769QD5e7QJNG5XchqsyqrXBhPLQ0yR8sOQsgQw1K5574NaWHEvJty6imMnRMKi71b8GOqUBv2nE%2FsXaGul4S6UGpnTLUQ9p2ug%2BPL9zxCZHsSuwJgc7dqvyFiekdolpdYhMyac8%2Fvryz14mV4ZoueUTKi6l9O0KdXHFd%2BKTT0azqv%2FKTj3qcxuyFb0HUOL%2F0hn2hG5EjwryLlIEsjiBoIxZi6AAP8no5KeuxaSNPwfaygQapXZQLN163xiCtsOBiyJT%2Bg6P03%2FTBTXoL3qkw6Ya36UcnXBd1IY0&X-Amz-Signature=e2af3902ba313cd564637d09a667bf5c3c55970468b8a1ae91b6739aad9d4daa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
