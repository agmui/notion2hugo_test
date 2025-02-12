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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652PBE2UK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDptg0Korjcn4FjhCcNl6j3LpBE0h4%2FajjfG2DKgrz%2BYAiBRbN87EYWAALam8FTZyhxNIo2mCjcqxqKYUyChT7RTAiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWvQzqXQojlqNo9QxKtwDb3%2FV8rmQxf1r0QtwJR9ssbMziTNIQsrxq%2BUA%2BHeRSFLMGRDVTmySD1bDVKoANBHRL1p9G1iR5phTH%2FJRxMBL4xXxsbyHO09MnbNLVPTbH5rt9tiSv8M6tLdoqvffeA32q%2FLM569xcV%2BZIl5IGyXr8Upsq75%2FxJvbgYDbVXs9P5vGLXr3DUZx8F%2Ftd1hrrxkAsnDp4EKFOimDwhVI9uS1sY8ar3ZQ%2BW%2BePF21x80ZLDOIz9uu%2Bn0k2PqXBx0zP8VRnsoW0bHLCL%2FiOCXJ0NddSiNRAZDKa1MLmd5%2Bp1o5xvJwyv68IlJkn21g2MImTZLd3N7iIuvTeKUUqTKbze3nCG7paZwFNIp8xCgwmJOTCJ8ZWbwPTifWcdlW9Au%2FNzRXN4zOGTnWU6O1qpVWH2tL%2BMg30qmOBFZcqPIV3FipGJzIAVM07zfn5dwieo%2BRgVBl7fKETHXmtelZKyhLoKboKq6i3V4GtvxO5g9s3boHLstTc0WHRAxwz9WdB1xh%2Bmi9OQaSQsh32baPCFASXeAuAcbiTlIl09rAjZp9Ka2jp187ZyqxyA76MFv5xOqpx6qLGUssQaNrxRVz0sYCRHU7YrLi16onhT2bXxlqz2jmLfocW2ZvoBVWZyqJX%2Fow3oSxvQY6pgGtEofwJy%2Fti2%2F2vHPzOCCwcJDT5iMdJ6mDIM33B%2FQ8p8I2Z6sXkIoTAHN2Q7soHgv6n0GKkE2cvZNgBFuGYbP%2BiGYiN6k7vTeiRrZxfCppoabV0oLr76MBFtLJPyjhXBdeb0NuInIK6HnZi7hjj%2B28GUukGHtUSokKSMf%2Fe1ZsSh4KLFUrmzOGMoIK16rxn1c7k0GBSvm2zGJxEj4laPU4f6DtlIDq&X-Amz-Signature=dfa4245bd9ad5d317d6e7269547a89116b1fbf520ea616b67efc10d62e7d1ffb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
