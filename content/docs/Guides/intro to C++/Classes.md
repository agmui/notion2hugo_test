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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U54URH3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoYuL6gz8%2BykGpwkNtI%2B%2FOqwzz%2F4lmpDJkv4DfIJ5pBAIgd8b9g5pzS7FcFMQrOB5N2oo3EyQkp%2FaexSz%2F1HmjiAUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDO5agBPb8Sw1%2B9eUhircA81%2BTdge5%2BPGyv6LXeWaDCxT0QakFiqMjZufQB7w0m7wSu4%2FP1Fg9pfp4yDh%2BJ%2BknoXZjFOsvMsryy%2F97fsKW709LT91iR08bnjF%2FopwxN7%2FudzB3spXeZGD41PAu%2Blq6SpEGCGG7Co4MMOeNwnVcnnOKHqC8drcyfOT2FleThIBQ8mgciOLaj3ATZeqabPSEK4yTTsuReTclfZkP5uNEtA8vowRYPOqZLWm2NEUGF%2FBd%2Bo1RGlZEangVXb2QJju3CRKHolP71C%2BV63ukYaJWQsXlJdvSJpiCCLD2FGqG3DUOVmeGGJ6Q98q4w1Xoo08wqxyznRbEWr54dXX7XXUBk7u%2FNP5cnXrKJ464sCw1sUDbenqrPht3lQ5y%2F2DD9CbH7IyWgxjn%2FAoMln71wRt9UAWtF9TPpBBXrpg5%2Fh2Fo%2BSS0OHUpjlUDsIvv5FK5p3kyRxFED%2FYoY1k%2B6CnZpX3vh2Zkyu4ZwmD2TwX1jKOzr9HAKuLZdn2d0qSy%2F56wKcdHmXbqj5SZhlGJaVqUpHDWurlN9aLpq%2FcH814wx0vbMGHTUEALc4CXow8PXmy9kriO84xUO13KCvcKZZBrtG9st1SehScL1clsyIqifpSucgrJISulynjK2dQ0iAMLrhoMEGOqUBCj1EWPEyb5%2Fe%2BYCXpZZwgEXfK2YpV4ANjB7FqNpEFSoOvd7UuxfbFJGBk3Xa0ohUzh9Dc%2BrPCJukOSd5jw9mi2ZA61nnw%2F14c5v3WQcnx21D%2BvWAmhGamsp0twnk3MlPxwXTBtuLWG7E1TrAVts6WBSMM%2BnwrP17NZfF0%2BrW%2FV5%2B7QLIAIZmI2o4EWI9DmPDmzUmk8Z3tiICuYBNBrlCd0eBLt4c&X-Amz-Signature=7e3113c8aaab942165aa9e5df0f3015a3989f0a69f86dc8054a3d7eb5fb17f7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
