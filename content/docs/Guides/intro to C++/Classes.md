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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HT3ZK3G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCBT7%2BIEwmio7%2FeWg3ip8iZJh2X2UhxruDmPKalKK0nkAIgTB8VdYyU0gf%2Bz5Xz7g6E4a5ysjpEwrqiA9pCXCXgpKsqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlkPMzsoRQybGdMGSrcA265nip6WLRbBSFKRb5B4%2BTKJEwgoAlRLzbWR3%2FeD9Snpp8RZ%2F5mYl30l7x2iq77pK7xkfkniCfxenOl5WXmP%2BMz0hDtvz5hP9WshLsnj0QUAjUC4H62HFymI2at8CyFHHl03MGuqisC163RVemNC170M9q3w98CdZv2rb4vP2b52oNxwEZKALx%2BKn0s5CqcjcdxVDbtiiINuB%2BOu%2Bx1oaP3Bj9G1NTykEKw7O9Qo5%2FFVJnrVHJAIWqTez%2BVaUX9ddDPcgvsIu9%2Fb3HjMgRtbVGT8eE0W9qnQJOTSEDsWAHkkMjm8Ozjz6Gy9%2F6OTRjn6%2BGTxMCkCJbRDTWShyzA2VZ6J5vaSql1vgFl3ADuCo%2B8ST5yms1YwFOkOhEKMCdDzhDBZKHDSMuUNZbsKKF%2FK4WDNm3ms%2Btms71ZsTvxbxzHKSTKxWCKcdu2cY%2F10LiFXjDWFQ8Xj7rzQ7qKu7fXB3ioGIDax9HG6IDWz%2B85k6eIK4mYraVNIl3FdhuIkQYT%2BkGmWDTgLhvdhszTvg7EHXGm0vfANFlTpRekK60ZL%2F8N%2FTpegCi8hTncL%2FHKml57MIJTCP0QvLiSkPhwJDqGTSwBJD3q7cMGI8OImdwza1hNh0KRW4v9RmgimNVdMLuOjcEGOqUB8f8Tg4aDE4DCGoO9AgQV1CnifRaKT9BtgKWr2Zwhwx8WvI2JdtSXl%2FIvVVnscQUd35k5G0%2BhI4EKmIriHJ%2BRKXHLbyQ7t83WmHk7mcYcW%2Fmb4Yp8wnQZdQl1a71ZevKbSB9rSjPc%2Fz0FaOgmD3%2FJgz3TiD47iwATy9dU1xlyJEyKgO9M6dafsR%2FK8%2FKDvUs9G2h%2FMuhY1Y4QYEGkxmrGTFyE9PKA&X-Amz-Signature=84c051cb1d506537b300dded6df051f559fdce9f4ad956535ae99e455dcc174a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
