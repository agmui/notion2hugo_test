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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JJRDTLS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGXHIOr0Y6ZAZ%2FNpxkI5ORXCWMlZcjvkY2CXCPeYa1qTAiBrY6KWuNEHmcFVC0%2FD68zUamO2TyaLRKslBKW5mWAHsyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMP%2BjO3DZDS2umRzYZKtwDRZn9GCg9tC9O%2B2dH7%2BGyGAKTXuH%2FAlg6rYXMmPI0z9i3mFK4xdzWvZR1r039CL8VXfmBzz9Ob4ZzRsTuNxJWwh8i0XxAHe33wvVShY21gBFTvUVSonLjHGR4%2F4iA7V9dapnuwMJVgGNCIx5dj1ClZ8vkhX6%2FOJLX0ZqJ0N6KaMT3H6ph6T1pmThDB%2FKy7mKi0u7jbiJyA8f4ZPwJjBStXQeXpfuXlduaH1DbCKjJKQfebQ68k5H4BoHmn%2BOigQqkLKq%2FtrIn0XL3Ce8MmhIw3mUZquRK0%2F4yKUp2AzUvx1JD2L38euXc9Y4S4vWOQuVSbpEmdUW89zNeNDuT3krsol%2F%2FEY0mOtYs%2BXvcwluuSfc83blIp%2FagGVzkEel2ciCxCq%2BPWZhKTrRdXUPVsI6PFt7AT5YRxH6bRQceg%2FTzlwOWGpXdoJ7QyRdZIv2GcD%2FtKHQquJwVrKOv3Ter%2BYnymCgytNfB8mlwLSQTZJICJsaARI%2F7J2idNDbYisqsgbXWH8LKHQPe0RHDbVmkx%2Fxvd5J9nFU3YPjp2AWMvfRMQZSdukDYJD1N6iMhhouGZczFkULN6tiAjjTk0q2mWeXrkUMih6KfD3pwdYuPMDGK5R0MPmiNd3Oqf%2B4cVO8wiOqwwwY6pgGDCKQaWXZD4wcs%2FmJdNZS81t0EcrC%2BcMQ9u8stV9mGYqPjyQhcgA5TXJ5P%2F3RHpCRLtgPAdf7iy9dbs03kk3hg5JXFqc5e%2Fi4osL6SsIAuBl4apFt9wnqmUInvpaVnl3o8ay5k%2B8smo%2Bc8yHfVn2LUiM3Z8GVL5JnFBycztLRblhALVFnrhJBS2efEJjeRxO3IW7F0Fr2V0sgAbToULqqDWAFmpsFM&X-Amz-Signature=536c34b5cc0f5aa7af97c0db4718ea129c0932729ae94d092cd192713b05bc76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
