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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3BBXQA5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDRVo4mxAT4h5Re%2FuQ9oPrsZIH97lbugJj%2F1amuIavgVgIgc5rEJxB3p2JYTzOno0qeTaYSpY48Hntyj3rvskF3ZCMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNGmSC9xWIkrxblleSrcAxCPhuAwPkrIkoirQjwF8htLyOqQj4e%2FmPNwoxOG0ssxu%2BfOHysngxPm1d40JaXdtuU9BuU363Tyfy6c09bHdztuZSTcYxiF55E3Avu5qMyyyilFcoVIIB6cGQaSD%2FxHZTmsSPHNTgxJquotdIVFJdYGx%2FcORLZB7Q85Agcts%2FvChm2cVFvIZkDUV0ll%2BH%2FuR9r9YLAqnMUYNzx0lNoRxzVwCvBTSG0zuLGrsbDlbp1sCs4O%2FJNtDUSKhDwv2AdskpGUlvc2hb2nK8BDINDpeJb7oy5lFn1COJIT2mtu5Q%2B8XpipmhSOw7nvbpFMCbjx8dsfc0HvNgBPtq2je%2FRat9SVtbkddZfmEJdcaqccUt9Rh5kPb6lPLZA0UE6%2FMRtpjZ7jXc5EtrCgVqX2frIrZAqO9cbqHYidiupwoe%2FqiRe0HngRu40FC3GWXl%2FzikhD0%2B4NOB0uKUSZoao4EDM6QyQ28dtatv9Am6bY5sdHUXNcJ%2F9103Em9PNRpSqLCaSHrhdI8dTEWWxUAKMW48Ksa%2Fn%2Fa%2B1XnNUG%2BWm%2F7AiAHhKRAFpSbsCUuaJ8Rjx7ZLgcD9hRtMQbv11V2e9iu3DyHYH0Hj6qdNFZ1gpwHoZWJrbhzMkerC1%2FcZaIEwkcMLGk1cMGOqUBDrGkYYhXgF7WFFMStRQTgVuK0MGVL0NiUkMmdKUhAmi8OEc72fE8e2lvBI9iB%2BoFcPcE9jsqChre%2B5%2BxbRnizq926m7gHjUnz0STPhQDCimtD9l2E%2B8s%2FHxIrURNSOxZI00N%2F6leJA8Pss6dmYQlcPXfXugLBp1GsYqPN5qqtS7DWDtunrs5FAmaXsuQeTeVDGEJ426SAVb%2B09q5qQXF1DcY2%2Bw8&X-Amz-Signature=1f649d35e547cb524f201f82b1210dad3f7f8d22f61d2a8e1223d01e1af3d83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
