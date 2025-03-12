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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YDSYUG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCBX0EWrinMZhwCoXilAYNudCMVkr20fMyaQfqReG5R%2FAIgZgPt6Qok5KwNKtL4e0t9GKD2CFm%2FbvHMbbjV%2Bv3ju%2BQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFralKwkd%2FCwaU9TBircA7t%2B6RalgQYvD%2BL8jt%2BYFnGRSUzywr0gbGSq8vHlF7ZG8dXGKhctJIkm0uhKR%2Bt9Kn5O0wCmPNIA8t0pcz2shcv5MK8TiXOxcC6B0a5YOH3SLTV4P5n9ZfFHAetAfnUh%2Fb2OT4J2pwtc5uLg9lyzclltoVajAkP37tw5AyO7AUSF%2B%2FR5az%2BM7a87GegLInU%2BursAx1sDZ%2FluurBSJGnCF7f4YXCNqBMWP1TyUHPjmJde4G4wEkthN6PE2KD1meNnYobn3ioSVLfE2KCCwjVBWOPh0AL4lPVvzj1IhXCsql0NIuj5HvMBuyrCVEeFYY9RAlcy%2FUu0%2B0%2Bq%2FsM3OY3s3iCaUbPsSJyLJPipJRnKHCN4Xujnp8u3nU7QeRRpSPdEviq%2BP9RL3ihm09rqvFHp3TcOwA5FoZLiRgpjLQxDA8ArfPdGibeQqjjzWYUWm3Ikzz46hJtu8wgHApf%2BmanKAwe1bp7fzryT7O%2F9SGyhXRSnLJroYf5LdnjqsacMFD%2FtRFmOfaoCbDrMJxSkdqOUYuXuXvcDnJX983xN79haQ2sDU2Snmg9M7vKOK4Tq0EC9147Mh%2F%2FagsQXtgQbS0J6Y0oSzJ4wVQX%2FrkFcp6mqS%2FbxUm5Bm6JKwitVwZU2MNH6w74GOqUBVOZDjlczOR1HCYyAEbCY3ozU%2F6Mev3qjZbZPnlZ%2F75lvYNmIDIr4J1wf7NoKtY%2BUdTwJSHMmNCuTQ08IRdk8v%2BQZxQaPR0J9RvDfkDEFON7XkncpFdA8WI05t%2BIjUHwZry4iweC4L%2BBNcWvGnxTo2%2FWkm%2BFLMuaqT7U0YrQLYrYjeySBaFAGyRKp32R2DzyfQhJtaQtwJ1VFLdvCBwS5D%2FmhZBWa&X-Amz-Signature=565130b325c0b39d3b6f2bc534d9fb7d997431da3159be4c89e1c83aa56ddd9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
