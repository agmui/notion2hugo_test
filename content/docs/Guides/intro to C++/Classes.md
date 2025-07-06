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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMFXDSCE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFwCRCtw%2FrY2az%2FSh3RN8%2BrhUj15rVb7DCp6EEv%2BLGLFAiEA21JXbOd5mPpM7T2zBbFoUDRjz895DpcPZBgIyUZFf6cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCOzG1vdehCvQK7XQCrcA9sDkfbbziCIDI0OgYGofs7s07jER6QQDmsxtExVU0mEx0FOARgp89mxtRpHqruW2mwVUR6DctTJNRTtGOqlt9ISrBy12j5nQwgfFxea8bXgy9UhLAL2bzIt0bH9PJD%2B80btcdYAqKq%2Fh5s1PfnzoZy1wzzDUN%2FsEyxcHOpC21KvSKpi81cGwS4%2FAX5x2gtNRS7xsOLCfKaRHkaoO%2BZSOar7PbuZ3y95wI3jYaAsviTlZZrCzoGTM63fQgTK7bXvnFLuj7o8WBW%2B8tDyjZb5U%2F8bTpd%2F5jYHENoZEiHNx6Jp%2FbfTIwUVC7r3bo3yZoDx7zZp6DoMrah6YAEgKx1IDTZ550ln137MlUfgUTcjYq3WTLHyQxPKq2%2FXrTVWTO8%2FVNau6waJILL7fmc%2FhJ9fC1Ulj%2BO6G2anFM9dKhoDbw7LujD6189dM%2FiRWm4FctcTWVdz%2B31mSGvgkAbOxjkH34vHG8fy0dP5myy4cQHrQE6jj3FtCAKCHf5qwZvQBHFpcXoi%2Fzl6hKaqROs4WKnnsFK2E9jjLNxnv343d%2BIOCbBK3AjjAVQWXrEwNlm6Bt2VjiajjdE7GfxkCjyA1F81dMw3M4WdeW2tzP7PtDbO4PZzmefWsnAfCCpfi6ItMI37qsMGOqUB1weKB5Y6vIXlXR32CxMDs%2Bv7sYhiUtbovOjWpQkLjphyoa%2Fl%2B3luFp%2F6fVkt9z13OMOwGwTxAWrFa5UKSjUPJjg8EeZZZCYP1n1tKuFKOinkWUS%2ByMmcFnL6TbVe5LmMm2dApqpDSlO9Bp4%2B3OrDMersd9SRYjpCE5bvjqhAPc5Qg5iBnliaf4qrH2kfivjib4sq7PJV1qoQO%2BKQVcLJiKDkqtcK&X-Amz-Signature=6a01fddf601b96a1a28b96693cb2a70e059d56cdce64c04641faff4ae180dc85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
