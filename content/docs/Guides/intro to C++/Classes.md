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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GEJUWP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAp835kR2ZjkgY9sMeoQrHuCI2sqWPquXZ4ad99KJk5AiBNavB26s%2BnqbN%2FBgnQwGz2AtYw4Tl4XqvsqRKB04OZriqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Gf9yxmRWjkpC7hjKtwD6AiWCdgffznacRctSOd5%2FzoNg%2BuXPwqLtuj8S6Cra81ZPcuINoRveu8npq7DFW2FJ6FAT3xSSYrqODcbpoRut2LxrRNcCE8PsD6bhFFfDQLHaYWfWtWv95v3mQCNJ1vBzraKg4ZbYaCbjhceudflpxL2TUxaicH0EWDSs02dQlZ0dQ%2Bz2075674OYrjL78s5Jn%2FBGrZGduNFNR01TQ1BN%2BtIPNf0Qa65N7wWlwI1SWrWqcchV6RkTRliaScARI4ZxpL1BEv59GGnxdITJt8i8uKXgkwdqmSevUUZqXuF7HuPyV41kN8Hl2hnrfayuNtHn%2BTei4VO08MjW3bcLolqUBPGlkCW5zNmPTKLe8mtnt1xNftMP%2FwR3B2mG948SNIQx%2FqvJKAHH0RAYC4qZuV2kmhTUxEvSp8bTIJPwM5dy2L8Nwv1HIYdVmXuvWifYe18LCOi9OPPLivjPUUGdrVQNMcXYWjqQMZwbicgdFMWltwtjv8Bk4%2FPBnr8BfpLsY0%2B1nC26Ry1sVDzsjnRxQfedreSK7uxqsX%2FsRsW4sasv6uox1fSCMIT3YXDp5UM%2B9Rw8JV3QuGgz6G1AbAnDGxn%2FhBnOLdQT%2FEzLosytLjcttLggxs%2BU%2BrJ%2Bp9wjrcwubPiwQY6pgF9dY1IfkAb6V%2B5Hl%2BjTUHXY8Ew9oXfxZy9sd%2FSOA%2Bkw80qLq6Oh8MMe%2BV2GPt313nnebaRxYPnfMUKBluE0Xg40CnZwhnLyIO%2BXDAyrrr4pGTDNyQWfTI4Cn%2FnPGj322R5RpwxjUntUsd4DQcTltXAWO%2Ftq2Xjc0htGU%2FFBpc2vMqrFFZDdnmkcaW9zPoxvseKkRi61Miwa3uU5HIaKhDGWA5pHxrQ&X-Amz-Signature=de92431ab2e68bd3c1eb056d68ab49d80dd256ee5d37f394ef0dbdd0778c4389&X-Amz-SignedHeaders=host&x-id=GetObject)

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
