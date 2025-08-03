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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWP4KYN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoJdZP62ISeJ6%2BlaSd8Oxx5DREU%2BCibhEGsCf23%2F2IBAIhAMoagohAVKs2gkYE3LbKt22gYKgkaNDzzGzgS%2FAifQPeKv8DCDQQABoMNjM3NDIzMTgzODA1IgzvLqaPL9CXG1AOK7cq3AOMgBwSrz0J%2FNYq2wSpYusblFybXVoVO%2BoxTe2J7AFBcI%2BAG44C0Y93i5mdQrp37Y0h1upbPPvzp65hxJbWGm5Gyv2Q9dSyO1xBM2dh7rs9oUP27kss0URpufttEuv7sH6C4T6SGsX3Mm2ALs%2FCt0ENQk8JxvxtydeRasGrJxKPGpwP5DUE2pZ0BwwGdBmNI9WHIGL7j4Se88jAEuw72BpOipi8FhvLr8sVBgXDf73kzwLeNGG1bzggZ7GimYGSGdp%2FwI1U2CvZ0l18XxtZRWzWLDv5FO%2BK%2BDyWCzaWuurehBa6Of%2BvXiTP0z%2BH0JM01TloximtSpi%2Fa6ym%2F2VyXVKxbZSrld1tvtC9mMo%2FtGlP9up%2F4%2FR3EmnzMAr1hgwP0yYzJWTAF%2FC5lV3YjwHpTwyhnCBIZ6YqwkCOnB3DP6ARGgJvV%2F9PGwZMWBrtBj3r0V5e%2FmNKtipzUSm4YrUAfcWkxWah%2FRAfW32dWuTqGn5lmN4emjJUbkQDjkJ8NqknlmWIUehhgSyHAEN2ETTVuSjN8qOks1kYLyuW3dJREKMLWIbxc4E7jFBEezYoymrlIou7PjipW1ARZ1vSQdsJkCjLQYLS3LGY%2FrM1HR8F3iXgkTmVy0UtqUHgeYiZbjCr2b7EBjqkAXJxhvxE2ECFJ6jTnKfho%2B9Md4fNADXTEZHWBBOrEM1U889yJzIg%2BbSEhoiG6Cy%2FqciuIOJOi8%2F%2Fe2HxY0Q4Uvk8pZEdLKB4HS%2BCfNxhWqbfA4qMDWNpq66EuPfgJQmDhNdO8wqApnfMQiD%2BzsvVzy4SE1vtPnVcgiu2hz8mZ2p48izerVssWAi9EtokTlktj2FGGgHVm7%2BCS3ZVefdoBaJtwL8Q&X-Amz-Signature=52737e8d2e3eb10da966de491727d9bbe4fab99c605114f2ec68b1997297c1af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
