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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P2J7LN7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIB69GNRtgpcZk%2BcC7p1yln6JUwkBcq9nggp2mgDzAB%2BqAiALWriLNtApJp%2Baw9gu56PNCrU9Bvgc1X76%2F%2F0F8%2BOeMCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMp%2B8e6d756DKN9k%2FaKtwDgNP8aaaykV3XpY4yujwsSVo9VSGW7kjfoPRS%2BHdrxdL0ek5vW2v45Fr2fUtHvVYQQvrreej9YQTk28rCMaDKLyNoixYcBd9UliqtfpAUH%2FXQwELDm9bWVoQYPzdbrLBZw7JMqVcJMik7TISQR0wlD30NkNwMSi9Yz0tSYzPR3U%2FWB3yaFi%2F3Ezafw4Wqxu6jD4gH1UDaSDQzhCTY1SAkm%2BajRUD%2FEi5jAyRqPzR5yxIChqLz5KwpF8UPsf2J2TTzNmtHSBHC%2BpgRGxST3EO4zadNvpjyxz1khkyQKJEuLMooC3fdNGzAdQwghF9ft8zQnraaqAH4rP36jNhN458FyqtFkMSVzs7YrXrbAZ7VKzxS7dP4GKAUFNpT2c0kHNGbEQP6vlATTuXu4uEu%2BZtKWnBtyKTSAcEgo6Ccu8dr7nyF9jlxSBEtbW6Sb6V7VBBL9VfIehEGt5oZRRkMJC0YuPjLgYO82MHhfmpSpo4b8BfbDcGgScXD%2FhJPj%2Fuxpc25Qo8IqLT5tnlkj17OMmuWL96d7lSnGRO95MIdf6AFEGIVNKsk1hB7012oTlqd4xa0dw8SLCDAfvpAWSm59odAAge%2BnIUm4qdNwTCL5VlIoEqb8B1SgNrF%2B4Cy%2Bx8wme2BvgY6pgHqwVida9rZ0jM9Yp0o6of17E3IyQhOq9P0o12f0RnhCtgaKMtLJxcmlDvyYrr4U0zTQMx24i2rBShzOPRkisX7GWmLevdVBh%2BjR%2BGY9kuLa8ngqgHCbVaA8e3EDWKmEnmNwJ5D9AiJq0iiCgU658ig0BQKKQeD9wgbc5V8dt6SnxQ64BA8z02UXN1S7RHoeMqqhK15YViXA%2Bliip0Er7YoaOs2HEqn&X-Amz-Signature=e2282309f80dbfc4f427abfc1a1f989956ba7c35bf34cec45ddcf8408f2ba5b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
