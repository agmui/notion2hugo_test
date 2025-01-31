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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIHI5JF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHio1VDlgAx6XOtIfGdRkQO8pMVBE6WEN8jKkL8cXJ40AiA06j%2FCM4JbjA7IbBcFoNRrkPEcQ9Sh9URkknwzl8xvXyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4138cgxw4GR2zNgKtwDxHnYTVgmBKTjoy%2FleDNnkT7fdlN1F2YVUa4mHDtR4kjYk9zyv%2F9X6s2EolLASK5pRZ2nkJ82K1wF2%2Fc7zFpr8KFATTHpPCiHC9hIjW6ZVaLBdb8kw6hprkTLVQ6NZkKB%2FfMqUF2UyMM7lKFz4CXiL8Fg3S27%2BcBcJ8c1l5A5KE2N9zRU7v6qotXR6eFn38%2FOoWxaYsHSDN8uPDb2WoRw4F5tZCXHoqx8MuXsmMu22%2FxK1%2FizBdR9QFfxz3G36cN%2FfM8aMM53NM9LTmK8tl9yUpSv4qcYlLFjXEGSzNLECWVgEp%2B%2FhAz%2FK5WWiaq6gsbhQsT5m%2BzmnSfNLre99J70%2F%2FFPxTCgC2h1uZA1hhPGkFam4uxC9rJwGZ5tlGozuVQGgKKXox2VMketyMaMrGCy5804K9Z5dBkDUC7D%2BVOPTDRxYjaZ20xM4GV05ICQrdgmrMTH8XReowspPwYaPWe1wKx5ko%2B3rFPZsrJQvyEciOxnfyHqIH9mcTx81juV2NAHKWIrLabo0XsDQCnBpFtgEyRkeOCa5tnLgTQ%2B8USgioQZqHih%2F6rXH6D5hbNUTjO6INKrNmpaDuhHObWMotNrb3Jc7jGf2YkBpgj2aUc%2FSwHc8aUxZg4iZ%2Fgd0g0w9oj0vAY6pgFrjtacMvUoXKCzq6%2BjK8E0k1IgL2ibZ31okLpG9WIlXZ8ExChNAOo7ogqFw47v1twWilqv4HXJyQFP2fEAEcxPXZKSAYU8cqrN9jiYntfFrj%2FxWN2bWvSkpfLzniGNoB%2BFiYRJ%2Few68IMfz6GjYntzLw3SzxI4%2BtxXl%2B8yXf4%2Flhi765h1aMgMCNZ5gKPfGrOq2nujO%2Bqg3nL2rwHtm8Q7t8RXkBWY&X-Amz-Signature=ad022eff7c78f34e6d73880ea1774972060e5c62814bb2946d442fef3e22e784&X-Amz-SignedHeaders=host&x-id=GetObject)

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
