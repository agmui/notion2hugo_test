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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ67MKY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC7PzvnKFFozHrD2BRoisGihtYX5BAOh7o3XLuP7s5tnwIhAMVWYRgCUqPUpKbHphTlKkrwwETRpRwB4Q66JcIVo5tXKv8DCEsQABoMNjM3NDIzMTgzODA1IgwrQlIvLvNMOGT4Swgq3ANk8huHr0icpT18eIKwYywgXGkqtamYNDDrNi5WUDvy3pKCF9NB4qPJIuSYYhr3vO1AIVT0MtpYAAtb%2Ft1RAscs2P0roo%2FUCmSTipNF%2BNheUpTH6P3PK9GkjEEaC5bKdt%2FGL9MEkTfqVskXpmaw5xf9J%2BMB97WxDQdAHtzE61ZdmBGUsGdnE6MSyS75tA3LPEKNSsP8tFN2drY77cSueGNOaHkosug%2F20JOfqexZfqy8nwK%2B72A2p974JhbwGSq8guUQ259tHUhr8PmJxfqq%2BVVX2pQcpunMxG7GNwKjUONQtH%2FtpKJLQNjAl04IxwE29sxp3cvIaVol3WMMLrL0zDmKrp%2Bqx5riemPAWUpP36lGIdbSHAbbolHb0oOoX9M2SGLO5ydHRZ86NxPdj3zO4iYS%2Fq2yUux1d1xWua8eMLPsHhvylLLAsu4QoFp8M3V%2BpbRennhfr66M4lbrtVt06HmbymyYUwscXKcLaLrqZN8LN2Lo4hZkIGdxffgN8IdB2%2BTGGpXrv0w7fX5KOugdttVMAawd%2B11n48oNpVdu40XJ%2BOkUxGHq5uRunjuHkXVD6rzQqqRv5NgN6LwjUUsvx3qnwRKVM894Mzd2WT%2BTkPRBg5S2yEPb5GK90LUsjCkhLzCBjqkAQL73teSDvIRl8XFRrmwb2%2FPz5FAWkniH0i%2FtkAgYQVUfQ4VgQsDS5z%2BALxy7KcnTgwPquo4bY8p7ILmwS1psdeUOgfv%2F8Rqof3782hX%2FsP%2FiwgzyiF7ZVqH8utcmFEOJvvMvNfbQ4omXIStSYMYAZ2TAnMyS5kU3KglaXZ43BqAZQp%2B9wIwaPSn%2FeGv%2F9YLsT05LjXRMCox7Ba6BIAcp3%2FMFliC&X-Amz-Signature=e28efe897929136ef892bb53f066b1690e17fb51b070d5b19001d20f1ba89e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
