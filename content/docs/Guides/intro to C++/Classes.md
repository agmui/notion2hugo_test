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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCI63WC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDf9nMnWISpFuCQWcITIgghQVHERzxIl3HJN54HG38xhAiEA4lV8n4FJfKTwgJ61wvc%2BAiWyp%2B7qS3VuhdwhHkEbWoMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMcmYj%2Bchj%2BhSsVtUyrcAy3hbOF3Y65SbqU93ng%2BgNCM7HzZjdHMRXUVGrYOuZuMnih3%2BO469YbBhUpYtkbeGUMUEu1njLZOc6F4YOPzjQG1Gxvy38CfudpnCO69%2Bu%2F%2BanwwoJUO2UZeuTj1yvA67V88dITVxsaX8jrrJwPlCr4A8Bl%2FxSOmo3EUb6jnri8CYLaRHtHg2gY%2BWz7W3ZBYEGCsuOOd5SLmxSrhbOu3HKI3xahqg8f9sx%2FKCqOf7gtjmwITs7c%2Bp5TNcYv0E8OmNCZC9lll7BwAnaq17YDr6W4f6mR6gvnzGvE%2B3JNtTL4WdRJPVKvhec5eTpEQ%2Fw4b%2FfaFZDAxj6GohBNCu8DoNV83%2Fs7KesDtmqpv%2BO9Tlsnr8Ikf3KFFUafvjNseN5Dli6L%2FDO2WkR215JswH9eGsZ6RPcXP54OBzBnql%2Bw0Ibm2ACdhY653rA1gZpvFIwtJnpHEFanipF%2BS8MKt6pB5iyZnzzx7I3SHU8A00pBYJYEACGJVLKe2fDex5QjULYVk%2Fr52UXNqSi5eSXupN2lxGbdWa1IaAQg6iH0hOIU%2FXX0djbzFPRO5DZHr6f94KZLz7MpS%2F46qx6yDMbCQP79kbfFPmVgYyBCeRsrHsXYb3R1qmgHvoMyjwpX4LFUwMK%2BsucIGOqUBlWhvfALeD4zQcnH%2FglkWrVFSfuQmnPc4NFLDLARrEAbySsRpJonqcUK2O4CiE3qHDTWyiWJkijlwuOQwPuRPPO%2FsgOEHvB%2BdTWnDbP5UfEnwN36gqDvy%2BmdzV4bDNS5s9138W7ZgEr8pDKSgaYNrfJW2ZqQtxi3zi22eUGvwLXtpuhF1OPJM59XhZXh%2BsFNyB7wjBJ5aivw1j1vSG%2BmFvbjZudQ%2B&X-Amz-Signature=64ac492362d1f015d17ed3f1d0d40c4a90a0bcd2564a97d189b549a867c026fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
