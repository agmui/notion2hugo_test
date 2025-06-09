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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUCBOT43%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPPKexWiNI4ol%2Fpw1Wevt6N1OpBUdNvuSFP8d4Y4QmlAiBOm0YJTlGs5s%2Bm6FrCWzZxNQAIVlnzuqRn17h05z4CTSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZpEXVPPxPNrThOtzKtwDDgu%2FPzX%2FPpnhygLlNKmk29Wbv2SRyQtkHsMI6G4b5JHitQgFw1C%2BLLxNsvSMMQ2GVOQAXcknEK59J%2BocA%2Bnu5gmGpQTEqVGuZjDnMeHmvO86yllIuVKTxPy9%2BqkP0GPgZZnBTbCvq5aiuPOvSXJXwZGatGylcDSkdSq8%2FMKS1RIzyc8ci3Pai6Cti3Za%2FVpBje4jbwpqvF%2F8L3quHbXpmWtzliAX0Cnx3ZkV52EyW6vYcXJh71Q4sxgKek4d7TwCne%2FNFE%2FrFAfqL6b0maq8p%2Fbsm248BlvL0T0d6NqLySRgJCYX1c7ZR8bc4cXURWJfxWxXRpatDrkEImgXZZOrYr4%2Bz8vm4T7HwsPeqfE0S2wEt%2FFVaY24CmHlNHnCkCgVqg%2F7mExYTYUztcSJP%2FHiO5H%2F%2BQe6ZWxfR1KgEe7nrkUtbspi6x3CRl%2B2l4Sg%2FHanLBNWix78g93uqCbH0KCy3%2Fwy%2BOW1bxVjtKkYpIii0v0UN5dp6g1p2J7%2Bzxs2v2v4MFAYE2mv7MIbalDW7wuxeNAKEJ7YgTuB4ta9YuCVFxeJganbGdAVED1qZcwhYFCJIvRhvh%2BnrA48YnAwDCIg9Sc9XSgJxr1a22igZ%2FXTK00al91LKXEW0D20Ackw%2B5WcwgY6pgET4x81ErqUhqf7NrXLeKV9D9ouWF6EMMDSjDTccpsNl6w%2BbacvNtGR7v8HBkZ8nvZOZvwx9BYlcTcALgYREFvA5fb0wVLhwP7ur3JIPN0g%2B66FphM7zF0yni0A0W0NgYE6zniRLHWislp5jymX3YcxL6gShQIRzUJL0mXWtdGJVH2pDaq2R5mVCt8UWqxm0Cjl9PK0GJBWXEmBudr7%2FNW7g%2FqUeDV%2F&X-Amz-Signature=1c73ecdf54d25d8fed7ffaa0142258e313897f6fd10e7fb7ebf6741ad653f8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
