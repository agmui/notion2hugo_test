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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVOEFUXR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAup1zG4Z22wKMW4RpCWJqTwnI1WdkOpBhIbgaVLxp9xAiEAhRH3oUwrWKSsffGcMI1C7QR%2FyXbbra3ahYaeOSDL8JMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDD67dQz%2FitrCOmd0pSrcA6VzJ3UYpTRpx1%2B5dSAyPAQSuqURhJa4XDfgbn1eljevN%2BV19C%2Bsc0K2EmWEKLV7XyO5QpXLsU3xEc6Ze67Ksu21nY5fgIVeWC5qvoeeiG2%2FwuXxYDEhLA7ZpcW5SX0jDo48FC0nmQbyUWNsS3XscnS%2B%2FgrlgQEiTNn0bxgGKtUzcf%2Fa1b4YOIovrb8XmyycS53QchNqCwxm4RthVfbHSLS3HGT2U42dVSN1INa8xEiME8DVn1VWb1HQoLW19yUKaN4YdJmvPxzhEvAKOAk%2B6BgbaSFJQQVjCEBWso%2BVdi3UNXmINjm8xyYsAvuh3EHrOPF3Vacgf4oUFd2MkpcLw942ChqNmelYpuY2175hALSPSh%2BM%2BHLWQFxB4Z5VMYZknnif728a1lTfNVrbnE1zNT5qNxtpUX4rx2WJbeWaGEhsHsFirpAhgv3Ir1Yh96bZQMOHVlbsXD5RJ3umSSUVplBt2w3vg%2FGz%2B%2FSDGpxmaGETDyJd6xiFz5%2FSSPkuM0ilF%2F5vUWdB8ldORyZjElArHXmjDfWoXeG2tQ9fhHuUCdx64MhXqr8TS40tuxoKBft%2BMIg4uJG4ZBpm18SZ%2F408NzjwUQoUSvpbwE4d1MqM3AKnJU21Vt%2Fpe3c4UwZHMJLLyr0GOqUBf5TmTMZnpYAEbBHhTPzjHsZeF64hzOYsXMB7Z19e%2B3Y2huTLSb87R8k36mSftrx2KE%2FB73NZ5UEg7NDZkleAL7OdHH2RiU51uRfJYdsFnDneBXeK%2FMFJd2y6mzuIje%2B%2FeFAc7c2yzgIrLwmcD0xXkgC%2BYKubdbTCTaTVS1GjEixcUBPnJxsDwyPEbtEG%2B%2BRaFGOBKGijEv3RiPB4jwV%2FD5DGI7fv&X-Amz-Signature=e9a38a1602b102202236cfc9e1a32a0a3dab9499ca39dd427724bac023b7c0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
