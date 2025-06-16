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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTL63ZIH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCe1%2BZ%2FVezYReY6DKT2GBQIP2Z0phodrzxFjHoLH1rjSgIhANI7hwE0iCUKPHI8GJk3dOpAbFDjb0isrlFm%2FCJvy1h2Kv8DCF8QABoMNjM3NDIzMTgzODA1Igx%2BQaPJut4OipFIO50q3ANCp2TrTZUbyISxIPdoiVMXcrc2q7lmxpRtrUKZjwq6NBfs8Fs%2Ffl78jkZDZG3cxuKGpHRidrd%2Bc9985bmLIw%2B6dHyWte06kW2%2BpSETPIBmJg5t58WDgISpmSYOQYXsFHrebKSs%2FxzTl4y8mX%2B2rOJKQIaSFerjfNiQfuXiie2uZEDTkqflBe4Ai9u6RId9EZHWzrd809i0oZqmzEr3J3EmOPyJr7MXRWcSiNQebVW8XJclH7Jzmrujl2jaXGy1FW0Qv5jVagl33FtDmsw8oCYEHVkpvJcIkkZ2t6Fc8UBPVDWVUWKVLeAMEL7jDevTqEl4LGnBx8eVEomTIjKFd7gFeEVanqSoRe4nGcTdhgMyLZfgx0nvrreLrNAN5yOdBP77fKMxSqmc%2Fan6jTz%2Bn84pCzy%2FMoAbwm7yaoCLvRY9TQxW905MQOkjc%2F7GjBS8o76jTuPmRz34yUzP%2FcdZwsloe44JcZBNpvZx7gj%2FXYB6wyr3ZOrvk78jefh816ivSfYB85Pz9T6IkEkdAeiHnmtEQ78S8ntBYzZDMp4XOCBpeSrvPO7p2F3LXSFJep61CPIqE8LDYGIPMFNXwdhM2hxgqAoQyFxWxsotNWBwJQDwYgyG0S2RYdvNvc2kmDCfyMDCBjqkAXGj03SXxNHs5O9bJVoNxUWa9JNo6cMQSM5c8U%2BtVdn5PJOuOzUyStyim3u4%2BRfHUBR7TiukOzJLmaJAmkiYBwJUoIjtnFxVFtrFjTS1J5SIo9CTa4Y7e%2FnKYpKoNRdcxZE2Vch4%2Ba%2FUDMNIz4pY%2FJJ4UUF7y4z0%2FZ%2FXPUDVSsorCNN3bUvqVaTvlVBP7sSjmYGv3nelBZRaIqJB5h6K%2F8xl9LHC&X-Amz-Signature=c01c0a6485c83e1ed524efc848f6cd2b265fd4513af823fcb0367d448b35297f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
