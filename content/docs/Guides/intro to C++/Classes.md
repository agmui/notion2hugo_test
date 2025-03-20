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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKR3W4NM%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCICtHuPXefR1IrcymmXKC6hKx07AlehL8QyRHvEgYRBMoAiB%2FuMgFRnL4CaDYZMVHxHb8swiOvm4k%2BMk1dDInIJsS2yqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyvmyHTdrW8Sjxze4KtwDkRSNk%2BkxrIdjg5oRKoZcjxiA5L8uzZBdyPqsjTRTrJ%2BxfmAFbDaus4ldBg3fUzSF%2BdZziMV7ZMCAWyww%2B31JtiGFxEXQVyxNGQB%2FSRyVwGzHkYJ5TlM4Hb1OeRD5CVHkJF0HXkGkTW9I08xrJ1wHcRctUGgsTMxuxn8Mz8NkMOzru9TIW2fMhVT0%2BrTjNgODt72E6I%2B2PvddQsjA7uOXueSheeqseVaIGdpO4jYtQfGoEPhnSXvmAu50vrmgZwglD90ZxUXeP5LEglqsoyNGwSqd%2F3SozG6Ztk9IXnEgdI%2B8EjBLDKV6Rm%2FvNOzN0782ObqXHwsKqZ2zWuDAoKCMJoGmVGvaYqi2BEmXrC2DoUrb9%2BXQ8p25Ys0s9qBO9h0BFdRUQUc0wa9nh2iwtjNGv0xIVWFCKQXRounVWjXixS2OExYGA7egqyzC8sbhUHziXQJCaTZI2mxS5V79h54D95TZe85vZ3iiCHUWmbSZq7OoBnJSuZQvLUNw%2FsjBqM6FwXMjdNgLY1ayvMEfGGWqZE4nBdupOioT1PSObVu8SXCWsrtd%2BziXwtxKLyi%2Fm4XEEckZgf67XC%2BWInwgyNWq4Hxs5rIGfJ39%2FiLX7dVncanI0rr82G2xZ41JC8YwxIbvvgY6pgG9hxrKVJCaEcZHnYa0e7xR6xY5aDR9b8w5%2FpjQLTF1VFxbnli0JCy8TxKTpmHBPZe%2FZDX3dLbbdqRd0%2BiDGKPOxZysRtwNRQVAZy4u20qr1W9iotjrsUxhVCCbS3ukT6k8YN81wY%2B1ZG2Br9z4hGxQtBWi%2BgqIGugbd05vq8Axk%2Bv6lBX6pTV4dooqV56o2TXIrDvt0C3jcJkjysKSi8IVfN4kvPGr&X-Amz-Signature=4a3596a24ed880ff2edfb776176fc2ea32862db5d2d345e619b3ae2c2ba284d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
