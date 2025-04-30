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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4UHXPA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFuVqsT%2FNXfdHoV8wYT9nGf6m5mrucGPUfc8Zf2tgZBqAiEAt1AHQXPgm0jy9xFm8ugV19T%2BnMB0iI7Jt5tj7hG%2BqRgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmQEzutXR4WeuLIlircA3Y1p6wgcWayBQ49%2B7weHyi4N8D81GaEwAxY0tpeTFkALtqIfjONPCvumtLsOzdrPd9sUSLab4lTzCo3ZBm0H%2F3W1%2Bj3PMpC4gHsJAbVD3CEAVViMuFSipeGpl79HO7Jc26JL0bXPQlMJDUKC2b1zEpxZbhu1Od6JY7lEotrh8XAEZCOfR0djAogJi%2FAFGLdTujp8LUoep5jKySNvlNt%2FZVy0zOZ%2BXnBwbKGvYZz90lOlbFUOCofZEfE5tOJBwRFbcPXZf0Fol4b8O9tig5ovCMavJqwUVzZh3fg6beortoayeC34oxy7AgyvuCFU%2BqNm2qL03krdWSgOFqCK3vn%2F8h5sS%2FLtBSnePm4xzyxnD8YXUJjy9mOnigWv7W06WycRsCtlVJm1NQrdcDUadvRcExbmujJigzu6rUQx3%2FXks2hU4IAWztVs2mWwRIntDJS2tAtuf05jWBHX2LFpbmG53Pwu7Zwt5qpIEWzgvIuLzOJs46qUlytBqpD1k2Ivc%2BUuchxFDnXNRfkldqX6HmdZCKXfPrWzP8k%2FQrr5ptozf8%2BRkU2Ekh8MobOtRzCr8tIVMJ0qifU9x0Acdo5InSnOAROO0m4%2BGMDhe3N%2FjfqcoaVGLADKOYhD020q4p%2BMMjLysAGOqUBwwKiiVrwuxWUPRKqT6VJMwTg5g%2B3sKjxEmRUUtTO3c3x1spN0rIqhV1vhsLJKksdgrVhh1EoTOkFq%2Bqskw%2FsS8CrS3m6L2X2rjpS59hBIoWxsM%2BuJkkI5S91y5P3ipItYZe4o0IVeVf0nxwbfUsBBP2xnjLu7G3%2F%2BfR5Sp%2FIA%2FlP8%2FVuE%2BpK83gR9DndsVAA5V4wi%2FEnydkKCdoSKHsoMf%2BTSMkq&X-Amz-Signature=2b693e1ac17f2d3449fd3c04e89dbdabaf1455e581c5551fdf07e84a55ebd145&X-Amz-SignedHeaders=host&x-id=GetObject)

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
