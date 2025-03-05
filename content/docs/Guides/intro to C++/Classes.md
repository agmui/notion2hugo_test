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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVUSEJSK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDTBVU8q8oNKgD5Sid0FgWpZnR6k6xv1aaJAAF1cyFjAiAlCA7zjxpFYUwzIptubrNI7tsVSVxHFqqxTWlfg7LJlSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMuQiFHyfXrgRwYbMuKtwDLne5mHX1eQZpkG%2F31p5bPdrPQ0EYgcNUv6z1mWuhC5DqC75OGoB3OWObe%2BqX6eZrDsxi%2BYzUS89nZQsegC8FpwoOyG5wBpEMOmcaYne7ZTWVNi8mi%2BlBfii1uuYz5SbmEn6L8mY9QkDfcsCiG5RlKtC%2BJ4jeFgfgqTT8dnqp8oJB4R8cHsikTXOPUCO6NPW%2FoUp%2BQsVdE4ztdunoX1V7uGfQJwgMwywjJQ%2FkQUyExpw1ZMV%2Fxn4VpOtRbgUaGvAQIAsIhL%2BAxga3ytCKDTaPl4hL%2FrBxg1FtrsY5H8sD8vTMBea5G6gcqGDUpAZWakpSAWF6HCk40LVOozo6lIr9TMrvtJg12bBWVZnCsTxlkj9zgxXUTPN1cPHJKV%2FO1R4abnvQlmzJLo57Sx6bSb%2FdOLpCgN%2BiHDQiL7Mg%2BFsZG%2F%2FK4Umyq8H9wCxvnVrfK7eDxiel%2BhAzxomnGetyAPgMnImZxCzTEkTqg%2FAD2UpDbMgzxdZ7JOFjV52Vzw0eyLwAc2pYfyRvVoujldgPMnKO3is2lQdoAh3KCJW7RkhoMoiAh%2BOvxYAWTVGE9dnsPcG61JWfgfytqcjsuMnIVNELys%2FA8nRn2Rn2ReIeCI7NExWAH4W2bUwyttm75BwwxYOivgY6pgFRMWpI63T7g8zLVLexvfuQO6k5yWi5S%2B%2BVXEzn8cjpuuPNmCK6SLeWZMgM63dUf%2FnxrPPd7IOBFdzfRnYqyEyES%2Bm0aoncc927BKwSE0FdfqeYN%2B8WWVLdIvW%2FHZ5ArgXkXn9tZ8yYHXcZry2MYnRO9ns%2FiGoK6N8TLyOMHqVJzkKlsciLQi6mzgC%2FoRAIuGFlulgyH4u4rG3yXBD160P4L7pRPH1b&X-Amz-Signature=1348cbef06d0fb0e3670b6df39675169e0fbdd6c348ca3b09155edac428e039a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
